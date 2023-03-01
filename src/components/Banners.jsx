import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import banner6 from '../assets/banner6.jpg'
import banner7 from '../assets/banner7.jpg'
import banner8 from '../assets/banner8.jpg'
import banner9 from '../assets/banner9.jpg'
import banner11 from '../assets/banner11.jpg'
import bannergif1 from '../assets/bannergif.gif'
import bannergif2 from '../assets/bannergif1.gif'

function Banners() {
    const { t } = useTranslation()

    return (
        <Container fluid className='bg-light text-black text-center p-5'>
            <h2 id="banners">Banners</h2>
            <h3 className='fs-4 text-info'>{t('dineroValue')}$3 USD / GIF: $5 USD</h3>
            <Row md={2} sm={1} xs={1}>
                <Col>
                    <div className='d-flex flex-column align-items-center gap-4 mt-4 w-100'>
                        <Image className='bannerimg' src={bannergif1} />
                        <Image className='bannerimg' src={banner1} />
                        <Image className='bannerimg' src={banner2} />
                        <Image className='bannerimg' src={banner3} />
                        <Image className='bannerimg' src={banner4} />
                        <Image className='bannerimg' src={banner5} />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex flex-column align-items-center m-auto gap-4 mt-4'>
                        <Image className='bannerimg' src={bannergif2} />
                        <Image className='bannerimg' src={banner6} />
                        <Image className='bannerimg' src={banner7} />
                        <Image className='bannerimg' src={banner8} />
                        <Image className='bannerimg' src={banner9} />
                        <Image className='bannerimg' src={banner11} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banners