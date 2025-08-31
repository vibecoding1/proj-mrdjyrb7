import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Logo</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/"
              className={`${router.pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 px-3 py-2 text-sm font-medium`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${router.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 px-3 py-2 text-sm font-medium`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${router.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 px-3 py-2 text-sm font-medium`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;