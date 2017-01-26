import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//custom components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [
        AppComponent,
        NavbarComponent,
        ProfileComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
