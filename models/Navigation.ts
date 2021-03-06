/**
 * Base nav item, displayed as text
 */
export interface NavItem {
  text: string;
  ariaLabel?: string;
}

/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItem {
  children: T[];
}

/**
 * NavLink, i.e. inherited from NavItem, but extended with link properties.
 */
export interface NavLink<T> extends NavItem {
  link: string;
  rel?: string;
  target?: string;
  children?: T[]; // TODO: This omits TS errors, but is not technically correct.
}

/**
 * Exported Navigation Menu Types
 */
export type NavigationItem = NavLink<any>;
export type NavigationGroup = NavGroup<NavigationGroup | NavigationItem>;
export type NavigationMenu = (NavigationItem | NavigationGroup)[];

// Example Usage:
export const ExampleData: NavigationMenu = [
  {
    text: "Home",
    link: "/",
    ariaLabel: "Home",
  },
  {
    text: "About",
    link: "/about",
    ariaLabel: "About",
  },
  {
    text: "Contact",
    // link: '/contact',
    ariaLabel: "Contact",
    children: [
      {
        text: "Email",
        link: "mailto:example@example.com",
      },
      {
        text: "Phone",
        link: "tel:+1-555-555-5555",
      },
    ],
  },
];

export default NavigationMenu;
