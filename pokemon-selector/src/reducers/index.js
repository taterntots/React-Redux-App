import {
    FETCH_POKEMON_START,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE
} from '../actions';

const initialState = {
    name: 'testName',
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                name: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_POKEMON_FAILURE:
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