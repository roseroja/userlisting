import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {addProfile, updateProfile} from '../actions';
import {Link, browserHistory} from 'react-router';
import SignUp from './SignUp';
import SignUpListingTable from './SignUpListingTable';
import SignUpSummary from './SignUpSummary';



const mapStateToProps = ({ profiles }, { params: { userId }}) => ({
  profiles,
  profile: profiles.filter(profile => profile.id === parseInt(userId, 10))[0]
});
const mapDispatchToProps = dispatch => ({
  addProfile:profile => dispatch(addProfile(profile)),
  onSave:profile => dispatch(addProfile(profile)),
  onUpdate:profile => dispatch(updateProfile(profile))
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {id:'', username:'', account_number: '', email: ''},
    };
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset(e) {
    this.setState({
      profile:{
          id:'',
          username:'',
          account_number:'',
          email:'',
      }
    });
    browserHistory.push(`/`);
  }
  render() {
    if(this.props.profile){
      this.state.profile =  this.props.profile.profile
    }
    return (
      <div className="{styles.row} {styles.app}">
        <div className="col-xs-12 col-sm-12 col-md-4">
          <div className="panel panel-primary">
            <Link className='btn' onClick={this.handleReset}> New </Link>
            <div className="panel-heading">Sign Up</div>
              <div className="panel-body">
                <SignUp
                  userId={this.props.params.userId}
                  onSave={this.props.onSave}
                  onUpdate={this.props.onUpdate}
                  profile={this.state.profile}
                  reset={this.handleReset}
                />
              </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8">
          <div className="row show-grid warpper">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">Listing</div>
                <table className="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th> # </th>
                      <th> UserName </th>
                      <th> Account Number </th>
                      <th> Email </th>
                      <th> Actions </th>
                    </tr>
                  </thead>
                    <SignUpListingTable
                      records={this.state.profile} onReset={this.handleReset}
                    />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
