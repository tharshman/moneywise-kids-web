import { getCourses } from '@/app/lib/actions';
import Achievement from '@/app/ui/dashboard/achievement';
import { AchievementType } from '@/app/lib/definitions';
import CourseCard from '../ui/dashboard/course-card';

export default async function Page() {
  const courses = await getCourses();
  return (
    <main>
      <h1 className="text-mw-brown mb-4 text-xl font-bold md:text-2xl ml-2">
        Dashboard
      </h1>
      <div className="divider"></div>
      <div className="ml-4 mr-4">
        <h2 className="text-mw-brown mb-2 text-xl font-bold">Achievements</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-8">
          <Achievement title="First Course" description="Banking 101" achievementType={AchievementType.Course} />
          <Achievement title="Second Course" description="Banking 102" achievementType={AchievementType.Course} />
          <Achievement title="Achiever 1" description="Spent 10 hours on the site" achievementType={AchievementType.Achiever} />
        </div>
      </div>
      <div className="divider"></div>
      <div className="ml-4 mr-4">
        <h2 className="text-mw-brown mb-2 text-xl font-bold">Active courses</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.name}
              description={course.description}
              progress={100}
              icon={course.image}
              isActive={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
