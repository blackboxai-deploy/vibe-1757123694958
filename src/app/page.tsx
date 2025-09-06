"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BirthdayGreeting() {
  const [showCard, setShowCard] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show card after a brief delay
    const timer = setTimeout(() => {
      setShowCard(true);
      setShowConfetti(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const confettiColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4 overflow-hidden relative">
      
      {/* Floating confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: confettiColors[i % confettiColors.length],
                left: `${Math.random() * 100}%`,
                top: `-10px`,
              }}
              animate={{
                y: [0, window.innerHeight + 100],
                rotate: [0, 360],
                x: [0, (Math.random() - 0.5) * 200],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-300/15 rounded-full blur-2xl"></div>
      </div>

      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ scale: 0, rotate: -10, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.8
            }}
            className="relative z-10"
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4 text-center border border-white/20">
              
              {/* Birthday cake emoji with animation */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-6xl mb-6"
              >
                🎂
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4"
              >
                Happy Birthday!
              </motion.h1>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wishing you a day filled with happiness and a year filled with joy! 
                </p>
                
                <p className="text-base text-gray-600">
                  Hope your special day brings you all the happiness you deserve! 🎉
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex justify-center space-x-2 text-2xl"
              >
                {['🎈', '🎁', '🌟', '🎊', '🥳'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 300 }}
                className="mt-8"
              >
                <p className="text-sm text-gray-500 italic">
                  Made with 💝 for an amazing friend
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-pink-300 text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>
    </div>
  );
}