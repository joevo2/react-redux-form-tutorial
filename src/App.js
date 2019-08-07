import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './App.css';

import ContactForm from './ContactForm'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function App() {
  const classes = useStyles();

  const submit = values => {
    // print the form values to the console
    console.log(values)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ContactForm onSubmit={submit} />        
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
      </header>
    </div>
  );
}

export default App;
