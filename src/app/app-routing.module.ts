import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SelectPageComponent} from './select-page/select-page.component';
import {BasketPageComponent} from './basket-page/basket-page.component';



const routes: Routes = [
  {path: '', redirectTo: 'selectPage', pathMatch: 'full'},
  { path: 'selectPage', component: SelectPageComponent},
  { path: 'basketPage', component: BasketPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
