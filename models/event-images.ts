/*
Discovery API

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Image } from './image';

/**
 * This class defines an Event with only images view on the Discovery API
 * @export
 * @interface EventImages
 */
export interface EventImages {
    /**
     * Unique id of the entity in the discovery API
     * @type {string}
     * @memberof EventImages
     */
    'id': string;
    /**
     * Images of the entity
     * @type {Set<Image>}
     * @memberof EventImages
     */
    'images'?: Set<Image>;
    /**
     * Type of the entity
     * @type {string}
     * @memberof EventImages
     */
    'type': EventImagesTypeEnum;
}

type EventImagesTypeEnum = 'event'


