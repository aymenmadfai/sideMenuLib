# SideBar

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Code scaffolding

Run `ng generate component component-name --project side-bar` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project side-bar`.
> Note: Don't forget to add `--project side-bar` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build side-bar` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build side-bar`, go to the dist folder `cd dist/side-bar` and run `npm publish`.

## Running unit tests

Run `ng test side-bar` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Installation

Executez la commande `npm install @addinn/side-bar`
Ajoutez le fichier .npmrc dans la route du projet 

## Mise en place

Aprés avoir installer la dependance dans votre projet il faut importer le module "SideBarModule" dans le app.module.ts ou bien dans le module de la fonctionnalité là ou vous allez utiliser la librairie. 
En suite, faire appel au sideBar à travers le selecteur "lib-side-bar".
Le moyen le plus simple de fournir des données au sideBar consiste à transmettre deux json de données à l'entrée "navItems" et customSideMenu de side bar.
Pour manipuler chaque item aprés l'implementation du sidebar on utilise la méthode "ItemEvent" qui retourne le label de l'élement cliqué.

 **Exemple :** `<lib-side-bar [customSideMenu]="customSideMenu" [navItems] ="navItems" (ItemEvent)="clickItemEvent($event)"></lib-side-bar>`

 ## Paramétrage

 L'objet customSideMenu c'est une instance de la classe CustomSideMenu pour personnaliser le design 

```
class CustomSideMenu {
  customParams : CustomParams;
  customIcons : CustomIcons;
  customLogo : CustomLogo;
  customBadge : CustomBadge;
  customNavItems : CustomNavItems
}
```

```
class CustomNavItems {
  categoryFontFamily : string; ***Pour modifier le font du catégorie***
  navItemsFontFamily: string; ***Pour modifier le font du chaque élément***
  categoryColor:  string; ***Pour modifier la couleur du catégorie***
  categorySize:  string; ***Pour modifier la taille du catégorie***
  navItemsColor:  string; ***Pour modifier la couleur du chaque élément***
  navItemsSize:  string; ***Pour modifier la taile du chaque élément***
  sizeIcone:  string; ***Pour modifier la taille des icones de chaque élément***
  customNavItemsHover: CustomNavItemsHover;
}
```

```
class CustomNavItemsHover {
  navItemsColorHover:  string; ***Pour modifier la couleur de  chaque élément aprés le Hover***
  navItemsBackgroundColorHover: string; ***Pour modifier la couleur du background de  chaque élément aprés le Hover***
  badgeBacgroundColorHover: string; ***Pour modifier la couleur du background des badges aprés le Hover***
}
```

```
class  CustomBadge {
  backgroundColor: string; ***Pour modifier la couleur du background***
  size: string; ***Pour modifier la taille du texte***
  textColor: string; ***Pour modifier la couleur du text***
  borderRaduis: string; ***Pour modifier la taille de rayon de bordure***
}
```

```
class CustomLogo {
  logo: string; ***l'URL du logo***
  sizeLogo: string; ***la taille de logo***
}
```

```
class CustomIcons {
    menuIcone: string; ***l'URL de l'icone de menu***
    closeIcone:string;  ***l'URL de l'icone de fermeture de menu***
    expandButtomIcone: string; ***l'URL de l'icone de dropdown***
    expandTopIcone: string;  ***l'URL de l'icone de dropdown***
}
```

```
class CustomParams {
  duration: number;  ***la durée de l'animation de l'ouverturre de menu***
  navWidth: number;  ***la taille de side bar***
  sideBarBackgroundColor: string; ***la couleur de l'arriére plan du sidebar***
  shadowColor: string ***la couleur du l'ombre de sidebar***
}
```



 L'objet navItems c'est une instance de la classe NavItemsClass contient les données de sidebar
 
```
class NavItemsClass {
  category?: CategoryClass[]
}
class CategoryClass {
  labelCategory?: string; 
  content?: ContentClass[];
}
class ContentClass {
  label: string;
  icone: string;
  iconeActive: string;
  badge: string;
  submenu: ContentClass[];
}
```





