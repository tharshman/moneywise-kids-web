'use server';

import { Course, UserCourse, User, Question, Partner, PartnerType } from '@/app/lib/definitions';

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
  const user = await getUserByEmail('vbortone@gmail.com');
  const userCourseList = await getUserCourseList(user.userId);
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

export async function getPartners(): Promise<Partner[]> {
  // return list of banking, credit card, and investment partners
  // for the logos, give me real logos from the partner's websites

  return new Promise<Partner[]>((resolve) => {
    resolve([
      {
        partnerId: '91ab0f34-01de-495a-9e8e-75458627b887',
        name: 'Bank of America',
        description: 'Bank of America Corporation is an American multinational investment bank and financial services holding company headquartered in Charlotte, North Carolina.',
        url: 'https://www.bankofamerica.com/',
        logo: '/partners/boa.svg',
        partnerType: PartnerType.Bank,
      },
      {
        partnerId: '591bd232-c351-4f95-bbd6-54ce227f1701',
        name: 'Chase',
        description: 'JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company headquartered in New York City.',
        url: 'https://www.chase.com/',
        logo: '/partners/chase.svg',
        partnerType: PartnerType.Bank,
      },
      {
        partnerId: '52647c25-f01c-4e0a-ab32-fd00acd8fad0',
        name: 'Wells Fargo',
        description: 'Wells Fargo & Company is an American multinational financial services company with corporate headquarters in San Francisco, California, operational headquarters in Manhattan, and managerial offices throughout the United States and overseas.',
        url: 'https://www.wellsfargo.com/',
        logo: '/partners/wf.webp',
        partnerType: PartnerType.Bank,
      },
      {
        partnerId: '329679b3-1295-4bbc-adc9-9c1c524ea249',
        name: 'Capital One',
        description: 'Capital One Financial Corporation is an American bank holding company specializing in credit cards, auto loans, banking, and savings accounts, headquartered in McLean, Virginia with operations primarily in the United States.',
        url: 'https://www.capitalone.com/',
        logo: '/partners/capone.svg',
        partnerType: PartnerType.CreditCard,
      },
      {
        partnerId: 'f1530125-1ed6-4d91-b594-c485f2c6ef0e',
        name: 'American Express',
        description: 'The American Express Company, also known as Amex, is an American multinational financial services corporation headquartered at 200 Vesey Street in New York City.',
        url: 'https://www.americanexpress.com/',
        logo: '/partners/amex.svg',
        partnerType: PartnerType.CreditCard,
      },
    ]);
  });
}