import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata = {
  title: 'Kebijakan Privasi - Astro Digital Solution',
  description: 'Kebijakan privasi Astro Digital Solution yang menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.',
};

const PrivacyPolicy = () => {
  return (
    <main className="main-content">
      <SiteHeader />
      
      <div style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Kebijakan Privasi
            </h1>
            
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <div style={{ lineHeight: '1.8', color: '#374151' }}>
              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  1. Pendahuluan
                </h2>
                <p>
                  Astro Digital Solution ("kami", "kita", atau "perusahaan") menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  2. Informasi yang Kami Kumpulkan
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                  Kami dapat mengumpulkan informasi berikut:
                </p>
                <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                  <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, dan informasi kontak lainnya yang Anda berikan saat menghubungi kami atau menggunakan layanan kami.</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, sistem operasi, dan informasi perangkat yang Anda gunakan untuk mengakses website kami.</li>
                  <li><strong>Data Penggunaan:</strong> Informasi tentang bagaimana Anda menggunakan website dan layanan kami, termasuk halaman yang dikunjungi dan waktu yang dihabiskan.</li>
                  <li><strong>Cookies dan Teknologi Serupa:</strong> Kami menggunakan cookies dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna dan menganalisis penggunaan website.</li>
                </ul>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  3. Bagaimana Kami Menggunakan Informasi
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                  Kami menggunakan informasi yang kami kumpulkan untuk:
                </p>
                <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Menyediakan dan memelihara layanan kami</li>
                  <li>Menanggapi pertanyaan dan permintaan Anda</li>
                  <li>Mengirimkan informasi tentang layanan kami (dengan persetujuan Anda)</li>
                  <li>Meningkatkan dan mengoptimalkan website dan layanan kami</li>
                  <li>Mendeteksi dan mencegah aktivitas yang mencurigakan atau ilegal</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                </ul>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  4. Berbagi Informasi
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Namun, kami dapat membagikan informasi dalam situasi berikut:
                </p>
                <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                  <li><strong>Dengan Persetujuan Anda:</strong> Kami dapat membagikan informasi jika Anda memberikan persetujuan eksplisit.</li>
                  <li><strong>Penyedia Layanan:</strong> Kami dapat membagikan informasi dengan penyedia layanan pihak ketiga yang membantu kami mengoperasikan bisnis kami (seperti hosting, analitik, dan layanan email).</li>
                  <li><strong>Kewajiban Hukum:</strong> Kami dapat membagikan informasi jika diwajibkan oleh hukum atau untuk melindungi hak, properti, atau keselamatan kami atau orang lain.</li>
                </ul>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  5. Keamanan Data
                </h2>
                <p>
                  Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman, dan kami tidak dapat menjamin keamanan mutlak.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  6. Retensi Data
                </h2>
                <p>
                  Kami menyimpan informasi pribadi Anda selama yang diperlukan untuk mencapai tujuan yang dijelaskan dalam Kebijakan Privasi ini, kecuali jika diperlukan penyimpanan yang lebih lama untuk mematuhi kewajiban hukum atau menyelesaikan sengketa.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  7. Hak Anda
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                  Anda memiliki hak berikut terkait informasi pribadi Anda:
                </p>
                <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                  <li><strong>Hak Akses:</strong> Anda dapat meminta salinan informasi pribadi yang kami simpan tentang Anda.</li>
                  <li><strong>Hak Perbaikan:</strong> Anda dapat meminta kami untuk memperbaiki informasi yang tidak akurat atau tidak lengkap.</li>
                  <li><strong>Hak Penghapusan:</strong> Anda dapat meminta kami untuk menghapus informasi pribadi Anda dalam keadaan tertentu.</li>
                  <li><strong>Hak Pembatasan:</strong> Anda dapat meminta kami untuk membatasi pemrosesan informasi pribadi Anda.</li>
                  <li><strong>Hak Portabilitas:</strong> Anda dapat meminta kami untuk memberikan informasi pribadi Anda dalam format yang dapat dibaca mesin.</li>
                </ul>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  8. Cookies dan Teknologi Pelacakan
                </h2>
                <p style={{ marginBottom: '1rem' }}>
                  Website kami menggunakan cookies dan teknologi pelacakan serupa untuk:
                </p>
                <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis penggunaan website</li>
                  <li>Meningkatkan pengalaman pengguna</li>
                  <li>Menyediakan konten yang dipersonalisasi</li>
                </ul>
                <p>
                  Anda dapat mengontrol penggunaan cookies melalui pengaturan browser Anda. Namun, menonaktifkan cookies dapat mempengaruhi fungsionalitas website.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  9. Perubahan Kebijakan Privasi
                </h2>
                <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan material dengan memposting kebijakan baru di website ini dan memperbarui tanggal "Terakhir diperbarui". Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala.
                </p>
              </section>

              <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: '#1f2937' }}>
                  10. Hubungi Kami
                </h2>
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami, silakan hubungi kami di:
                </p>
                <div style={{ 
                  background: '#f3f4f6', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  marginTop: '1rem' 
                }}>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Email:</strong> privacy@astrodigital.com
                  </p>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Alamat:</strong> Astro Digital Solution<br />
                    Jakarta, Indonesia
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <SiteFooter />
    </main>
  );
};

export default PrivacyPolicy; 