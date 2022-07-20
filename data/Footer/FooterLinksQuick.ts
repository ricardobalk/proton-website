import type { NavigationMenu as NavigationMenuType } from '@/models/Navigation';

export const FooterLinksQuick : NavigationMenuType = [
    {
        text: 'System status',
        link: 'https://protonstatus.com/',
    },
    {
        text: 'Report abuse',
        link: '/support/abuse',
    },
    {
        text: 'Report a problem',
        link: '/support/report-bug',
    },
    {
        text: 'Report a security issue',
        link: '/security/response-center',
    },
    {
        text: 'Request a feature',
        link: 'https://protonmail.uservoice.com/',
    },
];

export default FooterLinksQuick;