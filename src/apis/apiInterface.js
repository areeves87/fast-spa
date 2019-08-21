import axios from 'axios';

export const doGetResponse = data => {
  return new Promise(function(resolve, reject) {

    // convert params : GET only
    const apiParams = data.params;
    let finalParams = '';

    for (let i=0; i < apiParams.selectedIndexes.length; i++) {
      const paramItem = apiParams.rows[apiParams.selectedIndexes[i]];
      if (paramItem.key !== '') {
        if (i !== 0) {
          finalParams += '&';  
        }
        finalParams += paramItem.key;
        finalParams += '=';
        finalParams += paramItem.value;
      }
    }

    console.log(finalParams);
    // convert body params : POST, PUT, 
    const config = {
      // `headers` are custom headers to be sent
      headers: { 'X-Requested-With': 'XMLHttpRequest' },

      // `params` are the URL parameters to be sent with the request
      // Must be a plain object or a URLSearchParams object
      params: {
        ID: 12345,
      },

      // `timeout` specifies the number of milliseconds before the request times out.
      // If the request takes longer than `timeout`, the request will be aborted.
      timeout: 3000, // default is `0` (no timeout)

      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      withCredentials: false, // default

      // // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
      // // This will set an `Authorization` header, overwriting any existing
      // // `Authorization` custom headers you have set using `headers`.
      // // Please note that only HTTP Basic auth is configurable through this parameter.
      // // For Bearer tokens and such, use `Authorization` custom headers instead.
      // auth: {
      //   username: 'janedoe',
      //   password: 's00pers3cret'
      // },

      // `responseType` indicates the type of data that the server will respond with
      // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
      //   browser only: 'blob'
      responseType: 'json', // default

      // `responseEncoding` indicates encoding to use for decoding responses
      // Note: Ignored for `responseType` of 'stream' or client-side requests
      responseEncoding: 'utf8', // default

      // `maxContentLength` defines the max size of the http response content in bytes allowed
      maxContentLength: 2000,
    };

    if (data.method === 'GET') {
      axios
        .get(`${data.urlAddress}?${finalParams}`, finalParams, config)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    } else if (data.method === 'POST') {
      axios
        .post(data.urlAddress, null, config)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    } else if (data.method === 'PUT') {
      axios
        .put(data.urlAddress, null, config)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    } else if (data.method === 'DELETE') {
      axios
        .delete(data.urlAddress, null, config)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};
