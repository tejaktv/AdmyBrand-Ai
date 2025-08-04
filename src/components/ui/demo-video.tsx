import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"
import { Button } from "./button"
import { Modal } from "./modal"

interface DemoVideoProps {
  thumbnail: string
  videoUrl?: string
  title?: string
  className?: string
}

export const DemoVideo: React.FC<DemoVideoProps> = ({
  thumbnail,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title = "Product Demo",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className={`relative group cursor-pointer overflow-hidden rounded-2xl ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-video relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </motion.div>
          </div>

          {/* Demo Badge */}
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              Demo Video
            </div>
          </div>
        </div>
      </motion.div>

      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  )
}