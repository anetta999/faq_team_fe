import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './pages/sharedLayout';

const HomePage = lazy(() => import('./pages/homePage/index'));
const SignUpPage = lazy(() => import('./pages/signUpPage'));
const SignInPage = lazy(() => import('./pages/signInPage'));
const RestorePassPage = lazy(() => import('./pages/restorePassPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('./pages/termsOfUsePage'));
const NewPassPage = lazy(() => import('./pages/newPassPage'));

const VerifyEmailPage = lazy(() => import('./pages/verifyEmailPage'));

const SuperAdminPage = lazy(() => import('./pages/superAdminPage'));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/restore-password" element={<RestorePassPage />} />
          <Route path="/new-password" element={<NewPassPage />} />

          <Route path="/restore-password" element={<RestorePasswordPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/super-admin" element={<SuperAdminPage />} />
        </Route>

        <Route path="/verify" element={<VerifyEmailPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </>
  );
}

export default App;
