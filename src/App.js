import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import StaticMain from './components/StaticMain';
import Card from './components/Card';
import data from './components/data';

export default function App() {
  const cardelement = data.map( card =>
    <Card
    key = {card.id}
    card={card}
    />
  )
  return (
    <div>
      <Navbar/>
      <StaticMain/>
      <section className='cards-list'>
      {cardelement}
      </section>
    </div>
  );
}


