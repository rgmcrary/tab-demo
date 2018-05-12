import { Component, OnInit } from '@angular/core';
import { Store } from 'redux';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: [ './tabs.component.css' ]
})
export class TabsComponent implements OnInit {

    constructor(private store: Store<fromTab.FeatureState>) {
    }

    ngOnInit() {
    }
}

