import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'דף הבית' },
    { path: '/dashboard', label: 'לוח בקרה' },
    { path: '/lessons', label: 'שיעורים' },
    { path: '/quizzes', label: 'חידונים' },
    { path: '/resources', label: 'מקורות' },
    { path: '/about', label: 'אודות' },
    { path: '/help', label: 'עזרה' },
    { path: '/account-settings', label: 'הגדרות חשבון' },
  ];

  return (
    <nav className="h-full flex flex-col justify-center">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-blue-600">יהדות אונליין</h1>
      </div>
      <ul className="space-y-2 px-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`block py-2 px-4 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-500'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;