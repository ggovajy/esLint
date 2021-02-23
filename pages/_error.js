import React from 'react';

function _error({ statusCode }) {
  return (
    <div>
      {statusCode
        ? `An error ${statusCode} occurred on Server`
        : 'An error occured on client'}
    </div>
  );
}

Error.getInitalProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
};
export default _error;
