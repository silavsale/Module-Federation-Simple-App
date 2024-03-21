import React, { lazy, Suspense } from 'react';
import './App.css';

// const Child = lazy(() => import('Child/Button'));
const Child = lazy(() => import('Child/app'));

function App() {
  return (
    <div className="App">
      <div>Shell</div>
      <Child />
    </div>
  );
}

export default App;
