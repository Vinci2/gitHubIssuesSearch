import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainContainerComponent } from './containers/home-main-container/home-main-container.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';



@NgModule({
  declarations: [HomeMainContainerComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
