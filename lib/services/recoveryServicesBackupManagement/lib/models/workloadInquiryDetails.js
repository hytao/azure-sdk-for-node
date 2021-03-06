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
 * Details of an inquired protectable item.
 *
 */
class WorkloadInquiryDetails {
  /**
   * Create a WorkloadInquiryDetails.
   * @member {string} [type] Type of the Workload such as SQL, Oracle etc.
   * @member {number} [itemCount] Contains the protectable item Count inside
   * this Container.
   * @member {object} [inquiryValidation] Inquiry validation such as
   * permissions and other backup validations.
   * @member {string} [inquiryValidation.status] Status for the Inquiry
   * Validation.
   * @member {object} [inquiryValidation.errorDetail] Error Detail in case the
   * status is non-success.
   * @member {string} [inquiryValidation.errorDetail.code] Error code.
   * @member {string} [inquiryValidation.errorDetail.message] Error Message
   * related to the Code.
   * @member {array} [inquiryValidation.errorDetail.recommendations] List of
   * recommendation strings.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkloadInquiryDetails
   *
   * @returns {object} metadata of WorkloadInquiryDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkloadInquiryDetails',
      type: {
        name: 'Composite',
        className: 'WorkloadInquiryDetails',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          itemCount: {
            required: false,
            serializedName: 'itemCount',
            type: {
              name: 'Number'
            }
          },
          inquiryValidation: {
            required: false,
            serializedName: 'inquiryValidation',
            type: {
              name: 'Composite',
              className: 'InquiryValidation'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkloadInquiryDetails;
