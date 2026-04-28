import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container nav-container">
        <a href="#" className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TechVision</span>
        </a>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#inicio" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
          <a href="#nosotros" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
          <a href="#servicios" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
          <a href="#portfolio" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
          <a href="#contacto" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
        </div>
        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  )
}

function Hero() {
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, years: 0 })

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        setCounts({
          projects: Math.min(Math.floor((150 * step) / steps), 150),
          satisfaction: Math.min(Math.floor((98 * step) / steps), 98),
          years: Math.min(Math.floor((7 * step) / steps), 7)
        })
        if (step >= steps) clearInterval(timer)
      }, stepDuration)

      return () => clearInterval(timer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const statsElement = document.querySelector('.hero-stats')
    if (statsElement) observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="shape shape-2"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="shape shape-3"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot"></span>
            +7 años de experiencia
          </motion.div>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transformamos ideas en
            <span className="gradient-text"> experiencias digitales</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Especialistas en desarrollo de sistemas embebidos, automatización y diseño de interfaces que cautivan. Llevamos tu visión al siguiente nivel.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#contacto" className="btn btn-primary">
              Cotizar proyecto
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#portfolio" className="btn btn-secondary">Ver portfolio</a>
          </motion.div>
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="stat-item">
              <span className="stat-number">{counts.projects}</span>+
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.satisfaction}</span>%
              <span className="stat-label">Satisfacción</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{counts.years}</span>+
              <span className="stat-label">Años</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="mockup-container">
            <div className="mockup-browser">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="mockup-url">tuweb.com</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-content">
                  <div className="mockup-line long"></div>
                  <div className="mockup-line medium"></div>
                  <div className="mockup-line short"></div>
                  <div className="mockup-grid">
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              className="floating-card card-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="card-icon">🎨</div>
              <span>Diseño UI/UX</span>
            </motion.div>
            <motion.div 
              className="floating-card card-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="card-icon">⚙️</div>
              <span>Automatización</span>
            </motion.div>
            <motion.div 
              className="floating-card card-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="card-icon">📱</div>
              <span>Apps Móviles</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="scroll-indicator"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Nosotros</span>
          <h2 className="section-title">Innovación con <span className="gradient-text">trayectoria</span></h2>
        </motion.div>
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-text">
              Desde hace más de 7 años, hemos sido pioneros en el desarrollo de sistemas embebidos y soluciones de automatización industrial. Nuestra evolución natural nos llevó al diseño de experiencias digitales excepcionales.
            </p>
            <p className="about-text">
              Hoy combinamos nuestra expertise técnica con diseño de vanguardia para crear sitios web, aplicaciones y software que no solo funcionan perfecto, sino que brillan visualmente.
            </p>
            <div className="about-features">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Sistemas Embebidos</h4>
                  <p>Microcontroladores, IoT y firmware a medida</p>
                </div>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Automatización</h4>
                  <p>Procesos industriales y domóticos inteligentes</p>
                </div>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Diseño Digital</h4>
                  <p>Webs y apps con identidad única</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline">
              {[
                { year: '2017', title: 'Fundación', desc: 'Iniciamos con sistemas embebidos' },
                { year: '2019', title: 'Automatización', desc: 'Expansión a soluciones industriales' },
                { year: '2022', title: 'Diseño Digital', desc: 'Incorporamos diseño UX/UI' },
                { year: '2024', title: 'Expansión', desc: 'Líderes en soluciones integrales' }
              ].map((item, index) => (
                <motion.div 
                  key={item.year}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Diseño Web',
      desc: 'Sitios web modernos, responsivos y optimizados. Desde landing pages hasta e-commerce completos.',
      items: ['Landing Pages', 'Corporativos', 'E-commerce', 'Blogs & CMS'],
      featured: false
    },
    {
      icon: '📱',
      title: 'Apps Móviles',
      desc: 'Aplicaciones nativas y multiplataforma con interfaces intuitivas que los usuarios aman.',
      items: ['iOS & Android', 'React Native', 'Flutter', 'PWA'],
      featured: true
    },
    {
      icon: '💻',
      title: 'Software a Medida',
      desc: 'Sistemas de gestión, ERPs y soluciones empresariales robustas y escalables.',
      items: ['Desktop Apps', 'Sistemas de Gestión', 'APIs & Backend', 'Cloud Solutions'],
      featured: false
    },
    {
      icon: '🔧',
      title: 'Automatización',
      desc: 'Nuestra especialidad desde el inicio. Sistemas embebidos e IoT para optimizar procesos.',
      items: ['Sistemas Embebidos', 'IoT & Sensores', 'Domótica', 'Industrial 4.0'],
      featured: false
    }
  ]

  return (
    <section className="services" id="servicios">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Servicios</span>
          <h2 className="section-title">Soluciones que <span className="gradient-text">impulsan</span> tu negocio</h2>
          <p className="section-subtitle">Diseñamos y desarrollamos productos digitales que combinan estética, funcionalidad y tecnología</p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className={`service-card ${service.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {service.featured && <div className="service-badge">Popular</div>}
              <div className="service-icon-wrap">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-list">
                {service.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { num: '01', title: 'Descubrimiento', desc: 'Entendemos tu visión, objetivos y requerimientos' },
    { num: '02', title: 'Diseño', desc: 'Wireframes, prototipos y diseño visual de alta fidelidad' },
    { num: '03', title: 'Desarrollo', desc: 'Código limpio, escalable y tecnologías modernas' },
    { num: '04', title: 'Lanzamiento', desc: 'Deploy, testing y soporte post-lanzamiento' }
  ]

  return (
    <section className="process">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Proceso</span>
          <h2 className="section-title">Cómo <span className="gradient-text">trabajamos</span></h2>
        </motion.div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    { size: 'large', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', category: 'Web Design', title: 'Plataforma E-commerce', desc: 'Diseño moderno con 40% más conversión' },
    { size: '', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', category: 'App Móvil', title: 'App de Delivery' },
    { size: '', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', category: 'Automatización', title: 'Control Industrial IoT' },
    { size: '', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', category: 'Software', title: 'Sistema de Gestión' }
  ]

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Proyectos que nos <span className="gradient-text">enorgullecen</span></h2>
        </motion.div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`portfolio-item ${project.size}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="portfolio-image" style={{ background: project.gradient }}>
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  {project.desc && <p>{project.desc}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { stars: 5, text: "Transformaron completamente nuestra presencia digital. El diseño superó todas nuestras expectativas.", author: 'María Rodríguez', role: 'CEO, TechCorp', initials: 'MR' },
    { stars: 5, text: "Su experiencia en sistemas embebidos nos permitió automatizar toda nuestra línea de producción.", author: 'Juan López', role: 'Director, InduMaQ', initials: 'JL' },
    { stars: 5, text: "La app que desarrollaron es increíble. Intuitiva, rápida y con un diseño que encanta.", author: 'Ana Silva', role: 'CMO, StartupX', initials: 'AS' }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Testimonios</span>
          <h2 className="section-title">Lo que dicen <span className="gradient-text">nuestros clientes</span></h2>
        </motion.div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="testimonial-stars">{'★'.repeat(testimonial.stars)}</div>
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initials}</div>
                <div>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section" id="contacto">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>¿Listo para dar el siguiente paso?</h2>
          <p>Hablemos sobre tu proyecto y hagamos realidad tu visión digital</p>
          <div className="cta-buttons">
            <a href="mailto:Gustavogenconqn@gmail.com" className="btn btn-primary btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Gustavogenconqn@gmail.com
            </a>
            <a href="https://wa.me/2995839361" className="btn btn-whatsapp btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">TechVision</span>
            </a>
            <p>Transformando ideas en experiencias digitales desde 2017.</p>
          </div>
          <div className="footer-links">
            <h4>Servicios</h4>
            <a href="#">Diseño Web</a>
            <a href="#">Apps Móviles</a>
            <a href="#">Software</a>
            <a href="#">Automatización</a>
          </div>
          <div className="footer-links">
            <h4>Empresa</h4>
            <a href="#">Nosotros</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contacto</a>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>📧 Gustavogenconqn@gmail.com</p>
            <p>📱 +54 299 583 9361</p>
            <p>📍 Neuquen, Argentina</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TechVision. Todos los derechos reservados.</p>
          <p> Diseñado por Gustavo Genco </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="GitHub">gh</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
