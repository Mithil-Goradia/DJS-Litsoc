import { useEffect } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Navbar from './components/Navbar';
import AOS from 'aos';
import Footer from './components/Footer';
import EventDetails from './pages/EventDetails';
import ScrollToTop from './components/ScrollToTop';
import ScrollUpButton from './components/ScrollUpButton';
import DJMUN24 from './pages/DJMUN24';
import List1 from './pages/List1';
import List2 from './pages/List2';
import List3 from './pages/List3';
import List4 from './pages/List4';
import List5 from './pages/List5';
import Flow from './pages/Flow';
import Flow1 from './pages/Flow1';
import Flow2 from './pages/Flow2';
import Time from './pages/Time';
import Time1 from  './pages/Time1';
import Time2 from './pages/Time2';
import Time3 from './pages/Time3';
import Time4 from './pages/Time4';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    
      <div className='lg:bg-[url(./assets/bg2.png)] bg-[url(./assets/bg3.png)] bg-fixed bg-center bg-repeat bg-contain w-full min-h-screen overflow-clip'>
        <Navbar />
        <div className='pt-24'>
          <ScrollToTop>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/team' element={<Team />} />
              <Route path='/events' element={<Events />} />
              <Route path='/DJMUN24' element={<DJMUN24 />} />
              <Route path='/event-details/:name' element={<EventDetails />} />
              <Route path='/list1' element={<List1 />} />
              <Route path='/list2' element={<List2 />} />
              <Route path='/list3' element={<List3 />} />
              <Route path='/list4' element={<List4 />} />
              <Route path='/list5' element={<List5 />} />
              <Route path='/flow' element={<Flow />} />
              <Route path='/flow1' element={<Flow1/>} />
              <Route path='/flow2' element={<Flow2/>} />
              <Route path='/time' element={<Time/>} />
              <Route path='/time1' element={<Time1/>} />
              <Route path='/time2' element={<Time2/>} />
              <Route path='/time3' element={<Time3/>} />
              <Route path='/time4' element={<Time4/>} />
            </Routes>
          </ScrollToTop>
        </div>
        <ScrollUpButton />
        <div className='bottom-0'>
          <Footer />
        </div>
      </div>
    
  );
}

export default App;
