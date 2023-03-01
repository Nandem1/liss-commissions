import React from 'react'
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TbFlower } from 'react-icons/tb';

function Header() {
    const { t } = useTranslation()

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='' fixed='top'>
            <Container>
                <Navbar.Brand href="#home"><span className='mb-1 me-1 fs-4'>❀</span>{t('navbarTitle')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link active href="/">{t('navbarInicio')}</Nav.Link>
                        <Nav.Link href="#banners">{t('navbarBanners')}</Nav.Link>
                        <Nav.Link href="#beatmapbanner">{t('navbarBeatmapBanner')}</Nav.Link>
                        <Nav.Link href="#">{t('navbarAvatars')}</Nav.Link>
                        <Nav.Link href="#features">{t('navbarOverlays')}</Nav.Link>
                        <Nav.Link href="#features">{t('navbarContacto')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header