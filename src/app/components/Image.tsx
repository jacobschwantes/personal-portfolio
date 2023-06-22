import { motion } from "framer-motion";

interface ImageProps {
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <motion.figure className="rounded-lg h-[680px] overflow-visible">
    <motion.img
      src={src}
      alt={alt}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className=" object-cover w-full h-full"
    />
  </motion.figure>
);

Image.displayName = "Image";