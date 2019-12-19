import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions';
import Loader from 'react-loader-spinner';
import JokerImg from '../images/joker3.png';
import styled from 'styled-components';

const CardStyle = styled.div`
    margin-left: 7%;
    margin-right: 7%;
`
const SpeechBubble = styled.div`
    border-radius: 10px;
    background-color: darkslategrey;
    font-size: 2rem;
    width: 100%;
    padding: 1px;
`
const ImageStyle = styled.img`
    width: 400px;
`

const Jokes = (props) => {
    return (
        <div>
            <h1>Jesting with the Joker</h1>
            <div>
                <ImageStyle onClick={props.getJoke} src={JokerImg}/>
            </div>
            <CardStyle>
                <SpeechBubble>
                    {!props.setup && !props.isFetching && <p>Why So Serious?</p>}
                    {props.setup && <p>{props.setup}</p>}
                    {props.punchline && <p>{props.punchline}</p>}
                    {props.isFetching && (
                        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                    )}
                </SpeechBubble>
            </CardStyle>
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