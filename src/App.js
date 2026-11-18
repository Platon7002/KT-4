
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, addProduct } from './store';
import './App.css';

function App() {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const title = prompt('Введите название товара:');

    if (title && title.trim()) {
      dispatch(addProduct(title.trim()));
    }
  };

  return (
    <div className="container">
      <h1>Корзина товаров</h1>

      {products.map(product => (
        <div className="product" key={product.id}>
          <span>{product.title}</span>

          <div className="controls">
            <button
              onClick={() => dispatch(increase(product.id))}
              disabled={product.count === 25}
            >
              +
            </button>

            <span>{product.count}</span>

            <button onClick={() => dispatch(decrease(product.id))}>
              -
            </button>
          </div>
        </div>
      ))}

      <button className="add-button" onClick={handleAdd}>
        Добавить товар
      </button>
    </div>
  );
}

export default App;
