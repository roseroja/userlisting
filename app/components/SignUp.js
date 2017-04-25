import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link, browserHistory} from 'react-router';
import TextInput from './TextInput';
import Button from './Button';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        username: '',
        account_number: '',
        email: ''
      }
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleCancel = this
      .handleCancel
      .bind(this);
    this.onSave = this
      .onSave
      .bind(this);
  }

  handleChange(event) {
    let FieldName = event.target.name;
    let profile = this.props.profile;
    if (event.target.value != '') {
      if (FieldName == "email") {
        if (this.validateEmail(event.target.value)) {
          this.state.errors[FieldName] = "";
          profile.email = event.target.value;
        } else {
          this.state.errors.email = "Email is not valid.";
          profile.email = event.target.value;
        }
      } else {
        this.state.errors[FieldName] = "";
        profile[FieldName] = event.target.value;
      }
    } else {
      this.state.errors[FieldName] = FieldName + " is required.";
    }
    /*let profile = this.props.profile;
    switch(event.target.name){
      case 'username':
        this.state.errors[username] = "";
        profile.username = event.target.value;
        break;
      case 'account_number':
        profile.account_number = event.target.value;
        break;
      case 'email':
        profile.email = event.target.value;
        break;
    }*/
    this.setState({profile: profile});
  }

  validateEmail(value) {
    // regex from
    // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  isEmptyB(obj) {
    return Object
      .keys(obj)
      .length === 0;
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.profile.username = '';
    this.props.profile.account_number = '';
    this.props.profile.email = '';
  }
  onSave(evt) {
    evt.preventDefault();
    let username = this.props.profile.username.trim()
    let account_number = this.props.profile.account_number.trim()
    let email = this.props.profile.email.trim()
    let errors = {};

    if (username === '') {
      errors.username = "Username is required.";
    }

    if (account_number === '') {
      errors.account_number = "Account Number is required.";
    }

    if (email === '') {
      errors.email = "Email is required.";
    }

    if (email !== '') {
      if (!this.validateEmail(email)) {
        errors.email = "Email is not valid.";
      }
    }
    this.setState({errors});
    if (this.isEmptyB(errors)) {
      if (this.props.userId) { 
        this.props.onUpdate(Object.assign({}, this.props.profile, this.state.profile));
        this.props.reset();
        
      } else {
        this.props.onSave(Object.assign({}, this.props.profile, this.state.profile));
        this.props.reset();
      }
    }
  }

  render() {
    let {profile, onSave, userId, onUpdate, reset} = this.props;
    return (
      <div>
        <h4>{this.props.userId ? 'Edit' : 'New'} Sign Up</h4>
        <form className="">
          <TextInput
            type="text"
            labelValue="User Name"
            name="username"
            cssClasses="required"
            placeholder="Username"
            value={profile.username}
            onChange={this.handleChange}
            error={this.state.errors.username}/>
          <TextInput
            type="text"
            labelValue="Account Number"
            name="account_number"
            cssClasses="required"
            placeholder="Account Number"
            value={profile.account_number}
            onChange={this.handleChange}
            error={this.state.errors.account_number}/>
          <TextInput
            type="text"
            labelValue="Email"
            name="email"
            cssClasses="required"
            placeholder="Email"
            value={profile.email}
            onChange={this.handleChange}
            error={this.state.errors.email}/>
          <div className="row show-grid warpper">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <button onClick={this.onSave}>
                Save Card
              </button>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <Button
                type=""
                name="Cancel"
                value="Cancel"
                onClick={this.handleCancel}
                className="btn btn-info"></Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;
