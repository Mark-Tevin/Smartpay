"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ProjectImageProps {
  src: string
  alt: string
  caption?: string
  priority?: boolean
  width?: number
  height?: number
  className?: string
  containerClassName?: string
}

export function ProjectImage({
  src,
  alt,
  caption,
  priority = false,
  width,
  height,
  className = "",
  containerClassName = "",
}: ProjectImageProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  })

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.figure
      ref={ref}
      variants={imageVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${containerClassName}`}
    >
      <motion.div className="relative w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3C/svg%3E"
          className={`object-cover object-top ${className}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
        />
        <motion.div
          className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>
      {caption && <figcaption className="sr-only">{caption}</figcaption>}
    </motion.figure>
  )
}
