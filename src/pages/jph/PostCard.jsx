

const PostCard = ({p}) => {
  return (
    <div className="ml-16 border-b mb-10">

      <p className=" ml-1 text-gray-500"> ID: {p.id}</p>

      <h2 className="text-2xl uppercase">{p.title}</h2>

      <p className="ml-1"> Body: {p.body}</p>

      <p className="ml-2 text-gray-500"> User ID: {p.userId}</p>

    </div>
  );
};

export default PostCard;