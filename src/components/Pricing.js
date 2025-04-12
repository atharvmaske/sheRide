import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className='main'>
      <div className="card">
        <h1>Monthly</h1>
        <p className='para'>Join our Monthly Subscription Plan for exclusive benefits! Enjoy discounted rates on every ride, priority booking, and special promotions designed for frequent riders. With 15 km included per day, you can easily cover your daily commute or plan outings without extra costs. Whether arranging rides for yourself or pet deliveries, our subscription offers convenience at your fingertips. Sign up today for hassle-free travel and savings!</p>
        <div className="d-flex justify-content-center">
          <button className="button">₹1,999</button>
        </div>
      </div>
      <div className="card">
        <h1>Yearly</h1>
        <p className='para'>Sign up for our Yearly Subscription Plan to unlock a world of exclusive benefits! Enjoy substantial discounts on every ride, priority booking, and special promotions for frequent riders. With 17 km included daily, cover your travel needs, whether commuting or planning exciting outings, without worrying about extra charges. Experience ultimate convenience with hassle-free rides and significant savings all year. Join us today to elevate your travel experience!</p>
        <div className="d-flex justify-content-center">
          <button className="button">₹9,999</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
