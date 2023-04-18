import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Assumptions from './pages/Assumptions';
import Apr from './pages/Apr';
import Emissions from './pages/Emissions';
import Simulations from './pages/Simulations';
import Parameters from './pages/Parameters';
import DrawerLayout from "./components/DrawerLayout";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-N6NTB5C',
}

TagManager.initialize(tagManagerArgs)


export default function Layout({children}) {
  return (
    <HelmetProvider>
    <Router>
      <Helmet>
        <title>Shardeum Node reward Calculator</title>
        <meta name="description" content="Shardeum node reward calculator (initial release) is live which will allow validators to run node reward simulations and calculate the node income. Check it out today."/>
        <meta property="og:title" content="Shardeum Node reward Calculator"/>
        <meta property="og:site_name" content="Shardeum"/>
        <meta property="og:url" content="https://shardeum.org/"/>
        <meta property="og:description" content="Shardeum node reward calculator (initial release) is live which will allow validators to run node reward simulations and calculate the node income. Check it out today."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://shardeum.org/explore/wp-content/uploads/2023/04/Shardeum-Node-Reward-Calculator.jpg"/>
        <link rel="icon" href="/favicon.ico"/>
      </Helmet>
      <main className="main py-5 px-5 md:px-20 ml-auto mr-auto  md:max-w-[75rem]">
        <DrawerLayout/>

          <Routes>
              <Route exact path='/' element={<Assumptions/>}/>
              <Route path='/Emissions' element={<Emissions/>}/>
              <Route path='/Apy' element={<Apr/>}/>
              <Route path='/Parameters' element={<Parameters/>}/>
              <Route path='/Simulations' element={<Simulations/>}/>
          </Routes>
        {/* Dynamic content */}
        <div>
          <main>{children}</main>
        </div>
      </main>
      <div className="w-[13rem] h-[14rem] sm:w-[26rem] sm:h-[28rem] absolute top-32 right-0 -z-10" style={{
              'background':
                'radial-gradient(circle at right 20% bottom 40%, purple, transparent 50%),' +
                'radial-gradient(circle at right 20% top 40%, blue, transparent 50%)',
              opacity: 0.7
            }}></div>
          <div className="background-flip  w-[13rem] h-[14rem] sm:w-[26rem] sm:h-[28rem] absolute bottom-0 left-0 -z-10" style={{
                    'background':
                      'radial-gradient(circle at right 20% bottom 40%, purple, transparent 50%),' +
                      'radial-gradient(circle at right 20% top 40%, blue, transparent 50%)',
                    opacity: 0.7
                  }}></div>
      </Router>
    </HelmetProvider>
  )
}
