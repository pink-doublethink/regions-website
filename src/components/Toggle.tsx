import { FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';

export default function Toggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeTheme = (): void => {
    document.body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <div className="toggle" onClick={changeTheme}>
      {darkMode ? (
        <div className="toggle-light">
          <FaSun /> <p>Light Mode</p>
        </div>
      ) : (
        <div className="toggle-dark">
          <FaMoon />
          <p>Dark Mode</p>
        </div>
      )}
    </div>
  );
}
