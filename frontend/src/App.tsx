import React from 'react';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <div>
      <h1>Tervetuloa NoteAppiin!</h1>
      {/* Linkit navigoimaan eri sivuille */}
      <a href="../pages/LoginPage.tsx">Kirjaudu sisään</a>
    </div>
  );
}

export default App;
