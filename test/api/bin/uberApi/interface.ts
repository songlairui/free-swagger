// @ts-nocheck
/* eslint-disable */

export interface Product {
  product_id?: string; // Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
  description?: string; // Description of product.
  display_name?: string; // Display name of product.
  capacity?: string; // Capacity of product. For example, 4 people.
  image?: string; // Image URL representing the product.
}

export interface PriceEstimate {
  product_id?: string; // Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles
  currency_code?: string; // [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.
  display_name?: string; // Display name of product.
  estimate?: string; // Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI.
  low_estimate?: number; // Lower bound of the estimated price.
  high_estimate?: number; // Upper bound of the estimated price.
  surge_multiplier?: number; // Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier.
}

export interface Profile {
  first_name?: string; // First name of the Uber user.
  last_name?: string; // Last name of the Uber user.
  email?: string; // Email address of the Uber user
  picture?: string; // Image URL of the Uber user.
  promo_code?: string; // Promo code of the Uber user.
  role?: RoleType;
}

export interface Activity {
  uuid?: string; // Unique identifier for the activity
}

export interface Activities {
  offset?: number; // Position in pagination.
  limit?: number; // Number of items to retrieve (100 max).
  count?: number; // Total number of items available.
  history?: Activity[];
}

export interface RoleType {}

export interface CreateOrUpdateUserInput {
  userId?: number; // 用户ID(ID来自User表)
  userRights?:
    | "View"
    | "Operate"
    | "Auth"
    | "Search"
    | "Delete"
    | "UserManage"
    | "UserConfig"
    | "SetTime"
    | "SetNetwork"
    | "SetSms"
    | "SystemManage"[]; // 用户权限
}

export interface Abc {
  id?: string;
  isLow?: boolean;
}

export interface ArrayOfAbc {}

export interface NumberArrayEnumModel {
  foo?: "0" | "1" | "2" | "4" | "8"[];
  bar?: "0" | "1" | "2" | "3"[];
}

export interface Error {
  code?: number;
  message?: string;
  fields?: string;
}

export interface PagedResultDto_AuditLogListDto {
  totalCount?: number;
  items?: AuditLogListDto[];
}

export interface AuditLogListDto {
  userId?: number;
  id?: number;
}

export interface JsonResult_Guid {
  result?: boolean; // 结果
  code?:
    | "Success"
    | "Timeout"
    | "Fail"
    | "Expired"
    | "Error"
    | "InternalServerError"
    | "InvalidAnonymousAccess"
    | "UserSessionExpired"
    | "UserIsBinded"; // 代码
  data?: string; // 数据
  message?: string; // 消息
}
