import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-3">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
