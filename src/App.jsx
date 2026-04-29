import { useState } from 'react';

import './styles/globals.css';
import './styles/animations.css';

import TopBar from './sections/TopBar';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import Collection from './sections/Collection';
import Heritage from './sections/Heritage';
import Bespoke from './sections/Bespoke';
import Visit from './sections/Visit';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openEnquiry = () => setEnquiryOpen(true);
  const closeEnquiry = () => setEnquiryOpen(false);

  return (
    <>
      <TopBar />
      <Navbar onEnquireClick={openEnquiry} />
      <Hero />
      <Marquee />
      <Collection />
      <Heritage />
      <Bespoke onEnquireClick={openEnquiry} />
      <Visit />
      <Footer />
      <EnquiryModal isOpen={enquiryOpen} onClose={closeEnquiry} />
    </>
  );
}