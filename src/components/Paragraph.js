import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Paragraph() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div key="container" initial="hidden" animate="visible" variants={containerVariants} className=''>
      <h1 className='text-4xl text-center mt-10 font-bold'>AYURVEDA Roots and Research</h1>

      <motion.div key="historical" variants={itemVariants}>
        <h1 className='font-bold ml-14 mt-20'>HISTORICAL CONTEXT:</h1>
        <h2 className='ml-14'>EXPLORE THE ORIGINS OF AYURVEDA IN ANCIENT INDIA, DATING BACK OVER 5,000 YEARS, AND ITS DEVELOPMENT AS A COMPREHENSIVE SYSTEM OF
          HEALTHCARE AND HEALING.</h2>
      </motion.div>

      <motion.div key="concepts" variants={itemVariants}>
        <h1 className='font-bold ml-14 mt-4'>CONCEPTS AND PRINCIPLES:</h1>
        <h2 className='ml-14'>DISCUSS THE FOUNDATIONAL PRINCIPLES OF AYURVEDA, SUCH AS THE THEORY OF DOSHAS (VATA, PITTA, KAPHA) AND THEIR ROLE IN MAINTAINING HEALTH
          AND BALANCE IN THE BODY.</h2>
      </motion.div>

      <motion.div key="diagnostic" variants={itemVariants}>
        <h1 className='font-bold ml-14 mt-4'>DIAGNOSTIC METHODS:</h1>
        <h2 className='ml-14'>DESCRIBE TRADITIONAL DIAGNOSTIC METHODS USED IN AYURVEDA, SUCH AS PULSE DIAGNOSIS, TONGUE EXAMINATION, AND OBSERVATION OF PHYSICAL
          CHARACTERISTICS AND BEHAVIORAL PATTERNS.
        </h2>
      </motion.div>

      <motion.div key="therapeutic" variants={itemVariants}>
        <h1 className='font-bold ml-14 mt-4'>THERAPEUTIC INTERVENTIONS:</h1>
        <h2 className='ml-14'>PROVIDE AN OVERVIEW OF AYURVEDIC THERAPIES AND TREATMENTS, INCLUDING HERBAL MEDICINES, DIETARY RECOMMENDATIONS, LIFESTYLE
          MODIFICATIONS, AND DETOXIFICATION PROCEDURES LIKE PANCHAKARMA.
        </h2>
      </motion.div>

      <motion.div key="clinical" variants={itemVariants}>
        <h1 className='font-bold ml-14 mt-4'>CLINICAL STUDIES:</h1>
        <h2 className='ml-14'>HIGHLIGHT RECENT CLINICAL TRIALS AND STUDIES EVALUATING THE EFFECTIVENESS OF AYURVEDIC INTERVENTIONS FOR CONDITIONS SUCH AS ARTHRITIS,
          DIABETES, CARDIOVASCULAR DISEASE, AND MENTAL HEALTH DISORDERS.
        </h2>
      </motion.div>

      <motion.div key="pharmacological" variants={itemVariants}>
        <h1 className='font-bold ml-14 mt-4'>PHARMACOLOGICAL RESEARCH:</h1>
        <h2 className='ml-14'>DISCUSS SCIENTIFIC RESEARCH ON THE PHARMACOLOGICAL PROPERTIES AND BIOACTIVE COMPOUNDS OF KEY AYURVEDIC HERBS, SUCH AS TURMERIC,
          ASHWAGANDHA, TRIPHALA, AND BRAHMI.
        </h2>
      </motion.div>

      <motion.div key="button" variants={itemVariants}>
        <div className="mt-2 flex flex-col sm:flex-row items-center ml-12">
          <Link to="/">
            <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-teal-400 text-white font-semibold uppercase hover:text-black hover:border-blue-500 hover:text:green bg-blue-400 ">READ MORE</button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
