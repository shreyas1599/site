import type { APIContext } from "astro";
import { Resend } from "resend";

export const prerender = false;

export async function POST({ locals, request }: APIContext): Promise<Response> {
  const data = await request.formData();
  const contactEmail = data.get("email");
  const message = data.get("message");

  if (
    contactEmail !== "" &&
    contactEmail !== undefined &&
    contactEmail !== null &&
    message !== undefined &&
    message !== "" &&
    message !== null
  ) {
    const resend = new Resend(locals.runtime.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "shreyasthirumalai@resend.dev",
      to: "shreyasthirumalai@gmail.com",
      subject: "contact message from personal site",
      html: `<p>Received message from personal site: <b>${message}</b> <br /><br /> Email Contact: ${contactEmail} </p>`,
    });

    return new Response(JSON.stringify({ data: "Success" }));
  }

  return new Response();
}

export async function GET(context: APIContext): Promise<Response> {
  return context.redirect("/thankYouForContactingMe", 301);
}
