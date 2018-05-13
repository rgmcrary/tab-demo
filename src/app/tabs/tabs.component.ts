import { Component, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { TabActions } from '../store/tab.actions';
import { IAppState } from '../store/tab.reducer';
import { Tab } from '../tab.model';


@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: [ './tabs.component.css' ]
})

export class TabsComponent implements OnDestroy {
    tabs: Tab[] = [];
    subscription;

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private actions: TabActions) {
        this.subscription = ngRedux.select<Tab[]>('tabs')
            .subscribe(tabs => this.tabs = tabs);
    }

    onPopulate() {
        this.ngRedux.dispatch(this.actions.fetch());
    };

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }
}

