import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserPage } from "../componentes/user/user.page";
import { HomePage } from './home.page';
import { HomepageComponent } from '../componentes/homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'Homepage',
        component: HomepageComponent
      }
    ])
  ],
  declarations: [HomePage,UserPage, HomepageComponent]
})
export class HomePageModule {}
