import { SET_ACTIVE_PAGE } from '../types/types';

const setActivePage = payload => ({
    type: SET_ACTIVE_PAGE,
    payload
});

export default setActivePage;