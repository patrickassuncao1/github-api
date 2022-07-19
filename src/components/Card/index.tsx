import React from 'react';
import { CardElement } from './style';

import { HiDesktopComputer } from "react-icons/hi";

export type CardType = {
  name: string,
  description: string,
  language: string,
  full_name: string
}

const Card = ({ name, full_name, language, description }: CardType) => {
  return (
    <CardElement>
      <div>
        <div className='icon-name'>
          <HiDesktopComputer size={20} color='#8b949e' />
          <a href={'http://github.com/' + full_name} target='_blank' rel="noreferrer">
            {name}
          </a>
        </div>
        <p>{description}</p>
      </div>

      <p className='language'><span></span> {language}</p>
    </CardElement>
  );
}

export default Card;