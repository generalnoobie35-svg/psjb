import { ArrowUpRight, Circle, Info, ChevronRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';
export function Badge({ children, tone = 'muted' }: { children: ReactNode; tone?: 'muted' | 'good' | 'warning' | 'red' }) { return <span className={`status-badge ${tone}`}><span className="status-dot" />{children}</span>; }
export function Panel({ title, icon, children, action, className = '' }: { title: string; icon?: ReactNode; children: ReactNode; action?: ReactNode; className?: string }) { return <section className={`panel ${className}`}><div className="panel-heading"><h2>{icon}{title}</h2>{action}</div>{children}</section>; }
export function SectionLink({ section, children = 'View details' }: { section: string; children?: ReactNode }) { return <Link to="/$section" params={{ section }} className="text-link">{children}<ArrowUpRight size={14}/></Link>; }
export function Notice({ children, warning = false }: { children: ReactNode; warning?: boolean }) { return <div className={`notice ${warning ? 'warning' : ''}`}><Info size={16}/><div>{children}</div></div>; }
export function DataRow({ label, value }: { label: string; value: ReactNode }) { return <div className="data-row"><span>{label}</span><strong>{value}</strong></div>; }
export function EmptyState({ icon, title, children }: { icon?: ReactNode; title: string; children: ReactNode }) { return <div className="empty-state">{icon || <Circle size={30}/>}<h3>{title}</h3><p>{children}</p></div>; }
export function Breadcrumb({ label }: { label: string }) { return <div className="breadcrumb"><Link to="/">Workspace</Link><ChevronRight size={12}/><span>{label}</span></div>; }
