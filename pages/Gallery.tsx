import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-playfair text-yellow-400 text-center mb-12">School Memories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`relative group overflow-hidden rounded-xl border border-gray-700 ${item.size === 'portrait' ? 'row-span-2' : ''} ${item.size === 'square' ? 'md:col-span-1' : ''} ${item.size === 'landscape' ? 'md:col-span-2' : ''}`}
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-yellow-400 text-xs uppercase tracking-wider mb-1">{item.category}</span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;