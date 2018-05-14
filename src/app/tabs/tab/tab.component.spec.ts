import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';
import { Tab } from '../../tab.model';

describe('TabComponent', () => {
    let component: TabComponent;
    let fixture: ComponentFixture<TabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TabComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        fixture = TestBed.createComponent(TabComponent);
        expect(component).toBeTruthy();
    });

    // it('should set the tab description', async(() => {
    //     component.tab = new Tab('Tab1','Description',1,false);
    //     const compiledHtml = fixture.debugElement.nativeElement;
    //     fixture.detectChanges();
    //     console.log(compiledHtml.querySelector('.tabDescription'));
    //     expect(compiledHtml.querySelector('.tabDescription').textContent).toBe('Description');
    // }));
});
