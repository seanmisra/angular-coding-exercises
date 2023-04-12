import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DetailsComponent } from './homepage/details/details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './homepage/info/info.component';

const routes: Routes = [
    {
        path: 'homepage',
        component: HomepageComponent,
        children: [
            {
                path: 'details',
                component: DetailsComponent
            },
            {
                path: 'info',
                component: InfoComponent
            }
        ]
    },
    {
        path: '**',
        component: HomepageComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
}