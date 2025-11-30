import Link from 'next/link';
import styles from '../contact.module.css';

export default function ContactThankYouPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contactCard}>
        <h2>Thank You</h2>
        <p style={{fontFamily:'Poppins', fontSize:'1rem', color:'#374151', marginTop:0}}>Your message has been received. We will get back to you shortly.</p>
        <div style={{marginTop:'32px', display:'flex', gap:'16px', justifyContent:'center'}}>
          <Link href="/" style={{
            background:'#000', color:'#fff', padding:'12px 20px', borderRadius:'12px', fontFamily:'Poppins', fontSize:'0.875rem', fontWeight:600,
            textDecoration:'none'
          }}>Return Home</Link>
          <Link href="/contact" style={{
            background:'#f3f4f6', color:'#111827', padding:'12px 20px', borderRadius:'12px', fontFamily:'Poppins', fontSize:'0.875rem', fontWeight:600,
            textDecoration:'none', border:'2px solid #e5e7eb'
          }}>Submit Another</Link>
        </div>
      </div>
    </div>
  );
}
