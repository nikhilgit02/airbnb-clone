import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import StaticMain from './components/StaticMain';
import Card from './components/Card';
import data from './components/data';

export default function App() {
  const cardelement = data.map( card =>
    <Card 
    img={card.coverImg}
    title={card.title}
    rating={card.stats.rating}
    reviewCount={card.stats.reviewCount}
    country={card.location}
    price={card.price}
    />
  )
  return (
    <div>
      <Navbar/>
      <StaticMain/>
      {cardelement}
    </div>
  );
}


