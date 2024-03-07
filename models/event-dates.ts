/*
Discovery API

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AccessDates } from './access-dates';
import { EndDates } from './end-dates';
import { EventStatus } from './event-status';
import { StartDates } from './start-dates';

/**
 * Event\'s Dates
 * @export
 * @interface EventDates
 */
export interface EventDates {
    /**
     * 
     * @type {AccessDates}
     * @memberof EventDates
     */
    'access'?: AccessDates;
    /**
     * 
     * @type {EndDates}
     * @memberof EventDates
     */
    'end'?: EndDates;
    /**
     * Flag indicating if date spans of multiple days
     * @type {boolean}
     * @memberof EventDates
     */
    'spanMultipleDays'?: boolean;
    /**
     * 
     * @type {StartDates}
     * @memberof EventDates
     */
    'start'?: StartDates;
    /**
     * 
     * @type {EventStatus}
     * @memberof EventDates
     */
    'status'?: EventStatus;
    /**
     * Event\'s timezone
     * @type {string}
     * @memberof EventDates
     */
    'timezone'?: string;
}
