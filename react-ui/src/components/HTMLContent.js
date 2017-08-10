import React from 'react';

export default function HTMLContent(props) {
  return(
    <div dangerouslySetInnerHTML={{__html: props.content}}></div>
  )
}
