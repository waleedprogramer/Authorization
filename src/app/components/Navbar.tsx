import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <Link href="/">Karachi Weather</Link>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:underline">
              Login Page
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
