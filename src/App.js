import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Component/Register';
import Login from './Component/Login';
import ContactUs from './Component/ContactUs';
import AboutUs from './Component/AboutUs';
import MainHome from './Component/MainHome';
import Signup from './Component/Signup';
import RiderHome from './Component/RiderHome';
import DriverHome from './Component/DriverHome';
import BookRide from './Component/BookRide';
import SharerAvail from './Component/SharerAvail';
import AdminDash from './Component/AdminDash';
import DriveHome from './Component/DriveHome';
import Home from './Component/Home';
import Homeridenav from './Component/Homeridenav';
import Homedrivenav from './Component/Homedrivenav';
import Login1 from './Component/Login1';
import ApplyAvail from './Component/ApplyAvail';
import ProfilePage from './Component/ProfilePage';
import ResultsPage from './Component/ResultsPage';
import Payment from './Component/Paymet';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/mainhome" element={<MainHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/riderhome" element={<RiderHome />} />
        <Route path="/driverhome" element={<DriverHome />} />
        <Route path="/bookride" element={<BookRide />} />
        <Route path="/shareravail" element={<SharerAvail />} />
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/drivehome" element={<DriveHome />} />
        <Route path="/homeridenav" element={<Homeridenav />} />
        <Route path="/homedrivenav" element={<Homedrivenav />} />
        <Route path="/success" element={<ApplyAvail />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/resultspage" element={<ResultsPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
