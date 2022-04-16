import store from './store/Store';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>, document.getElementById('root')
)