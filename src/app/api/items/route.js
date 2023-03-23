import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


export async function GET(request) {
    const items = await stripe.products.list({});
    return new Response(JSON.stringify(items))
  }

  