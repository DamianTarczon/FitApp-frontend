import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Step from './pages/Step';
import './App.scss';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/form/:step' element={<Step />} />
      </Routes>
    </BrowserRouter>
  );
}
