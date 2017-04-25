import {updateProfile} from '../actions';
import {connect} from 'react-redux'
import SignUp from './SignUp';

const mapStateToProps = ({ profiles }, { params: { userId }}) => ({
  profile: profiles.filter(profile => profile.id === parseInt(userId, 10))[0]
});

const mapDispatchToProps = dispatch => ({
  onSave: profile   => dispatch(updateProfile(profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
