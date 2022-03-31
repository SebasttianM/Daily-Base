import React from 'react'
import { Link } from 'react-router-dom';
import { Primary } from '../style/styled'


const LandingPage = () => {
  return (
      <Primary>
          <Link to='/registro'>
          <img
              src="https://res.cloudinary.com/svartblood/image/upload/v1648618153/dailybits/Color_white_Container_No_angitz.png"
              alt=""
          />
          </Link>
      </Primary>
  );
}

export default LandingPage