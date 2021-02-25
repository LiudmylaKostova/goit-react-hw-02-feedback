import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      {total > 0 ? (
        <>
          <p className={styles.feedback}>Good: {good}</p>
          <p className={styles.feedback}>Neutral: {neutral}</p>
          <p className={styles.feedback}>Bad: {bad}</p>
          <p className={styles.feedback}>Total: {total}</p>
          <p className={styles.feedback}>
            Positive feedback: {positivePercentage}%
          </p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
