import Image from 'next/image';

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  icon?: string;
}

export default function CourseCard({
  title,
  description,
  progress,
  icon,
}: CourseCardProps) {
  return (
    <div className="card bg-base-200 shadow-xl w-70 h-50">
      <figure>
        <Image
          src={icon}
          alt={title}
          width={width}
          height={height}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-mw-brown card-title">{title}</h2>
        <p className="text-mw-brown prose">{description}</p>
      </div>
    </div>
  );
}
