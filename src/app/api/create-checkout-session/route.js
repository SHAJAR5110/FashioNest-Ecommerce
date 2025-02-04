// src/app/api/create-checkout-session/route.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY);

export async function POST(request) {
  try {
    const { cartItems } = await request.json();

    // Create line items for the Checkout Session
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "pkr", // Change to your currency
        product_data: {
          name: item.name, // Product name
        },
        unit_amount: item.price * 100, // Convert price to cents
      },
      quantity: item.quantity || 1, // Product quantity
    }));

    // Define the base URL for success and cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return new Response(JSON.stringify({ id: session.id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating Checkout Session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}