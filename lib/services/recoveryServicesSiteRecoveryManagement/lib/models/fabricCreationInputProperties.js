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
 * Properties of site details provided during the time of site creation
 *
 */
class FabricCreationInputProperties {
  /**
   * Create a FabricCreationInputProperties.
   * @member {object} [customDetails] Fabric provider specific creation input.
   * @member {string} [customDetails.instanceType] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of FabricCreationInputProperties
   *
   * @returns {object} metadata of FabricCreationInputProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FabricCreationInputProperties',
      type: {
        name: 'Composite',
        className: 'FabricCreationInputProperties',
        modelProperties: {
          customDetails: {
            required: false,
            serializedName: 'customDetails',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'instanceType',
                clientName: 'instanceType'
              },
              uberParent: 'FabricSpecificCreationInput',
              className: 'FabricSpecificCreationInput'
            }
          }
        }
      }
    };
  }
}

module.exports = FabricCreationInputProperties;
