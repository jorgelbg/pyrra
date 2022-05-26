/* tslint:disable */
/* eslint-disable */
/**
 * Pyrra
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ObjectiveStatusBudget
 */
export interface ObjectiveStatusBudget {
    /**
     * 
     * @type {number}
     * @memberof ObjectiveStatusBudget
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectiveStatusBudget
     */
    remaining: number;
    /**
     * 
     * @type {number}
     * @memberof ObjectiveStatusBudget
     */
    max: number;
}

export function ObjectiveStatusBudgetFromJSON(json: any): ObjectiveStatusBudget {
    return ObjectiveStatusBudgetFromJSONTyped(json, false);
}

export function ObjectiveStatusBudgetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectiveStatusBudget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'remaining': json['remaining'],
        'max': json['max'],
    };
}

export function ObjectiveStatusBudgetToJSON(value?: ObjectiveStatusBudget | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'remaining': value.remaining,
        'max': value.max,
    };
}

