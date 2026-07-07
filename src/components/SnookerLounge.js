import React, { useState } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // This imports your specific database connection

const SnookerLounge = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isBooking, setIsBooking] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsBooking(true);
    setStatus({ type: '', message: '' });

    try {
      // 1. Ask Firebase: "How many bookings already exist for this exact date and time?"
      const q = query(
        collection(db, "bookings"),
        where("date", "==", date),
        where("time", "==", time)
      );
      
      const querySnapshot = await getDocs(q);
      const tablesBooked = querySnapshot.size;

      // 2. The Logic: JBN Lounge only has 4 tables.
      if (tablesBooked >= 4) {
        setStatus({ 
          type: 'error', 
          message: `Sorry! All 4 tables are fully booked on ${date} at ${time}. Please choose a different time.` 
        });
        setIsBooking(false);
        return;
      }

      // 3. If there is space, save the new booking to Firebase!
      await addDoc(collection(db, "bookings"), {
        name: name,
        date: date,
        time: time,
        timestamp: new Date()
      });

      // 4. Show success and clear the form
      setStatus({ 
        type: 'success', 
        message: `Success, ${name}! Your table is secured for ${date} at ${time}.` 
      });
      setName('');
      setDate('');
      
      // TODO: Email Notification Logic goes here!
      // Add this inside your handleBooking function, right after the success message:

      // 5. Trigger automatic WhatsApp notification to the owner
        const whatsappMessage = `Hello! New Snooker Booking:%0A- Name: ${name}%0A- Date: ${date}%0A- Time: ${time}`;
        window.open(`https://wa.me/2349031859655?text=${whatsappMessage}`, '_blank');

    } catch (error) {
      console.error("Error writing to database: ", error);
      setStatus({ 
        type: 'error', 
        message: 'There was an error connecting to the server. Please try again.' 
      });
    }
    
    setIsBooking(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reserve a Snooker Table</h2>
      <p style={styles.subtitle}>Check availability and secure your table in advance.</p>

      <div style={styles.formCard}>
        <form onSubmit={handleBooking} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input 
              type="text" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={styles.input}
              placeholder="e.g. Nnamdi"
            />
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Date</label>
              <input 
                type="date" 
                required 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                style={styles.input}
              />
            </div>
            
            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Time</label>
              <select 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                style={styles.input}
              >
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </div>
          </div>

          {status.message && (
            <div style={{ 
              padding: '15px', 
              borderRadius: '5px', 
              marginBottom: '20px',
              backgroundColor: status.type === 'error' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(37, 211, 102, 0.1)',
              color: status.type === 'error' ? '#ff6b6b' : '#25D366',
              border: `1px solid ${status.type === 'error' ? '#ff6b6b' : '#25D366'}`
            }}>
              {status.message}
            </div>
          )}

          <button 
            type="submit" 
            className="btn-gold" 
            style={{ width: '100%', padding: '15px', fontSize: '1.1rem', opacity: isBooking ? 0.7 : 1 }}
            disabled={isBooking}
          >
            {isBooking ? 'Checking Availability...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- INLINE STYLES ---
const styles = {
  container: { maxWidth: '700px', margin: '0 auto', textAlign: 'center' },
  heading: { fontSize: '2.8rem', color: 'var(--gold)', fontFamily: 'Playfair Display', marginBottom: '10px' },
  subtitle: { color: '#D8CBB8', fontSize: '1.1rem', marginBottom: '40px' },
  formCard: { backgroundColor: 'var(--beige)', padding: '40px', borderRadius: '12px', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' },
  form: { display: 'flex', flexDirection: 'column' },
  inputGroup: { marginBottom: '25px', display: 'flex', flexDirection: 'column' },
  label: { color: 'var(--mahogany)', fontWeight: 'bold', marginBottom: '8px', fontSize: '0.95rem' },
  input: { padding: '12px 15px', border: '1px solid rgba(0,0,0,0.2)', borderRadius: '5px', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }
};

export default SnookerLounge;