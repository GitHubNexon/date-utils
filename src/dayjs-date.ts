import dayjs from "dayjs";
import type { ConfigType, ManipulateType, OpUnitType, QUnitType } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import isBetween from "dayjs/plugin/isBetween.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

// Enable plugins
dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

/**
 * Date formatting utilities using Day.js
 */
export const formatDate = {
  /**
   * ISO 8601 date format
   * @example "2025-09-26"
   */
  isoDate: (date: ConfigType) => dayjs(date).format("YYYY-MM-DD"),

  /**
   * Short date format
   * @example "Sep 26, 2025"
   */
  shortDate: (date: ConfigType) => dayjs(date).format("MMM DD, YYYY"),

  /**
   * Long date format with day name
   * @example "Friday, September 26, 2025"
   */
  longDate: (date: ConfigType) => dayjs(date).format("dddd, MMMM DD, YYYY"),

  /**
   * Date and time with AM/PM
   * @example "09/26/2025 10:45 AM"
   */
  dateTime: (date: ConfigType) => dayjs(date).format("MM/DD/YYYY hh:mm A"),

  /**
   * Readable date and time format
   * @example "Sep 26, 2025 • 10:45 AM"
   */
  readableDateTime: (date: ConfigType) =>
    dayjs(date).format("MMM DD, YYYY • hh:mm A"),

  /**
   * Time only in 24-hour format
   * @example "10:45:30"
   */
  timeOnly: (date: ConfigType) => dayjs(date).format("HH:mm:ss"),

  /**
   * Time only in 12-hour format with AM/PM
   * @example "10:45 AM"
   */
  time12Hour: (date: ConfigType) => dayjs(date).format("hh:mm A"),

  /**
   * Relative time from now
   * @example "2 hours ago" or "in 3 days"
   */
  relativeTime: (date: ConfigType) => dayjs(date).fromNow(),

  /**
   * Relative time to another date
   * @example "2 hours before" or "3 days after"
   */
  relativeTimeTo: (date: ConfigType, to: ConfigType) =>
    dayjs(date).from(dayjs(to)),

  /**
   * Full ISO 8601 format with timezone
   * @example "2025-09-26T10:45:30+08:00"
   */
  isoDateTime: (date: ConfigType) => dayjs(date).format(),

  /**
   * Unix timestamp in seconds
   * @example 1727328330
   */
  unixTimestamp: (date: ConfigType) => dayjs(date).unix(),

  /**
   * Month and year only
   * @example "September 2025"
   */
  monthYear: (date: ConfigType) => dayjs(date).format("MMMM YYYY"),

  /**
   * Year only
   * @example "2025"
   */
  year: (date: ConfigType) => dayjs(date).format("YYYY"),

  /**
   * Custom format
   * @example formatDate.custom(new Date(), 'DD/MM/YYYY')
   */
  custom: (date: ConfigType, format: string) => dayjs(date).format(format),
};

/**
 * Date manipulation utilities
 */
export const dateUtils = {
  /**
   * Add time to a date
   */
  add: (date: ConfigType, amount: number, unit: ManipulateType) =>
    dayjs(date).add(amount, unit).toDate(),

  /**
   * Subtract time from a date
   */
  subtract: (date: ConfigType, amount: number, unit: ManipulateType) =>
    dayjs(date).subtract(amount, unit).toDate(),

  /**
   * Get start of time unit (day, month, year, etc.)
   */
  startOf: (date: ConfigType, unit: OpUnitType) =>
    dayjs(date).startOf(unit).toDate(),

  /**
   * Get end of time unit (day, month, year, etc.)
   */
  endOf: (date: ConfigType, unit: OpUnitType) =>
    dayjs(date).endOf(unit).toDate(),

  /**
   * Check if date is before another date
   */
  isBefore: (date: ConfigType, compare: ConfigType) =>
    dayjs(date).isBefore(dayjs(compare)),

  /**
   * Check if date is after another date
   */
  isAfter: (date: ConfigType, compare: ConfigType) =>
    dayjs(date).isAfter(dayjs(compare)),

  /**
   * Check if date is between two dates
   */
  isBetween: (date: ConfigType, start: ConfigType, end: ConfigType) =>
    dayjs(date).isBetween(dayjs(start), dayjs(end)),

  /**
   * Get difference between two dates
   */
  diff: (date1: ConfigType, date2: ConfigType, unit?: QUnitType | OpUnitType) =>
    dayjs(date1).diff(dayjs(date2), unit),

  /**
   * Check if date is valid
   */
  isValid: (date: ConfigType) => dayjs(date).isValid(),
};
