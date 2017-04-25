import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import {fetchData} from './actions';
import * as reducers from './reducers';
reducers.routing = routerReducer;
import styles from './app.css';
import App from './components/App';
import EditSignUpModal from './components/EditSignUpModal';
// import VisibleCards from './components/VisibleCards'; import NewCardModal
// from './components/NewCardModal'; import EditCardModal from
// './components/EditCardModal'; import StudyModal from
// './components/StudyModal';

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
const history = syncHistoryWithStore(browserHistory, store);
render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <Route path='/signup/:signupId/edit/:userId' component={EditSignUpModal}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
