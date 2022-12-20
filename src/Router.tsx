import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinForm from './pages/JoinForm';
import './App.scss';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<JoinForm />} />
      </Routes>
    </BrowserRouter>
  );
}
