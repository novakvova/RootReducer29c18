import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INC_COUNTER } from '../actions';


//imrc/imr
//cc
class Counter extends Component {
    //state = {  }
    onClickUpCounter = (e) =>
    {
        e.preventDefault();
        console.log('----counter---++---');
        this.props.incrementAction();
    }
    render() { 
        console.log('-----props counter----',this.props);
        const {count}=this.props;
        return (
            <div>
                <h2>Counter Page {count}</h2>
                <button onClick={this.onClickUpCounter}>counter++</button>
            </div>
          );
    }
}

const mapStateProps = (state) => {
    console.log('---map state by redux to pops---', state);
    return {
        count: state.counter.counterStore
    };
}

const mapDispatch = (dispatch) => {
    return {
        incrementAction: () => {
            dispatch({type: INC_COUNTER});
        }
    };
};


 
export default connect(mapStateProps, mapDispatch)(Counter);