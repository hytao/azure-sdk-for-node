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
 * Hierarchical Entity Extractor.
 *
 */
class HierarchicalEntityExtractor {
  /**
   * Create a HierarchicalEntityExtractor.
   * @member {uuid} id The ID of the Entity Model.
   * @member {string} [name] Name of the Entity Model.
   * @member {number} [typeId] The type ID of the Entity Model.
   * @member {string} readableType Possible values include: 'Entity Extractor',
   * 'Hierarchical Entity Extractor', 'Hierarchical Child Entity Extractor',
   * 'Composite Entity Extractor', 'Closed List Entity Extractor', 'Prebuilt
   * Entity Extractor', 'Intent Classifier', 'Pattern.Any Entity Extractor',
   * 'Regex Entity Extractor'
   * @member {array} [roles]
   * @member {array} [children] List of child entities.
   */
  constructor() {
  }

  /**
   * Defines the metadata of HierarchicalEntityExtractor
   *
   * @returns {object} metadata of HierarchicalEntityExtractor
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Hierarchical Entity Extractor',
      type: {
        name: 'Composite',
        className: 'HierarchicalEntityExtractor',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          typeId: {
            required: false,
            serializedName: 'typeId',
            type: {
              name: 'Number'
            }
          },
          readableType: {
            required: true,
            serializedName: 'readableType',
            type: {
              name: 'String'
            }
          },
          roles: {
            required: false,
            serializedName: 'roles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EntityRoleElementType',
                  type: {
                    name: 'Composite',
                    className: 'EntityRole'
                  }
              }
            }
          },
          children: {
            required: false,
            serializedName: 'children',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChildEntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChildEntity'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = HierarchicalEntityExtractor;
