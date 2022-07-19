import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeaderHamburger } from './Header_Hamburger';
import '../styles/Layout.css';

export const Layout = ({children}) => {

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className='Layout'>
        {(width <= 420) ? <HeaderHamburger /> : <Header />}
            {children}
        <Footer />
    </div>
  )
}
