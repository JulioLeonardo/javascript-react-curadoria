const INITIAL_STATE = {
  isSynopsisActive: false,
};

function synopsis(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_SYNOPSIS':
      return {
        isSynopsisActive: action.synopsisStatus,
      };

    default:
      return state;
  }
}

export default synopsis;
