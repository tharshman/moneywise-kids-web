import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { raleway } from '@/app/ui/fonts';

export default function MoneyWiseLogo() {
  return (
    <div
      className={`${raleway.className} flex flex-row items-center leading-none text-[#5D4B49]`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">MoneyWise Kids</p>
    </div>
  );
}
