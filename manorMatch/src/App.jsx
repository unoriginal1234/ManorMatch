import './App.css'
import Carousel from './components/Carousel/Carousel.jsx'
import VendorModal from './components/VendorModal/VendorModal.jsx'
import UserAuth from './components/UserAuthentication/UserAuth.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import LiveChat from './components/LiveChat/LiveChat.jsx'
import Booking from './components/Booking/Booking.jsx'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx'

function App() {

  return (
    <>
      <div>
        <LandingPage />
        <UserAuth />
        <Carousel />
        <VendorModal />
        <Booking />
        <LiveChat />
        <ShoppingCart />
      </div>
    </>
  )
}

export default App
