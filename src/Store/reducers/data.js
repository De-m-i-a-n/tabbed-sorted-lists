import {
    SET_ACTIVE_TAB,
    SET_REWARDS_ARR_OBJECTS
} from '../types/types';

const initialState = {
    userInfo: null,

};

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
    case SET_ACTIVE_TAB:
        return { ...state, setActiveTab: action.payload };
    case SET_REWARDS_ARR_OBJECTS:
        return { ...state, rewardsArrObjects: action.payload };
        
    default:
        return state;
    }
}
