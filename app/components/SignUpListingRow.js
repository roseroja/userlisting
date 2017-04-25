import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {deleteProfile} from '../actions';


const mapStateToProps = ({ profiles }) => ({
  profiles
});
const mapDispatchToProps = dispatch => ({
  deleteProfile: profileId => dispatch(deleteProfile(profileId))
});


class SignUpListingRow extends Component {
  constructor(props) {
    super(props);
    this.hDelete = this.hDelete.bind(this);
  }

  hDelete(e) {
    this.props.deleteProfile(this.props.data.id);
    this.props.onReset();
    browserHistory.push(`/`);
  }

  render() {
    let {onReset} = this.props;
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.username}</td>
        <td>{this.props.data.account_number}</td>
        <td>{this.props.data.email}</td>
        <td>
          <Link className='btn' to={`/signup/${this.props.data.id}/edit/${this.props.data.id}`}> Edit </Link>
          <Link className='btn delete' onClick={this.hDelete}> Delete </Link>
        </td>
      </tr>
    );
  }
}

//export default SignUpListingRow;
export default connect(mapStateToProps, mapDispatchToProps)(SignUpListingRow);
