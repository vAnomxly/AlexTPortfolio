import React, { useState, useReducer } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  const createOrder = (data, actions) => {
    // Implement your createOrder logic here
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '10.00', // Set the order amount
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    // Implement your onApprove logic here
    return actions.order.capture().then(function(details) {
      // Handle the successful payment
      console.log(details);
      alert('Payment successful! Transaction ID: ' + details.id);
    });
  };

  return (
    <div className="App">
      <h1>React PayPal Integration</h1>
      <PayPalScriptProvider options={{ "client-id": "AbrFiaNPHqPGffoTu9Kijha6BGSRISAPCwXYdpvpbMCyGoZv-0NH3WvsWgLHXLbAMJ7jFBkmtJZu2sZ_" }}>
      <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
