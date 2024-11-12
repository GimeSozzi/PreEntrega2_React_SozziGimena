import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <img
        src={`/images/${item.imageName}`}
        alt={item.title}
        className="item-detail-image"
      />
      <h2 className="item-detail-title">{item.title}</h2>
      <p className="item-detail-description">{item.description}</p>
      <p className="item-detail-price">Precio: ${item.price}</p>
      <p className="item-detail-stock">
        Stock disponible: {item.stock} unidades
      </p>
    </div>
  );
};

export default ItemDetail;
