import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-gray-900">
              Your Logo
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>
                Home
              </Link>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}>
                About
              </Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;