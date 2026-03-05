import React, { useState } from 'react';
import { supabase } from './lib/supabaseClient';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  BookOpen, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Star
} from 'lucide-react';
//import { motion } from 'motion/react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-luxury-bg/92 backdrop-blur-md border-b border-gold/20">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.4)]">
        <Sparkles className="text-black w-6 h-6" />
      </div>
      <span className="text-xl font-serif font-bold tracking-tighter text-gold uppercase">RentaCorta<span className="text-white-soft">Elit</span></span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
      <a href="#gap" className="hover:text-white transition-colors">El Problema</a>
      <a href="#features" className="hover:text-white transition-colors">Características</a>
      <a href="#authority" className="hover:text-white transition-colors">Metodología</a>
    </div>
    <a href="#lead-form" className="px-6 py-2.5 border border-gold text-gold rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300">
      Empezar Ahora
    </a>
  </nav>
);

const Hero = ({ onOpenVideo }: { onOpenVideo: () => void }) => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,168,76,0.08)_0%,transparent_70%)]">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/40 text-gold-light text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
      >
        <Star className="w-3 h-3 fill-current" />
        Hospitalidad Inteligente de Próxima Generación
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight mb-8 leading-[1.05]"
      >
        Deje de ser un anfitrión, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-light to-gold">sea una marca de 5 estrellas</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-white-soft/65 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
      >
        Automatice la excelencia. RentaCortaElit transforma propiedades ordinarias en experiencias de lujo que dominan los algoritmos de Airbnb y Booking.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href="#lead-form" className="group relative px-10 py-5 bg-gradient-to-br from-gold-dark via-gold to-gold-light text-black rounded-sm font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(201,168,76,0.3)]">
          <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:animate-shine" />
          <span className="relative flex items-center gap-2">
            Escalar mi Negocio <ArrowRight className="w-5 h-5" />
          </span>
        </a>
        <button 
          onClick={onOpenVideo}
          className="px-10 py-5 bg-transparent border border-white-soft/25 rounded-sm font-bold text-sm uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
        >
          Ver Demo en Vivo
        </button>
      </motion.div>
    </div>
  </section>
);

const TheGap = () => (
  <section id="gap" className="py-24 px-6 bg-dark-surface">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">El Abismo de la Hospitalidad</p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">¿Por qué el 95% de los anfitriones nunca logran escalar?</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* The Chaos */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-12 rounded-[2rem] bg-red-500/5 border border-red-500/10"
        >
          <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
            <XCircle className="text-red-500 w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-6">El Host Tradicional (Caos)</h3>
          <ul className="space-y-4">
            {[
              "Mensajes manuales a las 3 AM",
              "Manuales en papel que nadie lee",
              "Dependencia total del azar del algoritmo",
              "Reseñas de 4 estrellas por 'falta de comunicación'",
              "Ingresos estancados por falta de estrategia"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white-soft/40">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* The Elite */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-12 rounded-[2rem] bg-dark-card border border-gold/15 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8">
            <Sparkles className="text-gold/10 w-24 h-24" />
          </div>
          <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
            <CheckCircle2 className="text-gold w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-6">El Anfitrión Elite (Libertad)</h3>
          <ul className="space-y-4">
            {[
              "Conserje IA disponible 24/7 en varios idiomas",
              "Marca personal consistente y memorable",
              "Crecimiento predecible y automatizado"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white-soft/80">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Conserje IA 24/7",
      description: "Responda instantáneamente dudas en Español e Inglés. Desde '¿cómo funciona el AC?' hasta recomendaciones locales.",
      color: "from-gold-dark to-gold",
      status: "Disponible"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Manuales Digitales",
      description: "Guías visuales interactivas que sus huéspedes amarán. Una experiencia inmersiva para su propiedad.",
      color: "from-gold to-gold-light",
      status: "Próximamente" 
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">La solución</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Tecnología de Alto Impacto</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-10 rounded-[2rem] bg-dark-card border border-gold/10 relative overflow-hidden group">
              {f.status === "Próximamente" && (
                <span className="absolute top-6 right-6 px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full">Próximamente</span>
              )}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-8 text-black`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{f.title}</h3>
              <p className="text-white-soft/50 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// COMPONENTE LEADFORM CON TU LÓGICA Y NUEVA OFERTA
const LeadForm = () => {
  const [email, setEmail] = useState('');
  const [properties, setProperties] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if Supabase is configured
    if (import.meta.env.VITE_SUPABASE_URL === undefined || import.meta.env.VITE_SUPABASE_URL === '') {
      console.error("Supabase is not configured.");
      alert("Configuración incompleta: Por favor, configure las variables de entorno de Supabase para habilitar el registro.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('landing_leads')
        .insert([{ email, property_count: properties, status: 'nuevo' }]);
      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      console.error("Supabase Error:", err);
      alert(`Error al registrar sus datos: ${err.message || "Error desconocido"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-24 px-6 relative overflow-hidden bg-dark-surface">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="p-12 md:p-20 rounded-[2rem] bg-dark-card border border-gold/20 text-center shadow-2xl">
          {!submitted ? (
            <>
              <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-black mb-6 uppercase tracking-widest border border-gold/20">
                Oferta de Lanzamiento: 3 Meses Gratis
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">Únase a la Membresía "Anfitrión"</h2>
              <p className="text-white-soft/60 mb-10 text-sm font-light">
                Pruebe el poder de la IA sin costo por 60 días. Después, solo <span className="text-gold font-bold">US$27.00/mes</span> para mantener su propiedad en la elite.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input 
                  type="email" placeholder="Email profesional" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-8 py-5 rounded-sm bg-luxury-bg border border-white-soft/10 focus:border-gold outline-none text-lg transition-all"
                />
                <select 
                  required value={properties} onChange={(e) => setProperties(e.target.value)}
                  className="w-full px-8 py-5 rounded-sm bg-luxury-bg border border-white-soft/10 focus:border-gold outline-none text-lg appearance-none text-white-soft/60 transition-all"
                >
                  <option value="" disabled>Número de propiedades</option>
                  <option value="1-3">1 - 3 Propiedades</option>
                  <option value="4-10">4 - 10 Propiedades</option>
                  <option value="10+">Más de 10 Propiedades</option>
                </select>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-gold-dark to-gold rounded-sm font-bold text-xl text-black hover:scale-[1.02] transition-all shadow-lg shadow-gold/20"
                >
                  {isSubmitting ? 'Procesando...' : 'Iniciar 3 Meses Gratis'}
                </button>
              </form>
            </>
          ) : (
            <div className="py-10">
              <CheckCircle2 className="text-gold w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-serif font-bold mb-4">¡Bienvenido, Anfitrión!</h3>
              <p className="text-white-soft/60">Hemos recibido su solicitud. Pronto recibirá un correo para configurar sus 3 meses de membresía gratuita con RentaCortaElit.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Authority = () => (
  <section id="authority" className="py-24 px-6 bg-luxury-bg">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold mb-6 tracking-[0.2em] uppercase">
          LA CIENCIA DEL ÉXITO
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
          La Ecuación que domina <br />
          <span className="text-gold">el Ranking de Airbnb</span>
        </h2>
        <div className="space-y-8">
          {[
            {
              title: "Velocidad de Respuesta < 1 min",
              desc: "Nuestra IA garantiza respuestas en segundos, el factor #1 para el algoritmo de posicionamiento."
            },
            {
              title: "Consistencia de 5 Estrellas",
              desc: "Al eliminar errores humanos y malentendidos, su perfil se vuelve un imán de reseñas perfectas."
            },
            {
              title: "Retención y Marca",
              desc: "Los huéspedes no olvidan una experiencia digital fluida. Aumente sus reservas directas."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <ChevronRight className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-white-soft/50">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full" />
        <div className="relative p-8 rounded-[2rem] bg-dark-card border border-gold/15 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold text-gold">Potencial de Crecimiento</span>
            <span className="text-gold-light font-mono text-xs uppercase tracking-widest">Impacto Estimado</span>
          </div>
          <div className="space-y-6">
            {[
              { label: "Visibilidad en Búsquedas", value: 95 },
              { label: "Tasa de Conversión", value: 88 },
              { label: "Calificación del Huésped", value: 98 },
              { label: "Optimización de Ingresos", value: 92 }
            ].map((metric, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs text-white-soft/40">
                  <span>{metric.label}</span>
                  <span>{metric.value}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-gold-dark to-gold" 
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-2xl bg-gold/5 border border-gold/20 text-center">
            <p className="text-sm font-bold text-gold uppercase tracking-tight">
              Así duplicarás tus calificaciones e ingresos en los siguientes 3 meses
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="py-12 px-8 border-t border-gold/10 text-center text-white-soft/40 text-sm bg-luxury-bg">
    <div className="flex items-center justify-center gap-2 mb-6">
      <Sparkles className="text-gold w-5 h-5" />
      <span className="font-serif font-bold tracking-tighter text-gold uppercase">RentaCorta<span className="text-white-soft">Elit</span></span>
    </div>
    <p>© 2024 RentaCortaElit. El Estándar del 1% de los Anfitriones.</p>
    <div className="flex justify-center gap-6 mt-4">
      <a href="#" className="hover:text-gold transition-colors">Privacidad</a>
      <a href="#" className="hover:text-gold transition-colors">Términos</a>
      <a href="#" className="hover:text-gold transition-colors">Contacto</a>
    </div>
  </footer>
);

const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-luxury-bg/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
          >
            <XCircle className="w-6 h-6" />
          </button>
          
          {/* Placeholder Video - Replace with your actual video URL */}
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/f0mAyui2rdc?si=iIEbCOx1uL79dbe7" 
            title="RentaCortaElit Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen selection:bg-electric-blue selection:text-white">
      <Navbar />
      <main>
        <Hero onOpenVideo={() => setShowVideo(true)} />
        <TheGap />
        <Features />
        <Authority />
        <LeadForm />
      </main>
      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
      <Footer />
    </div>
  );
}
