import React from 'react';

import { Link } from 'react-router-dom';

const BackButton = () => (
  <p>
    <Link to="/alarms">
      <button type="button" className="btn btn-danger">
        <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back
      </button>
    </Link>
  </p>
)

export default BackButton;