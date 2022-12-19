import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinFormStep1 from './pages/JoinFormStep1';
import JoinFormStep2 from './pages/JoinFormStep2';
import JoinFormStep3 from './pages/JoinFormStep3';
import JoinFormStep4 from './pages/JoinFormStep4';
import JoinFormStep5 from './pages/JoinFormStep5';
import JoinFormStep6 from './pages/JoinFormStep6';
import JoinFormStep7 from './pages/JoinFormStep7';
import JoinFormStep8 from './pages/JoinFormStep8';
import JoinFormStep9 from './pages/JoinFormStep9';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/join-form-step-1" element={<JoinFormStep1 />}/>
        <Route path="/join-form-step-2" element={<JoinFormStep2 />}/>
        <Route path="/join-form-step-3" element={<JoinFormStep3 />}/>
        <Route path="/join-form-step-4" element={<JoinFormStep4 />}/>
        <Route path="/join-form-step-5" element={<JoinFormStep5 />}/>
        <Route path="/join-form-step-6" element={<JoinFormStep6 />}/>
        <Route path="/join-form-step-7" element={<JoinFormStep7 />}/>
        <Route path="/join-form-step-8" element={<JoinFormStep8 />}/>
        <Route path="/join-form-step-9" element={<JoinFormStep9 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
