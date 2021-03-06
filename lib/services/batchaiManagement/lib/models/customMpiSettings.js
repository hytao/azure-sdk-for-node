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
 * Custom MPI job settings.
 *
 */
class CustomMpiSettings {
  /**
   * Create a CustomMpiSettings.
   * @member {string} commandLine Command line. The command line to be executed
   * by mpi runtime on each compute node.
   * @member {number} [processCount] Process count. Number of processes to
   * launch for the job execution. The default value for this property is equal
   * to nodeCount property
   */
  constructor() {
  }

  /**
   * Defines the metadata of CustomMpiSettings
   *
   * @returns {object} metadata of CustomMpiSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CustomMpiSettings',
      type: {
        name: 'Composite',
        className: 'CustomMpiSettings',
        modelProperties: {
          commandLine: {
            required: true,
            serializedName: 'commandLine',
            type: {
              name: 'String'
            }
          },
          processCount: {
            required: false,
            serializedName: 'processCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CustomMpiSettings;
