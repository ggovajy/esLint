import React, { Component } from 'react';
import styles from './Form.module.css';
const Form = ({ value, onChange, onCreate, onKeyPress, color }) => {
  return (
    <div className={`${styles.form}`}>
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        style={{ color }}
      />
      <div className={`${styles.createButton}`} onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
