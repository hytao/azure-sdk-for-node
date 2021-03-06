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
 * Describes the time based backup schedule.
 *
 * @extends models['BackupScheduleDescription']
 */
class TimeBasedBackupScheduleDescription extends models['BackupScheduleDescription'] {
  /**
   * Create a TimeBasedBackupScheduleDescription.
   * @member {string} scheduleFrequencyType Describes the frequency with which
   * to run the time based backup schedule. Possible values include: 'Invalid',
   * 'Daily', 'Weekly'
   * @member {array} [runDays] List of days of a week when to trigger the
   * periodic backup. This is valid only when the backup schedule frequency
   * type is weekly.
   * @member {array} runTimes Represents the list of exact time during the day
   * in ISO8601 format. Like '19:00:00' will represent '7PM' during the day.
   * Date specified along with time will be ignored.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TimeBasedBackupScheduleDescription
   *
   * @returns {object} metadata of TimeBasedBackupScheduleDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TimeBased',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'ScheduleKind',
          clientName: 'scheduleKind'
        },
        uberParent: 'BackupScheduleDescription',
        className: 'TimeBasedBackupScheduleDescription',
        modelProperties: {
          scheduleKind: {
            required: true,
            serializedName: 'ScheduleKind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          scheduleFrequencyType: {
            required: true,
            serializedName: 'ScheduleFrequencyType',
            type: {
              name: 'String'
            }
          },
          runDays: {
            required: false,
            serializedName: 'RunDays',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DayOfWeekElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          runTimes: {
            required: true,
            serializedName: 'RunTimes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DateElementType',
                  type: {
                    name: 'DateTime'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TimeBasedBackupScheduleDescription;
