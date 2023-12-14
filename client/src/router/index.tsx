import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const CreateTaskPage = lazy(() => import('../pages/CreateTask'));
const EditTaskPage = lazy(() => import('../pages/EditTask'));

const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path='/new'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CreateTaskPage />
          </Suspense>
        }
      />
      <Route
        path='/edit/:id'
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <EditTaskPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
