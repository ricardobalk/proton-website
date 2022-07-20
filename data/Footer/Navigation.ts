import type { NavigationMenu as NavigationMenuType } from '@/models/Navigation';

export const FooterLinks : NavigationMenuType = [
    {
        text: 'Products',
        ariaLabel: 'Products',
        children: [
            { text: 'Proton Mail', link: '/mail' },
            { text: 'Proton Calendar', link: '/calendar' },
            { text: 'Proton Drive', link: '/drive' },
            { text: 'Proton VPN', link: 'https://protonvpn.com' },
            { text: 'Proton for Business', link: '/business' },
        ]
    },

    {
        text: 'Privacy and community',
        children: [
            { text: 'Privacy and Security', link: '/privacy' },
            { text: 'Switch to Proton', link: '/easyswitch' },
            { text: 'Community', link: '/community' },
            { text: 'Open Source', link: '/community/open-source' },
            { text: 'Pricing', link: '/pricing' },
        ]
    },

    {
        text: 'Company',
        children: [
            { text: 'About us', link: '/about' },
            { text: 'Team', link: '/about/team' },
            { text: 'Impact', link: '/about/impact' },
            { text: 'Careers', link: 'https://careers.proton.me' },
            { text: 'Shop', link: 'https://shop.proton.me' },
        ]
    },

    {
        text: 'Connect',
        children: [
            { text: 'Blog', link: '/blog' },
            { text: 'Help and support', link: '/support' },
            { text: 'Partners and affiliates', link: '/partners' },
            { text: 'Press and media', link: '/media' },
            { text: 'Contact us', link: '/support/contact' },
        ]
    },

];

export default FooterLinks;