/*
Discovery API

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Chronology } from './chronology';
import { DateTimeField } from './date-time-field';
import { DateTimeFieldType } from './date-time-field-type';

/**
 * 
 * @export
 * @interface LocalTime
 */
export interface LocalTime {
    /**
     * 
     * @type {Chronology}
     * @memberof LocalTime
     */
    'chronology'?: Chronology;
    /**
     * 
     * @type {Array<DateTimeFieldType>}
     * @memberof LocalTime
     */
    'fieldTypes'?: Array<DateTimeFieldType>;
    /**
     * 
     * @type {Array<DateTimeField>}
     * @memberof LocalTime
     */
    'fields'?: Array<DateTimeField>;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    'hourOfDay'?: number;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    'millisOfDay'?: number;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    'millisOfSecond'?: number;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    'minuteOfHour'?: number;
    /**
     * 
     * @type {number}
     * @memberof LocalTime
     */
    'secondOfMinute'?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof LocalTime
     */
    'values'?: Array<number>;
}

