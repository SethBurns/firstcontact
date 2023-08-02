export const fetchSightings = () => {
  return fetch('http://localhost:3001/sightings').then((response) =>
    response.json()
  );
};

export const postSighting = (sighting) => {
  return fetch('http://localhost:3001/sightings', {
    method: 'POST',
    body: JSON.stringify(sighting),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.json());
};


export const deleteSighting = (id) => {
  return fetch(`http://localhost:3001/sightings/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json'}
  }).then((response) => response.json())
}