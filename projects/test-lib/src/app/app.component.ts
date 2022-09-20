import { Component, OnInit } from '@angular/core';
import { CustomParams, CustomSideMenu, NavItemsClass } from 'projects/side-bar/src/lib/nav-bar/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(typeof(this.navItems));

  }
  clickItemEvent(e: any) {
    console.log('e', e);
  }
  navItems: NavItemsClass ={
    category: [
      {
        labelCategory: 'Analytics',
        content: [
          {
            label: 'Dashbord',
            icone: '../assets/dashboard.png',
            iconeActive: '../assets/iconsdashHover.png',
            badge: '55',
            submenu: [
              {
                label: 'Performance',
                iconeActive: '../assets/iconeHover.png',
                icone: '../assets/performance.png',
                badge: '',
                submenu: []
              },
              {
                label: 'Performance2',
                iconeActive: '../assets/iconeHover.png',
                icone: '../assets/performance.png',
                badge: '',
                submenu: []
              },
              {
                label: 'Performance3',
                iconeActive: '../assets/iconeHover.png',
                icone: '../assets/performance.png',
                badge: '',
                submenu: []
              }
            ]
          },
          {
            label: 'Content',
            icone: '../assets/contenu.png',
            iconeActive: '../assets/contenuHover.png',
            badge: '',
            submenu: [
              {
                label: 'Guides',
                icone: '../assets/guide.png',
                badge: '723',
                submenu: [],
                iconeActive: '../assets/hover.png',

              }
            ]
          },
          {
            label: 'hotposts',
            icone: '../assets/guide.png',
            iconeActive: '../assets/hotpostHover.png',
            badge: '',
            submenu: [],
          }
        ]
      },
      {
        labelCategory: 'Customization',
        content: [
          {
            label: 'Segments',
            icone: '../assets/segment.png',
            iconeActive: '../assets/segmentHover.png',
            badge: 'New',
            submenu: [],
          },
          {
            label: 'Home',
            icone: '../assets/home.png',
            iconeActive: '../assets/iconeHover.png',
            badge: '',
            submenu: [],
          }
        ]
      }
    ]
  };
  customSideMenu : CustomSideMenu = {
    customParams: {
      duration: 1,
      navWidth: 250,
      sideBarBackgroundColor: '#131313',
      shadowColor: '#221a1a',
    },
    customIcons: {
      menuIcone: '../assets/menu.png',
      closeIcone: '../assets/close.png',
      expandButtomIcone: '../assets/down.png',
      expandTopIcone: '../assets/expand.png',
    },
    customLogo: {
      logo: '../assets/logo-addinn.svg',
      sizeLogo: '100px',
    },
    customBadge: {
      backgroundColor: '#0069b4',
      size: '16px',
      textColor: '#afafaf',
      borderRaduis : "9px"
    },
    customNavItems: {
      navItemsFontFamily : "'Ubuntu', sans-serif",
      categoryFontFamily : "'Ubuntu', sans-serif",
      categoryColor: 'rgb(51 51 51)',
      categorySize: '15px',
      navItemsColor: 'rgb(126 126 126)',
      navItemsSize: '18px',
      sizeIcone: '20px',

      customNavItemsHover: {
        navItemsColorHover: '#ffffff',
        navItemsBackgroundColorHover: '#63c7f1',
        badgeBacgroundColorHover:'#131313'
      },
    },
  };
}
