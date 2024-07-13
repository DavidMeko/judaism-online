import React from 'react';
import { Link } from 'react-router-dom';

function Lessons() {
  const categories = [
    { icon: '📖', title: 'תורה', description: 'פרשת השבוע וספרי תורה' },
    { icon: '🕯️', title: 'הלכה', description: 'מצוות יומיומיות וחגים' },
    { icon: '🏛️', title: 'היסטוריה יהודית', description: 'תקופות ואישים חשובים' },
  ];

  const lessons = [
    { type: 'תורה', title: 'פרשת השבוע: בראשית', description: 'לימוד מעמיק על בריאת העולם', progress: 75 },
    { type: 'הלכה', title: 'הלכות שבת: הדלקת נרות', description: 'הבנת חשיבות וכללי הדלקת נרות שבת', progress: 50 },
    { type: 'היסטוריה יהודית', title: 'תקופת בית שני', description: 'סקירה על אירועים מרכזיים בתקופת בית המקדש השני', progress: 25 },
  ];

  return (
    <div className="text-right">
      <h1 className="text-3xl font-bold mb-8">שיעורים</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg text-center">
            <span className="text-4xl mb-4 block">{category.icon}</span>
            <h2 className="text-xl font-bold mb-2">{category.title}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">שיעורים מומלצים</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
            <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">{lesson.type}</span>
            <h3 className="text-lg font-bold mt-2 mb-2">{lesson.title}</h3>
            <p className="text-sm mb-4">{lesson.description}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${lesson.progress}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lessons;