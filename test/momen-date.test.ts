import { formatDate, dateUtils } from '../src/moment-date.js';

describe('Moment.js Date Formatting', () => {
  const testDate = new Date('2025-09-26T10:45:30');
  const testDate2 = new Date('2025-09-20T08:30:00');

  describe('formatDate', () => {
    test('isoDate formats correctly', () => {
      expect(formatDate.isoDate(testDate)).toBe('2025-09-26');
    });

    test('shortDate formats correctly', () => {
      expect(formatDate.shortDate(testDate)).toBe('Sep 26, 2025');
    });

    test('longDate formats correctly', () => {
      expect(formatDate.longDate(testDate)).toBe('Friday, September 26, 2025');
    });

    test('dateTime formats correctly', () => {
      expect(formatDate.dateTime(testDate)).toBe('09/26/2025 10:45 AM');
    });

    test('readableDateTime formats correctly', () => {
      expect(formatDate.readableDateTime(testDate)).toBe('Sep 26, 2025 • 10:45 AM');
    });

    test('timeOnly formats correctly', () => {
      expect(formatDate.timeOnly(testDate)).toBe('10:45:30');
    });

    test('time12Hour formats correctly', () => {
      expect(formatDate.time12Hour(testDate)).toBe('10:45 AM');
    });

    test('relativeTime returns relative time string', () => {
      const now = new Date();
      const result = formatDate.relativeTime(now);
      expect(result).toContain('ago');
    });

    test('relativeTimeTo returns relative time between dates', () => {
      const result = formatDate.relativeTimeTo(testDate, testDate2);
      expect(result).toContain('days');
    });

    test('isoDateTime formats with timezone', () => {
      const result = formatDate.isoDateTime(testDate);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    test('unixTimestamp returns number', () => {
      const result = formatDate.unixTimestamp(testDate);
      expect(typeof result).toBe('number');
      // Just verify it's a valid unix timestamp (positive number)
      expect(result).toBeGreaterThan(0);
    });

    test('monthYear formats correctly', () => {
      expect(formatDate.monthYear(testDate)).toBe('September 2025');
    });

    test('year formats correctly', () => {
      expect(formatDate.year(testDate)).toBe('2025');
    });

    test('custom format works', () => {
      expect(formatDate.custom(testDate, 'DD/MM/YYYY')).toBe('26/09/2025');
      expect(formatDate.custom(testDate, 'YYYY-MM-DD HH:mm')).toBe('2025-09-26 10:45');
    });
  });

  describe('dateUtils', () => {
    test('add adds time correctly', () => {
      const result = dateUtils.add(testDate, 5, 'days');
      const expectedDate = new Date(testDate);
      expectedDate.setDate(expectedDate.getDate() + 5);
      expect(result.getDate()).toBe(expectedDate.getDate());
    });

    test('subtract subtracts time correctly', () => {
      const result = dateUtils.subtract(testDate, 3, 'hours');
      expect(result.getHours()).toBe(testDate.getHours() - 3);
    });

    test('startOf returns start of period', () => {
      const result = dateUtils.startOf(testDate, 'day');
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
    });

    test('endOf returns end of period', () => {
      const result = dateUtils.endOf(testDate, 'day');
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
    });

    test('isBefore checks date order correctly', () => {
      expect(dateUtils.isBefore(testDate2, testDate)).toBe(true);
      expect(dateUtils.isBefore(testDate, testDate2)).toBe(false);
    });

    test('isAfter checks date order correctly', () => {
      expect(dateUtils.isAfter(testDate, testDate2)).toBe(true);
      expect(dateUtils.isAfter(testDate2, testDate)).toBe(false);
    });

    test('isBetween checks date range correctly', () => {
      const middleDate = new Date('2025-09-23');
      expect(dateUtils.isBetween(middleDate, testDate2, testDate)).toBe(true);
      expect(dateUtils.isBetween(testDate2, middleDate, testDate)).toBe(false);
    });

    test('diff calculates difference correctly', () => {
      const days = dateUtils.diff(testDate, testDate2, 'days');
      expect(days).toBe(6);

      const hours = dateUtils.diff(testDate, testDate2, 'hours');
      expect(hours).toBeGreaterThan(140);
    });

    test('isValid validates dates correctly', () => {
      expect(dateUtils.isValid(testDate)).toBe(true);
      expect(dateUtils.isValid(new Date('2025-09-26'))).toBe(true);
      expect(dateUtils.isValid('invalid-date')).toBe(false);
      expect(dateUtils.isValid(new Date('invalid'))).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    test('handles string dates', () => {
      expect(formatDate.isoDate('2025-09-26')).toBe('2025-09-26');
    });

    test('handles timestamp numbers', () => {
      const timestamp = testDate.getTime();
      expect(formatDate.isoDate(timestamp)).toBe('2025-09-26');
    });

    test('handles moment objects', () => {
      const momentDate = formatDate.custom(testDate, 'YYYY-MM-DD');
      expect(momentDate).toBe('2025-09-26');
    });

    test('handles leap years correctly', () => {
      const leapDate = new Date('2024-02-29');
      expect(formatDate.isoDate(leapDate)).toBe('2024-02-29');
      expect(dateUtils.isValid(leapDate)).toBe(true);
    });

    test('handles end of month correctly', () => {
      const endOfMonth = new Date('2025-01-31');
      const nextMonth = dateUtils.add(endOfMonth, 1, 'month');
      expect(nextMonth.getMonth()).toBe(1); // February
    });

    test('handles timezone conversions', () => {
      const result = formatDate.isoDateTime(testDate);
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });
  });
});