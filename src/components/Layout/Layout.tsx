import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Layout.scss';
import { Header } from '../Header/Header';
import { Influencers } from '../Influencers/Influencers';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Influencers />
    </div>
  );
};
