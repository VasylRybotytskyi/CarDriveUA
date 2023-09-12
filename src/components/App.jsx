// src/App.js
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Favorites from '../pages/Favorites';
import NotFound from 'pages/NotFound';
import { GlobalStyle } from './GlobalStyled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <GlobalStyle /> {/* Додайте глобальні стилі перед контентом */}
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
