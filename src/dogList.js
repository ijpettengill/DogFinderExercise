import DogDetails from './DogDetails';
import uuid from 'react-uuid';

function DogList({dogs}) {
  return (
    <div>
      {dogs.map((dog) => (
        <DogDetails key={uuid()} dog={dog} />
      ))}
    </div>
  );
}

export default DogList;