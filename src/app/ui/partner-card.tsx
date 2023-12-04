import Link from 'next/link';
import Image from 'next/image';

interface PartnerCardProps {
  partnerId: string;
  name: string;
  description: string;
  url: string;
  logo: string;
}

export default function PartnerCard({
  partnerId,
  name,
  description,
  url,
  logo,
}: PartnerCardProps) {
  return (
    <div className="w-70 h-50 card bg-base-200 shadow-xl py-5">
      <figure>
        <Image src={logo} alt={name} width={200} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-mw-brown">{name}</h2>
        <p className="prose text-mw-brown">{description}</p>
        <Link
          className="btn btn-primary mt-4 rounded-lg"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
