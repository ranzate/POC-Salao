import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'modulo01', loadChildren: './modulo01/modulo01.module#Modulo01Module' },
            { path: 'modulo02', loadChildren: './modulo02/modulo02.module#Modulo02Module' }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
