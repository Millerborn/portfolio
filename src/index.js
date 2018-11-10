import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows the use of redux within react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Saga middleware
import { call, put, takeEvery } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
    yield takeEvery('ADD_PROJECTS', addNewProject);
    // yield takeEvery('DELETE_PROJECT', deleteProject);
}

// get projects from database
function* getProjects(actions) {
    console.log('in getProjects', actions);
    try {
        const response = yield call(axios.get, '/projects');
        yield put( { type: 'SET_PROJECTS', payload: response.data } )
        console.log('getProjects response data', response.data);
    }
    catch(error) {
        console.log('error in get projects generator', error);
    }
}

// add projects to database
function* addNewProject(action) {
    console.log('in add project generator', action);
    try {
      yield call( axios.post, '/projects', action.payload );
      alert('Success adding a new Project.');
      yield put( { type: 'GET_PROJECTS' } );
    }
    catch(error) {
      console.log('error with add project', error);
      alert('Error adding new Project. Please complete required fields.');
    }
  }

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(
        sagaMiddleware, 
        logger
    ),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
