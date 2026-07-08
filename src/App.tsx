import React from 'react';
import { 
  Sparkles,
  Clock,
  Lock,
  Star,
  CheckCircle2,
  ArrowRight,
  XCircle,
  Mail,
  Key,
  Loader2,
  Flame,
  Building2,
  Smartphone,
  MessageSquareMore,
  MapPin,
  Home,
  ClipboardCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


// 🟢 EL PUENTE MÁGICO AL SAAS

const SAAS_APP_URL = import.meta.env.VITE_SAAS_URL || "http://localhost:5173";

// --- COMPONENTES DE APOYO ---

interface LogoProps {
  imageClass?: string;
  showText?: boolean;
  containerClass?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  imageClass = "w-10 h-10", 
  showText = true,
  containerClass = "flex items-center gap-3"
}) => {
  return (
    <div className={containerClass}>
      <img 
        src="/logo.png" 
        alt="HostFlow Logo" 
        className={`${imageClass} object-contain`}
        onError={(e) => {
          // Oculta el icono roto si la imagen aún no se ha movido a la carpeta public
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      {showText && (
        <span className="text-xl font-bold tracking-tighter text-white">
          Host<span className="text-gold">Flow</span>
        </span>
      )}
    </div>
  );
};


const Navbar = ({ onAuthClick, user }: { onAuthClick: () => void; user: any }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-black/80 backdrop-blur-xl border-b border-white/10">
    <Logo />
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
      <a href="#problema" className="hover:text-white transition-colors">El Problema</a>
      <a href="#como-funciona" className="hover:text-white transition-colors">Cómo Funciona</a>
      <a href="#precios" className="hover:text-white transition-colors">Precios</a>
    </div>
    <button 
      onClick={onAuthClick}
      className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gold transition-all"
    >
      {user ? 'Mi Panel' : 'Reclamar cupo fundador'}
    </button>
  </nav>
);

const Hero = ({ toggleAuth, user }: { toggleAuth: () => void; user: any }) => (
  <section id="problema" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[92vh] flex flex-col justify-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8"
        >
          <Flame className="w-4 h-4 text-red-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-red-400">
            Acceso fundador limitado
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-white"
        >
          Toda la información de tu alquiler vacacional, en un solo enlace para tus huéspedes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl"
        >
          Centraliza check-in, WiFi, reglas, manuales y acceso en una experiencia más clara,
          profesional y móvil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <button
            onClick={toggleAuth}
            className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-black rounded-full flex items-center justify-center gap-2 hover:bg-gold-light transition-all group shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          >
            {user ? 'Ir a mi Panel' : 'Reclamar cupo fundador'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#como-funciona"
            className="w-full sm:w-auto px-8 py-5 rounded-full border border-white/10 text-white/80 font-semibold hover:border-gold/40 hover:text-white transition-all text-center"
          >
            Ver cómo funciona
          </a>
        </motion.div>

        <p className="mt-6 text-sm text-white/40 font-medium">
          Para anfitriones y operadores con 1 o más inmuebles
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="relative"
      >
        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <img
            src="/admin-preview.png"
            alt="Panel administrativo HostFlow"
            className="rounded-[2rem] border border-white/10 w-full"
          />

          <div className="absolute -bottom-8 right-4 w-[42%] rounded-[2rem] border border-white/10 bg-black shadow-2xl p-2">
            <img
              src="/guest-preview.png"
              alt="Vista móvil del huésped"
              className="rounded-[1.5rem] w-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="como-funciona" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Así funciona <span className="text-gold">HostFlow</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Administra tu propiedad desde un panel simple y comparte una experiencia clara con cada huésped.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Configura tu inmueble",
            text: "Agrega la información esencial de tu propiedad, acceso, WiFi, reglas y recursos clave.",
            image: "/step-admin.png",
          },
          {
            title: "Organiza la experiencia",
            text: "Centraliza check-in, guías, activos y contenido útil desde un solo panel.",
            image: "/step-checkin.png",
          },
          {
            title: "Comparte una experiencia móvil",
            text: "Tu huésped accede desde el teléfono a una vista clara, cuidada y fácil de seguir.",
            image: "/step-guest.png",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-[2rem] border border-white/10 bg-white/5 overflow-hidden"
          >
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-white/55 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExploreSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-gold font-bold mb-4">
          Más que información básica
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Explora también puede enriquecerse automáticamente.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-6">
          HostFlow no solo centraliza check-in, WiFi y reglas. También puede generar automáticamente lugares cercanos para la pestaña Explora según la ubicación del inmueble.
        </p>
        <p className="text-white/45 leading-relaxed">
          Revisa, ajusta y comparte recomendaciones útiles para que la experiencia del huésped sea todavía más completa.
        </p>
      </div>

      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-4">
        <img
          src="/explora-preview.png"
          alt="Vista de Explora en HostFlow"
          className="w-full rounded-[2rem] border border-white/10"
        />
      </div>
    </div>
  </section>
);

const Pricing = ({ onPlanSelect }: { onPlanSelect: (planId: string) => void }) => (
  <section id="precios" className="py-24 px-6 bg-white/[0.02]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Planes diseñados para <span className="text-gold">crecer</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Estamos abriendo un grupo pequeño de cuentas fundadoras para implementar HostFlow con inmuebles reales.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        <div className="relative p-10 rounded-[3rem] border bg-white/5 border-gold shadow-[0_0_50px_rgba(201,168,76,0.1)] scale-[1.02] z-10">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-red-500 text-white text-[10px] font-black rounded-full uppercase tracking-tighter flex items-center gap-1">
            <Flame className="w-3 h-3" /> Cupo fundador limitado
          </span>

          <h3 className="text-2xl font-bold mb-2 text-white">Fundador</h3>
          <p className="text-sm text-white/40 mb-3">
            Para los primeros usuarios que quieran implementar HostFlow con una propiedad real.
          </p>

          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold text-white">$7</span>
            <span className="text-white/40 text-sm">/ mes</span>
          </div>

          <div className="w-full bg-black/50 rounded-full h-2 mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-gold to-red-500 h-2 rounded-full w-[70%]" />
          </div>

          <p className="text-xs text-white/40 mb-8 text-center">
            14 de 20 cuentas fundadoras asignadas
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "1 propiedad incluida",
              "Check-in visual",
              "WiFi, reglas y manuales",
              "Acceso temprano a mejoras base",
            ].map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() => onPlanSelect('fundador')} // 👈 Enviamos el ID del plan
            className="w-full py-4 bg-gold text-black rounded-full font-bold transition-all hover:bg-gold-light"
          >
            Reclamar cupo fundador
          </button>
        </div>

        {[
          {
            name: "Pro",
            price: "24",
            subtitle: "Para anfitriones con varias propiedades",
            features: [
              "Hasta 5 propiedades",
              "Personalización por inmueble",
              "Soporte prioritario",
              "Funciones ampliadas",
            ],
          },
          {
            name: "Business",
            price: "49",
            subtitle: "Para operadores y equipos en crecimiento",
            features: [
              "+10 propiedades",
              "Analytics avanzados",
              "Funciones avanzadas",
              "Gestión más robusta",
            ],
          },
        ].map((p, i) => (
          <div key={i} className="relative p-8 rounded-[3rem] border bg-transparent border-white/10 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-bold mb-2 text-white">{p.name}</h3>
            <p className="text-sm text-white/40 mb-4">{p.subtitle}</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-white">${p.price}</span>
              <span className="text-white/40 text-sm">/ mes</span>
            </div>

            <ul className="space-y-4 mb-10">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full font-bold transition-all bg-white/5 text-white border border-white/10 cursor-not-allowed">
              Próximamente
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {

  const handlePlanSelection = (planId: string = 'fundador') => {
    const finalUrl = `${SAAS_APP_URL}/?action=signup&plan=${planId}`;
    window.location.href = finalUrl;
  };

  const toggleAuth = () => handlePlanSelection('fundador');

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-gold selection:text-black font-sans scroll-smooth">
      <Navbar onAuthClick={toggleAuth} user={null} />
      
      <main>
        <Hero toggleAuth={toggleAuth} user={null} />
        <HowItWorks />

        <section id="solucion" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Un sistema, <span className="text-gold">dos experiencias</span>
              </h2>
              <p className="text-white/60 max-w-3xl mx-auto text-lg">
                HostFlow organiza la operación para ti y entrega una experiencia más clara para tu huésped.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10">
                <div className="text-gold mb-5"><Building2 className="w-7 h-7" /></div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/35 font-bold mb-3">Para ti</p>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Configura inmueble, WiFi, guías, reglas y check-ins desde un solo panel.
                </h3>
                <p className="text-white/55 leading-relaxed">
                  Mantén centralizada la información operativa de cada propiedad sin depender de mensajes repetidos ni documentos dispersos.
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10">
                <div className="text-gold mb-5"><Smartphone className="w-7 h-7" /></div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/35 font-bold mb-3">Para tu huésped</p>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Comparte una experiencia móvil clara y profesional para acceder a la estancia.
                </h3>
                <p className="text-white/55 leading-relaxed">
                  Tu huésped recibe acceso, instrucciones y contenido útil desde el teléfono, en una experiencia más ordenada y fácil de seguir.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Lo que cambia cuando usas HostFlow
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <MessageSquareMore className="w-5 h-5" />, title: "Menos mensajes repetitivos", desc: "Evita responder una y otra vez dónde entrar, cómo conectarse al WiFi o cuáles son las reglas." },
                { icon: <ClipboardCheck className="w-5 h-5" />, title: "Llegadas más claras", desc: "Tus huéspedes reciben instrucciones organizadas y fáciles de seguir desde el móvil." },
                { icon: <Home className="w-5 h-5" />, title: "Operación más profesional", desc: "Tu propiedad se siente mejor gestionada con información centralizada y fácil de compartir." },
                { icon: <Star className="w-5 h-5" />, title: "Mejor experiencia para el huésped", desc: "Desde el acceso hasta la información útil de la estancia, todo se presenta de forma más cuidada." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                  <div className="text-gold mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExploreSection />
        <Pricing onPlanSelect={handlePlanSelection} />

        <section className="py-32 px-6 text-center">
          <button 
            onClick={toggleAuth}
            className="px-12 py-6 bg-gold text-black font-black text-xl rounded-full hover:bg-gold-light hover:scale-105 transition-all shadow-[0_20px_40px_rgba(201,168,76,0.2)]"
          >
            RECLAMAR CUPO FUNDADOR
          </button>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10 text-center opacity-40 hover:opacity-100 transition-opacity">
        <div className="flex justify-center mb-4">
          <Logo showText={false} imageClass="w-8 h-8 opacity-50 grayscale hover:grayscale-0 transition-all" />
        </div>
        <p className="text-xs tracking-widest uppercase font-bold">&copy; 2025 HostFlow • El estándar de oro en gestión de rentas</p>
      </footer>
    </div>
  );
}