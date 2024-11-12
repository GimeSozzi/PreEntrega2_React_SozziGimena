import { useState } from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <div className="item-detail">
      <img src={`/images/${item.imageName}`} alt={item.title} className="item-detail-image" />
      <h2 className="item-detail-title">{item.title}</h2>
      <p className="item-detail-description">{item.description}</p>
      <p className="item-detail-price">Precio: ${item.price}</p>
      <p className="item-detail-stock">Stock disponible: {item.stock} unidades</p>

      {quantityAdded === 0 ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p className="success-message">Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetail;
