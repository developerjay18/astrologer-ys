import React from 'react';
import PpHero from '../../components/PpHero/PpHero';
import { Footer, ScrollToTop } from '../../components';
import Navbar2 from '../../components/Navbar/Navbar2';

function PPp() {
  return (
    <div>
      <Navbar2 />
      <PpHero />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default PPp;
