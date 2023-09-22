import React from 'react';
import {FlexContent, Footer, Hero,Sales,Stories} from './components';
import {heroapi,popularsales,toprateslaes,highlight,sneaker, story, footerAPI} from './data/data';

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  )
}

export default App
