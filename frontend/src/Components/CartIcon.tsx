import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';

const CartIcon: React.FC = () => {
  const itemCount = useStore((state) => state.itemCount);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className="relative inline-block cursor-pointer" onClick={handleClick}>
      <span className="text-2xl text-black">🛒</span>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
