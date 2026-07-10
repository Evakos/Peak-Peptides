import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <nav className="sticky top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="w-full px-6 md:px-12 xl:px-20 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Peak Peptides" className="w-10 h-10" />
          <span className="font-bold text-xl text-white tracking-tight">PEAK PEPTIDES</span>
        </Link>
        <div className="flex items-center gap-8">
          <a href={anchor('features')} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wide">Protocol</a>
          <a href={anchor('pricing')} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wide">Access</a>
          <a href={anchor('testimonials')} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wide">Results</a>
          <Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wide">Shop</Link>
          <a href={anchor('pricing')} className="bg-red-600 text-white px-6 py-2.5 hover:bg-red-700 transition-colors font-semibold text-sm uppercase tracking-wide">
            Apply
          </a>
        </div>
      </div>
    </nav>
  );
}
