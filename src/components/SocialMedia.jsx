import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsCalendar } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsTwitter />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <BsCalendar />
    </div>
  </div>
);

export default SocialMedia;
