import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8 text-right">
      <h1 className="text-3xl font-bold mb-8">אודות</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/placeholder-image.jpg" alt="תמונת צוות" className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold mb-4">מי אנחנו</h2>
          <p className="mb-4">
            יהדות אונליין היא פלטפורמה מקוונת המוקדשת ללימוד והעמקה במסורת היהודית.
            אנו מאמינים בהנגשת הידע היהודי העשיר לכל דורש, בכל מקום ובכל זמן.
          </p>
          <p>
            הצוות שלנו מורכב ממומחים בתחומי היהדות השונים, כולל רבנים, מורים,
            וחוקרים אקדמיים, המחויבים להביא את המסורת היהודית לחיים בעידן הדיגיטלי.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">שם מלא</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">כתובת אימייל</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">הודעה</label>
            <textarea id="message" rows="4" className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            שלח
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;