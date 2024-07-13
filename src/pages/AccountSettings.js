import React from 'react';

function AccountSettings() {
  return (
    <div className="container mx-auto px-4 py-8 text-right">
      <h1 className="text-3xl font-bold mb-8">הגדרות חשבון</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">פרטים אישיים</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2">שם מלא</label>
            <input type="text" id="fullName" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">כתובת אימייל</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2">סיסמה חדשה</label>
            <input type="password" id="newPassword" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            שמור שינויים
          </button>
        </form>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">העדפות למידה</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">רמת קושי מועדפת</label>
            <select className="w-full p-2 border rounded">
              <option>מתחיל</option>
              <option>בינוני</option>
              <option>מתקדם</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>שלח לי תזכורת יומית ללמידה</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            שמור העדפות
          </button>
        </form>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">הגדרות פרטיות</h2>
        <form>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>הצג את הפרופיל שלי למשתמשים אחרים</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>קבל עדכונים בדוא"ל</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            שמור הגדרות
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountSettings;