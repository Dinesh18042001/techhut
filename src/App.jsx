
import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import CareerPath from './Component/CareerPath';
import Mentorship from './Component/Mentorship';
import Career from './Component/Career';
import Companies from './Component/Companies';
import AlumniSay from './Component/AlumniSay';
import Questions from './Component/Questions';
import Mentors from './Component/Mentors';
import './App.css';
import Blogs from './Component/Blogs';
import ScrollToTop from './ScrollToTop';
import Courses from './Component/Courses';
import Refund from './Component/Refund';
import PrivacyPolicy from './Component/PrivacyPolicy';
import TermsCondition from './Component/TermsCondition';
import SoftwareProgrammer from './Component/SoftwareProgrammer';
import DigitalMarketer from './Component/DigitalMarketer';
import FullStackDev from './Component/Courses/FullStackDev/FullStackDev';
import DigitalMarketerMain from './Component/Courses/DigitalMarketer/DigitalMarketerMain';


const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Outlet/>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <Banner /> }, 
      { path: '/career-path', element: <CareerPath /> },
      { path: '/mentors', element: <Mentors /> },
      { path: '/career', element: <Career /> },
      { path: '/mentorship', element: <Mentorship /> },
      { path: '/companies', element: <Companies /> },
      { path: '/alumni-say', element: <AlumniSay /> },
      { path: '/questions', element: <Questions /> },
      { path: '/blogs', element: <Blogs/> },
      { path: '/courses', element: <Courses/>},
      { path: '/refund', element: <Refund/>},
      { path: '/privacypolicy', element: <PrivacyPolicy/>},
      { path: '/termscondition', element: <TermsCondition/>},
      { path: '/softwareprogrammer', element: <SoftwareProgrammer/>},
      { path: '/digitalmarketer', element: <DigitalMarketer/>},
      { path: '/fullstackdev', element: <FullStackDev/>},
      { path: '/digitalmarketermain', element: <DigitalMarketerMain/>},
      
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />  
  );
}

export default App;
