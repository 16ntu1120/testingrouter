import React, { Component } from "react";
//For getting data you have to import library
import { connect } from 'react-redux';
//For sending data towards store
import { addName, addId } from "./action/client-action";
import {addUser , addUserId} from "../src/action/user-action";

const mapStateToProps = state => ({
    name: state.clientreducer.clientName,
    id: state.clientreducer.clientId,
    userName: state.userReducer.userName,
    userId: state.userReducer.userId
});
export default connect(mapStateToProps, { addName, addId , addUser , addUserId })(class HomePage extends Component {
    render() {
        return (
            <div>
                <form
                    onSubmit={
                        (e) => {
                            e.preventDefault();
                            const val = e.target.elements.inputText.value.trim();
                            const idValue = e.target.elements.inputIdText.value.trim();
                            const userNameValue = e.target.elements.inputUserName.value.trim();
                            const userIdValue = e.target.elements.inputUserId.value.trim();
                            this.props.addUser(userNameValue);
                            this.props.addUserId(userIdValue);
                            this.props.addName(val);
                            this.props.addId(idValue);
                            this.props.history.push('/next');
                        }

                    }>
                    <p>Client Data Form</p>
                    <input type="text" name="inputText" placeholder = "add Client Name" />
                    <input type="text" name="inputIdText" placeholder = "add Client Id" />
                    <input type="text" name="inputUserName" placeholder = "add userName"/>
                    <input type="text" name="inputUserId" placeholder = "add user id" />
                    <button>Click</button>
                </form>
            </div>
        );
    }
});