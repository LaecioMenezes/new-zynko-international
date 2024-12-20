import { Link, useLocation } from 'react-router-dom';

export default function LanguageToggle() {
  const location = useLocation();
  const isEnglish = location.pathname === '/en';

  return (
    <div className="absolute top-4 right-4">
      <Link
        to={isEnglish ? '/' : '/en'}
        className="text-white hover:text-blue-200"
      >
        {isEnglish ? 'Português' : 'English'}
      </Link>
    </div>
  );
}