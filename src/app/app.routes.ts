import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'rules',component:RulesComponent},
    {path:'login',component:LoginComponent}
];
