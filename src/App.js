import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import PersonelInfo from './pages/personel-info/PersonelInfo';
import SelectPlan from './pages/select-plan/SelectPlan';
import AddOns from './pages/add-ons/AddOns';
import Summary from './pages/summary/Summary';
import SelectedServiceProvider from './context/SelectedServiceContext'; // Context'u doğru şekilde içe aktardık
import ThankYou from './pages/thank-you/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <SelectedServiceProvider>
        <Routes>
          <Route path='/personel-info' element={<PersonelInfo />} />
          <Route path='/select-plan' element={<SelectPlan />} />
          <Route path='/add-ons' element={<AddOns />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/thank-you' element={<ThankYou/>} />
          <Route path='/' element={<Navigate to='/personel-info' />} />
        </Routes>
      </SelectedServiceProvider>
    </BrowserRouter>
  );
}

export default App;
