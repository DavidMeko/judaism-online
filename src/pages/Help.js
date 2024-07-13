import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
  const supportCategories = [
    { icon: '❓', title: 'שאלות נפוצות', description: 'מצא תשובות לשאלות הנפוצות ביותר' },
    { icon: '📘', title: 'מדריך למשתמש', description: 'למד כיצד להשתמש באתר בצורה יעילה' },
    { icon: '🛠️', title: 'תמיכה טכנית', description: 'קבל עזרה בנושאים טכניים' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-right">
      <h1 className="text-3xl font-bold mb-8">עזרה ותמיכה</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {supportCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">{category.icon}</div>
            <h2 className="text-xl font-bold mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">שאלות נפוצות</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold cursor-pointer">איך אני מתחיל ללמוד?</summary>
            <p className="mt-2">כדי להתחיל ללמוד, פשוט התחבר לחשבון שלך ובחר קורס או שיעור שמעניין אותך. תוכל למצוא מגוון רחב של נושאים בעמוד השיעורים.</p>
          </details>
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold cursor-pointer">האם התוכן מתאים לכל הרמות?</summary>
            <p className="mt-2">כן, אנו מציעים תוכן ברמות שונות, החל ממתחילים ועד למתקדמים. כל שיעור מסומן ברמת הקושי שלו כדי שתוכל לבחור את המתאים לך.</p>
          </details>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-4">צריך עזרה נוספת?</h3>
        <p className="mb-4">אם לא מצאת את התשובה לשאלתך, צוות התמיכה שלנו ישמח לעזור.</p>
        <Link to="/contact" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          צור קשר עם התמיכה
        </Link>
      </div>
    </div>
  );
}

export default Help;