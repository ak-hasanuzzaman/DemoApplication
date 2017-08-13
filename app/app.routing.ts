import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthManager } from "./authmanager";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: "Login",
        pathMatch: 'full'
    }, 
    { path: 'Login', component: LoginComponent, canActivate: [AuthManager]},
    { path: 'Home', component: HomeComponent, canActivate: [AuthManager] },
]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)