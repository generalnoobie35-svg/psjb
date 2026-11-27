export interface Detection { platform: string; firmware: string; confidence: string; browser: string; userAgent: string; error: string | null }
export function detectBrowser(userAgent: string): Detection {
  const isPS4 = /PlayStation 4/i.test(userAgent);
  const firmware = isPS4 ? /PlayStation 4[ /]+(\d{1,2}\.\d{2})(?=[;)\s]|$)/i.exec(userAgent)?.[1] : undefined;
  return {
    platform: isPS4 ? 'PlayStation 4' : /Android/i.test(userAgent) ? 'Android' : /Windows/i.test(userAgent) ? 'Windows PC' : /Macintosh/i.test(userAgent) ? 'macOS' : /Linux/i.test(userAgent) ? 'Linux' : 'Unknown platform',
    firmware: firmware || 'UNKNOWN', confidence: firmware ? 'User-agent claim only' : 'Unavailable',
    browser: isPS4 ? 'PS4 Browser' : /Edg\//.test(userAgent) ? 'Microsoft Edge' : /Chrome\//.test(userAgent) ? 'Chrome / Chromium' : /Firefox\//.test(userAgent) ? 'Firefox' : /Safari\//.test(userAgent) ? 'Safari' : 'Unknown browser',
    userAgent, error: firmware ? null : 'Firmware could not be detected. No complete PS4 firmware token was found.',
  };
}
export function compatibility(_firmware: string) { return 'NOT INDEPENDENTLY VERIFIED'; }
export const initialDetection = detectBrowser('');
