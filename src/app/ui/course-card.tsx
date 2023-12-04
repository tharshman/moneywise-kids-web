import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  courseId: string;
  title: string;
  description: string;
  progress: number;
  icon: string;
  isActive: boolean;
}

interface ProgressBarProps {
  progress: number;
}

interface CourseCardButtonProps {
  courseId: string;
  progress: number;
  isActive: boolean;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <>
      <span className="font-bold">Progress:</span>
      <progress
        aria-label="Course Progress"
        className="progress progress-primary"
        value={progress}
        max="100"
      ></progress>
    </>
  );
}

function CourseCardButton({
  courseId,
  progress,
  isActive,
}: CourseCardButtonProps) {
  if (!isActive) {
    return (
      <Link className="btn btn-disabled" href="/">
        Locked
      </Link>
    );
  } else if (progress === 100) {
    return (
      <Link className="btn btn-disabled" href="/">
        Completed
      </Link>
    );
  } else if (progress > 0) {
    return (
      <Link className="btn btn-primary" href={`/dashboard/course/${courseId}`}>
        Continue
      </Link>
    );
  }

  return (
    <Link className="btn btn-primary" href={`/dashboard/course/${courseId}`}>
      Start Course
    </Link>
  );
}

export default function CourseCard({
  courseId,
  title,
  description,
  progress,
  icon,
  isActive,
}: CourseCardProps) {
  return (
    <div className="w-70 h-50 card bg-base-200 shadow-xl">
      <figure>
        <Image src={icon} alt={title} width={400} height={400} />
      </figure>
      <div className="card-body">
        <h2 className="text-mw-brown card-title">{title}</h2>
        <p className="text-mw-brown prose">{description}</p>
        {isActive && ProgressBar({ progress })}
        <CourseCardButton courseId={courseId} progress={progress} isActive={isActive} />
      </div>
    </div>
  );
}
