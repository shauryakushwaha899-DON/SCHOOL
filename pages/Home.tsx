import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES, NOTICES } from '../constants';
import Hero from '../components/Hero';
import ICardGenerator from '../components/ICardGenerator';
import { FileText, CreditCard, Calendar, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-12">
      <Hero />

      {/* Motto Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center py-12 px-4"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair italic text-gray-300 max-w-4xl mx-auto leading-relaxed">
          "Empowering students with knowledge, integrity, and the skills to navigate the future."
        </h2>
        <div className="w-24 h-1 bg-yellow-500/50 mx-auto mt-6 rounded-full" />
      </motion.div>

      {/* Principal & Manager Section */}
      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: "LAL SINGH", role: "Principal", quote: "Our goal is to provide the best education and values.", img: IMAGES.principal, border: 'border-yellow-400' },
          { title: "ANJALI KUSHWAHA", role: "Manager", quote: "We provide a safe and supportive environment for students.", img: IMAGES.manager, border: 'border-gray-400' }
        ].map((person, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-gray-800 p-8 rounded-xl text-center border-t-4 ${person.border} shadow-lg hover:shadow-2xl transition duration-300`}
          >
            <img src={person.img} alt={person.role} className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 ${person.border}`} />
            <h3 className="text-2xl font-bold text-white">{person.title}</h3>
            <p className="text-yellow-500 font-semibold mb-3">{person.role}</p>
            <p className="text-gray-400 italic">"{person.quote}"</p>
          </motion.div>
        ))}
      </section>

      {/* Digital Facilities Grid */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Digital Campus</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <FileText size={32} />, label: "Marksheet", color: "bg-blue-600" },
            { icon: <CreditCard size={32} />, label: "Fees Payment", color: "bg-green-600" },
            { icon: <Calendar size={32} />, label: "Attendance", color: "bg-purple-600" },
            { icon: <BookOpen size={32} />, label: "Library", color: "bg-red-600" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`${item.color} p-6 rounded-xl flex flex-col items-center justify-center text-white shadow-lg cursor-pointer h-40`}
            >
              <div className="mb-3 bg-white/20 p-3 rounded-full">{item.icon}</div>
              <span className="font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content Split: Notices & I-Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
        
        {/* Notice Board */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-yellow-400 rounded-full"></span> Latest Notices
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 h-[500px] overflow-y-auto">
            <ul className="space-y-4">
              {NOTICES.map((notice) => (
                <motion.li 
                  key={notice.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-yellow-500 hover:bg-gray-700 transition"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-gray-100">{notice.title}</h4>
                    {notice.isNew && <span className="bg-red-500 text-xs px-2 py-1 rounded text-white animate-pulse">NEW</span>}
                  </div>
                  <small className="text-gray-400 mt-2 block">{notice.date}</small>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* I-Card Generator */}
        <ICardGenerator />
        
      </div>
    </div>
  );
};

export default Home;