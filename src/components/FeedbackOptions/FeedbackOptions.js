import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(element => (
        <button
          className={styles.button}
          key={element}
          name={element}
          onClick={e => onLeaveFeedback(e)}
        >
          {element}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onleaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
