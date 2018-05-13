import { Tab } from '../tab.model';
import { TabActions } from './tab.actions';
import { Action } from 'redux';

export interface IAppState {
    tabs: Tab[]
}

export const initialState: IAppState = {
    tabs: []
};

export const populatedState: IAppState = {
        tabs: [
            new Tab(
                'Bacon Talk',
                `Bacon ipsum dolor amet rump tenderloin shank t-bone leberkas. Filet mignon shank kielbasa 
                ground round doner short loin. Ribeye ham chicken fatback shank doner bresaola spare ribs tenderloin 
                turkey short ribs tri-tip. Kielbasa hamburger turkey boudin tongue meatball picanha burgdoggen jowl 
                sirloin jerky frankfurter flank. Kevin tongue tenderloin brisket sausage tri-tip.`,
                1,
                true
            ),
            new Tab(
                'Cat Speak',
                `Grab pompom in mouth and put in water dish lounge in doorway claw your carpet in places
                 everyone can see - why hide my amazing artistic clawing skills? i could pee on this if i had the energy
                 yet eat owner's food and run in circles hate dog. Knock dish off table head butt cant eat out of my 
                 own dish meowwww meoooow and sometimes switches in french and say "miaou" just because well why not 
                 thinking longingly about tuna brine love, and proudly present butt to human. Take a big fluffing crap 💩
                 meow in empty rooms destroy couch poop in a handbag look delicious and drink the soapy mopping up 
                 water then puke giant foamy fur-balls but pretend you want to go out but then don't but get video 
                 posted to internet for chasing red dot.`,
                2,
                false
            ),
            new Tab(
                'Bob Ross Style',
                `You don't have to be crazy to do this but it does help. You can create beautiful things - but
                you have to see them in your mind first. All you need to paint is a few tools, a little instruction, and
                a vision in your mind.`,
                3,
                false
            )
        ]
    }
;

export function tabReducer(state: IAppState, action: Action): IAppState {
    switch (action.type) {
        case TabActions.FETCH:
            return populatedState;
    }
    return initialState;
}