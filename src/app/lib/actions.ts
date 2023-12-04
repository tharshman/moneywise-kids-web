'use server';

import { Course, UserCourse, User, Question, Answer } from '@/app/lib/definitions';

export async function getCourses(): Promise<Course[]> {
  return new Promise<Course[]>((resolve) => {
    resolve([
      {
        courseId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
        name: 'Banking 101',
        description: 'Introduction to Banking 1',
        image: '/courses/little-piggy-bank-in-hand.jpg',
        video: 'ku52Pb7fFT8',
      },
      {
        courseId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
        name: 'Banking 102',
        description: 'Introduction to Banking 2',
        image: '/courses/grandpa-grandson.jpg',
        video: 'ku52Pb7fFT8',
      },
      {
        courseId: '36d49806-cb6f-4bb7-aeba-06ff9ffc5d14',
        name: 'Banking 201',
        description: 'Intermediate Banking 1',
        image: '/courses/save-money-invest-stocks.jpg',
        video: 'ku52Pb7fFT8',
      },
    ]);
  });
}

export async function getUserCourseList(userId: string): Promise<UserCourse[]> {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error(`User ${userId} not found`);
  }

  return new Promise<UserCourse[]>((resolve) => {
    resolve([
      {
        userCourseId: '784aba3b-8655-4443-93f2-b3006d6e272c',
        userId: 'fc96e861-c2b2-4833-a655-9c8070236dd7',
        courseId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
        name: 'Banking 101',
        description: 'Introduction to Banking 1',
        image: '/courses/little-piggy-bank-in-hand.jpg',
        video: 'ku52Pb7fFT8',
        progress: 100,
      },
      {
        userCourseId: '927f4b79-35ec-4f6b-aa82-a2aa606bb0ef',
        userId: 'fc96e861-c2b2-4833-a655-9c8070236dd7',
        courseId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
        name: 'Banking 102',
        description: 'Introduction to Banking 2',
        image: '/courses/grandpa-grandson.jpg',
        video: 'ku52Pb7fFT8',
        progress: 40,
      },
    ]);
  });
}

export async function getUserCourse(
  userId: string,
  courseId: string,
): Promise<UserCourse> {
  const userCourseList = await getUserCourseList(userId);
  const userCourse: UserCourse | undefined = userCourseList.find(
    (userCourse) => userCourse.courseId === courseId,
  );

  if (!userCourse) {
    throw new Error(`UserCourse ${userId} ${courseId} not found`);
  }

  return new Promise<UserCourse>((resolve) => {
    resolve(userCourse);
  });
}

export async function getUserCourseById(
  userCourseId: string,
): Promise<UserCourse> {
  const userCourseList = await getUserCourseList(userId);
  const userCourse: UserCourse | undefined = userCourseList.find(
    (userCourse) => userCourse.userCourseId === userCourseId,
  );

  if (!userCourse) {
    throw new Error(`UserCourse ${userCourseId} not found`);
  }

  return new Promise<UserCourse>((resolve) => {
    resolve(userCourse);
  });
}

export async function getUsers(): Promise<User[]> {
  return new Promise<User[]>((resolve) => {
    resolve([
      {
        userId: 'fc96e861-c2b2-4833-a655-9c8070236dd7',
        firstName: 'Vincent',
        lastName: 'Bortone',
        email: 'vbortone@gmail.com',
      },
      {
        userId: '92c18c17-408e-4f3b-9709-961825c823a2',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@ucf.edu',
      },
    ]);
  });
}

export async function getUserById(userId: string): Promise<User> {
  const userList = await getUsers();
  const user: User | undefined = userList.find(
    (user) => user.userId === userId,
  );

  if (!user) {
    throw new Error(`User ${userId} not found`);
  }

  return new Promise<User>((resolve) => {
    resolve(user);
  });
}

export async function getUserByEmail(email: string): Promise<User> {
  const userList = await getUsers();
  const user: User | undefined = userList.find(
    (user) => user.email === email,
  );

  if (!user) {
    throw new Error(`User ${email} not found`);
  }

  return new Promise<User>((resolve) => {
    resolve(user);
  });
}

export async function getQuestionsForCourse(courseId: string): Promise<Question[]> {
  return new Promise<Question[]>((resolve) => {
    resolve([
      {
        questionId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
        courseId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
        question: 'We should keep our savings with banks because?',
        answers: [
          {
            answerId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
            questionId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
            sortOrder: 0,
            text: 'It is safe',
            isCorrect: false,
          },
          {
            answerId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
            questionId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
            sortOrder: 1,
            text: 'Earns interest',
            isCorrect: false,
          },
          {
            answerId: '36d49806-cb6f-4bb7-aeba-06ff9ffc5d14',
            questionId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
            sortOrder: 2,
            text: 'Can be withdrawn anytime',
            isCorrect: false,
          },
          {
            answerId: '36d49806-cb6f-4bb7-aeba-06ff9ffc5d14',
            questionId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
            sortOrder: 3,
            text: 'All of the above',
            isCorrect: true,
          },
        ]
      },
      {
        questionId: '012b5ff0-b409-436b-858f-e9c0d558eea1',
        courseId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
        question: 'Bank does not provide loans for?',
        answers: [
          {
            answerId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
            questionId: '012b5ff0-b409-436b-858f-e9c0d558eea1',
            sortOrder: 0,
            text: 'Crop loans',
            isCorrect: false,
          },
          {
            answerId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
            questionId: '012b5ff0-b409-436b-858f-e9c0d558eea1',
            sortOrder: 1,
            text: 'Education loans',
            isCorrect: false,
          },
          {
            answerId: '36d49806-cb6f-4bb7-aeba-06ff9ffc5d14',
            questionId: '012b5ff0-b409-436b-858f-e9c0d558eea1',
            sortOrder: 2,
            text: 'Home loans',
            isCorrect: false,
          },
          {
            answerId: '36d49806-cb6f-4bb7-aeba-06ff9ffc5d14',
            questionId: '012b5ff0-b409-436b-858f-e9c0d558eea1',
            sortOrder: 3,
            text: 'Drinking and Gambling',
            isCorrect: true,
          },
        ]
      },
    ]);
  });
}