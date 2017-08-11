"use strict";
var login_component_1 = require("./login.component");
var home_component_1 = require("./home.component");
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: '',
        redirectTo: "Login",
        pathMatch: 'full'
    },
    { path: 'Login', component: login_component_1.LoginComponent },
    { path: 'Home', component: home_component_1.HomeComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map