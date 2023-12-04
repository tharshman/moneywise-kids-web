import {
  getUserCourseList,
  getUserByEmail,
  getCourses,
} from '@/app/lib/actions';
import CourseCard from '@/app/ui/course-card';

export default async function Page() {
  const courses = await getCourses();
  return (
    <main>
      <h1 className="mb-4 ml-2 text-xl font-bold text-mw-brown md:text-2xl">
        Available Courses
      </h1>
      <div className="divider"></div>
      <div className="ml-4 mr-4">
        <h2 className="mb-2 text-xl font-bold text-mw-brown">Active courses</h2>
        <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.courseId}
              courseId={course.courseId}
              title={course.name}
              description={course.description}
              progress={0}
              icon={course.image}
              isActive={false}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
