import axios from 'axios';
import qs from 'qs';

export const doGetResponse = data => {
  return new Promise(function(resolve, reject) {
    let responseType = 'json';
    // convert params : GET only
    let finalParams = '';
    if (data.method === 'GET') {
      const apiParams = data.params;
      for (let i = 0; i < apiParams.selectedIndexes.length; i++) {
        const paramItem = apiParams.rows[apiParams.selectedIndexes[i]];
        if (paramItem.key !== '') {
          if (finalParams !== '') {
            finalParams += '&';
          } else {
            finalParams += '?';
          }
          finalParams += paramItem.key;
          finalParams += '=';
          finalParams += paramItem.value;
        }
      }
    }

    if (data.method === 'GET' && data.urlAddress.includes('.csv')) {
      responseType = 'blob';
    }

    // convert header :
    const apiHeaders = data.headers;
    const finalHeaders = {};
    for (let i = 0; i < apiHeaders.selectedIndexes.length; i++) {
      const headerItem = apiHeaders.rows[apiHeaders.selectedIndexes[i]];
      if (headerItem.key !== '') {
        finalHeaders[headerItem.key] = headerItem.value;
      }
    }

    // convert body :
    let finalBody = {};
    const apiBody = data.body;

    if (apiBody.type === 'form-data') {
      finalHeaders['Content-Type'] = 'multipart/form-data';

      finalBody = new FormData();
      for (let i = 0; i < apiBody.formdata.selectedIndexes.length; i++) {
        const bodyItem =
          apiBody.formdata.rows[apiBody.formdata.selectedIndexes[i]];
        if (bodyItem.key !== '') {
          finalBody.append(bodyItem.key, bodyItem.value);
        }
      }
    }

    if (apiBody.type === 'x-www-form-urlencoded') {
      for (let i = 0; i < apiBody.urlencoded.selectedIndexes.length; i++) {
        const bodyItem =
          apiBody.urlencoded.rows[apiBody.urlencoded.selectedIndexes[i]];
        if (bodyItem.key !== '') {
          finalBody[bodyItem.key] = bodyItem.value;
        }
      }

      finalBody = qs.stringify(finalBody);
    }

    if (apiBody.type === 'raw') {
      finalHeaders['Content-Type'] = 'text/plain';
      finalBody = apiBody.raw;
    }

    if (apiBody.type === 'none') {
      finalBody = null;
    }

    console.log(finalParams);
    console.log(finalBody);
    // convert body params : POST, PUT,
    const config = {
      url: `${data.urlAddress}${finalParams}`,

      method: data.method,
      // `headers` are custom headers to be sent
      headers: finalHeaders,

      // `params` are the URL parameters to be sent with the request
      // Must be a plain object or a URLSearchParams object
      data: finalBody,

      // `timeout` specifies the number of milliseconds before the request times out.
      // If the request takes longer than `timeout`, the request will be aborted.
      timeout: 30000, // default is `0` (no timeout)

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
      responseType: responseType, // default

      // `responseEncoding` indicates encoding to use for decoding responses
      // Note: Ignored for `responseType` of 'stream' or client-side requests
      responseEncoding: 'json', // default

      // `maxContentLength` defines the max size of the http response content in bytes allowed
      maxContentLength: 100000,
    };

    axios
      .request(config)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        console.log('error reject');
        reject(err);
      });

    // if (data.method === 'GET') {
    //   axios
    //     .get(`${data.urlAddress}?${finalParams}`, null, config)
    //     .then(response => {
    //       resolve(response);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // } else if (data.method === 'POST') {
    //   axios
    //     .post(data.urlAddress, finalBody, config)
    //     .then(response => {
    //       resolve(response);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // } else if (data.method === 'PUT') {
    //   axios
    //     .put(data.urlAddress, finalBody, config)
    //     .then(response => {
    //       resolve(response);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // } else if (data.method === 'DELETE') {
    //   axios
    //     .delete(data.urlAddress, null, config)
    //     .then(response => {
    //       resolve(response);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // }
  });
};
