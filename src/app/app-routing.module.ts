import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

// import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';

// import { HomeComponent } from './';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'path2', component: Name2Component },
//   { path: 'path3', component: Name3Component },
//   { path: 'path4', component: Name4Component },
 

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
//];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class FeatureRoutingModule {}


const app_routes: Routes = [
   { path: 'home', component: PortafolioComponent },
   { path: 'about', component: AboutComponent },
   { path: 'item/:id', component: ItemComponent },
   { path: 'search/:termino', component: SearchComponent },
   { path: '**', component: PortafolioComponent },
  // { path: '**', pathMatch:'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
