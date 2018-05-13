import { Action } from 'redux';
import { Injectable } from '@angular/core';

@Injectable()
export class TabActions {
    static FETCH = 'FETCH';

    fetch(): Action {
        return { type: TabActions.FETCH};
    }
}

