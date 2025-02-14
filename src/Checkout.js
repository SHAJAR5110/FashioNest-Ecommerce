// src/checkout.js
import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ cartItems }) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
  };

  // Generate lineItems array from cartItems
  const lineItems = cartItems.map((item) => ({
    price: item.stripePriceId.toString(), // Ensure this is a string (Stripe Price ID)
    quantity: 1, // Use the quantity from the cart
  }));
  
  try {
    const stripe = await getStripe();
    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });
  } catch (error) {
    console.error("Error during checkout:", error);
  }
}