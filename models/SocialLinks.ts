export interface SocialLink extends Record<string, string> {
    icon: string;
    url: string;
}

export type SocialLinks = SocialLink[];


export const ExampleData : SocialLinks = [
    {
        icon: 'Facebook',
        url: 'https://www.facebook.com/facebook',
    },
    {
        icon: 'Twitter',
        url: 'https://twitter.com/twitter',
    }
];

export default SocialLinks;