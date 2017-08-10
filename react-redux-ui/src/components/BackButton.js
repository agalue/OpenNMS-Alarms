import React from 'react';

import { Link } from 'react-router-dom';

export default function BackButton() {
  return(
    <p>
      <Link to="/alarms">
        <button type="button" className="btn btn-danger">
          <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back
        </button>
      </Link>
    </p>
  )
}