import React from 'react';
import { Image } from 'react-native';

const Squid = () => (
    <Image 
    style={{width: 300, height: 300}}
    source = {require('./squid_dab.png')}
    resizeMode={'contain'} />
)

export default Squid