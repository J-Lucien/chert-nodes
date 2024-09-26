import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { LoginComponent } from './login/login.component';
import { FullhomeComponent } from './fullhome/fullhome.component';
import { AdminComponent } from './admin/admin.component';
import { ServersComponent } from './servers/servers.component';

export const routes: Routes = [
    // {path:'',component:HomeComponent},
    // {path:'rules',component:RulesComponent},
    // {path:'login',component:LoginComponent},
    // {path:'full-home',component:FullhomeComponent}

    {
        path:'',
        component: FullhomeComponent,
        children:[
            {path:'',component:HomeComponent},
            {path:'rules',component:RulesComponent}
        ]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {path:'servers',component:ServersComponent}
        ]
    }
];
