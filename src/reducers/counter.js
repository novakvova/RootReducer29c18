import { INC_COUNTER } from '../actions';
import update from 'immutability-helper';

const initialState = {
    counterStore: 23
};

export default function counter(state = initialState, action = {}) {
    let newState=state;
    switch(action.type) {
        case INC_COUNTER: {
            newState=update(state, {counterStore: {$set: state.counterStore+1}});
            break;
            //return Object.assign({}, state, { counterStore: state.counterStore+1 });
        }
        default:
            return state;
    }
    return newState;
}