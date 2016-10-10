import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

// used to create fake backend
import { fakeBackendProvider }          from './helpers/fake-backend';
import { MockBackend, MockConnection }  from '@angular/http/testing';
import { BaseRequestOptions }           from '@angular/http';

import { AppComponent }         from './app.component';
import { LoginComponent }       from './components/login/login.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { NavbarComponent }      from './components/sitebar/navbar.component';
import { MenubarComponent }     from './components/sitebar/menubar.component';
import { routing }              from './app.routing';

import { AuthGuard }    from './guards/auth.guard';
import { AuthService }  from './services/auth.service';
import { UserService }  from './services/user.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        NavbarComponent,
        MenubarComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
