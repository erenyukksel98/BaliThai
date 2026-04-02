/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Clock, Star, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHONE_NUMBER = "05305259310";
const WHATSAPP_LINK = `https://wa.me/90${PHONE_NUMBER.substring(1)}`;
const PHONE_LINK = `tel:${PHONE_NUMBER}`;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-center py-2 text-sm font-medium tracking-wide">
        🌸 Sadece Bayanlara Özel | Randevu: {PHONE_NUMBER.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')}
      </div>

      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
        }`}
        style={{ top: isScrolled ? '0' : 'auto' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-primary">
              <span className="font-serif font-bold text-xl">B</span>
            </div>
            <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-dark' : 'text-white drop-shadow-md'}`}>
              BaliThai
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Hizmetler', 'Hakkımızda', 'Yorumlar', 'İletişim'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-primary transition-colors ${
                  isScrolled ? 'text-dark' : 'text-white drop-shadow-md'
                }`}
              >
                {item}
              </button>
            ))}
            <a 
              href={PHONE_LINK}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-secondary transition-colors shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Randevu Al
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-dark p-2 bg-white/80 rounded-full backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Hizmetler', 'Hakkımızda', 'Yorumlar', 'İletişim'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-2xl font-serif text-dark text-left border-b border-gray-100 pb-4"
              >
                {item}
              </button>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <a 
                href={PHONE_LINK}
                className="bg-primary text-white px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp'tan Yaz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
          alt="Spa Background" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-medium tracking-widest mb-6">
              ✦ SADECE BAYANLARA ÖZEL ✦
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
              Uzak Doğu'nun Şifa Dokunuşu <br className="hidden md:block" />
              <span className="text-accent italic">İzmir'de Sizinle</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
              Bali'nin doğal güzelliğinden ilham alan geleneksel Tay tedavileriyle beden ve zihninizi yeniden dengeleyin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={PHONE_LINK}
                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara: {PHONE_NUMBER.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')}
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-dark px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                WhatsApp'tan Randevu Al
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkımızda" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">
                BaliThai Masaj'a <br />
                <span className="text-primary italic">Hoş Geldiniz</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 font-light">
                <p>
                  BaliThai Masaj, Uzak Doğu'nun köklü şifa geleneğini İzmir'e taşıyor. Bali'nin mistik atmosferinden ve Tayland'ın yüzyıllık masaj sanatından ilham alarak oluşturduğumuz bu özel mekan, yalnızca kadınlara ait bir huzur adası olarak tasarlanmıştır.
                </p>
                <p>
                  Yorucu günlerin ardından kendinize zaman ayırın; uzman terapistlerimizin dokunuşlarıyla vücudunuzu şımartın, zihninizi dinlendirin.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm">
                  <span className="text-3xl mb-3">🌸</span>
                  <span className="font-semibold text-dark text-sm">Sadece Bayanlara Özel</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm">
                  <span className="text-3xl mb-3">🤲</span>
                  <span className="font-semibold text-dark text-sm">Uzman Terapistler</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm">
                  <span className="text-3xl mb-3">🕯️</span>
                  <span className="font-semibold text-dark text-sm">Huzurlu & Hijyenik</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa Hot Stones" 
                className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 font-light">
              Her birini uzman ellerin titizlikle uyguladığı, sizi yeniden doğuracak masaj deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Geleneksel Tay Masajı",
                icon: "🙏",
                desc: "Binlerce yıllık Tayland geleneğinden gelen bu masaj, enerji hatlarınızı dengeleyerek vücudunuzu yeniden canlandırır. Germe ve baskı teknikleriyle kaslarınızdaki gerilimi çözer.",
                img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Aromaterapi Masajı",
                icon: "🌿",
                desc: "Özenle seçilmiş doğal esansiyel yağlarla uygulanan bu masaj, hem bedeninizi hem zihninizi derin bir rahatlama haline getirir. Aromatik koku terapisiyle stres erir gider.",
                img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Sıcak Taş Masajı",
                icon: "🖤",
                desc: "Isıtılmış volkanik taşların sıcaklığı ile birleşen derin masaj teknikleri, kaslarınızın en derin katmanlarına kadar nüfuz eder. Soğuk havalarda ideal bir deneyim.",
                img: "https://images.unsplash.com/photo-1544161513-01f11270529d?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="group rounded-3xl overflow-hidden bg-background shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-dark mb-4">{service.title}</h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                  >
                    Detay & Randevu <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden BaliThai */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Neden BaliThai Masaj?</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Yalnızca Bayanlar İçin", desc: "Kendinizi tamamen güvende hissedin" },
              { title: "Uzman & Sertifikalı Terapistler", desc: "Yıllarca eğitim almış profesyoneller" },
              { title: "Geleneksel Uzak Doğu Teknikleri", desc: "Bali ve Tayland kökenli özgün yöntemler" },
              { title: "Titizlikle Sağlanan Hijyen", desc: "Her seans öncesi tam sterilizasyon" },
              { title: "Huzurlu & Özel Ortam", desc: "Günlük hayatın gürültüsünden uzak bir köşe" },
              { title: "Kolay Randevu", desc: "Telefon veya WhatsApp ile 1 dakikada randevu" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">{item.title}</h3>
                  <p className="text-white/60 font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yorumlar */}
      <section id="yorumlar" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-lg text-gray-600 font-light">
              Bizi tercih eden misafirlerimizin deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                text: "Hayatımda gittiğim en huzurlu masaj salonu. Sıcak taş masajından sonra adeta yeniden doğdum. Kesinlikle tekrar geleceğim!",
                author: "Ayşe K."
              },
              {
                text: "Sadece bayanlara özel olması benim için çok büyük artı. Kendimi tamamen rahat hissettim. Terapistler çok profesyonel.",
                author: "Selin T."
              },
              {
                text: "Aromaterapi masajı inanılmaz bir deneyimdi. Ortam çok temiz ve huzurlu. İzmir'de böyle bir yer bulduğuma sevindim.",
                author: "Merve A."
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="text-accent text-4xl font-serif absolute top-6 left-6 opacity-20">"</div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-700 font-light italic mb-6 relative z-10">
                  "{review.text}"
                </p>
                <p className="font-semibold text-dark">— {review.author}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="#" 
              className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
            >
              Google'da Tüm Yorumları Gör <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Kendinize Zaman Ayırın</h2>
          <p className="text-xl text-white/90 font-light mb-12">
            Yorucu bir günün ardından ya da sadece kendinizi şımartmak için — tek yapmanız gereken bizi aramak. Randevunuzu hemen alın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a 
              href={PHONE_LINK}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              0530 525 93 10 — Hemen Ara
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Randevu Al
            </a>
          </div>
          
          <p className="text-white/70 text-sm">
            Her gün 10:00 - 20:00 | Gaziemir, İzmir
          </p>
        </div>
      </section>

      {/* İletişim & Konum */}
      <section id="iletişim" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif text-dark mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Telefon & WhatsApp</h4>
                    <a href={PHONE_LINK} className="text-gray-600 hover:text-primary transition-colors block mb-1">
                      0530 525 93 10
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-sm font-medium hover:underline">
                      WhatsApp'tan mesaj gönder
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Adres</h4>
                    <p className="text-gray-600">
                      Hürriyet, 1099. Sk. 43B Sarnıç<br />
                      35414 Gaziemir/İzmir
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Çalışma Saatleri</h4>
                    <p className="text-gray-600">
                      Her gün<br />
                      10:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=H%C3%BCrriyet%2C%201099.%20Sk.%2043B%20sarni%C3%A7%2C%2035414%20Gaziemir%2F%C4%B0zmir&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BaliThai Masaj Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white/70 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <span className="font-serif font-bold">B</span>
              </div>
              <span className="font-serif text-xl font-bold text-white">
                BaliThai
              </span>
            </div>
            
            <div className="flex justify-center gap-6 text-sm">
              <button onClick={() => scrollToSection('hizmetler')} className="hover:text-white transition-colors">Hizmetler</button>
              <button onClick={() => scrollToSection('hakkımızda')} className="hover:text-white transition-colors">Hakkımızda</button>
              <button onClick={() => scrollToSection('iletişim')} className="hover:text-white transition-colors">İletişim</button>
            </div>
            
            <div className="flex justify-center md:justify-end gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-sm text-white/50 pt-8 border-t border-white/10">
            <p className="mb-2">© 2025 BaliThai Masaj — Tüm Hakları Saklıdır.</p>
            <p>Gaziemir, İzmir | 0530 525 93 10</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href={PHONE_LINK}
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary transition-colors hover:scale-110 transform"
          aria-label="Hemen Ara"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
      
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20bd5a] transition-colors hover:scale-110 transform"
          aria-label="WhatsApp'tan Yaz"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
