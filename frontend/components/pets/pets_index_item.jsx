import React from 'react';
import { Link } from 'react-router-dom';

const PettIndexItem = (props) => {
    return (
        <li>
            <Link to={`/pets/${props.pet.id}`}>{props.pet.name}</Link>
            <Link to={`/pets/${props.pet.id}/edit`}>Edit</Link>
            <button onClick={() => props.deletePost(props.pett.id)}></button>
        </li>
    )

}

export default PettIndexItem;
