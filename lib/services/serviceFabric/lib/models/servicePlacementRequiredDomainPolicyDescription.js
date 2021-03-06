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
 * Describes the policy to be used for placement of a Service Fabric service
 * where the instances or replicas of that service must be placed in a
 * particular domain
 *
 * @extends models['ServicePlacementPolicyDescription']
 */
class ServicePlacementRequiredDomainPolicyDescription extends models['ServicePlacementPolicyDescription'] {
  /**
   * Create a ServicePlacementRequiredDomainPolicyDescription.
   * @member {string} [domainName] The name of the domain that should used for
   * placement as per this policy.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServicePlacementRequiredDomainPolicyDescription
   *
   * @returns {object} metadata of ServicePlacementRequiredDomainPolicyDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RequiredDomain',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Type',
          clientName: 'type'
        },
        uberParent: 'ServicePlacementPolicyDescription',
        className: 'ServicePlacementRequiredDomainPolicyDescription',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'Type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          domainName: {
            required: false,
            serializedName: 'DomainName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServicePlacementRequiredDomainPolicyDescription;
