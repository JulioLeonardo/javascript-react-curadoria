import React from 'react';

import './styles.css';
import heart from '../../assets/images/favorite.png';
import empty from '../../assets/images/favorite_.png';

function HeartsContainer(props) {
  const { stars } = props;
  // stars = Math.round(stars);
  const NoStar = (
    <>
      <img src={empty} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
    </>
  );

  const OneStar = (
    <>
      <img src={heart} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
    </>
  );
  const TwoStars = (
    <>
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
    </>
  );
  const ThreeStars = (
    <>
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={empty} alt="" />
      <img src={empty} alt="" />
    </>
  );
  const FourStars = (
    <>
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={empty} alt="" />
    </>
  );
  const FiveStars = (
    <>
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={heart} alt="" />
      <img src={heart} alt="" />
    </>
  );

  function sky() {
    switch (stars) {
      case stars <= 2:
        <OneStar />;
        break;
      case stars <= 4:
        <TwoStars />;
        break;
      case stars <= 6:
        <ThreeStars />;
        break;
      case stars <= 8:
        <FourStars />;
        break;
      case stars <= 10:
        <FiveStars />;
        break;
      default:
        <NoStar />;
        break;
    }
  }

  const result = sky(stars);

  return result;
}

export default HeartsContainer;
