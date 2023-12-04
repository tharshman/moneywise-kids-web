export enum AchievementType {
  Course = 1,
  Achiever = 2,
  Misc = 3,
}

export enum PartnerType {
  Bank = 1,
  CreditCard = 2,
  Investment = 3,
  Blockchain = 4,
}

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Course {
  courseId: string;
  name: string;
  description: string;
  image: string;
  video: string;
}

export interface UserCourse extends Course {
  userCourseId: string;
  userId: string;
  progress: number;
}

export interface Question {
  questionId: string;
  courseId: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  answerId: string;
  questionId: string;
  sortOrder: number;
  text: string;
  isCorrect: boolean;
}

export interface Partner {
  partnerId: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  partnerType: PartnerType;
}