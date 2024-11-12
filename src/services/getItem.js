import asyncMock from './asyncMock';

const getItem = (id) => {
  return asyncMock().then((products) => {
    const item = products.find((product) => product.id === id);
    console.log('Producto encontrado:', item);
    return item;
  });
};

export default getItem;
