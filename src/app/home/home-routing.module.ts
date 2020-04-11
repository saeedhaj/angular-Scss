import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: () => import("../user/user.module").then(m => m.UserModule)
      },
      {
        path: 'rouls',
        loadChildren: () => import("../rouls/rouls.module").then(m => m.RoulsModule)
      },
      {
        path: 'foods',
        loadChildren: () => import("../foods/foods.module").then(m => m.FoodsModule)
      },
      {
        path: 'restoran',
        loadChildren: () => import("../restoran/restoran.module").then(m => m.RestoranModule)
      },
      {
        path: 'cars',
        loadChildren: () => import("../cars/cars.module").then(m => m.CarsModule)
      },
      {
        path: 'drivers',
        loadChildren: () => import("../drivers/drivers.module").then(m => m.DriversModule)
      },
      {
        path: 'dashbords',
        loadChildren: () => import("../dashbords/dashbords.module").then(m => m.DashbordsModule)
      },
      {
        path: 'property',
        loadChildren: () => import("../property/property.module").then(m => m.PropertyModule)
      },
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
