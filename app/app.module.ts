import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import { routing } from './app.routing';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AuthManager } from "./authmanager";

@NgModule({
  declarations: [AppComponent,HomeComponent,LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    routing,
    HttpModule
  ],
  providers: [AuthManager],
  bootstrap: [AppComponent]
})

export class AppModule {
}