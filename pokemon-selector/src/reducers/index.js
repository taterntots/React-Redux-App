import {
    FETCH_JOKE_START,
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAILURE
} from '../actions';

const initialState = {
    setup: null,
    punchline: null,
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKE_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_JOKE_SUCCESS:
            return {
                ...state,
                setup: action.payload.setup,
                punchline: action.payload.punchline,
                isFetching: false,
                error: ''
            }
        case FETCH_JOKE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;