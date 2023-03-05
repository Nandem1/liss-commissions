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
import baseavatarshape1 from '../assets/baseavatarshape1.png'
import baseavatarshape2 from '../assets/baseavatarshape2.png'
import baseavatarshape3 from '../assets/baseavatarshape3.png'
import baseavatarshape4 from '../assets/baseavatarshape4.png'
import baseavatarshape5 from '../assets/baseavatarshape5.png'
import baseavatarshape6 from '../assets/baseavatarshape6.png'
import baseavatarshape7 from '../assets/baseavatarshape7.png'

function Avatars() {
    const { t } = useTranslation()

    return (
        <Container fluid className='bg-light text-black text-center p-5'>
            <h2 id='avatars'>Avatars</h2>
            <h3 className='fs-4 text-info'>{t('dineroValue')}$3 USD</h3>
            <Row md={2} sm={1} xs={1}>
                <Col>
                    <h4 className='mb-3'>{t('avatarBordes')}</h4>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image className='baseavatarshapeimg' src={baseavatar1} />
                        <Image className='baseavatarshapeimg' src={baseavatar2} />
                        <Image className='baseavatarshapeimg' src={baseavatar3} />
                    </div>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image className='baseavatarshapeimg' src={baseavatar4} />
                        <Image className='baseavatarshapeimg' src={baseavatar5} />
                        <Image className='baseavatarshapeimg' src={baseavatar6} />
                    </div>
                    <h4>{t('avatarForma')}</h4>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image className='baseavatarshapeimg' src={baseavatarshape1} />
                        <Image className='baseavatarshapeimg' src={baseavatarshape2} />
                        <Image className='baseavatarshapeimg' src={baseavatarshape3} />
                        <Image className='baseavatarshapeimg' src={baseavatarshape4} />
                    </div>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image className='baseavatarshapeimg' src={baseavatarshape5} />
                        <Image className='baseavatarshapeimg' src={baseavatarshape6} />
                        <Image className='baseavatarshapeimg' src={baseavatarshape7} />
                    </div>
                </Col>
                <Col>
                    <h4 className='mb-3'>{t('avatarTrabajos')}</h4>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image className='baseavatarsimg' src={avatar1} />
                        <Image className='baseavatarsimg' src={avatar2} />
                        <Image className='baseavatarsimg' src={avatar3} />
                        <Image className='baseavatarsimg' src={avatar4} />
                    </div>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image className='baseavatarsimg' src={avatar5} />
                        <Image className='baseavatarsimg' src={avatar6} />
                        <Image className='baseavatarsimg' src={avatar7} />
                        <Image className='baseavatarsimg' src={avatar8} />
                    </div>
                    <div className='my-2 d-flex justify-content-center align-items-center gap-4'>
                        <Image className='baseavatarsimg' src={avatar9} />
                        <Image className='baseavatarsimg' src={avatar10} />
                        <Image className='baseavatarsimg' src={avatar11} />
                        <Image className='baseavatarsimg'  src={avatar12} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Avatars