import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { BrowserRouter,Route,Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './components/Dashboard';
import News from './components/News/News';
import NewsPage from './components/News/NewsPage';
import Country from './components/Country Information/Country';
import CurrencyConverter from './components/Currency Converter/CurrencyConverter';
import CheckList from './components/CheckList/CheckList'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route 
            path='/' 
            element= 
            {<div>
              <SignIn/>
              <SignUp/>
            </div>} 
          />
          <Route
            path='/dashboard'
            element={<Dashboard/>}
          />
          {/* Below Routes Only Works Once User Logs In */}
          <Route
            path='/dashboard/newsmainpage'
            element={<NewsPage/>}
          />
          <Route
            path='/dashboard/news'
            element={<News/>}
          />
          <Route
            path='/dashboard/currencyconverter'
            element={<CurrencyConverter/>}
          />
          <Route
            path='/dashboard/countryinfo'
            element={<Country/>}
          />
          <Route
            path='/dashboard/checklist'
            element={<CheckList/>}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
