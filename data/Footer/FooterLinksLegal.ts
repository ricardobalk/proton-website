import type { NavigationMenu as NavigationMenuType } from '@/models/Navigation';

export const FooterLinksLegal : NavigationMenuType = [
    {
        text: 'Privacy Policy',
        link: '/legal/privacy',
    },
    {
        text: 'Terms & conditions',
        link: '/legal/terms',
    },
    {
        text: 'Transparency Report',
        link: '/legal/transparency',
    },
    {
        text: '© 2022 Proton AG. All rights reserved.',
        link: '',
    }
];

export default FooterLinksLegal;