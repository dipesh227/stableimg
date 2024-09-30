'use client'
import React from "react";
import Spline from '@splinetool/react-spline/next';
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row max-h-dvh">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 md:space-y-6"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <span className="font-extrabold">Stable Image</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-400 max-w-md"
        >
          Experience the power of AI-driven image generation with our cutting-edge stable diffusion technology.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >


          <Link href="/generatenow">
            <motion.button
              className="mt-2 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              whileHover={{
                boxShadow: "0px 0px 8px rgb(59, 130, 246)",
                textShadow: "0px 0px 8px rgb(255, 255, 255)"
              }}
              initial={{ background: "rgb(37, 99, 235)" }}
              animate={{ background: ["rgb(37, 99, 235)", "rgb(29, 78, 216)", "rgb(37, 99, 235)"] }}
              transition={{ background: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 mt-12 md:mt-0 h-[500px] md:h-[600px]"
      >
        <div className="relative w-full h-full">
          <Spline scene="https://prod.spline.design/DgMoRWma4PuKsNaO/scene.splinecode" className="absolute inset-0 w-full h-full z-0" />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span className="text-2xl font-bold text-white"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
