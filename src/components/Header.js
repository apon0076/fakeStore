import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
    return (
        <div className="nav__section">
            <Container>
                <div className="nav__section--items">
                    <h1>Fake Shop</h1>
                    <li>cart</li>
                </div>
            </Container>
        </div>
    );
};

export default Header;
