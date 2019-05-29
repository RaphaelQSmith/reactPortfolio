import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import SkillsCard from './components/skillsCard';

function App() {
  return (
    <div className='App'>
      <Header />
      <MainBody />
      <SkillsCard />
      <Footer />
    </div>
  );
}

export default App;
