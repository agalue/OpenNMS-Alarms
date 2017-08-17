import React from 'react';

export default function SeverityPanelBody(props) {
  return (
    <div className={`panel-body ${props.severity}`}>
      { props.children }
    </div>
  )
}
