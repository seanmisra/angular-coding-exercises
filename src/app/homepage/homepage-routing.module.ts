import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomepageComponent } from './homepage.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
    {
        path: '',
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
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule{}