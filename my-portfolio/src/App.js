import React from 'react';
import VortexBackground from './components/Vortexbackground';
import Contact from './components/Contact';
import useLocoScroll from './Hooks/LocomotiveScroll';
import Loader from './Loader/Loader';

const App = () => {
  useLocoScroll();
  return (
    <div id="main-container" data-scroll-container>
      {/* <Contact/> */}
      <Loader/>
    </div>
    // <VortexBackground className="min-h-screen flex items-center justify-center">
    //   <div className="text-center px-4">
    //     <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    //       The hell is this?
    //     </h1>
    //     <p className="text-lg md:text-2xl text-white max-w-lg mx-auto">
    //       This is chemical burn. It'll hurt more than you've ever been burned and you'll have a scar.
    //     </p>
    //     <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
    //       <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
    //         Order now
    //       </button>
    //       <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100">
    //         Watch trailer
    //       </button>
    //     </div>
    //   </div>
      
    // </VortexBackground>
    
  );
};

export default App;
