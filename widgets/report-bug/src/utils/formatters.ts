/**
 * Brackets for rounding down topic counts
 */
const TOPIC_COUNT_BRACKETS = [
  10, 100, 1000, 2000, 3000, 4000, 5000, 10000, 25000, 50000, 100000, 200000, 500000, 1000000
] as const;

/**
 * Rounds down a topic count to the nearest bracket
 * 
 * Brackets: 10, 100, 1000, 2000, 3000, 4000, 5000, 10000, 25000, 50000, 100000, 200000, 500000, 1000000
 * 
 * @param count - The topic count to round down
 * @returns The rounded down topic count
 * 
 * @example
 * roundDownTopicCount(15) // 10
 * roundDownTopicCount(150) // 100
 * roundDownTopicCount(1500) // 1000
 * roundDownTopicCount(2500) // 2000
 * roundDownTopicCount(5500) // 5000
 * roundDownTopicCount(30000) // 25000
 */
export function roundDownTopicCount(count: number): number {
  // If count is less than the smallest bracket, return 0
  if (count < TOPIC_COUNT_BRACKETS[0]) {
    return 0;
  }

  // Find the highest bracket that is <= count
  for (let i = TOPIC_COUNT_BRACKETS.length - 1; i >= 0; i--) {
    if (TOPIC_COUNT_BRACKETS[i] <= count) {
      return TOPIC_COUNT_BRACKETS[i];
    }
  }

  return 0;
}

/**
 * Formats a topic count as a locale-specific number string
 * Rounds down to the nearest bracket and formats with locale separators
 * 
 * @param count - The topic count to format
 * @param locale - The locale string (defaults to 'en-US')
 * @returns The formatted topic count string
 * 
 * @example
 * formatTopicCount(1500) // "1,000" (en-US)
 * formatTopicCount(1500, 'de-DE') // "1.000" (de-DE)
 * formatTopicCount(30000) // "25,000" (en-US)
 */
export function formatTopicCount(count: number, locale: string = 'en-US'): string {
  const roundedCount = roundDownTopicCount(count);
  return roundedCount.toLocaleString(locale);
}
