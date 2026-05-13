/**
 * ============================================
 * 📁 src/components/sections/ContactSection.tsx
 * ============================================
 * 
 * Section kontak dengan form dan info kontak.
 * 
 * Fitur:
 * - Form kontak lengkap (nama, email, subject, message)
 * - Validasi form sederhana
 * - Info kontak (email, telepon, lokasi)
 * - Social media links
 * - Animasi submit
 * - Map placeholder
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../data/portfolio-data';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulasi pengiriman
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={20} />, label: 'Telepon', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin size={20} />, label: 'Lokasi', value: personalInfo.location, href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Kontak"
          title="Mari Berkolaborasi"
          subtitle="Punya proyek menarik? Jangan ragu untuk menghubungi saya!"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-dark-400">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-48 rounded-2xl glass overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-dark-900 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary-400 mx-auto mb-2" />
                  <p className="text-dark-300 font-medium">Jakarta, Indonesia</p>
                  <p className="text-dark-500 text-sm">🌏 Remote Friendly</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-dark-800">Pilih Subject</option>
                  <option value="project" className="bg-dark-800">Proyek Baru</option>
                  <option value="consulting" className="bg-dark-800">Konsultasi</option>
                  <option value="collaboration" className="bg-dark-800">Kolaborasi</option>
                  <option value="hiring" className="bg-dark-800">Job Opportunity</option>
                  <option value="other" className="bg-dark-800">Lainnya</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan tentang proyek atau ide Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                  status === 'sent'
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5'
                } disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
              >
                {status === 'idle' && (
                  <>
                    <Send size={18} />
                    Kirim Pesan
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Mengirim...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle2 size={18} />
                    Pesan Terkirim!
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
