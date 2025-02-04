import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const commonStyles =
    'font-medium text-[17px] text-gray-500 hover:text-gray-200';
  const active = 'text-white';

  return (
    <div className="bg-slate-900">
      <div className="container navbar mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl text-white">
            the.news
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/sports"
                className={`${commonStyles} ${
                  pathname === '/sports' ? active : ''
                }`}
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                to="/business"
                className={`${commonStyles} ${
                  pathname === '/business' ? active : ''
                }`}
              >
                Business
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
