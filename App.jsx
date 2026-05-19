import React, { useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, name: "أبو علي", craft: "حداد", city: "بغداد", phone: "07700000000", desc: "تصليح أبواب ليزر" },
    { id: 2, name: "صادق", craft: "صباغ", city: "البصرة", phone: "07800000000", desc: "صبغ غرف نوم" }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <h1>مهنيي العراق 🇮🇶</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '8px' }}>
          <h3>{post.name} - {post.craft}</h3>
          <p>المحافظة: {post.city}</p>
          <p>الوصف: {post.desc}</p>
          <a href={`tel:${post.phone}`} style={{ background: 'green', color: 'white', padding: '5px 10px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block' }}>
            اتصل الآن: {post.phone}
          </a>
        </div>
      ))}
    </div>
  );
}
