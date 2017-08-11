import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: "Login",
    }, 
    { path: 'Login', component: LoginComponent},
    { path: 'Home', component: HomeComponent },
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)