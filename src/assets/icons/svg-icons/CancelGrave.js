import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 5.25L5.25 18.75" stroke="#A21C14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 18.75L5.25 5.25" stroke="#A21C14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default ({style}) => <SvgXml xml={xml} style={style} />;
