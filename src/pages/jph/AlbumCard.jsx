

const AlbumCard = ({a}) => {
  return (
    <div className="ml-16 border-b mb-10">
      <p className=" ml-1 text-gray-500"> ID: {a.id}</p>

      <h2 className="text-2xl uppercase">{a.title}</h2>

      <p className="ml-2 text-gray-500"> User ID: {a.userId}</p>
    </div>
  );
};

export default AlbumCard;