import React, { useState } from 'react';
import { ShoppingBag, Tag, ThumbsUp, Camera, RotateCw, Heart, MessageCircle, Users } from 'lucide-react';

export const MerchDashboard: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('purple');

  const stats = {
    totalViews: '45.2K',
    redemptions: '2.3K',
    avgDiscount: '25%',
    photoSubmissions: '342',
  };

  const products = [
    {
      name: 'Limited Edition Tour Hoodie',
      price: '$59.99',
      holderPrice: '$44.99',
      votes: 1250,
      views: '12.4K',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      colors: ['purple', 'black', 'white'],
      description: 'Premium quality hoodie with embroidered logo',
    },
    {
      name: 'MINY Exclusive T-Shirt',
      price: '$29.99',
      holderPrice: '$22.99',
      votes: 980,
      views: '8.7K',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      colors: ['black', 'white', 'gray'],
      description: 'Limited edition design, only for MINY holders',
    },
  ];

  const fanPhotos = [
    {
      id: 1,
      user: 'Emma T.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      likes: 234,
      comments: 45,
      product: 'Tour Hoodie',
    },
    {
      id: 2,
      user: 'Michael C.',
      image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      likes: 187,
      comments: 32,
      product: 'MINY T-Shirt',
    },
    {
      id: 3,
      user: 'Sarah M.',
      image: 'https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      likes: 156,
      comments: 28,
      product: 'Tour Hoodie',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">MINY Holder Exclusive Merch</h2>
            <p className="text-gray-500 mt-1">Special pricing and early access for MINY holders</p>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-lg font-semibold text-purple-600">2.3K Active Holders</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Total Views</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.totalViews}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Tag className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Redemptions</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.redemptions}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ThumbsUp className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Avg. Discount</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.avgDiscount}</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Camera className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-gray-900">Fan Photos</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{stats.photoSubmissions}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.name} className="border border-gray-200 rounded-lg p-6">
              <div className="flex space-x-6">
                <div className="relative group w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <RotateCw className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-gray-500 mt-1">{product.description}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{product.views} views</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="text-gray-500">Regular Price: <span className="line-through">{product.price}</span></div>
                    <div className="text-lg font-bold text-purple-600">
                      MINY Holder Price: {product.holderPrice}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Color Options</label>
                    <div className="flex space-x-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            selectedColor === color ? 'border-purple-600' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-3">
                    <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Claim MINY Price
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <ThumbsUp className="h-5 w-5 text-gray-400" />
                      <span className="ml-2 text-gray-600">{product.votes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Merch Wall</h3>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Submit Your Photo
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fanPhotos.map((photo) => (
              <div key={photo.id} className="bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={photo.image}
                  alt={`${photo.user}'s photo`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{photo.user}</span>
                    <span className="text-sm text-gray-500">{photo.product}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-red-500">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-sm">{photo.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-purple-500">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">{photo.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};