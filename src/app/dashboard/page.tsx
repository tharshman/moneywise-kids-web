import Achievement from '../ui/dashboard/achievement';
import { AchievementType } from '@/app/lib/definitions';

export default function Page() {
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
      </div>
    </main>
  );
}
