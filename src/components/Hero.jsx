import { motion } from 'framer-motion';
import { Rocket, Image as ImageIcon, Type } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onSelect }) {
  return (
    <section className="relative flex-1 flex flex-col">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 text-transparent bg-clip-text"
          >
            VisionFlow AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-200"
          >
            Turn your imagination into motion.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-300 max-w-xl"
          >
            Create stunning AI-generated videos from simple text or images in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <button
              onClick={() => onSelect('text')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 hover:opacity-95 transition"
            >
              <Type className="w-5 h-5" />
              Text to Video
            </button>
            <button
              onClick={() => onSelect('image')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/70 ring-1 ring-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800/70 transition"
            >
              <ImageIcon className="w-5 h-5" />
              Image to Video
            </button>
          </motion.div>

          <p className="text-xs text-slate-400 pt-2">Created by Zubair Ansar</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-purple-500/20 blur-3xl" />
          <div className="relative rounded-2xl bg-slate-900/50 ring-1 ring-white/10 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-slate-200">
              <Rocket className="w-6 h-6 text-indigo-300" />
              <span className="font-semibold">Why VisionFlow AI?</span>
            </div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Ultra-fast text & image to video generation</li>
              <li>Modern, minimal, and responsive design</li>
              <li>Export-ready results with watermark</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0b10]" />
    </section>
  );
}
