import React, {Component} from 'react';
import { render } from 'react-dom';


class SignUpSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
 }


  render(){
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <span className="badge">{this.props.tCount}</span>
          Count
        </li>
        
      </ul>
    );
  }
}

export default SignUpSummary;