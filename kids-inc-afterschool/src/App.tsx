import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Palette, 
  ShieldCheck, 
  ChevronRight, 
  Star,
  Clock,
  Heart,
  Bus,
  Apple
} from 'lucide-react';

const bentoItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center">
      {/* Header/Nav inside or outside bento? Let's keep a simple header outside */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          {/* Please upload your logo to the /public folder as 'logo.png' */}
          <img src="/logo.png" alt="Kids Inc Lyons Den" className="h-12 w-auto object-contain" />
        </div>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSeB1ut-r_mCftScKMknIP19bUaORwQY4fDOzJH_faOmrqowkQ/viewform" target="_blank" rel="noopener noreferrer"
          className="bg-brand-main hover:bg-brand-main-dark text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
        >
          Enroll Now
        </a>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[250px] gap-4 md:gap-6"
      >
        {/* BIG HERO CELL */}
        <motion.div variants={bentoItem} className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2 bg-brand-main rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-sm group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col h-full justify-center sm:justify-between items-start gap-6 sm:gap-0">
            <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-4">
              <span className="bg-pastel-yellow text-amber-950 text-xs font-black px-2 py-1 rounded-full uppercase tracking-wider">
                2026/2027 TERM
              </span>
              <span className="text-sm font-bold text-white">
                Taking Registrations
              </span>
            </div>
            
            <div className="max-w-2xl">
              <h1 className="text-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-[1.3] sm:leading-[1.2] mb-6">
                <span className="hidden sm:inline">Kids Inc | Lyons Den <br /></span>
                <span className="sm:hidden">Kids Inc |<br />Lyons Den<br /></span>
                <span className="hidden sm:inline text-pastel-yellow underline decoration-pastel-yellow decoration-4 underline-offset-[8px]">
                  Afterschool Programme
                </span>
                <span className="sm:hidden text-pastel-yellow flex flex-col items-start gap-1 mt-1">
                  <span className="underline decoration-pastel-yellow decoration-4 underline-offset-[8px]">Afterschool</span>
                  <span className="underline decoration-pastel-yellow decoration-4 underline-offset-[8px]">Programme</span>
                </span>
              </h1>
              <p className="text-white/80 font-medium text-lg md:text-xl max-w-lg">
                Homework help, creative play, and a home-away-from-home until you finish work. 
              </p>
            </div>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeB1ut-r_mCftScKMknIP19bUaORwQY4fDOzJH_faOmrqowkQ/viewform" target="_blank" rel="noopener noreferrer"
              className="mt-2 sm:mt-8 bg-pastel-yellow hover:brightness-95 text-amber-950 text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Secure Your Spot
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* IMAGE CELL 1 */}
        <motion.div variants={bentoItem} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative shadow-sm group">
          <img 
            src="/kids.png" 
            alt="Children having fun drawing" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-bold text-xl drop-shadow-md">Engaging activities daily</p>
          </div>
        </motion.div>

        {/* FEATURE: HOMEWORK */}
        <motion.div variants={bentoItem} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-pastel-peach text-amber-950 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-sm hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <BookOpen className="w-8 h-8 text-amber-700" />
          </div>
          <h3 className="text-display text-2xl font-bold mb-2">Homework Help</h3>
          <p className="text-amber-900/80 font-medium leading-tight">Guided support so evenings are for family time, not struggles.</p>
        </motion.div>

        {/* FEATURE: HOURS */}
        <motion.div variants={bentoItem} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-pastel-blue text-blue-950 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-sm hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <Clock className="w-8 h-8 text-blue-700" />
          </div>
          <h3 className="text-display text-2xl font-bold mb-2">Open Until 6:30 PM</h3>
          <p className="text-blue-900/80 font-medium leading-tight">Flexible hours offering complete peace of mind for working parents.</p>
        </motion.div>

        {/* FEATURE: COLLECTION */}
        <motion.div variants={bentoItem} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-pastel-purple text-purple-950 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-sm hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <Bus className="w-8 h-8 text-purple-700" />
          </div>
          <h3 className="text-display text-2xl font-bold mb-2">School Collection</h3>
          <p className="text-purple-900/80 font-medium leading-tight">We securely collect children directly from local schools.</p>
        </motion.div>

        {/* FEATURE: FOOD */}
        <motion.div variants={bentoItem} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-pastel-green text-green-950 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-sm hover:-translate-y-1 transition-transform">
          <div className="w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
            <Apple className="w-8 h-8 text-green-700" />
          </div>
          <h3 className="text-display text-2xl font-bold mb-2">Nutritious Meals</h3>
          <p className="text-green-900/80 font-medium leading-tight">Hot meals and healthy snacks provided every afternoon.</p>
        </motion.div>

        {/* CTA BOTTOM ROW */}
        <motion.div variants={bentoItem} className="col-span-1 md:col-span-4 lg:col-span-6 row-span-1 bg-pastel-pink rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between shadow-sm relative overflow-hidden text-rose-950">
          <div className="relative z-10 mb-4 sm:mb-0 text-center sm:text-left">
            <h2 className="text-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Secure your child's place today</h2>
            <p className="text-rose-900/80 font-medium text-base sm:text-lg">Don't miss out! Registrations for the upcoming term are filling fast.</p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
             <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeB1ut-r_mCftScKMknIP19bUaORwQY4fDOzJH_faOmrqowkQ/viewform" target="_blank" rel="noopener noreferrer"
              className="bg-brand-main hover:bg-brand-main-dark text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all text-center w-full sm:w-auto"
            >
              Contact Admissions
            </a>
          </div>
        </motion.div>

      </motion.div>

      {/* Footer minimal */}
      <div className="w-full max-w-7xl mx-auto mt-12 flex flex-col sm:flex-row justify-between items-center text-slate-500 font-semibold text-sm">
        <p>© 2026 Kids Inc | Lyons Den</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-indigo-600 transition-colors">info@kidsinc.ie</a>
        </div>
      </div>
    </div>
  );
}

