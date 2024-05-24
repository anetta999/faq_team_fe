import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from 'src/components/NavBar/NavBar';

export const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
