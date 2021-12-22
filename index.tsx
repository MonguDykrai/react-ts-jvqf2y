import React, { Component } from 'react';
import { render } from 'react-dom';
import MyDatePicker from './MyDatePicker';

function App() {
  return (
    <div>
      继承并扩展 DatePicker props
      <MyDatePicker allowClear={true} />
      <a href="https://stackoverflow.com/questions/52704785/how-to-wrap-up-ant-design-with-styled-components-and-typescript">
        https://stackoverflow.com/questions/52704785/how-to-wrap-up-ant-design-with-styled-components-and-typescript
      </a>
    </div>
  );
}

render(<App />, document.getElementById('root'));
