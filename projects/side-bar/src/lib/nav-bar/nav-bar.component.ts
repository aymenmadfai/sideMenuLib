import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SideBarService } from '../side-bar.service';
import { CustomSideMenu, NavItemsClass } from './models';

@Component({
  selector: 'lib-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  showSideNav: Observable<boolean> ;
  @Output() clickEvent = new EventEmitter<string>();
  @Input() customSideMenu: CustomSideMenu;
  @Input() navItems!: NavItemsClass;
  display= false
  clickedSubmenu : string
  hover : boolean = false
  label : string = ""
  clickedItem : string="Dashbord"

  constructor(private navService: SideBarService, private elem: ElementRef){

  }

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
    this.elem.nativeElement.style.setProperty('--color', this.customSideMenu.customNavItems.customNavItemsHover.navItemsBackgroundColorHover);
    this.elem.nativeElement.style.setProperty('--shadowColor', this.customSideMenu.customParams.shadowColor);
    this.elem.nativeElement.style.setProperty('--navItemsColorHover', this.customSideMenu.customNavItems.customNavItemsHover.navItemsColorHover);
    this.elem.nativeElement.style.setProperty('--badgeBacgroundColorHover', this.customSideMenu.customNavItems.customNavItemsHover.badgeBacgroundColorHover);

  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    navBarStyle.transition = 'left' + ' ' + this.customSideMenu.customParams.duration + 's, visibility ' + this.customSideMenu.customParams.duration + 's';
    navBarStyle.width = this.customSideMenu.customParams.navWidth + 'px';
    navBarStyle['left'] = (showNav ? 0 : (this.customSideMenu.customParams.navWidth * -1)) + 'px';
    navBarStyle.backgroundColor =this.customSideMenu.customParams.sideBarBackgroundColor

    return navBarStyle;
  }

  showSubMenu(label: string){

    if(!this.display &&  this.clickedSubmenu==""){
      this.display =true
      this.clickedSubmenu=label
    } else if( this.display==false && this.clickedSubmenu !== ''){
      this.display =true
      this.clickedSubmenu=label
    }else if( this.display==true &&  this.clickedSubmenu!==""){
      this.display = false
      this.clickedSubmenu=""
    }
  }
  clickItem(label: string){
    this.clickEvent.emit(label);
    this.clickedItem=label
  }
}
