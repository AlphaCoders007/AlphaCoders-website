import React from 'react';
import FloatingIcons from './components/FloatingIcons';
import Hero from './components/Hero';
import { Whatwedo } from './components/Whatwedo';
import Cards from './components/Cards';
import ContactSection from './components/ContactSection';
function Page() {
  return (
    <div>
      
      <Hero />
      
      
      <Cards /> 
      <Whatwedo/>
      <ContactSection /> 
    </div>
  );
}

export default Page;