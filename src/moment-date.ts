import moment from "moment";
import type { MomentInput } from "moment";

/**
 * Date formatting utilities using Moment.js
 */
export const formatDate = {
  /**
   * ISO 8601 date format
   * @example "2025-09-26"
   */
  isoDate: (date: MomentInput) => moment(date).format("YYYY-MM-DD"),

  /**
   * Short date format
   * @example "Sep 26, 2025"
   */
  shortDate: (date: MomentInput) => moment(date).format("MMM DD, YYYY"),

  /**
   * Long date format with day name
   * @example "Friday, September 26, 2025"
   */
  longDate: (date: MomentInput) => moment(date).format("dddd, MMMM DD, YYYY"),

  /**
   * Date and time with AM/PM
   * @example "09/26/2025 10:45 AM"
   */
  dateTime: (date: MomentInput) => moment(date).format("MM/DD/YYYY hh:mm A"),

  /**
   * Readable date and time format
   * @example "Sep 26, 2025 • 10:45 AM"
   */
  readableDateTime: (date: MomentInput) =>
    moment(date).format("MMM DD, YYYY • hh:mm A"),

  /**
   * Time only in 24-hour format
   * @example "10:45:30"
   */
  timeOnly: (date: MomentInput) => moment(date).format("HH:mm:ss"),

  /**
   * Time only in 12-hour format with AM/PM
   * @example "10:45 AM"
   */
  time12Hour: (date: MomentInput) => moment(date).format("hh:mm A"),

  /**
   * Relative time from now
   * @example "2 hours ago" or "in 3 days"
   */
  relativeTime: (date: MomentInput) => moment(date).fromNow(),

  /**
   * Relative time to another date
   * @example "2 hours before" or "3 days after"
   */
  relativeTimeTo: (date: MomentInput, to: MomentInput) =>
    moment(date).from(moment(to)),

  /**
   * Full ISO 8601 format with timezone
   * @example "2025-09-26T10:45:30+08:00"
   */
  isoDateTime: (date: MomentInput) => moment(date).format(),

  /**
   * Unix timestamp in seconds
   * @example 1727328330
   */
  unixTimestamp: (date: MomentInput) => moment(date).unix(),

  /**
   * Month and year only
   * @example "September 2025"
   */
  monthYear: (date: MomentInput) => moment(date).format("MMMM YYYY"),

  /**
   * Year only
   * @example "2025"
   */
  year: (date: MomentInput) => moment(date).format("YYYY"),

  /**
   * Custom format
   * @example formatDate.custom(new Date(), 'DD/MM/YYYY')
   */
  custom: (date: MomentInput, format: string) => moment(date).format(format),
};

/**
 * Date manipulation utilities
 */
export const dateUtils = {
  /**
   * Add time to a date
   */
  add: (
    date: MomentInput,
    amount: number,
    unit: moment.unitOfTime.DurationConstructor
  ) => moment(date).add(amount, unit).toDate(),

  /**
   * Subtract time from a date
   */
  subtract: (
    date: MomentInput,
    amount: number,
    unit: moment.unitOfTime.DurationConstructor
  ) => moment(date).subtract(amount, unit).toDate(),

  /**
   * Get start of time unit (day, month, year, etc.)
   */
  startOf: (date: MomentInput, unit: moment.unitOfTime.StartOf) =>
    moment(date).startOf(unit).toDate(),

  /**
   * Get end of time unit (day, month, year, etc.)
   */
  endOf: (date: MomentInput, unit: moment.unitOfTime.StartOf) =>
    moment(date).endOf(unit).toDate(),

  /**
   * Check if date is before another date
   */
  isBefore: (date: MomentInput, compare: MomentInput) =>
    moment(date).isBefore(moment(compare)),

  /**
   * Check if date is after another date
   */
  isAfter: (date: MomentInput, compare: MomentInput) =>
    moment(date).isAfter(moment(compare)),

  /**
   * Check if date is between two dates
   */
  isBetween: (date: MomentInput, start: MomentInput, end: MomentInput) =>
    moment(date).isBetween(moment(start), moment(end)),

  /**
   * Get difference between two dates
   */
  diff: (
    date1: MomentInput,
    date2: MomentInput,
    unit?: moment.unitOfTime.Diff
  ) => moment(date1).diff(moment(date2), unit),

  /**
   * Check if date is valid
   */
  isValid: (date: MomentInput) => moment(date).isValid(),
};
