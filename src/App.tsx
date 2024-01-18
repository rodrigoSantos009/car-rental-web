import { Home } from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/global.css'
import { MobileHeader } from './components/Home/MobileHeader'
import { Login } from './components/Home/Login'
import { Models } from './pages/Models'
import { Register } from './components/Home/Register'
import { Header } from './components/Home/Header'
import { AuthProvider } from './contexts/Auth/Index'
import { ProtectedLayout } from './components/ProtectedLayout/ProtectedLayout'
import { Perfil } from './components/Perfil/Perfil'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { RentCars } from './components/Rent/RentCars'
import { RentCar } from './components/Rent/RentCar'
import { RegistrationAndPersonalData } from './components/Rent/RegistrationAndPersonalData'
import { RentProvider } from './contexts/Rent/Index'

function App() {
  return (
    <div className="w-screen h-screen">
      <RentProvider>
        <AuthProvider>
          <Router>
            <Header />
            <MobileHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Models />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/perfil"
                element={<ProtectedLayout children={<Perfil />} />}
              />
              <Route path="/rent/cars" element={<RentCars />} />
              <Route path="/rent/:carId" element={<RentCar />} />
              <Route
                path="/finish/:carId"
                element={
                  <ProtectedLayout children={<RegistrationAndPersonalData />} />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </AuthProvider>
      </RentProvider>
    </div>
  );
}

export default App
