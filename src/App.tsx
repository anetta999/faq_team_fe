import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { RestorePasswordPage } from './pages/RestorePasswordPage/RestorePasswordPage';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/restore-password" element={<RestorePasswordPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
