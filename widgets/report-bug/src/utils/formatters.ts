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
