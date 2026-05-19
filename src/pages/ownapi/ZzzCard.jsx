const ZzzCard = ({z}) => {
  return (
    <div className="border-2 p-5 mb-10 w-150 bg-emerald-700">

      <h2 className="text-2xl uppercase">{z.title}</h2>

      <img src={"http://localhost:5000/img/" + z.img} className=" mt-3 mb-3" alt={"Foto: " + z.title}/>

      <p className="border-b w-50 mb-3">Faction: {z.faction}</p>

      <p className="border-b w-50">W-Engien: {z.w_engien}</p>

      <p className="pt-5">{z.descripttion}</p>
      
    </div>
  );
};

export default ZzzCard;