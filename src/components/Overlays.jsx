import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image'

function Overlays() {
    const { t } = useTranslation()

    return (
        <Container fluid className='text-shadow text-center p-5'>
            <h2>Overlays</h2>
            <h3 className='fs-4 text-info'>{t('dineroValue')}$7 USD</h3>
            <Row>
                <Col>
                    Aca va un banner
                </Col>
                <Col>
                    Aca va otro
                </Col>
            </Row>
        </Container>
    )
}

export default Overlays