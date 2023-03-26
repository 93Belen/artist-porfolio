import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


export async function GET(request) {
    const items = await stripe.products.list({
      limit: 60
    });
    return new Response(JSON.stringify(items))
  }

  