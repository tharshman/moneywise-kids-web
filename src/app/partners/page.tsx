import { getPartners } from '@/app/lib/actions';
import PartnerCard from '@/app/ui/partner-card';
import { PartnerType } from '../lib/definitions';
import { Partner } from '@/app/lib/definitions';

function PartnerRow({
  title,
  partners,
}: {
  title: string;
  partners: Partner[];
}) {
  return (
    <>
    <div className="divider"></div>
    <div className="ml-4 mr-4">        
        <h2 className="text-mw-brown mb-2 text-xl font-bold">{title}</h2>
        <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">      
            {partners.map((partner) => (
            <PartnerCard
                key={partner.partnerId}
                partnerId={partner.partnerId}
                name={partner.name}
                description={partner.description}
                url={partner.url}
                logo={partner.logo}
            />
            ))}
        </div>
    </div>
    </>
  );
}

export default async function Page() {
  const partners = await getPartners();
  const banks = partners.filter(
    (partner) => partner.partnerType === PartnerType.Bank,
  );
  const creditCards = partners.filter(
    (partner) => partner.partnerType === PartnerType.CreditCard,
  );

  return (
    <main>
      <h1 className="mb-4 ml-2 text-xl font-bold text-mw-brown md:text-2xl">
        Partners
      </h1>
      {banks.length > 0 && (<PartnerRow title="Banks" partners={banks} />)}
      {creditCards.length > 0 && (<PartnerRow title="Credit Cards" partners={creditCards} />)}
     
    </main>
  );
}
