export enum AchievementType {
  Course = 1,
  Achiever = 2,
  Misc = 3,
}

export interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface UserCourse extends Course {
  userId: number;
  progress: number;
}
