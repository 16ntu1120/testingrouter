import React, { Component } from "react";
import { connect } from "react-redux";
//function mapstateToProps is used to get value coming from other pages
const mapStateToProps = (state) => ({
  name: state.clientreducer.clientName,
  id: state.clientreducer.clientId,
  username: state.userReducer.userName,
  userid: state.userReducer.userId,
});
export default connect(mapStateToProps)(
  class NextPage extends Component {
    render() {
      return (
        <div>
          <h1>Welcome to next Page</h1>
          <h1>Hello world</h1>
          <p>Here is the inputted data of client</p>
          <p>
            {this.props.name} {this.props.id}
          </p>
          <p>Here is the inputted data of user</p>
          <p>
            {this.props.username} {this.props.userid}
          </p>
        </div>
      );
    }
  }
);
