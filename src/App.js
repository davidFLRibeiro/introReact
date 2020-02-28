import React from 'react';
import logo from './logo.svg';
import './App.css';
import sally from './sally/sally';

function App() {
  return (
    <div className='App'>
      <main>
        <h1>This is my curriculum.</h1>
        <h2>Contact:</h2>
        <address>
          <ul>
            <li>Sally</li>
            <li>
              <a href='Sally@work.com'>Email</a>
            </li>
            <li>
              <a href='913216465'>Phone</a>
            </li>
          </ul>
        </address>
        <section>
          <h2>literary abilities:</h2>
          <ul>
            <li>Cambrige Schooll</li>
            <li>New York Schooll</li>
            <li>Cleveland School</li>
          </ul>
        </section>
        <section>
          <h2>Professional experience:</h2>
          <ul>
            <li>Accymbron SA company</li>
            <li>Developer</li>
            <li>employed From 30/12/1987 to 31/01/2019</li>
          </ul>
        </section>
        <p>
          Hello my name sally, I am a programmer in my company, I make
          applications for it I hope to learn a lot with thinkful so that one
          day I will be a programmer with a lot of experience.
        </p>
      </main>
    </div>
  );
}

export default App;
