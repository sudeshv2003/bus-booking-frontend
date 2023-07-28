import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LoginBox from './components/LoginBox';
import RegistrationForm from './components/RegistrationForm';
import NavigationBar from './components/NavigationBar';
import './App.css'
import SearchForm from './components/searchform';
import ContactForm from './components/ContactForm';
import About from './components/About';
import BusAvailability from './components/BusAvailability';
import BusSeatAvailability from './components/BusSeatAvailability';
import PassengerDetailsForm from './components/PassengerDetailsForm';
import PaymentForm from './components/PaymentForm';
import PaymentTiming from './components/PaymentTiming';

function App() {

  return (
    
    <>
    <Routes>
      <Route exact path='/' element={<LoginBox/>}/>
      <Route exact path='/RegistrationForm' element={<RegistrationForm/>}/>
      <Route exact path='/LoginBox' element={<LoginBox/>}></Route>
      <Route exact path='/NavigationBar' element={<NavigationBar/>}></Route>
      <Route exact path='/searchform' element={<SearchForm/>}></Route>
      <Route exact path='/contactform' element={<ContactForm/>}></Route>
      <Route exact path='/About' element={<About/>}></Route>
      <Route exact path='/NavigationBar' element={<NavigationBar/>}></Route>
      <Route exact path='/buses'element={<BusAvailability/>}/>
      <Route exact path='/BusSeatAvailability'element={<BusSeatAvailability/>}></Route>
       <Route exact path='/PassengerDetaiilsForm' element={<PassengerDetailsForm/>}></Route>
       <Route exact path='/PaymentForm' element={<PaymentForm/>}></Route> */
       <Route exact path='/Paymenttime' element={<PaymentTiming/>}></Route> */
       
      
    </Routes>
    </>
    
  );
};

export default App;