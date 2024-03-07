/*
Discovery API

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Presale } from './presale';
import { PublicSaleDates } from './public-sale-dates';

/**
 * Event\'s Sales Dates
 * @export
 * @interface EventSalesDates
 */
export interface EventSalesDates {
    /**
     * Presale information on this event
     * @type {Array<Presale>}
     * @memberof EventSalesDates
     */
    'presales'?: Array<Presale>;
    /**
     * 
     * @type {PublicSaleDates}
     * @memberof EventSalesDates
     */
    'public'?: PublicSaleDates;
}

