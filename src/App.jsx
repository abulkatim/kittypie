import React, { useEffect, useState } from 'react';

const PieShop = () => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': 'live_qYCYp6AzJfQmSNKDmvKnFzDZ7MHHYPWy4OoHpBYOwKHW91cS1Kn8LR0vLEPLvy5i',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data[0]?.url) setCatImage(data[0].url);
      })
      .catch(err => console.error('Error fetching cat:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 to-yellow-400 flex flex-col items-center justify-center p-5">
      <header className="text-center">
        <h1 className="text-5xl font-bold text-yellow-800 mb-2">Магазин вкусных пирожков</h1>
        <p className="text-xl text-yellow-700 mb-5">Самые вкусные пирожки и самый милый котик ждут вас!</p>
      </header>

      <main className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-yellow-600 mb-4">Заказать пирожки</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full p-2 border border-yellow-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Ваш email"
            className="w-full p-2 border border-yellow-300 rounded-md"
          />
          <select className="w-full p-2 border border-yellow-300 rounded-md">
            <option>С картошкой 🥔</option>
            <option>С капустой 🥬</option>
            <option>С мясом 🍖</option>
            <option>С ягодами 🍒</option>
          </select>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition duration-200"
          >
            Заказать
          </button>
        </form>

        <div className="mt-6 text-center">
          {catImage ? (
            <img src={catImage} alt="Котик" className="rounded-full mx-auto shadow-md max-h-80" />
          ) : (
            <p className="text-yellow-600">Загружаем котика...</p>
          )}
          <p className="text-yellow-600 mt-2">Наш фирменный котик рекомендует пирожки!</p>
        </div>
      </main>

      <footer className="mt-4 text-yellow-700">
        © 2025 Магазин вкусных пирожков. Все права защищены.
      </footer>
    </div>
  );
};

export default PieShop;