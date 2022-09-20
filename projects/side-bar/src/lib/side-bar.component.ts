import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomSideMenu, NavItemsClass } from './nav-bar/models';
import { SideBarService } from './side-bar.service';

@Component({
  selector: 'lib-side-bar',
  template: `
    <lib-nav-bar
      [customSideMenu]="customSideMenu"
      [navItems]="navItems"

      (clickEvent)="clickEvent($event)"
    ></lib-nav-bar>
    <div class="main-container">
      <header>
        <div class="header-menu">
          <img [src]="customSideMenu.customIcons.menuIcone" class="menu-icone" (click)="toggleSideNav()" />
        </div>
      </header>
    </div>
  `,

  styles: [
    `
      .main-container {
        display: flex;
        flex-direction: column;
        color: #fff;
        height: 100%;

        header {
          .header-menu {
            .menu-icone {
              cursor: pointer;
            }
          }
        }
      }
      .side-nav-bar-content {
        flex: 1;

        .side-nav-bar-menu {
          list-style: none;
          padding: 0px;
          margin: 0px;
        }

        li {
          font-size: 1.25em;
          margin-bottom: 32px;

          a {
            color: #000;
            text-decoration: none;
          }
        }
      }
    `,
  ],
})
export class SideBarComponent implements OnInit {
  @Input() customSideMenu!: CustomSideMenu;
  @Input() navItems!: NavItemsClass;
  @Output() ItemEvent = new EventEmitter<string>();
  constructor(private navService: SideBarService) {}

  ngOnInit(): void {}
  toggleSideNav() {
    this.navService.setShowNav(true);
  }
  clickEvent(e: any) {
    this.ItemEvent.emit(e);
  }
}
