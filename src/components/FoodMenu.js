import React from 'react';

const menuItems = [
  { id: 1, name: 'Fisherman Soup', price: 4500, image: '/images/fisherman.jpg', desc: 'Fresh seafood, periwinkles, and native spice in a rich broth.' },
  { id: 2, name: 'Isiewu', price: 4500, image: '/images/isiewu.jpg', desc: 'Traditional spicy peppered goat head delicacy.' },
  { id: 3, name: 'Jollof & Grilled Chicken', price: 3500, image: '/images/jollof.jpg', desc: 'Smoky party jollof served with wood-fired chicken thigh.' },
  { id: 4, name: 'Bush Meat Pepper Soup', price: 5000, image: '/images/bushmeat.jpg', desc: 'Hot, spicy, and perfectly seasoned for the rainy season.' },
];

export default function FoodMenu({ addToCart }) {
  return (
    <div id="menu" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Food Menu</h2>
        <p style={{ color: '#D8CBB8' }}>Local delicacies, made fresh, plated the way you'd want at your own table.</p>
      </div>

      <div style={styles.grid}>
        {menuItems.map(item => (
          <div key={item.id} className="card" style={styles.card}>
            
            {/* THIS IS WHERE YOUR IMAGE GOES */}
            <img 
              src={item.image} 
              alt={item.name} 
              style={styles.cardImage} 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=JBN+Lounge' }} 
            />
            
            <div style={styles.cardBody}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <h3 style={{ color: 'var(--mahogany)', fontSize: '1.2rem', margin: 0 }}>{item.name}</h3>
                <span style={styles.price}>₦{item.price.toLocaleString()}</span>
              </div>
              <p style={styles.desc}>{item.desc}</p>
              <button className="btn-gold" style={{ width: '100%', marginTop: '15px' }} onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' },
  card: { display: 'flex', flexDirection: 'column', border: '1px solid rgba(0,0,0,0.1)' },
  cardImage: { width: '100%', height: '220px', objectFit: 'cover', borderBottom: '1px solid rgba(0,0,0,0.05)' },
  cardBody: { padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  price: { fontWeight: 'bold', color: 'var(--snooker-green)', fontSize: '1.1rem' },
  desc: { fontSize: '14px', color: '#5b5140', flexGrow: 1, lineHeight: '1.5' }
};