import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DetailsComponent } from './homepage/details/details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './homepage/info/info.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {

        path: 'homepage',
        loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: "**", 
        component: MainComponent
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
}