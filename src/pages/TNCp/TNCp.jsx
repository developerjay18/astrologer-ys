import React from 'react';
import TncHero from '../../components/TncHero/TncHero';
import { Footer, Navbar, ScrollToTop } from '../../components';
import Navbar2 from '../../components/Navbar/Navbar2';

function TNCp() {
  return (
    <div>
      <Navbar2 />
      <TncHero />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default TNCp;
