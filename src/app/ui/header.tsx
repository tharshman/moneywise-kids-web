import Image from 'next/image';
import Link from 'next/link';
import MoneyWiseLogo from '@/app/ui/moneywise-logo';

export default function Header() {
  return (
    <header className="navbar my-4 bg-secondary py-4">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" key="Home" href="/">
          <MoneyWiseLogo />
        </Link>
        <ul className="text-mw-brown menu menu-horizontal px-1 font-extrabold">
          <li>
            <Link href="/dashboard" key="Dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/catalog" key="Catalog">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/partners" key="Partners">
              Partners
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width={10}
                height={10}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link
                className="justify-between"
                key="Profile"
                href="/user/profile"
              >
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href="/user/">Settings</Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
