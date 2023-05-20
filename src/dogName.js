import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

function DogName({ dogs }) {
  const { name } = useParams();
  const [ dog ] = dogs.filter((dog) => dog.name === name);
  console.log(dog);
  return (
    <div>
      <DogDetails dog={dog} />
    </div>
  );
}

export default DogName;