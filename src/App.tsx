import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';
import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const RestorePasswordPage = lazy(
  () => import('./pages/RestorePasswordPage/RestorePasswordPage'),
);
const PrivacyPolicyPage = lazy(
  () => import('./pages/PrivacyPolicyPage/PrivacyPolicyPage'),
);
const TermsOfUsePage = lazy(
  () => import('./pages/TermsOfUsePage/TermsOfUsePage'),
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/restore-password" element={<RestorePasswordPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
