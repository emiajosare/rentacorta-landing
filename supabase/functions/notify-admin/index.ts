import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Esta es la llave que configuraremos en el siguiente paso
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Supabase Webhook envía los datos del nuevo lead aquí
  const { record } = await req.json()

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: ['osareemiaj@gmail.com'], // <--- ESCRIBE AQUÍ TU CORREO REAL
      subject: '🔥 ¡Nuevo Lead en RentaCortaElit!',
      html: `
        <div style="font-family: sans-serif; background: #111; color: white; padding: 30px; border-radius: 15px;">
          <h2 style="color: #0052FF;">¡Nuevo interesado!</h2>
          <p>Se ha registrado un nuevo anfitrión:</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Propiedades:</strong> ${record.property_count}</p>
          <br />
          <p style="font-size: 12px; color: #666;">Registrado el: ${new Date(record.created_at).toLocaleString()}</p>
        </div>
      `,
    }),
  })

  const data = await res.json()
  return new Response(JSON.stringify(data), { 
    headers: { 'Content-Type': 'application/json' } 
  })
})