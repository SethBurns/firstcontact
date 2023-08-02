import './Sightings.css';
import { deleteSighting } from '../../apiCalls';

export const Sightings = ({ setSightings, sightings }) => {
  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteSighting(id).then((response) => setSightings(response));
  };

  const renderedSightings = sightings.map((sighting) => {
    return (
      <article className="sighting" key={sighting.id}>
        <h2>{sighting.location}</h2>
        <p>{sighting.description}</p>
        <button
          onClick={(e) => {
            handleDelete(e, sighting.id);
          }}
        >
          DELETE
        </button>
      </article>
    );
  });

  return <main className="sightings-list">{renderedSightings}</main>;
};
