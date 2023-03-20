export const MapItem = ({ p }) => {
  
  return (
    <div >

      <h1 className="bg-danger">Çizelge Bileşeni</h1>
      <div className="container d-flex flex-row gap-4 bg-dark">
      
        <div  key={p.id}>
          <div className="p-2 d-inline-flex bg-info w-100">{p.id}</div>
          <div className="p-2 d-inline-flex bg-info w-100">{p.name}</div>
          <div className="p-2 d-inline-flex bg-info w-100">{p.salary}</div>
        </div>
        </div>

      
    </div>
  );
};
