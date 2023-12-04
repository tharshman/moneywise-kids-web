'use server';

import { Course } from '@/app/lib/definitions';

export async function getCourses(): Promise<Course[]> {
  return new Promise<Course[]>((resolve) => {
    resolve([
      {
        id: 1,
        name: 'Banking 101',
        description: 'Introduction to Banking 1',
        image: '/courses/little-piggy-bank-in-hand.jpg',
      },
      {
        id: 2,
        name: 'Banking 102',
        description: 'Introduction to Banking 2',
        image: '/courses/grandpa-grandson.jpg',
      },
      {
        id: 3,
        name: 'Banking 201',
        description: 'Intermediate Banking 1',
        image: '/courses/save-money-invest-stocks.jpg',
      },
    ]);
  });
}
