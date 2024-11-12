import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getItem from '../services/getItem';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id)
      .then((data) => {
        setItem(data);
        console.log('Producto en ItemDetailContainer:', data);
      })
      .catch((error) => {
        console.error('Error obteniendo el producto:', error);
      });
  }, [id]);

  return <div>{item ? <ItemDetail item={item} /> : <p>Cargando...</p>}</div>;
};

export default ItemDetailContainer;
