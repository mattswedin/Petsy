import React, { useState } from "react";
import { withRouter } from "react-router";

const SearchBar = ({ history }) => {
    const [state, setState] = useState({
        query: ""
    })

    const update = field => {
        return event => {
            setState(prevProps => ({
                ...prevProps,
                [field]: event.target.value
            }));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        history.replace(`/search/${state.query}`);
    }
        

    return (
            <form className="search-bar" onSubmit={handleSubmit} >
                <input  type="text" className="search-bar-input" placeholder="Search for anything" value={state.query} onChange={update('query')} />

            </form>    
    )
}

export default withRouter(SearchBar);