import React, { lazy, Suspense } from 'react';
import './App.css';

const Child = lazy(() => import('Child/Button'));
const ChildApp = lazy(() => import('Child/app'));

function App() {
  return (
    <div className="App">
      <div>Shell</div>
      <Child />
      <Suspense fallback={<div>fallback</div>}>
        <ChildApp />
      </Suspense>
    </div>
  );
}

export default App;
