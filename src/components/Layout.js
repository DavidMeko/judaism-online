import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const navItems = [
    { path: '/lessons', label: 'שיעורים' },
    { path: '/quizzes', label: 'חידונים' },
    { path: '/resources', label: 'מקורות' },
    { path: '/about', label: 'אודות' },
    { path: '/help', label: 'עזרה' },
    { path: '/account-settings', label: 'הגדרות חשבון' },
  ];

  return (
    <div className={`min-h-screen flex bg-gray-100 dark:bg-gray-900 ${darkMode ? 'dark' : ''}`}>
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4">
          <Link to="/" className="block text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">יהדות אונליין</Link>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-2 px-4 rounded transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {navItems.find(item => item.path === location.pathname)?.label || 'דף הבית'}
          </h2>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </header>
        <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-900">
          <Outlet />
        </main>
        <footer className="bg-white dark:bg-gray-800 py-4 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          <p>© 2024 יהדות אונליין | כל הזכויות שמורות</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;