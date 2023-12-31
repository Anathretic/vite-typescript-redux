import { Loader } from '../loader/Loader';
import { PlanetsRoot } from './planetsTypes';
import { useQuery } from 'react-query';

function fetchPlanets() {
  return fetch('https://swapi.dev/api/planets/?page=1').then((res) =>
    res.json()
  );
}

export const StarWarsPlanet: React.FC = () => {
  const { data, isError, isLoading, error } = useQuery<PlanetsRoot>(
    'getStarWarsData',
    fetchPlanets
  );

  if (isLoading) return <Loader />;

  if (isError) return `An error has occurred: ${JSON.stringify(error)}`;

  return (
    <div>
      <h2>Star Wars Planet</h2>
      <ul>{data?.results.map(({ name }) => <li key={name}>{name}</li>)}</ul>
    </div>
  );
};
