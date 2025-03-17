import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';

const Dashboard = () => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (productId: string) => {
    addItem(productId);
    alert('Product added to cart!');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">₹{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;