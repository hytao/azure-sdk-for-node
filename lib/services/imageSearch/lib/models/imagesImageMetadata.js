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
 * Defines a count of the number of websites where you can shop or perform
 * other actions related to the image.
 *
 */
class ImagesImageMetadata {
  /**
   * Create a ImagesImageMetadata.
   * @member {number} [shoppingSourcesCount] The number of websites that offer
   * goods of the products seen in the image.
   * @member {number} [recipeSourcesCount] The number of websites that offer
   * recipes of the food seen in the image.
   * @member {object} [aggregateOffer] A summary of the online offers of
   * products found in the image. For example, if the image is of a dress, the
   * offer might identify the lowest price and the number of offers found. Only
   * visually similar products insights include this field. The offer includes
   * the following fields: Name, AggregateRating, OfferCount, and LowPrice.
   * @member {array} [aggregateOffer.offers] A list of offers from merchants
   * that have offerings related to the image.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImagesImageMetadata
   *
   * @returns {object} metadata of ImagesImageMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Images/ImageMetadata',
      type: {
        name: 'Composite',
        className: 'ImagesImageMetadata',
        modelProperties: {
          shoppingSourcesCount: {
            required: false,
            readOnly: true,
            serializedName: 'shoppingSourcesCount',
            type: {
              name: 'Number'
            }
          },
          recipeSourcesCount: {
            required: false,
            readOnly: true,
            serializedName: 'recipeSourcesCount',
            type: {
              name: 'Number'
            }
          },
          aggregateOffer: {
            required: false,
            readOnly: true,
            serializedName: 'aggregateOffer',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'AggregateOffer'
            }
          }
        }
      }
    };
  }
}

module.exports = ImagesImageMetadata;
