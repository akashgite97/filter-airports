import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import airports from './airports.json';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className='container'>
      <Header />
      <DataTable />
    </div>
  );
}

export default App;
