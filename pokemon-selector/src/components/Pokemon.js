import React from 'react';
import { connect } from 'react-redux';

const Pokemon = (props) => {
    return (
        <div>
            <h1>Pokemon Starter Chooser</h1>
            <p>{props.name}</p>
            <p>{props.type}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        type: state.type,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Pokemon);