import { Tab } from './app/tab.model';

export interface State {
    tabs: Tab[]
}

const initialState: State = {
    tabs: [
        new Tab(
            'Tab1',
            'Stuff',
            1
        ),
        new Tab(
            'Tab2',
            'More Stuff',
            2
        ),
        new Tab(
            'Tab3',
            'Even More Stuff',
            3
        )
    ]
};