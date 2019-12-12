import React from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions';

const Pokemon = (props) => {
    return (
        <div>
            <h1>Pokemon Starter Chooser</h1>
            <p>{props.name}</p>
            <button onClick={props.getPokemon}>Catch 'em all!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getPokemon })(Pokemon);