import {
    SET_ACTIVE_TAB,
    SET_ACTIVE_PAGE,
    SET_REWARDS_ARR_OBJECTS

} from '../types/types';

const initialState = {
    activeTab: 0,
    activePage: 1,
    rewardsArrObjects: []    
};
console.log(initialState)

export default function applicationReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, activeTab: action.payload };
    case SET_ACTIVE_PAGE:
        return { ...state, activePage: action.payload };
    case SET_REWARDS_ARR_OBJECTS:
        return { ...state, rewardsArrObjects: action.payload };
                
    default:
        return state;
    }
}

