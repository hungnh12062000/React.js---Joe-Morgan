import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

export default function Alert({ children, message, type }) {
     return (
          <div className={`alert alert-${type}`} role="alert">
               <h2>{message}</h2>
               {children}
          </div>
     );
}

Alert.propTypes = {
     children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.element),
          PropTypes.element.isRequired
     ]),
     message: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired
}