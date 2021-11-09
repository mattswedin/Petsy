import React from 'react';
import PetIndexItem from './post_index_item';

class PetIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPets();
    }

    render() {
        const { pets, deletePet } = this.props;
        return (
            <div>
                <ul>
                    {
                        pets.map(pet => <PetIndexItem pet={pet} deletePet={deletePet} />)
                    }
                </ul>
            </div>
        );
    }
}

export default PetIndex;
