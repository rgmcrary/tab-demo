import { Component, Input, OnInit } from '@angular/core';
import {Tab} from '../../tab.model';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: [ './tab.component.css' ]
})
export class TabComponent implements OnInit {
    @Input() tab: Tab;

    constructor() {
    }


    ngOnInit() {
    }
}



