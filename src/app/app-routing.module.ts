import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'user/:userId',
        component: UserComponent
    },
    {
        path: '**',
        component: HomepageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}