import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { InvitationFront } from "./InvitationFront";
import { InvitationBack } from "./InvitationBack";

export function InvitationCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const reduced = useReducedMotion();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-full cursor-pointer flex items-center justify-center"
      style={{ perspective: '2000px', minHeight: '85vh' }}
      onClick={handleFlip}
    >
      <motion.div
        className="w-full"
        initial={reduced ? undefined : { opacity: 0, y: 15 }}
        animate={{ 
          opacity: 1,
          y: 0,
          rotateY: isFlipped ? 180 : 0, 
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ 
          display: 'grid',
          transformStyle: 'preserve-3d', 
          transformOrigin: 'center center'
        }}
      >
        {/* Front Face */}
        <div 
          className="w-full h-full"
          style={{ gridArea: '1 / 1', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <InvitationFront />
        </div>

        {/* Back Face */}
        <div 
          className="w-full h-full"
          style={{ gridArea: '1 / 1', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <InvitationBack />
        </div>
      </motion.div>
    </div>
  );
}
