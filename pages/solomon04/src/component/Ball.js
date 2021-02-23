import React, { memo } from 'react';

const Ball = ({ number }) => {
  let background;
  if (number <= 10) {
    background = 'red';
  } else if (number <= 20) {
    background = 'orange';
  } else if (number <= 30) {
    background = 'yellow';
  } else if (number <= 40) {
    background = 'blue';
  } else {
    background = 'green';
  }

  return (
    <span className="ball" style={{ background }}>
      {number}
    </span>
  );
};

export default memo(Ball);
