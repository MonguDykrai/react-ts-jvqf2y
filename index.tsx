import React, { Component } from 'react';
import { render } from 'react-dom';
import MyDatePicker from './MyDatePicker';

function App() {
  return (
    <div>
      app
      <MyDatePicker allowClear={true} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
