import Header from "../Components/Header";
import useStore from '../store';


const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  return (
    <div>
      <Header />
      <div className="p-4">
        {cart.length > 0 ? (
          <>
            <button
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={clearCart}
            >
              clear cart
            </button>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 rounded" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  delete
                </button>
              </div>
            ))}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
