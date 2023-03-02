import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import Image from 'react-bootstrap/Image'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'
import avatar5 from '../assets/avatar5.jpg'
import avatar6 from '../assets/avatar6.jpg'
import avatar7 from '../assets/avatar7.jpg'
import avatar8 from '../assets/avatar8.jpg'
import avatar9 from '../assets/avatar9.png'
import avatar10 from '../assets/avatar10.jpg'
import avatar11 from '../assets/avatar11.jpg'
import avatar12 from '../assets/avatar12.jpg'
import baseavatar1 from '../assets/baseavatar1.png'
import baseavatar2 from '../assets/baseavatar2.png'
import baseavatar3 from '../assets/baseavatar3.png'
import baseavatar4 from '../assets/baseavatar4.png'
import baseavatar5 from '../assets/baseavatar5.png'
import baseavatar6 from '../assets/baseavatar6.png'

function Avatars() {
    const { t } = useTranslation()

    return (
        <Container fluid className='bg-light text-black text-center p-5'>
            <h2>Avatars</h2>
            <h3 className='fs-4 text-info'>{t('dineroValue')}$3 USD</h3>
            <Row md={2} sm={1} xs={1}>
                <Col>
                    <h4 className='mb-4'>{t('avatarBordes')}</h4>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image src={baseavatar1} />
                        <Image src={baseavatar2} />
                        <Image src={baseavatar3} />
                        <Image src={baseavatar4} />
                        <Image src={baseavatar5} />
                        <Image src={baseavatar6} />
                    </div>
                </Col>
                <Col>
                    <h4 className='mb-4'>{t('avatarTrabajos')}</h4>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image src={avatar1} />
                        <Image src={avatar2} />
                        <Image src={avatar3} />
                        <Image src={avatar4} />
                    </div>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image src={avatar5} />
                        <Image src={avatar6} />
                        <Image src={avatar7} />
                        <Image src={avatar8} />
                    </div>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image src={avatar9} />
                        <Image src={avatar10} />
                        <Image src={avatar11} />
                        <Image src={avatar12} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Avatars