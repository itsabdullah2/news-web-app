import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const commonStyles = 'font-medium text-[17px] hover:text-gray-100';

  return (
    <div className="bg-slate-900/70 fixed w-full top-0 left-0 z-10">
      <div className="container navbar mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-2xl text-white">
            the.news
          </Link>
        </div>
        <ul className="flex items-center gap-6 px-1">
          <li>
            <Link
              to="/sports"
              className={`${commonStyles} ${
                pathname === '/sports' ? 'text-white' : 'text-gray-300'
              }`}
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              className={`${commonStyles} ${
                pathname === '/business' ? 'text-white' : 'text-gray-300'
              }`}
            >
              Business
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
