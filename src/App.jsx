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
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 600
      }}>
        {message}
      </div>
      <main style={{ textAlign: 'center', marginTop: '10vh', fontFamily: 'DM Sans, sans-serif' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <h1 style={{ fontSize: '2.2em', lineHeight: '1.4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Le Club de la BD</span><br />
          <span>prépare son nouveau site !</span>
        </h1>
        <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          En attendant, retrouvez-nous sur les réseaux ou contactez-nous par mail<br />
          <a href="mailto:contact@clubdelabd.be">contact@clubdelabd.be</a><br />
          <a href="https://www.facebook.com/clubdelabd" target="_blank" rel="noopener noreferrer">Facebook</a> / 
          <a href="https://www.instagram.com/clubdelabd" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      
      <footer style={{
        marginTop: '4rem',
        fontSize: '0.8rem',
        color: '#555',
        fontFamily: 'DM Sans, sans-serif'
      }}>
        Rue Généraux Cuvelier, 14 - 6820 Florenville<br />
        TVA BE0682.963.340
      </footer>

    </main>
    </div>
  );
};

export default App;
