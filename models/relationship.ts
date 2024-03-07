/*
Discovery API

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

The version of the OpenAPI document: v2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Relationship
 * @export
 * @interface Relationship
 */
export interface Relationship {
    /**
     * The ID of the related entity
     * @type {string}
     * @memberof Relationship
     */
    'id'?: string;
    /**
     * References of this relationship in another system. Reference is the exact same entity
     * @type {{ [key: string]: string; }}
     * @memberof Relationship
     */
    'references'?: { [key: string]: string; };
    /**
     * The source name of the related entity
     * @type {string}
     * @memberof Relationship
     */
    'source'?: string;
    /**
     * The type of the relationship
     * @type {string}
     * @memberof Relationship
     */
    'type'?: RelationshipTypeEnum;
}

type RelationshipTypeEnum = 'duplicate'

