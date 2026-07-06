import React, { useState } from 'react';
import { ShoppingCart, MapPin, Phone, Utensils, Wine, Target, Clock, Music, Truck, Menu as MenuIcon, X } from 'lucide-react';
import FoodMenu from './components/FoodMenu';
import SnookerLounge from './components/SnookerLounge';

// --- CUSTOM SOCIAL ICONS ---
const Instagram = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const Facebook = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Twitter = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsCartOpen(true);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const specials = [
    { id: 101, name: 'Isiewu', price: 4500, image: '/images/isiewu.jpg' },
    { id: 102, name: 'Grilled Chicken', price: 4500, image: '/images/jollof.jpg' },
    { id: 103, name: 'Asun Special', price: 4500, image: '/images/bushmeat.jpg' },
  ];

  // --- HOME PAGE COMPONENT ---
  const renderHome = () => (
    <>
      <section id="hero" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 className="hero-title" style={styles.heroTitle}>GOOD FOOD. COLD <br/>DRINKS. GOOD VIBES.</h1>
          <p style={styles.heroSubtitle}>Premium Lounge · First Machine, Rumuekini, Port Harcourt</p>
          
          <div style={styles.heroButtons}>
            <button className="btn-gold" onClick={() => navigateTo('menu')}>View Full Menu</button>
            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} /> Get Directions
            </button>
            <button className="btn-gold" style={{ backgroundColor: 'var(--snooker-green)', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={18} /> Call Now
            </button>
          </div>
        </div>
      </section>

      <div className="content-wrapper" style={styles.contentWrapper}>
        <section className="section" style={styles.section}>
          <h2 className="section-title" style={styles.sectionTitle}>Today's Specials</h2>
          <div className="specials-grid" style={styles.specialsGrid}>
            {specials.map(item => (
              <div key={item.id} style={styles.specialCard}>
                <img src={item.image} alt={item.name} style={styles.specialImg} onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Special' }} />
                <div style={{ padding: '15px' }}>
                  <h3 style={{ color: 'var(--mahogany)', fontSize: '1.2rem', marginBottom: '5px' }}>{item.name}</h3>
                  <p style={{ color: 'var(--mahogany)', fontWeight: 'bold', fontSize: '1.1rem' }}>₦{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
             <button className="btn-outline" onClick={() => navigateTo('menu')}>See Full Menu & Order</button>
          </div>
        </section>

        <section className="section" style={{ ...styles.section, backgroundColor: 'rgba(26,67,45,0.1)', padding: '40px', borderRadius: '12px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <img 
              src="/images/snooker-room.png" 
              alt="JBN Snooker Tables" 
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', objectFit: 'cover', height: '300px' }} 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/500x350?text=Snooker+Room' }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--gold)', fontFamily: 'Playfair Display' }}>Championship Snooker</h2>
            <p style={{ fontSize: '1.1rem', color: '#D8CBB8', marginBottom: '30px', lineHeight: '1.6' }}>
              Experience the best tables in Rumuekini. Professional-grade cues, full bar service to your table, and an atmosphere built for the game.
            </p>
            <button className="btn-gold" onClick={() => navigateTo('snooker')}>Reserve Your Table Now</button>
          </div>
        </section>

        <section className="section" style={styles.section}>
          <div className="features-grid" style={styles.featuresGrid}>
            {[
              { icon: <Utensils size={40} strokeWidth={1} />, title: "Fine Dining" },
              { icon: <Wine size={40} strokeWidth={1} />, title: "Craft Drinks" },
              { icon: <Target size={40} strokeWidth={1} />, title: "Championship Snooker" },
              { icon: <Truck size={40} strokeWidth={1} />, title: "Delivery" },
              { icon: <Clock size={40} strokeWidth={1} />, title: "Happy Hour" },
              { icon: <Music size={40} strokeWidth={1} />, title: "Nightlife" }
            ].map((feature, idx) => (
              <div key={idx} style={styles.featureBox}>
                <div style={{ color: 'var(--gold)', marginBottom: '15px' }}>{feature.icon}</div>
                <h4 style={{ color: 'var(--beige-light)', fontSize: '1.2rem', margin: 0 }}>{feature.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );

  // --- EVENTS COMPONENT ---
  const renderEvents = () => (
    <div style={{ padding: '120px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ fontSize: '4rem', color: 'var(--gold)', fontFamily: 'Playfair Display', marginBottom: '20px' }}>Events</h2>
      <p style={{ fontSize: '1.5rem', color: 'var(--beige-light)', fontStyle: 'italic' }}>Coming Soon...</p>
      <p style={{ color: '#D8CBB8', marginTop: '10px' }}>We are curating the best nightlife experiences for you.</p>
    </div>
  );

  // --- GALLERY COMPONENT ---
  const renderGallery = () => (
    <div className="content-wrapper" style={{ padding: '80px 50px', maxWidth: '1400px', margin: '0 auto', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--gold)', fontFamily: 'Playfair Display', marginBottom: '40px', textAlign: 'center' }}>Gallery</h2>
      <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', height: '250px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D8CBB8', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
            [ Placeholder Image {i} ]
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {/* --- NAVIGATION --- */}
      <nav className="app-nav" style={styles.nav}>
        {/* LOGO */}
        <div style={styles.logo} onClick={() => navigateTo('home')}>
          <img 
            src="/images/logo.jpg" 
            alt="JBN Lounge" 
            style={{ height: '55px', mixBlendMode: 'lighten', cursor: 'pointer' }} 
          />
        </div>
        
        {/* DESKTOP LINKS */}
        <div className="desktop-nav" style={styles.navLinks}>
          <button style={{ ...styles.navBtn, color: currentView === 'home' ? 'var(--gold)' : 'var(--beige-light)' }} onClick={() => navigateTo('home')}>Home</button>
          <button style={{ ...styles.navBtn, color: currentView === 'menu' ? 'var(--gold)' : 'var(--beige-light)' }} onClick={() => navigateTo('menu')}>Menus</button>
          <button style={{ ...styles.navBtn, color: currentView === 'snooker' ? 'var(--gold)' : 'var(--beige-light)' }} onClick={() => navigateTo('snooker')}>Snooker</button>
          <button style={{ ...styles.navBtn, color: currentView === 'events' ? 'var(--gold)' : 'var(--beige-light)' }} onClick={() => navigateTo('events')}>Events</button>
          <button style={{ ...styles.navBtn, color: currentView === 'gallery' ? 'var(--gold)' : 'var(--beige-light)' }} onClick={() => navigateTo('gallery')}>Gallery</button>
          <button className="btn-gold" onClick={() => navigateTo('menu')} style={{ padding: '8px 16px', fontSize: '14px' }}>Order Food</button>
        </div>

        {/* CART & MOBILE HAMBURGER */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={styles.cartBtn} onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingCart color="#C5A059" size={24} />
            <span style={styles.cartBadge}>{cart.length}</span>
          </div>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown" style={styles.mobileDropdown}>
          <button style={styles.mobileNavBtn} onClick={() => navigateTo('home')}>Home</button>
          <button style={styles.mobileNavBtn} onClick={() => navigateTo('menu')}>Menus</button>
          <button style={styles.mobileNavBtn} onClick={() => navigateTo('snooker')}>Snooker</button>
          <button style={styles.mobileNavBtn} onClick={() => navigateTo('events')}>Events</button>
          <button style={styles.mobileNavBtn} onClick={() => navigateTo('gallery')}>Gallery</button>
          <button className="btn-gold" onClick={() => navigateTo('menu')} style={{ width: '100%', marginTop: '10px' }}>Order Food</button>
        </div>
      )}

      {/* --- CART SIDEBAR --- */}
      {isCartOpen && (
        <div className="cart-sidebar" style={styles.cartSidebar}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Your Order</h3>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', color: 'var(--mahogany)', cursor: 'pointer' }}>X</button>
          </div>
          {cart.length === 0 ? <p style={{ fontStyle: 'italic' }}>Cart is empty</p> : (
            <div style={{ flexGrow: 1, overflowY: 'auto' }}>
              {cart.map((item, index) => (
                <div key={index} style={styles.cartItem}>
                  <span>{item.name}</span>
                  <span style={{color: 'var(--snooker-green)', fontWeight: 'bold'}}>₦{item.price}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ borderTop: '2px solid rgba(0,0,0,0.1)', paddingTop: '20px', marginTop: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem' }}>
              <strong>Total:</strong> <strong>₦{cartTotal}</strong>
            </div>
            <button className="btn-gold" style={{ width: '100%', marginTop: '20px' }}>Checkout</button>
          </div>
        </div>
      )}

      {/* --- MAIN CONTENT --- */}
      <main>
        {currentView === 'home' && renderHome()}
        
        {currentView === 'menu' && (
          <div className="content-wrapper" style={styles.contentWrapper}>
             <FoodMenu addToCart={addToCart} />
          </div>
        )}
        
        {currentView === 'snooker' && (
          <div className="content-wrapper" style={{ ...styles.contentWrapper, paddingTop: '40px', paddingBottom: '80px' }}>
             <SnookerLounge />
          </div>
        )}

        {currentView === 'events' && renderEvents()}
        
        {currentView === 'gallery' && renderGallery()}
      </main>

      {/* --- FOOTER --- */}
      <footer className="footer" style={styles.footer}>
        <div className="footer-grid" style={styles.footerGrid}>
          <div>
            <div style={{ marginBottom: '15px' }}>
              <img src="/images/1000256672_2.jpg" alt="JBN Lounge" style={{ height: '60px', mixBlendMode: 'lighten' }} />
            </div>
            <p style={styles.footerText}>First Machine, Rumuekini<br/>Port Harcourt, Rivers State<br/>Nigeria</p>
          </div>
          <div>
            <h4 style={styles.footerHeading}>Contact Us</h4>
            <p style={styles.footerText}><Phone size={14} style={{marginRight: '8px', verticalAlign: 'middle'}}/> 0902 882 8989</p>
            <p style={styles.footerText}>contact@jbnlounge.com</p>
          </div>
          <div>
            <h4 style={styles.footerHeading}>Opening Hours</h4>
            <p style={styles.footerText}>Mon - Thu: 10:00 AM - 12:00 AM</p>
            <p style={styles.footerText}>Fri - Sun: 10:00 AM - 2:00 AM</p>
          </div>
          <div>
            <h4 style={styles.footerHeading}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '15px', color: 'var(--beige-light)' }}>
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2026 JBN Lounge. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// --- INLINE STYLES ---
const styles = {
  nav: { position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 50px', backgroundColor: 'var(--mahogany-light)', borderBottom: '1px solid rgba(197, 160, 89, 0.2)' },
  logo: { display: 'flex', alignItems: 'center' },
  navLinks: { display: 'flex', gap: '25px', alignItems: 'center' },
  navBtn: { background: 'none', border: 'none', fontSize: '15px', fontWeight: '500', cursor: 'pointer', transition: 'color 0.2s' },
  
  mobileDropdown: { position: 'absolute', top: '85px', left: 0, width: '100%', backgroundColor: 'var(--mahogany)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', borderBottom: '2px solid var(--gold)', zIndex: 99 },
  mobileNavBtn: { background: 'none', border: 'none', color: 'var(--beige-light)', fontSize: '1.2rem', textAlign: 'left', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  
  cartBtn: { position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' },
  cartBadge: { position: 'absolute', top: '-8px', right: '-12px', background: 'var(--red-accent)', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' },
  cartSidebar: { position: 'fixed', top: '0', right: '0', width: '350px', height: '100vh', backgroundColor: 'var(--beige)', color: 'var(--mahogany)', padding: '30px', boxShadow: '-5px 0 25px rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', flexDirection: 'column' },
  cartItem: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '15px 0' },
  
  contentWrapper: { padding: '0 50px', maxWidth: '1400px', margin: '0 auto' },
  
  hero: { position: 'relative', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 20px', backgroundImage: 'url("/images/hero-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' },
  heroOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(34, 27, 18, 0.75)', zIndex: 1 },
  heroContent: { position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' },
  heroTitle: { fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '20px', color: 'var(--beige-light)', fontFamily: 'Playfair Display' },
  heroSubtitle: { fontSize: '1.1rem', marginBottom: '40px', color: '#D8CBB8', fontFamily: 'Work Sans', letterSpacing: '1px' },
  heroButtons: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' },
  
  section: { padding: '80px 0' },
  sectionTitle: { fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', fontFamily: 'Playfair Display' },
  
  specialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
  specialCard: { backgroundColor: 'var(--beige)', borderRadius: '8px', overflow: 'hidden' },
  specialImg: { width: '100%', height: '200px', objectFit: 'cover' },
  
  featuresGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' },
  featureBox: { border: '1px solid var(--gold)', borderRadius: '8px', padding: '40px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' },
  
  footer: { backgroundColor: 'var(--mahogany-light)', padding: '60px 50px 20px', borderTop: '2px solid rgba(197, 160, 89, 0.1)' },
  footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1400px', margin: '0 auto', paddingBottom: '40px' },
  footerHeading: { color: 'var(--beige-light)', fontSize: '1.2rem', marginBottom: '20px', fontFamily: 'Playfair Display' },
  footerText: { color: '#D8CBB8', marginBottom: '10px', fontSize: '0.95rem', lineHeight: '1.6' },
  footerBottom: { textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(197, 160, 89, 0.2)', color: '#D8CBB8', fontSize: '0.85rem' }
};

export default App;