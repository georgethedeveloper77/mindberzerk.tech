import React from 'react';
import { BsTwitter, BsInstagram, BsPinterest, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <BsPinterest />
    </div>
    <div>
      <BsYoutube />
    </div>
  </div>
);

export default SocialMedia;
