import React from 'react';
import { Link } from 'react-router-dom';

function Resources() {
  const resources = [
    { title: 'ספריית מאמרים', icon: '📚', description: 'מאמרים מעמיקים בנושאי יהדות' },
    { title: 'כלי עזר ללימוד טקסטים', icon: '🔍', description: 'כלים לניתוח וחקר טקסטים יהודיים' },
    { title: 'מילון מונחים', icon: '📖', description: 'הסברים למונחים ומושגים ביהדות' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-right">
      <h1 className="text-3xl font-bold mb-8">מקורות</h1>
      
      <div className="mb-8">
        <input type="text" placeholder="חפש" className="border p-2 rounded w-full md:w-1/3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">{resource.icon}</div>
            <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <Link to={`/resources/${index}`} className="text-blue-500 hover:underline">
              גלה עוד
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;