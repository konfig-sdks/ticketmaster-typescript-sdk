/*
Discovery API

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Event\'s Presale Info
 * @export
 * @interface Presale
 */
export interface Presale {
    /**
     * Description of the presame
     * @type {string}
     * @memberof Presale
     */
    'description'?: string;
    /**
     * Presale\'s end dates. The date and time when the presale will end
     * @type {string}
     * @memberof Presale
     */
    'endDateTime'?: string;
    /**
     * Name of the presale
     * @type {string}
     * @memberof Presale
     */
    'name'?: string;
    /**
     * Presale\'s start dates. The date and time when the presale will start
     * @type {string}
     * @memberof Presale
     */
    'startDateTime'?: string;
    /**
     * Presale link URL
     * @type {string}
     * @memberof Presale
     */
    'url'?: string;
}

