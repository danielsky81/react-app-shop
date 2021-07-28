import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ceVKG48wJQZcKrXa7ZtIEGwA00cX3Sq0Vr';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='React App Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      currency='EURO'
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now €'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;