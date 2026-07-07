import React, { useState } from 'react';

const FoodMenu = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Food');

  // --- MENU DATA (No Prices) ---
  const menuData = {
    Food: [
      { id: 'f1', name: 'Isiewu Special' },
      { id: 'f2', name: 'Asun (Spicy Goat Meat)' },
      { id: 'f3', name: 'Catfish Pepper Soup' },
      { id: 'f4', name: 'Grilled Croaker Fish & Yam Chips' },
      { id: 'f5', name: 'Jollof Rice with Grilled Turkey' },
      { id: 'f6', name: 'Spicy Chicken Wings (6pcs)' }
    ],
    Drinks: [
      { id: 'd1', name: 'Hennessy VSOP' },
      { id: 'd2', name: 'Moët & Chandon Imperial' },
      { id: 'd3', name: 'Heineken (Chilled)' },
      { id: 'd4', name: 'Guinness Stout' },
      { id: 'd5', name: 'Red Bull Energy Drink' },
      { id: 'd6', name: 'Fresh Pineapple Juice' }
    ],
    Extras: [
      { id: 'e1', name: 'Extra Portion of Plantain' },
      { id: 'e2', name: 'Portion of Fries' },
      { id: 'e3', name: 'Extra Turkey' },
      { id: 'e4', name: 'Bottled Water' }
    ]
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Lounge Menu</h2>
        <p style={styles.subtitle}>Select items to add to your order list, then checkout via WhatsApp.</p>
      </div>

      {/* --- CATEGORY TABS --- */}
      <div style={styles.tabContainer}>
        {Object.keys(menuData).map(category => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              ...styles.tabButton,
              backgroundColor: activeCategory === category ? 'var(--gold)' : 'transparent',
              color: activeCategory === category ? 'var(--mahogany)' : 'var(--beige-light)',
              border: activeCategory === category ? '1px solid var(--gold)' : '1px solid rgba(197, 160, 89, 0.3)'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- MENU GRID --- */}
      <div style={styles.grid}>
        {menuData[activeCategory].map(item => (
          <div key={item.id} style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.itemName}>{item.name}</h3>
              <button 
                onClick={() => addToCart(item)}
                style={styles.addButton}
              >
                + Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- INLINE STYLES ---
const styles = {
  container: { padding: '40px 0', minHeight: '60vh' },
  header: { textAlign: 'center', marginBottom: '40px' },
  title: { fontSize: '3rem', color: 'var(--gold)', fontFamily: 'Playfair Display', marginBottom: '10px' },
  subtitle: { color: '#D8CBB8', fontSize: '1.1rem' },
  
  tabContainer: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' },
  tabButton: { padding: '10px 25px', borderRadius: '30px', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s ease', outline: 'none' },
  
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  card: { backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(197, 160, 89, 0.2)', borderRadius: '10px', padding: '20px', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  cardContent: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' },
  itemName: { color: 'var(--beige-light)', fontSize: '1.2rem', margin: 0, flex: 1 },
  addButton: { backgroundColor: 'var(--gold)', color: 'var(--mahogany)', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', whiteSpace: 'nowrap' }
};

export default FoodMenu;