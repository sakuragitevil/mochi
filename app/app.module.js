"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
// used to create fake backend
var fake_backend_1 = require('./helpers/fake-backend');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var login_component_1 = require('./components/login/login.component');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var navbar_component_1 = require('./components/sitebar/navbar.component');
var menubar_component_1 = require('./components/sitebar/menubar.component');
var app_routing_1 = require('./app.routing');
var auth_guard_1 = require('./guards/auth.guard');
var auth_service_1 = require('./services/auth.service');
var user_service_1 = require('./services/user.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                material_1.MaterialModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                navbar_component_1.NavbarComponent,
                menubar_component_1.MenubarComponent
            ],
            providers: [
                auth_guard_1.AuthGuard,
                auth_service_1.AuthService,
                user_service_1.UserService,
                // providers used to create fake backend
                fake_backend_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map