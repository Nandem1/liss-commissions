import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import lisspp from '../assets/lisspp.png'
import Image from 'react-bootstrap/Image'

function Aboutme() {
    const { t } = useTranslation()

    return (
        <Container fluid className='about-me-background'>
            <Container className='about-me-container d-flex justify-content-center align-items-center py-5'>
                <div className=''>
                    <Row md={2} sm={1} xs={1} className='py-5 g-2'>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <div>
                                <Image className='rounded lissprofile' src={lisspp} />
                            </div>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <div className='mt-3 text-left border shadow p-3 rounded bg-black opacity-75'>
                                <h1 className='text-shadow'><span className=''>❀</span>{t('aboutmeh1')}<span className=''>❀</span></h1>
                                <p className='mt-2 text-shadow fs-5'>{t('aboutmeP')}</p>
                                <a href="#" target="_blank" className='btn btn-outline-light'>osu! profile</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    )
}

export default Aboutme