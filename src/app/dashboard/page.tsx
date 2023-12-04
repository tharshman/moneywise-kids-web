import { getUserCourseList, getUserByEmail } from '@/app/lib/actions';
import Achievement from '@/app/ui/achievement';
import { AchievementType } from '@/app/lib/definitions';
import CourseCard from '../ui/course-card';

export default async function Page() {
  const user = await getUserByEmail('vbortone@gmail.com');
  const userCourses = await getUserCourseList(user.userId);

  return (
    <main>
      <h1 className="text-mw-brown mb-4 ml-2 text-xl font-bold md:text-2xl">
        Dashboard
      </h1>
      <div className="divider"></div>
      <div className="ml-4 mr-4">
        <h2 className="text-mw-brown mb-2 text-xl font-bold">Achievements</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
          <Achievement
            title="First Course"
            description="Banking 101"
            achievementType={AchievementType.Course}
          />
          <Achievement
            title="Second Course"
            description="Banking 102"
            achievementType={AchievementType.Course}
          />
          <Achievement
            title="Achiever 1"
            description="Spent 10 hours on the site"
            achievementType={AchievementType.Achiever}
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="ml-4 mr-4">
        <h2 className="text-mw-brown mb-2 text-xl font-bold">Active courses</h2>
        <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {userCourses.map((course) => (
            <CourseCard
              key={course.courseId}
              courseId={course.courseId}
              title={course.name}
              description={course.description}
              progress={course.progress}
              icon={course.image}
              isActive={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
