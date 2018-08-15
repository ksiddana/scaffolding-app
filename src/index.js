import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './routes';

const App = () => {
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
  );

  return(
      <Provider store={store}>
        <Routes />
      </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
