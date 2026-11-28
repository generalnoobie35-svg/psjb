import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { detectBrowser, initialDetection, type Detection } from '@/lib/detection';
export interface Preferences { compact: boolean; animations: boolean; effects: boolean; autoDetect: boolean; reduceRefresh: boolean; accent: string; mode: string }
const defaults: Preferences = { compact: false, animations: true, effects: true, autoDetect: true, reduceRefresh: true, accent: 'red', mode: 'modern' };
export interface Activity { id: string; name: string; details: string; time: string }
export interface Confirmation { state: string; time: string | null; version: string }
interface Store { detection: Detection; detect: () => void; prefs: Preferences; setPreference: <K extends keyof Preferences>(key: K, value: Preferences[K]) => void; reset: () => void; activity: Activity[]; log: (name: string, details?: string) => void; jailbreak: Confirmation; goldhen: Confirmation; confirm: (which: 'jailbreak' | 'goldhen', state: string, version?: string) => void; storageAvailable: boolean; notice: string; notify: (message: string) => void }
const Context = createContext<Store | null>(null);
export function BreachProvider({ children }: { children: ReactNode }) {
 const [detection, setDetection] = useState(initialDetection);
 const [prefs, setPrefs] = useState(defaults);
 const [activity, setActivity] = useState<Activity[]>([]);
 const [storageAvailable, setStorageAvailable] = useState(false);
 const [notice, notify] = useState('');
 const [jailbreak, setJailbreak] = useState<Confirmation>({ state: 'NOT CONFIRMED', time: null, version: '' });
 const [goldhen, setGoldhen] = useState<Confirmation>({ state: 'UNKNOWN', time: null, version: '' });
 const log = useCallback((name: string, details = '') => setActivity(previous => [{ id: `${Date.now()}-${Math.random()}`, name, details, time: new Date().toISOString() }, ...previous].slice(0, 100)), []);
 useEffect(() => {
   let saved = defaults;
   try {
    const raw = localStorage.getItem('breach-preferences');
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (parsed && typeof parsed === 'object') { const p = parsed as Record<string, unknown>; saved = { compact: typeof p['compact'] === 'boolean' ? p['compact'] : defaults.compact, animations: typeof p['animations'] === 'boolean' ? p['animations'] : defaults.animations, effects: typeof p['effects'] === 'boolean' ? p['effects'] : defaults.effects, autoDetect: typeof p['autoDetect'] === 'boolean' ? p['autoDetect'] : defaults.autoDetect, reduceRefresh: typeof p['reduceRefresh'] === 'boolean' ? p['reduceRefresh'] : defaults.reduceRefresh, accent: p['accent'] === 'cyan' ? 'cyan' : 'red', mode: p['mode'] === 'legacy' ? 'legacy' : 'modern' }; }
    localStorage.setItem('breach-storage-test', '1'); localStorage.removeItem('breach-storage-test'); setStorageAvailable(true);
   } catch { notify('Local preferences are unavailable; changes apply to this session only.'); }
   // Opening a modern URL is an explicit choice, including the Legacy return link.
   // Device detection must never navigate away or revive a stale mode preference.
   saved = { ...saved, mode: 'modern' };
   setPrefs(saved);
   try { localStorage.setItem('breach-preferences', JSON.stringify(saved)); } catch { /* Session-only fallback */ }
   const found = saved.autoDetect ? detectBrowser(navigator.userAgent) : initialDetection;
   setDetection(found);
   log('Dashboard opened', 'Modern interface initialized. No console connection established.');
   if (saved.autoDetect) log('Firmware detection completed', found.firmware);
 }, [log]);
 useEffect(() => { if (!notice) return; const timer = window.setTimeout(() => notify(''), 6500); return () => window.clearTimeout(timer); }, [notice]);
 const setPreference: Store['setPreference'] = (key, value) => { setPrefs(previous => { const next = { ...previous, [key]: value }; try { localStorage.setItem('breach-preferences', JSON.stringify(next)); } catch { notify('Preference changed for this session; local storage is unavailable.'); } return next; }); log('Settings changed', `${key}: ${value}`); };
 const detect = () => { log('Firmware detection attempted'); const found = detectBrowser(navigator.userAgent); setDetection(found); log('Firmware detection completed', found.firmware); notify(found.firmware === 'UNKNOWN' ? 'Firmware remains UNKNOWN. No complete PS4 firmware token was found.' : `User agent reports ${found.firmware}. Compatibility is not verified.`); };
 const confirm: Store['confirm'] = (which, state, version = '') => { const next = { state, version, time: new Date().toISOString() }; if (which === 'goldhen') setGoldhen(next); else setJailbreak(next); log('Status manually confirmed', `${which}: ${state}. User statement only.`); notify('Manual confirmation recorded for this session. No console operation was performed.'); };
 const reset = () => { setPrefs(defaults); try { localStorage.removeItem('breach-preferences'); } catch { /* Session-only fallback */ } log('Settings changed', 'Local interface preferences reset'); notify('Interface preferences reset. Console settings were not changed.'); };
 return <Context.Provider value={{ detection, detect, prefs, setPreference, reset, activity, log, jailbreak, goldhen, confirm, storageAvailable, notice, notify }}><div className={`breach-app ${prefs.compact ? 'compact' : ''} ${!prefs.animations ? 'reduce-motion' : ''} ${!prefs.effects ? 'no-effects' : ''}`} data-accent={prefs.accent}>{children}</div></Context.Provider>;
}
export function useBreach() { const store = useContext(Context); if (!store) throw new Error('BREACH context is unavailable'); return store; }
