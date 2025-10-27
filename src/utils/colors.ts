import { colors } from "@toss/tds-colors";

export const LOTTERY_COLORS = [
  colors.red400,
  colors.blue400,
  colors.orange400,
  colors.green400,
  colors.purple400,
  colors.teal400,
  colors.yellow400,
  colors.red500,
  colors.blue500,
  colors.green500,
];

export function getColorByIndex(index: number): string {
  return LOTTERY_COLORS[index % LOTTERY_COLORS.length];
}
