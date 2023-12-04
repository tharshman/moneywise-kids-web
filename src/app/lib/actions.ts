'use server';

import { Course, UserCourse, User } from '@/app/lib/definitions';

export async function getCourses(): Promise<Course[]> {
  return new Promise<Course[]>((resolve) => {
    resolve([
      {
        courseId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
        name: 'Banking 101',
        description: 'Introduction to Banking 1',
        image: '/courses/little-piggy-bank-in-hand.jpg',
      },
      {
        courseId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
        name: 'Banking 102',
        description: 'Introduction to Banking 2',
        image: '/courses/grandpa-grandson.jpg',
      },
      {
        courseId: '36d49806-cb6f-4bb7-aeba-06ff9ffc5d14',
        name: 'Banking 201',
        description: 'Intermediate Banking 1',
        image: '/courses/save-money-invest-stocks.jpg',
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
        userId: userId,
        courseId: 'd4102125-925f-11ee-a561-554a1ac55b5b',
        name: 'Banking 101',
        description: 'Introduction to Banking 1',
        image: '/courses/little-piggy-bank-in-hand.jpg',
        progress: 100,
      },
      {
        userCourseId: '927f4b79-35ec-4f6b-aa82-a2aa606bb0ef',
        userId: userId,
        courseId: '012b5ff0-b409-436b-858f-e9c0d558eea0',
        name: 'Banking 102',
        description: 'Introduction to Banking 2',
        image: '/courses/grandpa-grandson.jpg',
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