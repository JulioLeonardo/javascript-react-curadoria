export const setDisliked = (data) => {
  return {
    type: 'SET_DISLIKED',
    data,
  };
};

export const setJumped = (data) => {
  return {
    type: 'SET_JUMPED',
    data,
  };
};

export const setLiked = (data) => {
  return {
    type: 'SET_LIKED',
    data,
  };
};
