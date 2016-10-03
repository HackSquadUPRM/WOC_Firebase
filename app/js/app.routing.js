"use strict";
const router_1 = require('@angular/router');
const aboutMe_component_1 = require('./modules/components/aboutMe.component');
const app_component_1 = require('./modules/components/app.component');
const appRoutes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: app_component_1.AppComponent
    },
    {
        path: 'about',
        component: aboutMe_component_1.AboutMeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
