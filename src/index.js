import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from 'react-intl';
import Wrapper from "./components/Wrapper";

ReactDOM.render(
   <Wrapper>
       <App date = {Date.now()}/>
   </Wrapper>,
   document.getElementById('root')
);