export enum AchievementType {
  Course = 1,
  Achiever = 2,
  Misc = 3,
}

export type Course = {
  id: number;
  name: string;
  description: string;
  image: string;
};
