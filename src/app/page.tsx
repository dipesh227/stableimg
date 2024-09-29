'use client'
import React from "react";

import Spline from '@splinetool/react-spline/next';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const aiTextVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const infiniteAnimationVariants = {
    animate: {
      y: [0, -10, 0],
      x: [-2, 2, -2],
      rotate: [-1, 1, -1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const descriptionVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4 md:space-y-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            variants={itemVariants}
          >
            <motion.span
              className="font-extrabold"
              variants={aiTextVariants}
              animate="visible"
            >
              <motion.span
                variants={infiniteAnimationVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Stable Image
              </motion.span>
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-center text-gray-600 dark:text-gray-400 max-w-md"
            variants={itemVariants}
            animate="animate"
            custom={descriptionVariants}
          >
            Experience the power of AI-driven image generation with our cutting-edge stable diffusion technology.
          </motion.p>
          <motion.button
            className="mt-2 md:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/generatenow">
              <motion.span
                initial={{ opacity: 1 }}
                whileHover={{
                  opacity: [1, 0.8, 1],
                  transition: { duration: 0.3, yoyo: Infinity }
                }}
              >
                Get Started
              </motion.span>
            </Link>
          </motion.button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 mt-12 md:mt-0 h-[500px] md:h-[600px]"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <Spline
            scene="https://prod.spline.design/DgMoRWma4PuKsNaO/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

    </>
  );
}