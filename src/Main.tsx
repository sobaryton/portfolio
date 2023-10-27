import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const Projects = React.lazy(() => import('./Pages/Projects/Projects'));
const Loading = () => <p>Loading ...</p>;

const Main = () => {
return (
    <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
  </React.Suspense>
);
}

export default Main;