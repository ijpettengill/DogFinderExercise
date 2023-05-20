import './DogDetails.css';
import uuid from 'react-uuid';

function DogDetails({dog}) {
    return(
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <ul>
                <li key={uuid()}>Age: {dog.age}</li>
                {dog.facts.map(fact => <li key={uuid()}>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;