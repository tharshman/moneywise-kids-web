import Image from 'next/image';
import { AchievementType } from '@/app/lib/definitions';

interface AchievementProps {
  title: string;
  description: string;
  icon?: string;
  achievementType?: AchievementType;
}

export default function Achievement({
  title,
  description,
  icon,
  achievementType,
}: AchievementProps) {
  let img = '';  
  let width = 200;
  let height = 200;

  if (achievementType && !icon) {
    switch (achievementType) {
      case AchievementType.Course:
        img = '/icons/Finance-1.svg';
        width = 110;
        height = 110;
        break;
      case AchievementType.Achiever:
        img = '/piggy-bank.jpg';
        break;
      case AchievementType.Misc:
        img = '/icons/Finance-3.svg';
        width = 110;
        height = 110;
        break;
      default:
        img = icon ?? '';
        break;
    }
  } else {
    img = icon ?? '';
  }

  return (
    <div className="card bg-base-200 shadow-xl w-50 h-50">
      <figure>
        <Image src={img} alt={title} width={width} height={height} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-mw-brown">{title}</h2>
        <p className="prose text-mw-brown">{description}</p>
      </div>
    </div>
  );
}
