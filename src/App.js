import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import FisrtComponent from "./components/FirstComponent/FirstComponent";
import SecondComponent from "./components/SecondComponent/SecondComponent";
import ThirdComponent from "./components/ThirdComponent/ThirdComponent";

const App = () => (
    <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY'}
        scrollingSpeed = {1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
              <ReactFullpage.Wrapper>
                  <div className='section'>
                      <FisrtComponent/>
                  </div>
                  <div className='section'>
                      <SecondComponent/>
                  </div>
                  <div className='section'>
                      <ThirdComponent/>
                  </div>
              </ReactFullpage.Wrapper>
          );
        }}
    />
);

export default App;
