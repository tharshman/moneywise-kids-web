import Image from 'next/image';

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: string;
  isActive: boolean;
}

interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <>
    <span>Progress:</span>
    <progress className="progress progress-primary" value={progress} max="100"></progress>            
    </>
  );
}

export default function CourseCard({
  id,
  title,
  description,
  progress,
  icon,
  isActive,
}: CourseCardProps) {
  return (
    <div className="card bg-base-200 shadow-xl w-70 h-50">
      <figure>
        <Image
          src={icon}
          alt={title}
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-mw-brown card-title">{title}</h2>
        <p className="text-mw-brown prose">{description}</p>
        {isActive && ProgressBar({ progress })}
        <button className="btn btn-primary">Start Course</button>        
      </div>
    </div>
  );
}
