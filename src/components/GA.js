import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function GA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Carousel
          loop
          autoplay
          className="rounded-xl border-4  border-[#7B553C] "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={require('./gallery/Hero_1.jpg')}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={require('./gallery/Hero_2.jpg')}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={require('./gallery/Hero_3.jpg')}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
