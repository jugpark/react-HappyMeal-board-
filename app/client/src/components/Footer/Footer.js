import React from 'react'
import { Button } from 'antd';

const Footer = () => {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Welcome to buy your own wine <Button type="smile" /></p>
        </div>
    )
}

export default Footer
