import { FaCartShopping } from 'react-icons/fa6';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <>
      <section className="cart-widget">
        <FaCartShopping size={40} />
        <span className="cart-badge">5</span>
      </section>
    </>
  );
};

export default CartWidget;
