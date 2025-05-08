import React, { useEffect, useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const checkOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();

      let isOpen = false;

      if (day >= 2 && day <= 6) {
        isOpen = (hour === 10 && minute >= 0) || (hour === 11) || (hour >= 14 && hour <= 17);
      } else if (day === 0) {
        isOpen = (hour === 14 && minute >= 30) || (hour >= 15 && hour <= 17);
      }

      setOpen(isOpen);
      setMessage(isOpen
        ? "🟢 Le magasin est ouvert ! Venez nous rendre visite à Florenville"
        : "🔴 Le magasin est fermé pour le moment — revenez pendant nos heures d’ouverture");
    };

    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{
        backgroundColor: open ? '#d4edda' : '#f8d7da',
        color: open ? '#155724' : '#721c24',
        padding: '10px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontWeight: 'bold'
      }}>
        {message}
      </div>
      <main style={{ textAlign: 'center', marginTop: '15vh', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2em' }}>🚧 Le Club de la BD prépare son nouveau site !</h1>
        <p style={{ marginTop: '1em' }}>
          En attendant, retrouvez-nous sur Facebook ou contactez-nous par mail.<br />
          <a href="mailto:contact@clubdelabd.be">contact@clubdelabd.be</a><br />
          <a href="https://www.facebook.com/clubdelabd" target="_blank" rel="noopener noreferrer">Page Facebook</a>
        </p>
      </main>
    </div>
  );
};

export default App;
