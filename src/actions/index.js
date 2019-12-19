import axios from 'axios';

export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

export const getJoke = () => dispatch => {
    dispatch({ type: FETCH_JOKE_START });
    axios
        // .get('https://pokeapi.co/api/v2/pokemon/')
        .get('https://official-joke-api.appspot.com/random_joke')
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_JOKE_FAILURE, payload: err.response });
        })
}

// export const getPokemon = () => dispatch => {
//     dispatch({ type: FETCH_JOKE_START });
//     axios
//         .get('https://pokeapi.co/api/v2/pokemon/')
//         .then(res => {
//             console.log(res.data);
//             dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data });
//         })
//         .catch(err => {
//             console.log(err);
//             dispatch({ type: FETCH_JOKE_FAILURE, payload: err.response });
//         })
// }