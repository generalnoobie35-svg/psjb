import { useState } from 'react';
import { Bell, Copy, Send, Trash2, Unplug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBreach } from '@/modules/store';
import { Badge, DataRow, Notice, Panel } from './primitives';

export default function Notifications() {
  const { goldhen, log } = useBreach();
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const active = goldhen.state === 'USER-CONFIRMED ACTIVE';
  const hasMessage = message.trim().length > 0;

  async function copyMessage() {
    if (!hasMessage) return;
    try {
      await navigator.clipboard.writeText(message);
      setFeedback('Message copied. Nothing was sent to the console.');
      log('Notification message copied', 'Clipboard only; no console delivery.');
    } catch {
      setFeedback('Clipboard unavailable. Select and copy the message directly. Nothing was sent.');
    }
  }

  return <>
    <Notice warning>Console delivery is unavailable: no notification service is connected. GoldHEN being active alone does not give this website access to console notifications.</Notice>
    <div className="two-columns">
      <Panel title="Custom notification" icon={<Bell size={17} />} action={<Badge tone="warning">NOT CONNECTED</Badge>}>
        <div className="form-body">
          <label htmlFor="notification-message">Message
            <textarea id="notification-message" rows={6} value={message} placeholder="Your message to the PS4…" onChange={event => { setMessage(event.target.value); setFeedback(''); }} />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>{Array.from(message).length.toLocaleString()} characters</span>
            <span>Draft only · not saved</span>
          </div>
          <div className="button-row flex-wrap">
            <Button type="button" disabled aria-describedby="notification-delivery"><Send />Send to PS4</Button>
            <Button type="button" variant="outline" disabled={!hasMessage} onClick={() => void copyMessage()}><Copy />Copy message</Button>
            <Button type="button" variant="ghost" disabled={!message} onClick={() => { setMessage(''); setFeedback(''); }}><Trash2 />Clear</Button>
          </div>
          {feedback && <p role="status" className="text-xs leading-relaxed text-muted-foreground">{feedback}</p>}
        </div>
      </Panel>
      <div className="flex min-w-0 flex-col gap-5">
        <section aria-label="Notification preview" className="min-w-0 border-l-2 border-primary pl-5 py-3">
          <div className="mb-5 flex items-center gap-2 text-xs text-muted-foreground"><Bell size={17} /><span className="mono">MESSAGE PREVIEW · NOT SENT</span></div>
          <p className="min-h-24 whitespace-pre-wrap [overflow-wrap:anywhere] text-base leading-relaxed">{hasMessage ? message : 'Your notification message will appear here.'}</p>
        </section>
        <Panel title="Console delivery" icon={<Unplug size={17} />}>
          <div className="panel-padding">
            <DataRow label="GoldHEN status" value={goldhen.state} />
            <DataRow label="Status source" value="Manual confirmation only" />
            <DataRow label="Notification service" value="NOT CONNECTED" />
            <DataRow label="Messages sent" value="None" />
            <p id="notification-delivery" className="field-hint">{active ? 'GoldHEN is manually confirmed active, but no notification connection is available. Nothing can be sent.' : 'GoldHEN must be active on the console, and a compatible notification service must be connected before sending.'}</p>
          </div>
        </Panel>
      </div>
    </div>
    <a className="text-link self-start" href="/legacy/notifications.html">Open lightweight PS4 notifications ↗</a>
  </>;
}