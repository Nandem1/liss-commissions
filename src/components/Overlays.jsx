import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image'
import overlay1 from '../assets/overlay1.png'
import overlay2 from '../assets/overlay2.png'
import overlay3 from '../assets/overlay3.png'
import overlay4 from '../assets/overlay4.png'
import overlay5 from '../assets/overlay5.png'
import overlay6 from '../assets/overlay6.png'

function Overlays() {
    const { t } = useTranslation()

    return (
        <Container fluid className='text-shadow text-center p-5'>
            <h2 id="overlays">Overlays</h2>
            <h3 className='fs-4 text-info'>{t('dineroValue')}$7 USD</h3>
            <Row md={3} xs={1} sm={1}>
                <Col>
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-4 w-100'>
                        <Image className='overlayimage border' src={overlay1} />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-4 w-100'>
                        <Image className='overlayimage border' src={overlay2} />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-4 w-100'>
                        <Image className='overlayimage border' src={overlay3} />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-4 w-100'>
                        <Image className='overlayimage border' src={overlay4} />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-4 w-100'>
                        <Image className='overlayimage border' src={overlay5} />
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center align-items-center gap-4 mt-4 w-100'>
                        <Image className='overlayimage border' src={overlay6} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Overlays