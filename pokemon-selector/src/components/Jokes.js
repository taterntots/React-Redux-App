import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions';

const Jokes = (props) => {
    return (
        <div>
            <h1>Joke Creator</h1>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
            <button onClick={props.getJoke}>Laugh It Up!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        setup: state.setup,
        punchline: state.punchline,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getJoke })(Jokes);