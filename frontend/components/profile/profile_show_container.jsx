import React from "react";
import { receiveUser } from "../../actions/session_actions";
import { fetchPets } from "../../actions/pet_actions";
import { connect } from "react-redux";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    pets: state.entities.pets
})

const mapDispatchToProps = dispatch => ({
    recieveUser: userId => dispatch(receiveUser(userId)),
    fetchPets: () => dispatch(fetchPets())
     
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);