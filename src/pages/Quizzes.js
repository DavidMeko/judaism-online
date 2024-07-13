import React from 'react';
import { Link } from 'react-router-dom';

function Quizzes() {
  const quizzes = [
    { name: 'פרשת השבוע: בראשית', difficulty: 'קל', questions: 10 },
    { name: 'הלכות שבת', difficulty: 'בינוני', questions: 15 },
    { name: 'תקופת בית שני', difficulty: 'מתקדם', questions: 20 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-right">
      <h1 className="text-3xl font-bold mb-8">חידונים</h1>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <Link to="/quizzes/new" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            חידון חדש +
          </Link>
          <input type="text" placeholder="חפש" className="border p-2 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{quiz.name}</h3>
            <p className="text-gray-600 mb-2">רמת קושי: {quiz.difficulty}</p>
            <p className="text-gray-600 mb-4">מספר שאלות: {quiz.questions}</p>
            <Link to={`/quizzes/${index}`} className="text-blue-500 hover:underline">
              התחל חידון
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quizzes;