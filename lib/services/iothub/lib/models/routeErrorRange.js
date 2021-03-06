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

const models = require('./index');

/**
 * Range of route errors
 *
 */
class RouteErrorRange {
  /**
   * Create a RouteErrorRange.
   * @member {object} [start] Start where the route error happened
   * @member {number} [start.line] Line where the route error happened
   * @member {number} [start.column] Column where the route error happened
   * @member {object} [end] End where the route error happened
   * @member {number} [end.line] Line where the route error happened
   * @member {number} [end.column] Column where the route error happened
   */
  constructor() {
  }

  /**
   * Defines the metadata of RouteErrorRange
   *
   * @returns {object} metadata of RouteErrorRange
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RouteErrorRange',
      type: {
        name: 'Composite',
        className: 'RouteErrorRange',
        modelProperties: {
          start: {
            required: false,
            serializedName: 'start',
            type: {
              name: 'Composite',
              className: 'RouteErrorPosition'
            }
          },
          end: {
            required: false,
            serializedName: 'end',
            type: {
              name: 'Composite',
              className: 'RouteErrorPosition'
            }
          }
        }
      }
    };
  }
}

module.exports = RouteErrorRange;
