import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image'
import bmbannergif1 from '../assets/bmbannergif1.gif'
import bmbannergif2 from '../assets/bmbannergif2.gif'
import bmbannergif3 from '../assets/bmbannergif3.gif'

function BeatmapBanners() {
    const { t } = useTranslation()

    return (
        <Container fluid className=' text-center p-5'>
            <h2 className='text-shadow' id='beatmapbanner'>Beatmaps Banners</h2>
            <h3 className='fs-4 text-info text-lighter'>{t('dineroValue')}$5 USD</h3>
            <Row md={3} sm={1} xs={1} className='mt-3'>
                <Col className='my-3'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Image className='bmbannerimg' src={bmbannergif1} />
                    </div>
                </Col>
                <Col className='my-3'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Image className='bmbannerimg' src={bmbannergif2} />
                    </div>
                </Col>
                <Col className='my-3'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Image className='bmbannerimg' src={bmbannergif3} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BeatmapBanners