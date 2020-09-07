import React from 'react';

import './styles.css';
import heart from '../../assets/images/favorite.png';
import empty from '../../assets/images/favorite_.png';
import { render } from '@testing-library/react';

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

render() {
  switch (stars) {
    case stars <= 2:
      return <OneStar />;
    case stars <= 4:
      return <TwoStars />;
    case stars <= 6:
      return <ThreeStars />;
    case stars <= 8:
      return <FourStars />;
    case stars <= 10:
      return <FiveStars />;
    default:
      return <NoStar />;
  }

}
}

export default HeartsContainer;
