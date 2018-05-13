import { Tab } from '../tab.model';
import { TabActions } from './tab.actions';
import { Action } from 'redux';

export interface IAppState {
    tabs: Tab[]
}

export const initialState: IAppState = {
    tabs: []
}

export const populatedState: IAppState = {
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

export function tabReducer(state: IAppState, action: Action): IAppState {
    switch (action.type) {
        case TabActions.FETCH: return populatedState
    }
    return initialState;
}