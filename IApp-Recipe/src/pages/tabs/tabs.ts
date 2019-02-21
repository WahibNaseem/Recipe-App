import { Component } from '@angular/core';


import { RecipesPage } from '../recipes/recipes';
import { ShoppingListPage } from '../shoppinglist/shoppinglist';

@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs selectedIndex=0>
  <ion-tab [root]="shoppinglistTab" tabTitle="Shopping List" tabIcon="list-box"></ion-tab>
  <ion-tab [root]="recipesTab" tabTitle="Recipes" tabIcon="book"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
  shoppinglistTab = ShoppingListPage;
  recipesTab = RecipesPage;

  
  constructor() {}

}
