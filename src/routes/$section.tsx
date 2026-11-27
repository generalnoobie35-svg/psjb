import { createFileRoute, notFound } from '@tanstack/react-router';
import { navigation } from '@/data/navigation';
import SectionContent, { sectionDescriptions } from '@/components/breach/sections';
import { Breadcrumb } from '@/components/breach/primitives';
export const Route = createFileRoute('/$section')({
 beforeLoad: ({params}) => { if (!navigation.some(n => n.id === params.section && n.id !== 'overview')) throw notFound(); },
 head: ({params}) => { const name = navigation.find(n => n.id === params.section)?.label || 'Research'; const description = sectionDescriptions[params.section] || 'PlayStation 4 research workspace.'; return {meta:[{title:`${name} | BREACH//13.52 ALT`},{name:'description',content:description},{property:'og:title',content:`${name} — BREACH//13.52 ALT`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}; },
 component: SectionPage,
});
function SectionPage() { const {section} = Route.useParams(); const name = navigation.find(n => n.id === section)?.label || 'Research';return <div className="page content-page"><div className="page-heading"><div><Breadcrumb label={name}/><div className="eyebrow"><span/>BREACH / RESEARCH WORKSPACE</div><h1>{name}<span className="title-dot">.</span></h1><p>{sectionDescriptions[section]}</p></div></div><SectionContent key={section} section={section}/></div>; }
