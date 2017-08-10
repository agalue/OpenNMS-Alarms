import React from 'react';

export default function App(props) {
  return(
    <div className="container">
      <h1>OpenNMS Alarms</h1>
      { props.children }
    </div>
  )
}
