import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Medications from './pages/Medications';
import MedicationDetail from './pages/MedicationDetail';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import WelcomeSplash from './components/WelcomeSplash';

export default function App() {
  // Always show on fresh render so the user can immediately evaluate the splash redesign
  const [showSplash, setShowSplash] = useState(true);

  const handleDismissSplash = () => {
    setShowSplash(false);
  };

  const handleOpenSplash = () => {
    setShowSplash(true);
  };

  return (
    <>
      {showSplash && <WelcomeSplash onStart={handleDismissSplash} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="medications" element={<Medications />} />
            <Route path="medications/:id" element={<MedicationDetail />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile onOpenIntro={handleOpenSplash} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
