import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import StaticMain from './components/StaticMain';
import Card from './components/Card';

export default function App() {
 
  return (
    <div>
      <Navbar/>
      <StaticMain/>
      <Card
      img = "card1image.png"
      rating ={5.0}
      reviewCount={6}
      country="USA"
      title="Life Lesson with Katie Zaffers"
      price={136}
      />
    </div>
  );
}


