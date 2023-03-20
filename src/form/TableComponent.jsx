import { MapItem } from "./MapItem";

export const TableComponent = () => {
  const products = [
    { id: 301, name: "Cep Telefonu", salary: 5400 },
    { id: 302, name: "Dizüstü Bilgisayar", salary: 4650.0 },
    { id: 303, name: "Masaüstü Bilgisayar", salary: 3545.0 },
    { id: 304, name: "Mac", salary: 5000.0 },
  ];

  return (
    <>
 {products.map((product) => 
    <MapItem p = {product}/>
 )}
   
   
    </>
  );
};
