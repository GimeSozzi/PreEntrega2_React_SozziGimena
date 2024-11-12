import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import asyncMock from '../services/asyncMock';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    asyncMock().then((data) => {
      if (categoryId) {
        setItems(
          data.filter(
            (item) => item.category.toLowerCase() === categoryId.toLowerCase()
          )
        );
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="itemlist-container">
      <h3 className="greeting-text">{greeting}</h3>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
