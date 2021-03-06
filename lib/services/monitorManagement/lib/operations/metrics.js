/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;
const moment = require('moment');

/**
 * **Lists the metric values for a resource**.
 *
 * @param {string} resourceUri The identifier of the resource.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.timespan] The timespan of the query. It is a string
 * with the following format 'startDateTime_ISO/endDateTime_ISO'.
 *
 * @param {moment.duration} [options.interval] The interval (i.e. timegrain) of
 * the query.
 *
 * @param {string} [options.metricnames] The names of the metrics (comma
 * separated) to retrieve.
 *
 * @param {string} [options.aggregation] The list of aggregation types (comma
 * separated) to retrieve.
 *
 * @param {number} [options.top] The maximum number of records to retrieve.
 * Valid only if $filter is specified.
 * Defaults to 10.
 *
 * @param {string} [options.orderby] The aggregation to use for sorting results
 * and the direction of the sort.
 * Only one order can be specified.
 * Examples: sum asc.
 *
 * @param {string} [options.filter] The **$filter** is used to reduce the set
 * of metric data returned.<br>Example:<br>Metric contains metadata A, B and
 * C.<br>- Return all time series of C where A = a1 and B = b1 or
 * b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>-
 * Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B =
 * ‘b2’**<br>This is invalid because the logical or operator cannot separate
 * two different metadata names.<br>- Return all time series where A = a1, B =
 * b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>-
 * Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and
 * C eq ‘*’**.
 *
 * @param {string} [options.resultType] Reduces the set of data collected. The
 * syntax allowed depends on the operation. See the operation's description for
 * details. Possible values include: 'Data', 'Metadata'
 *
 * @param {string} [options.metricnamespace] Metric namespace to query metric
 * definitions for.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link Response} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(resourceUri, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let timespan = (options && options.timespan !== undefined) ? options.timespan : undefined;
  let interval = (options && options.interval !== undefined) ? options.interval : undefined;
  let metricnames = (options && options.metricnames !== undefined) ? options.metricnames : undefined;
  let aggregation = (options && options.aggregation !== undefined) ? options.aggregation : undefined;
  let top = (options && options.top !== undefined) ? options.top : undefined;
  let orderby = (options && options.orderby !== undefined) ? options.orderby : undefined;
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  let resultType = (options && options.resultType !== undefined) ? options.resultType : undefined;
  let metricnamespace = (options && options.metricnamespace !== undefined) ? options.metricnamespace : undefined;
  let apiVersion = '2018-01-01';
  // Validate
  try {
    if (resourceUri === null || resourceUri === undefined || typeof resourceUri.valueOf() !== 'string') {
      throw new Error('resourceUri cannot be null or undefined and it must be of type string.');
    }
    if (timespan !== null && timespan !== undefined && typeof timespan.valueOf() !== 'string') {
      throw new Error('timespan must be of type string.');
    }
    if(interval && !moment.isDuration(interval)) {
      throw new Error('interval must be of type moment.duration.');
    }
    if (metricnames !== null && metricnames !== undefined && typeof metricnames.valueOf() !== 'string') {
      throw new Error('metricnames must be of type string.');
    }
    if (aggregation !== null && aggregation !== undefined && typeof aggregation.valueOf() !== 'string') {
      throw new Error('aggregation must be of type string.');
    }
    if (top !== null && top !== undefined && typeof top !== 'number') {
      throw new Error('top must be of type number.');
    }
    if (orderby !== null && orderby !== undefined && typeof orderby.valueOf() !== 'string') {
      throw new Error('orderby must be of type string.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
    if (resultType) {
      let allowedValues = [ 'Data', 'Metadata' ];
      if (!allowedValues.some( function(item) { return item === resultType; })) {
        throw new Error(resultType + ' is not a valid value. The valid values are: ' + allowedValues);
      }
    }
    if (metricnamespace !== null && metricnamespace !== undefined && typeof metricnamespace.valueOf() !== 'string') {
      throw new Error('metricnamespace must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + '{resourceUri}/providers/microsoft.insights/metrics';
  requestUrl = requestUrl.replace('{resourceUri}', resourceUri);
  let queryParameters = [];
  if (timespan !== null && timespan !== undefined) {
    queryParameters.push('timespan=' + encodeURIComponent(timespan));
  }
  if (interval !== null && interval !== undefined) {
    queryParameters.push('interval=' + encodeURIComponent(interval.toISOString()));
  }
  if (metricnames !== null && metricnames !== undefined) {
    queryParameters.push('metricnames=' + encodeURIComponent(metricnames));
  }
  if (aggregation !== null && aggregation !== undefined) {
    queryParameters.push('aggregation=' + encodeURIComponent(aggregation));
  }
  if (top !== null && top !== undefined) {
    queryParameters.push('top=' + encodeURIComponent(top.toString()));
  }
  if (orderby !== null && orderby !== undefined) {
    queryParameters.push('orderby=' + encodeURIComponent(orderby));
  }
  if (filter !== null && filter !== undefined) {
    queryParameters.push('$filter=' + encodeURIComponent(filter));
  }
  if (resultType !== null && resultType !== undefined) {
    queryParameters.push('resultType=' + encodeURIComponent(resultType));
  }
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (metricnamespace !== null && metricnamespace !== undefined) {
    queryParameters.push('metricnamespace=' + encodeURIComponent(metricnamespace));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['Response']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a Metrics. */
class Metrics {
  /**
   * Create a Metrics.
   * @param {MonitorManagementClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._list = _list;
  }

  /**
   * **Lists the metric values for a resource**.
   *
   * @param {string} resourceUri The identifier of the resource.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.timespan] The timespan of the query. It is a string
   * with the following format 'startDateTime_ISO/endDateTime_ISO'.
   *
   * @param {moment.duration} [options.interval] The interval (i.e. timegrain) of
   * the query.
   *
   * @param {string} [options.metricnames] The names of the metrics (comma
   * separated) to retrieve.
   *
   * @param {string} [options.aggregation] The list of aggregation types (comma
   * separated) to retrieve.
   *
   * @param {number} [options.top] The maximum number of records to retrieve.
   * Valid only if $filter is specified.
   * Defaults to 10.
   *
   * @param {string} [options.orderby] The aggregation to use for sorting results
   * and the direction of the sort.
   * Only one order can be specified.
   * Examples: sum asc.
   *
   * @param {string} [options.filter] The **$filter** is used to reduce the set
   * of metric data returned.<br>Example:<br>Metric contains metadata A, B and
   * C.<br>- Return all time series of C where A = a1 and B = b1 or
   * b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>-
   * Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B =
   * ‘b2’**<br>This is invalid because the logical or operator cannot separate
   * two different metadata names.<br>- Return all time series where A = a1, B =
   * b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>-
   * Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and
   * C eq ‘*’**.
   *
   * @param {string} [options.resultType] Reduces the set of data collected. The
   * syntax allowed depends on the operation. See the operation's description for
   * details. Possible values include: 'Data', 'Metadata'
   *
   * @param {string} [options.metricnamespace] Metric namespace to query metric
   * definitions for.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Response>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listWithHttpOperationResponse(resourceUri, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._list(resourceUri, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * **Lists the metric values for a resource**.
   *
   * @param {string} resourceUri The identifier of the resource.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.timespan] The timespan of the query. It is a string
   * with the following format 'startDateTime_ISO/endDateTime_ISO'.
   *
   * @param {moment.duration} [options.interval] The interval (i.e. timegrain) of
   * the query.
   *
   * @param {string} [options.metricnames] The names of the metrics (comma
   * separated) to retrieve.
   *
   * @param {string} [options.aggregation] The list of aggregation types (comma
   * separated) to retrieve.
   *
   * @param {number} [options.top] The maximum number of records to retrieve.
   * Valid only if $filter is specified.
   * Defaults to 10.
   *
   * @param {string} [options.orderby] The aggregation to use for sorting results
   * and the direction of the sort.
   * Only one order can be specified.
   * Examples: sum asc.
   *
   * @param {string} [options.filter] The **$filter** is used to reduce the set
   * of metric data returned.<br>Example:<br>Metric contains metadata A, B and
   * C.<br>- Return all time series of C where A = a1 and B = b1 or
   * b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>-
   * Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B =
   * ‘b2’**<br>This is invalid because the logical or operator cannot separate
   * two different metadata names.<br>- Return all time series where A = a1, B =
   * b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>-
   * Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and
   * C eq ‘*’**.
   *
   * @param {string} [options.resultType] Reduces the set of data collected. The
   * syntax allowed depends on the operation. See the operation's description for
   * details. Possible values include: 'Data', 'Metadata'
   *
   * @param {string} [options.metricnamespace] Metric namespace to query metric
   * definitions for.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Response} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Response} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceUri, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._list(resourceUri, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._list(resourceUri, options, optionalCallback);
    }
  }

}

module.exports = Metrics;
