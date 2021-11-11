import React from "react";
import { fetchUser, fetchUsers } from "../../actions/session_actions";
import { deletePet, fetchPets } from "../../actions/pet_actions";
import { connect } from "react-redux";
import ProfileShow from "./profile_show";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {

    return{
    users: state.entities.users,
    user: state.entities.users[ownProps.match.params.userId],
    pets: state.entities.pets,
    currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {

    return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPets: () => dispatch(fetchPets()),
    deletePet: (pet) => dispatch(deletePet(pet)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal))
    }
     
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);