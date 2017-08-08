import React from 'react';

const App = (props) => (
  <div className="container">
    <h1>OpenNMS Alarms</h1>
    { props.children }
  </div>
)

export default App;