# Date Utils

A lightweight TypeScript package providing date formatting and manipulation utilities with support for both **Moment.js** and **Day.js**.

## Installation

```bash
npm install @syntaxsentinel/date-utils
```

### Peer Dependencies

You need to install either `moment` or `dayjs` (or both) depending on which implementation you want to use:

```bash
# For Moment.js support
npm install moment

# For Day.js support
npm install dayjs
```

## Usage

### Using Moment.js

```typescript
import { momentjs } from '@your-username/date-utils';

const now = new Date();

// Formatting
console.log(momentjs.formatDate.shortDate(now));          // "Nov 17, 2025"
console.log(momentjs.formatDate.longDate(now));           // "Monday, November 17, 2025"
console.log(momentjs.formatDate.readableDateTime(now));   // "Nov 17, 2025 • 10:45 AM"
console.log(momentjs.formatDate.relativeTime(now));       // "a few seconds ago"

// Date manipulation
const tomorrow = momentjs.dateUtils.add(now, 1, 'day');
const lastWeek = momentjs.dateUtils.subtract(now, 7, 'days');
const startOfMonth = momentjs.dateUtils.startOf(now, 'month');
```

### Using Day.js

```typescript
import { dayjs } from '@your-username/date-utils';

const now = new Date();

// Formatting
console.log(dayjs.formatDate.shortDate(now));          // "Nov 17, 2025"
console.log(dayjs.formatDate.longDate(now));           // "Monday, November 17, 2025"
console.log(dayjs.formatDate.readableDateTime(now));   // "Nov 17, 2025 • 10:45 AM"
console.log(dayjs.formatDate.relativeTime(now));       // "a few seconds ago"

// Date manipulation
const tomorrow = dayjs.dateUtils.add(now, 1, 'day');
const lastWeek = dayjs.dateUtils.subtract(now, 7, 'days');
const startOfMonth = dayjs.dateUtils.startOf(now, 'month');
```

## API Reference

### Format Functions

Both `momentjs.formatDate` and `dayjs.formatDate` provide:

- **`isoDate(date)`** - ISO 8601 format: `"2025-11-17"`
- **`shortDate(date)`** - Short format: `"Nov 17, 2025"`
- **`longDate(date)`** - Long format: `"Monday, November 17, 2025"`
- **`dateTime(date)`** - Date with time: `"11/17/2025 10:45 AM"`
- **`readableDateTime(date)`** - Human-readable: `"Nov 17, 2025 • 10:45 AM"`
- **`timeOnly(date)`** - 24-hour time: `"10:45:30"`
- **`time12Hour(date)`** - 12-hour time: `"10:45 AM"`
- **`relativeTime(date)`** - Relative: `"2 hours ago"`
- **`relativeTimeTo(date, to)`** - Relative to date: `"2 hours before"`
- **`isoDateTime(date)`** - Full ISO: `"2025-11-17T10:45:30+08:00"`
- **`unixTimestamp(date)`** - Unix timestamp: `1700197530`
- **`monthYear(date)`** - Month and year: `"November 2025"`
- **`year(date)`** - Year only: `"2025"`
- **`custom(date, format)`** - Custom format

### Utility Functions

Both `momentjs.dateUtils` and `dayjs.dateUtils` provide:

- **`add(date, amount, unit)`** - Add time to date
- **`subtract(date, amount, unit)`** - Subtract time from date
- **`startOf(date, unit)`** - Get start of unit (day, month, year, etc.)
- **`endOf(date, unit)`** - Get end of unit
- **`isBefore(date, compare)`** - Check if before
- **`isAfter(date, compare)`** - Check if after
- **`isBetween(date, start, end)`** - Check if between dates
- **`diff(date1, date2, unit?)`** - Get difference between dates
- **`isValid(date)`** - Validate date

## Examples

### Formatting Dates

```typescript
import { momentjs, dayjs } from '@your-username/date-utils';

const date = new Date('2025-09-26T10:45:30');

// Using Moment.js
console.log(momentjs.formatDate.isoDate(date));        // "2025-09-26"
console.log(momentjs.formatDate.shortDate(date));      // "Sep 26, 2025"
console.log(momentjs.formatDate.custom(date, 'DD/MM/YYYY')); // "26/09/2025"

// Using Day.js
console.log(dayjs.formatDate.isoDate(date));           // "2025-09-26"
console.log(dayjs.formatDate.shortDate(date));         // "Sep 26, 2025"
console.log(dayjs.formatDate.custom(date, 'DD/MM/YYYY')); // "26/09/2025"
```

### Date Manipulation

```typescript
import { momentjs } from '@your-username/date-utils';

const now = new Date();

// Add/subtract time
const nextWeek = momentjs.dateUtils.add(now, 1, 'week');
const lastMonth = momentjs.dateUtils.subtract(now, 1, 'month');

// Get boundaries
const startOfDay = momentjs.dateUtils.startOf(now, 'day');
const endOfYear = momentjs.dateUtils.endOf(now, 'year');

// Comparisons
const isPast = momentjs.dateUtils.isBefore(someDate, now);
const isFuture = momentjs.dateUtils.isAfter(someDate, now);
const isInRange = momentjs.dateUtils.isBetween(someDate, startDate, endDate);

// Calculate differences
const daysDiff = momentjs.dateUtils.diff(date1, date2, 'days');
const hoursDiff = momentjs.dateUtils.diff(date1, date2, 'hours');
```

## Tree-Shaking Support

Import only what you need for optimal bundle size:

```typescript
// Import specific implementation
import { momentFormatDate, momentDateUtils } from '@your-username/date-utils';
import { dayjsFormatDate, dayjsDateUtils } from '@your-username/date-utils';

// Use directly
console.log(momentFormatDate.shortDate(new Date()));
console.log(dayjsFormatDate.shortDate(new Date()));
```

## TypeScript Support

This package is written in TypeScript and includes type definitions out of the box.

## Why Two Implementations?

- **Moment.js**: Full-featured, mature library with extensive locale support
- **Day.js**: Lightweight alternative (2KB) with similar API, better for bundle size

Choose based on your project's needs!

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

Syntax Sentinel