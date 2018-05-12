import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { State } from '../store';

import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        TabComponent
    ],
    imports: [
        BrowserModule,
        NgReduxModule,

    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
