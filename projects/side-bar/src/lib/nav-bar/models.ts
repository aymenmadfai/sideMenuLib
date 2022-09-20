


export class CategoryClass {
  labelCategory?: string;
  content?: ContentClass[];
}
export class ContentClass {
  label: string;
  icone: string;
  iconeActive: string;
  badge: string;
  submenu: ContentClass[];
}
export class NavItemsClass {
  category?: CategoryClass[]
}


export class CustomParams {
  duration: number;
  navWidth: number;
  sideBarBackgroundColor: string;
  shadowColor: string
}
export class CustomIcons {
  menuIcone: string;
    closeIcone:string;
    expandButtomIcone: string;
    expandTopIcone: string;
}
export class CustomLogo {
  logo: string;
  sizeLogo: string;
}
export class   CustomBadge {
  backgroundColor: string;
  size: string;
  textColor: string;
  borderRaduis: string;
}

export class CustomNavItemsHover {
  navItemsColorHover:  string;
  navItemsBackgroundColorHover: string;
  badgeBacgroundColorHover: string;
}
export class CustomNavItems {
  categoryFontFamily : string;
  navItemsFontFamily: string
  categoryColor:  string;
  categorySize:  string;
  navItemsColor:  string;
  navItemsSize:  string;
  sizeIcone:  string;
  customNavItemsHover: CustomNavItemsHover;
}

export class CustomSideMenu {
  customParams : CustomParams;
  customIcons : CustomIcons;
  customLogo : CustomLogo;
  customBadge : CustomBadge;
  customNavItems : CustomNavItems
}
