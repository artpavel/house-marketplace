import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './pages/explore';
import Offers from './pages/offers';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ForgotPassword from './pages/forgot-password';
import Navbar from './components/navbar';
import Profile from './pages/profile';
import PrivateRoute from './components/private-route';
import Category from './pages/category';
import CreateListing from './pages/create-listing';
import Listing from './pages/listing';
import Contact from './pages/contact';
import EditListing from './pages/edit-listing';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/edit-listing/:listingId' element={<EditListing />} />
        <Route
          path='/category/:categoryName/:listingId'
          element={<Listing />}
        />
        <Route path='/contact/:landlordId' element={<Contact />} />
      </Routes>
      <Navbar />
    </Router>
    <ToastContainer />
  </>
);

export default App;
