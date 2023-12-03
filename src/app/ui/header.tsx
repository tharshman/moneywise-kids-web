import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="navbar bg-secondary">
      <div className="navbar-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <Link className="btn btn-ghost text-xl" key="Home" href="/">MoneyWise Kids</Link>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard" key="Dashboard">Dashboard</Link>
          </li>
          <li>
            <details>
              <summary>Course Catalog</summary>
              <ul className="p-2">
                <li>
                  <a>Banking</a>
                </li>
                <li>
                  <a>Stock Market</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Partners</a>
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
              <Link className="justify-between" key="Profile" href="/user/profile">
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
