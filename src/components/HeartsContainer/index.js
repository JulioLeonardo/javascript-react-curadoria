import React from 'react';

import './styles.css';
import heart from '../../assets/images/favorite.png';
import empty from '../../assets/images/favorite_.png';

function HeartsContainer(props) {
  const { stars, black } = props;

  function sky() {
    if (stars <= 2) {
      return (
        <>
          <img src={heart} alt="" />
          <img src={empty} className={black} alt="" />
          <img src={empty} className={black} alt="" />
          <img src={empty} className={black} alt="" />
          <img src={empty} className={black} alt="" />
        </>
      );
    }
    if (stars <= 4) {
      return (
        <>
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={empty} className={black} alt="" />
          <img src={empty} className={black} alt="" />
          <img src={empty} className={black} alt="" />
        </>
      );
    }
    if (stars <= 6) {
      return (
        <>
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={empty} className={black} alt="" />
          <img src={empty} className={black} alt="" />
        </>
      );
    }
    if (stars <= 8) {
      return (
        <>
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={empty} className={black} alt="" />
        </>
      );
    }
    if (stars <= 10) {
      return (
        <>
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
          <img src={heart} alt="" />
        </>
      );
    }
    return (
      <>
        <img src={empty} className={black} alt="" />
        <img src={empty} className={black} alt="" />
        <img src={empty} className={black} alt="" />
        <img src={empty} className={black} alt="" />
        <img src={empty} className={black} alt="" />
      </>
    );
  }

  const result = sky(stars);

  return result;
}

export default HeartsContainer;
