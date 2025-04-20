import React, { useContext } from 'react';
import { CartContext } from '../../Reusuable Folder/CartContext';
import Button from '../../Reusuable Folder/Button';
import { useNavigate } from 'react-router-dom';

function CartComponent2() {
  const { cart, removeFromCart, updateCart } = useContext(CartContext);
  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const navigate = useNavigate();

  const handleNavigateCheckout = () => {
    navigate('/checkout', { state: {cart, total} });
  };

  return (
    <div className="w-full px-4 mt-10">
      <div className="min-h-[200px] bg-mybg flex flex-col items-center ">
        <div className="bg-[#808080a3] w-full overflow-x-auto">
          {cart.length === 0 ? (
            <h1 className="text-white text-center p-4">NO ITEMS IN YOUR CART</h1>
          ) : (
            <table className=" table-auto w-full text-white text-sm sm:text-base">
              <thead className="bg- uppercase text-xs sm:text-sm text-text">
                <tr>
                  <th className="p-1 text-left">Image</th>
                  <th className="p-1 text-left">Product</th>
                  <th className="p-1 text-left">Price</th>
                  <th className="p-1 text-left">Qty</th>
                  <th className="p-1 text-left">Total</th>
                  <th className="p-1 text-left">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((car, key) => (
                  <tr key={key} className="border-t border-gray-600 px-16">
                    <td className="p-1">
                      <img
                        src={car.photo}
                        alt={car.name}
                        className="h-10 w-10 object-cover"
                      />
                    </td>
                    <td className="p-1">{car.name.split(/[\s-]/)[0]}</td>
                    <td className="p-1">${car.price.toFixed(2)}</td>
                    <td className="p-1">
                      <div className="flex items-center gap-2">
                        <Button
                          label="-"
                          className="font-semibold"
                          onClick={() => updateCart(car, car.quantity - 1)}
                        />
                        <span>{car.quantity}</span>
                        <Button
                          label="+"
                          className="font-semibold"
                          onClick={() => updateCart(car, car.quantity + 1)}
                        />
                      </div>
                    </td>
                    <td className="p-1">${(car.price * car.quantity).toFixed(2)}</td>
                    <td className="p-1">
                      <Button
                        label="X"
                        className="font-semibold text-center"
                        onClick={() => removeFromCart(car)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-[90%] flex justify-end mt-8">
          <section className="w-full lg:w-[30%] bg-[#808080a3] p-4 rounded-md">
            <h1 className="text-text font-semibold text-lg lg:text-xl mb-4">
              Cart Totals
            </h1>
            <div className="flex justify-between text-white font-semibold border-b border-gray-400 py-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white font-medium border-b border-gray-400 py-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="h-[40px] w-[100%] lg:w-[60%] bg-text  relative cursor-pointer justify-center flex group text-center rounded-md flex-col overflow-hidden" onClick={handleNavigateCheckout}>
                    <Button className="h-[20px] w-[100%] cursor-pointer absolute transition delay-150 duration-300 ease-in-out -translate-y-6 group-hover:-translate-y-0 bg-mybg top-0 gap-1 flex items-center justify-center" />
                        <h2 className="text-[white] z-20 hover:z-20 font-medium text-[1rem] text-center flex justify-center items-center gap-1">
                                Proceed to checkout
                        </h2>
                    <Button className="h-[20px] w-[100%] absolute text-[white] bg-mybg z-10 transition delay-150 duration-300 ease-in translate-y-5 group-hover:-translate-y-3 gap-1 font-medium cursor-pointer flex items-center justify-center" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CartComponent2;
