import { cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BreachProvider, useBreach } from '@/modules/store';

const ps4 = 'Mozilla/5.0 (PlayStation 4 13.52) AppleWebKit/605.1.15';

describe('PS4 interface selection', () => {
  const redirect = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    redirect.mockClear();
    vi.spyOn(window, 'location', 'get').mockReturnValue({
      ...window.location, replace: redirect, assign: redirect,
    });
    vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(ps4);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('keeps a first-time PS4 visitor in Modern Mode while detecting firmware 13.52', () => {
    const { result } = renderHook(useBreach, { wrapper: BreachProvider });
    expect(result.current.prefs.mode).toBe('modern');
    expect(result.current.detection.firmware).toBe('13.52');
    expect(redirect).not.toHaveBeenCalled();
  });

  it('does not redirect a saved Modern selection even with automatic detection enabled', () => {
    localStorage.setItem('breach-preferences', JSON.stringify({ mode: 'modern', autoDetect: true }));
    const { result } = renderHook(useBreach, { wrapper: BreachProvider });
    expect(result.current.prefs.mode).toBe('modern');
    expect(redirect).not.toHaveBeenCalled();
  });

  it('allows returning from Legacy despite a previously saved Legacy preference', () => {
    localStorage.setItem('breach-preferences', JSON.stringify({ mode: 'legacy', autoDetect: true, compact: true }));
    const { result } = renderHook(useBreach, { wrapper: BreachProvider });
    expect(result.current.prefs.mode).toBe('modern');
    expect(result.current.prefs.compact).toBe(true);
    expect(JSON.parse(localStorage.getItem('breach-preferences') || '{}').mode).toBe('modern');
    expect(redirect).not.toHaveBeenCalled();
  });

  it('respects disabled automatic detection without redirecting', () => {
    localStorage.setItem('breach-preferences', JSON.stringify({ autoDetect: false }));
    const { result } = renderHook(useBreach, { wrapper: BreachProvider });
    expect(result.current.detection.firmware).toBe('UNKNOWN');
    expect(redirect).not.toHaveBeenCalled();
  });
});