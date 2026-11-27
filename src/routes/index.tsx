import { createFileRoute } from '@tanstack/react-router';
import Dashboard from '@/components/breach/dashboard';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [ {title:'Dashboard | BREACH//13.52 ALT'}, {name:'description',content:'PlayStation 4 research dashboard with honest firmware, payload and integration status. Modern and independent lightweight PS4 interfaces.'}, {property:'og:title',content:'BREACH//13.52 ALT — Research Dashboard'}, {property:'og:description',content:'PlayStation 4 Slim firmware research, verified upload metadata, and transparent console integration status.'}, {property:'og:type',content:'website'}, {name:'twitter:card',content:'summary_large_image'} ] }),
 component: Dashboard,
});
