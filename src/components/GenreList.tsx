import useGenres from "../hooks/UseGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
