/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the NodeUpdateUserParameter class.
 * @constructor
 * Parameters for a ComputeNodeOperations.UpdateUser request.
 * @member {string} password Sets the password of the account.
 * 
 * @member {date} [expiryTime] Sets the time at which the account should
 * expire. If omitted, the default is 1 day from the current time.
 * 
 */
function NodeUpdateUserParameter() {
}

/**
 * Defines the metadata of NodeUpdateUserParameter
 *
 * @returns {object} metadata of NodeUpdateUserParameter
 *
 */
NodeUpdateUserParameter.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NodeUpdateUserParameter',
    type: {
      name: 'Composite',
      className: 'NodeUpdateUserParameter',
      modelProperties: {
        password: {
          required: true,
          serializedName: 'password',
          type: {
            name: 'String'
          }
        },
        expiryTime: {
          required: false,
          serializedName: 'expiryTime',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = NodeUpdateUserParameter;