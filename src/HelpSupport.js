import React from 'react';
import './HelpSupport.css'; // Importing the CSS file

const HelpSupport = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">GenZedu</h1>
        <nav>
          <button className="button">Sign in</button>
          <button className="button">Register</button>
        </nav>
      </header>

      <main className="main">
        <h2 className="heading">How can we help you today?</h2>
        <div className="searchContainer">
          <input type="text" placeholder="Search here..." className="searchInput" />
        </div>

        <section className="quickAnswers">
          <h3 className="sectionTitle">Quick answers</h3>
          <div className="questionContainer">
            <details className="details">
              <summary className="summary">Can I download everything on the website?</summary>
              <p className="answer">No, only the resources you have access to as part of your membership.</p>
            </details>
            <details className="details">
              <summary className="summary">How do I renew or cancel my membership?</summary>
              <p className="answer">You can renew or cancel your membership in the account settings.</p>
            </details>
            <details className="details">
              <summary className="summary">How is payment taken?</summary>
              <p className="answer">Payments are taken automatically based on your billing cycle.</p>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HelpSupport;
