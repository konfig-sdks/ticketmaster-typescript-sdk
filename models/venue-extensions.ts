/*
Discovery API

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GeolocationVenueExtensions } from './geolocation-venue-extensions';

/**
 * All Venue\'s extensions
 * @export
 * @interface VenueExtensions
 */
export interface VenueExtensions {
    /**
     * 
     * @type {GeolocationVenueExtensions}
     * @memberof VenueExtensions
     */
    'geolocation'?: GeolocationVenueExtensions;
}

