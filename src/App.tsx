import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Clock, 
  Zap, 
  Lock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  XCircle, 
  Mail, 
  Key, 
  Loader2,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 🟢 EL PUENTE MÁGICO AL SAAS
const SAAS_APP_URL = "http://localhost:5173?action=signup";

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

const AuthModal = ({ isOpen, onClose, onLoginSuccess }: { isOpen: boolean; onClose: () => void; onLoginSuccess: () => void }) => {
  const [isLogin, setIsLogin] = useState(false); // Por defecto abrimos en Registro por la estrategia de cupos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Simulación de delay (Modo Demo)
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (isLogin) {
        setMessage({ type: 'success', text: '¡Sesión iniciada! Redirigiendo a tu panel...' });
        setTimeout(() => {
          onLoginSuccess();
          onClose();
        }, 1500);
      } else {
        setMessage({ type: 'success', text: '¡Cupo reclamado con éxito! Redirigiendo al panel...' });
        setTimeout(() => {
          onLoginSuccess();
          onClose();
        }, 2000);
      }
    } catch (error: any) {
      setMessage({ type: 'error', text: 'Error al conectar.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-md p-8 rounded-[2.5rem] bg-[#111] border border-gold/30 shadow-[0_0_50px_rgba(201,168,76,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
              <XCircle className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              {/* Logo en el modal */}
              <Logo 
                showText={false} 
                imageClass="w-16 h-16 mx-auto mb-4" 
                containerClass="flex justify-center"
              />
              <h2 className="text-2xl font-bold mb-2 text-white">{isLogin ? 'Accede a tu cuenta' : 'Reclama tu Cupo Fundador'}</h2>
              <p className="text-sm text-white/50">
                {isLogin ? 'Gestiona tus propiedades.' : 'Quedan solo 6 de 20 cupos gratuitos disponibles.'}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4 text-left">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@hostflow.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-gold/50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Contraseña</label>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-gold/50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {message && (
                <div className={`p-4 rounded-xl text-xs font-medium ${message.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {message.text}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-gold text-black font-black rounded-full hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(201,168,76,0.15)] disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isLogin ? 'Entrar al Panel' : 'Asegurar mi cuenta gratis')}
              </button>
            </form>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-xs text-white/40 hover:text-gold transition-colors font-medium"
              >
                {isLogin ? '¿No tienes cuenta? Reclama tu cupo gratis' : '¿Ya tienes cuenta? Inicia sesión'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onAuthClick, user }: { onAuthClick: () => void; user: any }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-black/80 backdrop-blur-xl border-b border-white/10">
    <Logo />
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
      <a href="#problema" className="hover:text-white transition-colors">El Problema</a>
      <a href="#solucion" className="hover:text-white transition-colors">La Solución</a>
      <a href="#precios" className="hover:text-white transition-colors">Precios</a>
    </div>
    <button 
      onClick={onAuthClick}
      className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gold transition-all"
    >
      {user ? 'Mi Panel' : 'Reclamar Cupo'}
    </button>
  </nav>
);

const Hero = ({ onAuthClick, user }: { onAuthClick: () => void; user: any }) => (
  <section id="problema" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/30 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8"
      >
        <Flame className="w-4 h-4 text-red-500" />
        <span className="text-xs font-bold tracking-widest uppercase text-red-400">Sólo quedan 6 de 20 cupos fundadores</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
      >
        Deja de responder las mismas preguntas <span className="text-gold italic font-serif">todos los días.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
      >
        Automatiza check-in, WiFi, reglas y guías en un solo enlace profesional para tus huéspedes.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button 
          onClick={onAuthClick}
          className="w-full sm:w-auto px-10 py-5 bg-gold text-black font-black rounded-full flex items-center justify-center gap-2 hover:bg-gold-light transition-all group shadow-[0_0_30px_rgba(201,168,76,0.3)]"
        >
          {user ? 'Ir a mi Panel' : 'Reclamar Cupo Gratuito'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </section>
);

const Pricing = ({ onAuthClick }: { onAuthClick: () => void }) => (
  <section id="precios" className="py-24 px-6 bg-white/[0.02]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Planes diseñados para <span className="text-gold">crecer.</span></h2>
        <p className="text-white/60">Únete al club de fundadores antes de que cerremos el acceso gratuito.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* PLAN FUNDADOR - EL GANCHO DE ESCASÉZ */}
        <div className="relative p-10 rounded-[3rem] border bg-white/5 border-gold shadow-[0_0_50px_rgba(201,168,76,0.1)] scale-105 z-10">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-red-500 text-white text-[10px] font-black rounded-full uppercase tracking-tighter flex items-center gap-1">
            <Flame className="w-3 h-3" /> Quedan 6 Cupos
          </span>
          <h3 className="text-2xl font-bold mb-2 text-white">Fundador</h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold text-white">$0</span>
            <span className="text-white/40 text-sm">/ de por vida</span>
          </div>
          
          {/* Barra de progreso de escasez */}
          <div className="w-full bg-black/50 rounded-full h-2 mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-gold to-red-500 h-2 rounded-full w-[70%]"></div>
          </div>
          <p className="text-xs text-white/40 mb-8 text-center">14 de 20 cupos reclamados</p>

          <ul className="space-y-4 mb-10">
            {["1 Propiedad para siempre", "Check-in Visual", "WiFi, Reglas & Manuales", "Acceso a futuras betas"].map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <button 
            onClick={onAuthClick}
            className="w-full py-4 bg-gold text-black rounded-full font-bold transition-all hover:bg-gold-light"
          >
            Reclamar Cupo Gratis
          </button>
        </div>

        {/* PLANES ESTÁNDAR PARA ANCLAR EL PRECIO */}
        {[
          { name: "Pro (Fundador + extras)", price: "24", features: ["Hasta 5 Propiedades", "Manuales y reglas asistidos por IA", "Personalización por inmueble", "Prioridad en soporte"] },
          { name: "Business (Pro + extras)", price: "49", features: ["+10 Propiedades", "Analytics de Uso avanzados", "Funciones impulsadas por IA", "Reporte fiscal de rentas"] },
        ].map((p, i) => (
          <div key={i} className="relative p-8 rounded-[3rem] border bg-transparent border-white/10 opacity-60 hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-bold mb-2 text-white">{p.name}</h3>
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
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<any>(null);

  // 🟢 MAGIA AQUÍ: En lugar de abrir el modal falso, viajamos a la App SaaS real
  const toggleAuth = () => {
    window.location.href = SAAS_APP_URL;
  };

  const handleDemoLogin = () => {
    setUser({ email: "fundador@hostflow.com" });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-gold selection:text-black font-sans scroll-smooth">
      <Navbar onAuthClick={toggleAuth} user={user} />
      
      <main>
        <Hero onAuthClick={toggleAuth} user={user} />
        
        <section id="solucion" className="py-24 px-6 pt-32">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">No es una app más, es <span className="text-gold">tu libertad.</span></h2>
                <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg">Centraliza la información técnica y operativa de tus propiedades en un formato que a tus huéspedes les encantará.</p>
                
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  {[
                    { icon: <Clock />, t: "Ahorra Horas", d: "Deja de escribir lo mismo por WhatsApp 20 veces al día." },
                    { icon: <Star />, t: "Mejores Reviews", d: "Huéspedes informados son huéspedes felices." },
                    { icon: <Lock />, t: "Check-in Seguro", d: "Instrucciones claras para evitar confusiones al llegar." }
                  ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                      <div className="text-gold mb-4">{item.icon}</div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.t}</h4>
                      <p className="text-sm text-white/50">{item.d}</p>
                    </div>
                  ))}
                </div>
            </div>
        </section>

        <Pricing onAuthClick={toggleAuth} />
        
        <section className="py-32 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-12 md:p-24 rounded-[4rem] bg-gradient-to-tr from-gold/20 to-transparent border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 text-white">Asegura tu cuenta gratis hoy.</h2>
            <p className="text-white/60 mb-10 text-lg relative z-10">Cerramos los cupos fundadores en cuanto lleguemos a 20. No te quedes fuera.</p>
            <button 
              onClick={toggleAuth}
              className="px-12 py-6 bg-gold text-black font-black text-xl rounded-full hover:bg-gold-light hover:scale-105 transition-all shadow-[0_20px_40px_rgba(201,168,76,0.2)]"
            >
              {user ? 'IR A MI PANEL' : 'RECLAMAR MI CUPO (Quedan 6)'}
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10 text-center opacity-40 hover:opacity-100 transition-opacity">
        <div className="flex justify-center mb-4">
          <Logo showText={false} imageClass="w-8 h-8 opacity-50 grayscale hover:grayscale-0 transition-all" />
        </div>
        <p className="text-xs tracking-widest uppercase font-bold">&copy; 2025 HostFlow • El estándar de oro en gestión de rentas</p>
      </footer>
      
      {/* El modal original sigue aquí por si algún día quieres reactivarlo, pero ahora los botones te llevan directo al SaaS */}
      <AuthModal 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)} 
        onLoginSuccess={handleDemoLogin} 
      />
    </div>
  );
}