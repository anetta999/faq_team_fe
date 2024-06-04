import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'src/components/footer';
import { Header } from 'src/components/header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
