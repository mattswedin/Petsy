import React from "react";
import { receiveUser } from "../../actions/session_actions";
import { connect } from "react-redux";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch => ({
    recieveUser: userId => dispatch(receiveUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);