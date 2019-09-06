import React from 'react';
const ResponseStatus = ({ apiInterface }) => {
  return (
    <div className="d-flex">
      <div className="d-flex mr-2">
        Status:
        {apiInterface.response.status >= 200 &&
        apiInterface.response.status < 300 ? (
          <p className="text-success">{apiInterface.response.status}</p>
        ) : (
          ''
        )}
        {apiInterface.response.status >= 300 &&
        apiInterface.response.status < 400 ? (
          <p className="text-warning">{apiInterface.response.status}</p>
        ) : (
          ''
        )}
        {apiInterface.response.status >= 400 &&
        apiInterface.response.status < 500 ? (
          <p className="text-danger">{apiInterface.response.status}</p>
        ) : (
          ''
        )}
        {apiInterface.response.status >= 500 ? (
          <p className="text-dark">{apiInterface.response.status}</p>
        ) : (
          ''
        )}
        {apiInterface.response.status ? (
          <>&nbsp;({apiInterface.response.statusText})</>
        ) : (
          ''
        )}
      </div>
      <div className="d-flex mr-2">
        Time:
        <p className="text-success">{apiInterface.response.duration}ms</p>
      </div>
    </div>
  );
};

export default ResponseStatus;
