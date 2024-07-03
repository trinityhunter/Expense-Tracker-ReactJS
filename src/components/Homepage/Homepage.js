import React from 'react';
import './Homepage.css';
import piechart from "/Users/ravirajbhosale/Desktop/React/expense_tracker/src/assests/my expenses analysis.PNG"
import barchart from "/Users/ravirajbhosale/Desktop/React/expense_tracker/src/assests/th-3.jpeg"
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Expense Tracker</h1>
        <p>Manage your expenses and stay in control of your finances.</p>
      </header>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Track your daily expenses easily</li>
          <li>Set and manage budgets</li>
          <li>Get detailed financial reports</li>
          <li>Receive personalized financial tips</li>
        </ul>
      </section>

      <section className="benefits">
        <h2>Benefits</h2>
        <p>Gain insights into your spending habits and improve your financial health.</p>
      </section>

      <section className="sample-charts">
        <h2>Sample Charts</h2>
        <div className="charts">
          
          <img src={piechart} alt="Sample Pie Chart" style={{height: "400px"}} />
          <img src={barchart} alt="Sample Bar Chart" style={{height: "400px", width: "500px"}} />
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>"Expense Tracker has changed the way I manage my finances. It's incredibly easy to use!"</p>
          <footer>- Jane Doe</footer>
        </blockquote>
        <blockquote>
          <p>"I love the detailed reports and insights. It helps me stay on top of my budget."</p>
          <footer>- John Smith</footer>
        </blockquote>
      </section>

      <section className="call-to-action">
        <h2>Get Started Today!</h2>
        <button onClick={() => navigate('/auth')}>Sign Up Now !!</button>
      </section>

      <section className="financial-tips">
        <h2>Financial Tips</h2>
        <ul>
          <li>Tip 1: Track your expenses daily to stay aware of your spending habits.</li>
          <li>Tip 2: Set a budget for each category and stick to it.</li>
          <li>Tip 3: Save a portion of your income each month for emergencies.</li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;
