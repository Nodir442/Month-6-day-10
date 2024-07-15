import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import { MainLayout } from './layout/mian-layout/mian-layout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map(({ component: Element, id, path }) => (
            <Route
              index={!path}
              path={path}
              key={id}
              element={<Element />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
