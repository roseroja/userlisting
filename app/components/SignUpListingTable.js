import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import SignUpListingRow from './SignUpListingRow';

const mapStateToProps = ({ profiles }) => ({
  profiles
});

class SignUpListingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    let rows = [];
    let {onReset} = this.props;
    this.props.profiles.map(function(myProfile, index){
      rows.push(<SignUpListingRow key={myProfile.id} data={myProfile.profile} onReset={this.props.onReset}  />);
    }.bind(this));
    return (
      <tbody>
        { rows }
      </tbody>
    );
  }
}
export default connect(mapStateToProps)(SignUpListingTable);
