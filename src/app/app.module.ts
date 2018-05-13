import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IAppState, tabReducer, initialState } from './store/tab.reducer';
import { TabActions } from './store/tab.actions';

import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';

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
    providers: [TabActions],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(tabReducer, initialState);
    }
}
