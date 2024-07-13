import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="bg-white dark:bg-gray-800 py-4 px-8 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">יהדות אונליין</h1>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">התחברות</Link>
          <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">הרשמה</Link>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center text-center px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">גלה את עומק היהדות</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          שיעורים אינטראקטיביים, חידונים, וקהילה תומכת לחקר והעמקה במסורת היהודית
        </p>
        <Link
          to="/lessons"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          התחל ללמוד
        </Link>
      </main>

      <section className="bg-white dark:bg-gray-800 py-12 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'תורה', description: 'לימוד פרשת השבוע ופרשנויות מעמיקות' },
            { title: 'הלכה', description: 'הבנת המצוות והמנהגים היהודיים היומיומיים' },
            { title: 'היסטוריה יהודית', description: 'מסע מרתק דרך ההיסטוריה העשירה של עם ישראל' },
          ].map((category, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 border-b-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-800 py-4 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© 2024 יהדות אונליין | כל הזכויות שמורות</p>
      </footer>
    </div>
  );
}

export default Home;