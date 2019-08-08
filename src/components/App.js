import React from 'react';

import './App.css';

import ContactForm from '../containers/ContactForm'

function App() {
  const submit = values => {
    // print the form values to the console
    console.log(values)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ContactForm onSubmit={submit} />
      </header>
    </div>
  );
}

export default App;
