export const addProfile = profile => ({ type: 'ADD_PROFILE', data: profile });
export const updateProfile = profile   => ({ type: 'UPDATE_PROFILE', data: profile   });
export const deleteProfile = profileId => ({ type: 'DELETE_PROFILE', data: profileId });

export const filterProfiles = query => ({ type: 'FILTER_PROFILES', data: query });
export const receiveData = data => ({ type: 'RECEIVE_DATA', data: data });

export const fetchData = () => {
  return dispatch => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => dispatch(receiveData(json)));
  };
};
