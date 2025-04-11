import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      shippingAddress: { city: "Delhi", country: "India" },
      shippingMethood: "Standard",
      paymentMethood: "PayPal",
      orderItems: [
        {
          productId: "1234",
          name: "Product 1",
          size: "M",
          color: "Red",
          quantity: 1,
          price: 300,
          image: "https://picsum.photos/200?random=1",
        },
        {
          productId: "1235",
          name: "Product 2",
          size: "M",
          color: "Blue",
          quantity: 1,
          price: 300,
          image: "https://picsum.photos/200?random=2",
        },
      ],
      totalPrice: 600,
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  if (!orderDetails)
    return <p className="text-center py-10">No order details found.</p>;

  const getStatusBadge = () => {
    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {orderDetails.isPaid && (
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Approved
          </span>
        )}
        {!orderDetails.isDelivered && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
            Pending Delivery
          </span>
        )}
        {orderDetails.isDelivered && (
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            Delivered
          </span>
        )}
      </div>
    );
  };

  return (
    <div className=" min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 text-gray-800">
        {/* Order Items Section */}
        <div className="lg:col-span-2 space-y-6">
          {orderDetails.orderItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-5 flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-1">
                  Color: {item.color} | Size: {item.size}
                </p>
                <p className="text-sm">Qty: {item.quantity}</p>
                <p className="text-sm font-medium mt-1">Price: ${item.price}</p>
                {getStatusBadge()}
              </div>
            </div>
          ))}

          <div className="overflow-x-auto pt-10">
            <h4 className="text-lg font-semibold mb-4">Products</h4>

            <table className="min-w-full text-sm text-gray-700 bg-white border border-gray-300 rounded-lg ">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="text-left px-6 py-3">Product</th>
                  <th className="text-left px-6 py-3">Price</th>
                  <th className="text-left px-6 py-3">Quantity</th>
                  <th className="text-left px-6 py-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
              <tr key={item.productId} className="border-t border-gray-300 hover:bg-gray-50">

                    <td className="px-6 py-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-gray-900 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6">
              <Link
                to="/my-orders"
                className="inline-block text-gray-950 hover:underline font-medium"
              >
                ← Back to My Orders
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Shipping Address */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h4 className="text-lg font-semibold mb-2">Shipping Details</h4>

            {/* Order ID */}
            <p className="text-xs text-gray-500 mb-2">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-mono">
                Order Id : - #{orderDetails._id}
              </span>
            </p>

            {/* Address, Method, Payment */}
            <p className="text-sm">
              {orderDetails.shippingAddress.city},{" "}
              {orderDetails.shippingAddress.country}
            </p>
            <p className="text-sm mt-1">
              Method: {orderDetails.shippingMethood}
            </p>
            <p className="text-sm">Payment: {orderDetails.paymentMethood}</p>

            {/* Delivery Status */}
            <div className="mt-2">{getStatusBadge()}</div>
          </div>

          {/* Price Summary */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h4 className="text-lg font-semibold mb-2">Price Details</h4>
            {orderDetails.orderItems.map((item, i) => (
              <div key={i} className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${orderDetails.totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
