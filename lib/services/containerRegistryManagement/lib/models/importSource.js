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

/**
 * Class representing a ImportSource.
 */
class ImportSource {
  /**
   * Create a ImportSource.
   * @member {string} [resourceId] The resource identifier of the source Azure
   * Container Registry.
   * @member {string} [registryUri] The address of the source registry.
   * @member {string} sourceImage Repository name of the source image.
   * Specify an image by repository ('hello-world'). This will use the 'latest'
   * tag.
   * Specify an image by tag ('hello-world:latest').
   * Specify an image by sha256-based manifest digest
   * ('hello-world@sha256:abc123').
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImportSource
   *
   * @returns {object} metadata of ImportSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImportSource',
      type: {
        name: 'Composite',
        className: 'ImportSource',
        modelProperties: {
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          registryUri: {
            required: false,
            serializedName: 'registryUri',
            type: {
              name: 'String'
            }
          },
          sourceImage: {
            required: true,
            serializedName: 'sourceImage',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImportSource;