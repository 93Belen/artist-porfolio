import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


export async function GET(request, { params }) {
    const price = await stripe.prices.retrieve(
        params.id
      );
    return new Response(JSON.stringify(price))
  }

  