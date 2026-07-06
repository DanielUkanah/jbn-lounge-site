import React, { useState } from 'react';

export default function SnookerLounge() {
  const [booked, setBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
      
      {/* --- PART 1: HERO IMAGE --- */}
      <div style={styles.heroSection}>
        <img
          src="/images/snooker-room.png"
          alt="Premium Snooker"
          style={styles.heroImage}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500?text=Snooker+Room' }}
        />
        <div style={styles.overlay}></div>
        <h1 style={styles.heroTitle}>Championship Snooker</h1>
      </div>

      {/* --- PART 2: DETAILS & SCOREBOARD --- */}
      <div style={styles.infoContainer}>
        
        {/* Left Side: Description */}
        <div style={styles.infoText}>
          <h2 style={{ color: 'var(--gold)', fontFamily: 'Playfair Display', fontSize: '2.5rem', marginBottom: '20px' }}>
            The Best Tables in Port Harcourt
          </h2>
          <p style={{ color: 'var(--beige-light)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Whether you're a seasoned pro or just looking to unwind with friends, our snooker lounge offers a premium experience. Featuring four professional-grade tables, perfectly leveled slate, and top-tier cues.
          </p>
          <p style={{ color: 'var(--beige-light)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Enjoy full bar and food service delivered directly to your table so you never have to step away from the game.
          </p>
        </div>

        {/* Right Side: The Scoreboard / Price List */}
        <div style={styles.scoreboard}>
          <h3 style={styles.boardTitle}>RATES & STATUS</h3>
          
          <div style={styles.boardRow}>
            <span>Standard Table (1 Hr)</span>
            <span style={{ color: 'var(--gold)' }}>₦1,500</span>
          </div>
          <div style={styles.boardRow}>
            <span>VIP Service (1 Hr)</span>
            <span style={{ color: 'var(--gold)' }}>₦2,500</span>
          </div>
          
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.2)', margin: '20px 0' }}></div>
          
          <div style={styles.boardRow}>
            <span>Table 1 & 2</span>
            <span style={{ color: '#4CAF50' }}>Available</span>
          </div>
          <div style={styles.boardRow}>
            <span>Table 3 & 4</span>
            <span style={{ color: 'var(--red-accent)' }}>Booked</span>
          </div>
        </div>

      </div>

      {/* --- PART 3: RESERVATION FORM --- */}
      <div style={styles.reservationSection}>
        <div style={styles.formWrapper}>
          <h2 style={{ color: 'var(--mahogany)', fontFamily: 'Playfair Display', fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px' }}>
            Reserve Your Table
          </h2>
          <p style={{ textAlign: 'center', color: '#5b5140', marginBottom: '40px' }}>
            Secure your spot for the weekend. Walk-ins are welcome, subject to availability.
          </p>

          <form onSubmit={handleBooking} style={styles.form}>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}>Select Date</label>
              <input type="date" required style={styles.input} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Select Time</label>
              <select required style={styles.input}>
                <option value="">-- Choose a Time --</option>
                <option value="14:00">2:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Table Type</label>
              <select required style={styles.input}>
                <option value="standard">Standard - ₦1,500/hr</option>
                <option value="vip">VIP Service - ₦2,500/hr</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-gold"
              style={{
                gridColumn: '1 / -1', // Spans the full width of the grid
                padding: '15px',
                fontSize: '1.1rem',
                marginTop: '10px',
                backgroundColor: booked ? 'var(--snooker-green)' : 'var(--gold)',
                color: booked ? 'white' : 'var(--mahogany)'
              }}
            >
              {booked ? "Booking Confirmed!" : "Confirm Reservation"}
            </button>
            
          </form>
        </div>
      </div>

    </div>
  );
}

// --- INLINE STYLES ---
const styles = {
  // Hero Image
  heroSection: { position: 'relative', width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden' },
  heroImage: { width: '100%', height: '100%', objectFit: 'cover' },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(26,67,45,0.7)' },
  heroTitle: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'var(--gold)', fontSize: '4.5rem', fontFamily: 'Playfair Display', textAlign: 'center', width: '100%', textShadow: '2px 4px 10px rgba(0,0,0,0.5)' },

  // Info & Scoreboard
  infoContainer: { display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' },
  infoText: { flex: '1 1 400px' },
  
  scoreboard: { flex: '1 1 350px', backgroundColor: '#111', border: '8px solid var(--mahogany-light)', borderRadius: '8px', padding: '40px 30px', boxShadow: 'inset 0 0 20px rgba(0,0,0,1), 0 10px 30px rgba(0,0,0,0.5)' },
  boardTitle: { color: 'var(--beige-light)', textAlign: 'center', fontFamily: 'Work Sans', letterSpacing: '3px', marginBottom: '30px', fontSize: '1.2rem', fontWeight: 'bold' },
  boardRow: { display: 'flex', justifyContent: 'space-between', fontFamily: 'Courier New, monospace', fontSize: '1.2rem', color: '#fff', padding: '12px 0' },

  // Reservation Form
  reservationSection: { display: 'flex', justifyContent: 'center', padding: '20px 0 40px' },
  formWrapper: { backgroundColor: 'var(--beige)', padding: '50px', borderRadius: '12px', width: '100%', maxWidth: '900px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' },
  form: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '10px' },
  label: { color: 'var(--mahogany)', fontWeight: 'bold', fontSize: '0.95rem' },
  input: { padding: '14px', borderRadius: '4px', border: '1px solid rgba(34,27,18,0.2)', fontFamily: 'Work Sans', fontSize: '15px', backgroundColor: 'var(--beige-light)' }
};