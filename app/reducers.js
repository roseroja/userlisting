
export const userDataFilter = (state, action) => {
  switch (action.type) {
    case 'FILTER_PROFILES':
      return action.data;
    default:
      return state || '';
  }
};
export const profiles = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.data.profiles || state;
    case 'ADD_PROFILE':
      action.data['id'] = +new Date;
      let newProfile = { profile: action.data, id: +new Date };
      return state.concat([newProfile]);
    case 'UPDATE_PROFILE':
      let profileUpdate = action.data;
      return state.map(profile => (profile.id !== profileUpdate.id) ? profile :  Object.assign({}, profile, profileUpdate)
      );
    case 'DELETE_PROFILE':
      return state.filter(c => c.id !== action.data);
    default:
      return state || [];
  }
};


