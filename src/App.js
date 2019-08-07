import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

const store = createStore(rootReducer)

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and Test to reload.
        </p>
        <Button variant="contained" color="primary" href="#contained-buttons" className={classes.button}>
          Link
      </Button>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" className={classes.button}>
            Upload
        </Button>
        </label>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
