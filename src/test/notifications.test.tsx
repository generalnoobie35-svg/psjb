import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Notifications from '@/components/breach/notifications';
import { BreachProvider, useBreach } from '@/modules/store';

function Harness() {
  const { confirm } = useBreach();
  return <><button onClick={() => confirm('goldhen', 'USER-CONFIRMED ACTIVE')}>Confirm active for test</button><Notifications /></>;
}

afterEach(() => { cleanup(); vi.restoreAllMocks(); localStorage.clear(); });

describe('GoldHEN custom notification safeguards', () => {
  it('does not send without a console connection, even after GoldHEN is manually confirmed active', () => {
    const fetch = vi.spyOn(globalThis, 'fetch');
    render(<BreachProvider><Harness /></BreachProvider>);
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello PS4!\nGoldHEN is active.' } });
    expect(screen.getByRole('button', { name: 'Send to PS4' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Confirm active for test' }));
    fireEvent.click(screen.getByRole('button', { name: 'Send to PS4' }));
    expect(screen.getByRole('button', { name: 'Send to PS4' })).toBeDisabled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('copies arbitrary multiline text exactly without console delivery', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('navigator', Object.create(navigator, { clipboard: { value: { writeText } } }));
    render(<BreachProvider><Notifications /></BreachProvider>);
    const message = 'Hello PS4! 🎮\nCustom message <script> stays text.';
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: message } });
    fireEvent.click(screen.getByRole('button', { name: 'Copy message' }));
    await waitFor(() => expect(writeText).toHaveBeenCalledWith(message));
    vi.unstubAllGlobals();
  });

  it('clears a draft without persisting message content', () => {
    render(<BreachProvider><Notifications /></BreachProvider>);
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Private console message' } });
    expect(JSON.stringify(localStorage)).not.toContain('Private console message');
    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));
    expect(screen.getByLabelText('Message')).toHaveValue('');
    expect(screen.getByRole('button', { name: 'Copy message' })).toBeDisabled();
  });
});