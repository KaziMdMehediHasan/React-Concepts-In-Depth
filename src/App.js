import './App.css';
import React, { useReducer } from 'react'
import ComponentA from './components/UserReducer/ComponentA';
import CounterContext from './contexts/counterContext';


const initialState = {
    counter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + action.value }
        case 'decrement':
            return { counter: state.counter - action.value }
        default: return state;
    }
}
const App = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <h1>Count : {count.counter}</h1>
            <CounterContext.Provider value={{ countDispatch: dispatch }}>
                <ComponentA />
            </CounterContext.Provider>
        </div>
    )
}

export default App