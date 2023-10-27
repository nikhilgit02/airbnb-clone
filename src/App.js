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
      <Card/>
    </div>
  );
}


