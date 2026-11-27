import { LayoutDashboard, Cpu, ShieldCheck, Zap, Package, Gamepad2, FolderOpen, Network, Fan, LifeBuoy, FileCode2, ScrollText, Settings2 } from 'lucide-react';
export const navigation = [
 { id: 'overview', label: 'Dashboard', icon: LayoutDashboard, group: 'WORKSPACE' },
 { id: 'firmware', label: 'Firmware Information', icon: Cpu, group: '' },
 { id: 'jailbreak', label: 'Jailbreak Status', icon: ShieldCheck, group: '' },
 { id: 'goldhen', label: 'GoldHEN', icon: Zap, group: '' },
 { id: 'payloads', label: 'Payload Library', icon: Package, group: 'LIBRARY & TOOLS' },
 { id: 'homebrew', label: 'Homebrew Library', icon: Gamepad2, group: '' },
 { id: 'files', label: 'File Manager', icon: FolderOpen, group: '' },
 { id: 'ftp', label: 'FTP Manager', icon: Network, group: '' },
 { id: 'fan', label: 'BREACH//FAN', icon: Fan, group: '' },
 { id: 'recovery', label: 'Recovery Centre', icon: LifeBuoy, group: 'RESEARCH & SYSTEM' },
 { id: 'source', label: 'Source Analysis', icon: FileCode2, group: '' },
 { id: 'activity', label: 'Activity Log', icon: ScrollText, group: '' },
 { id: 'settings', label: 'Settings', icon: Settings2, group: '' },
];
