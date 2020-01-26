import React from 'react';

import ParallaxBlock from '../components/ParallaxBlock';

import './Header.css';

function Header() {
  return (
    <ParallaxBlock
      elementType="header"
      elementClass="Header"
      backgrounds={[
        '/assets/background-icons-a.svg',
        '/assets/background-icons-b.svg',
        '/assets/background-icons-c.svg',
      ]}
    >
      <h1>
        Hi, I&apos;m&nbsp;
        <abbr title="Andres Moritan">Andi</abbr>
      </h1>
      <h2>I bring people together to create awesome digital products</h2>
    </ParallaxBlock>
  );
}

export default Header;
