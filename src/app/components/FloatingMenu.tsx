'use client'

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Lightbulb, Palette,  Phone, Mail, Menu, X } from 'lucide-react'

interface MenuItem {
  label: string
  href: string
  Icon: React.ElementType
}

interface ContactItem {
  type: "call" | "email"
  label: string
  href: string
  Icon: React.ElementType
}

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/", Icon: Home },
    { label: "We Imagine", href: "/weimagine", Icon: Lightbulb },
    { label: "We Design", href: "/wedesign", Icon: Palette },
    { label: "We Create", href: "/wecreate", Icon: Palette },
  ]

  const contactItems: ContactItem[] = [
    { type: "call", label: "Call", href: "tel:+91000000000", Icon: Phone },
    { type: "email", label: "Email", href: "mailto:info@alphacoders.co", Icon: Mail },
  ]

  const toggleMenu = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    setIsOpen((prev) => !prev)
  }, [])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handleClickOutside])

  const MenuItems: React.FC<{ onItemClick: () => void }> = ({ onItemClick }) => (
    <ul className="flex flex-col gap-3 w-full">
      {menuItems.map((item, index) => (
        <motion.li
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
        >
          <Link
            href={item.href}
            onClick={onItemClick}
            className="flex items-center p-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
          >
            <item.Icon className="w-5 h-5 mr-3 text-black/70 dark:text-white/70" />
            <span className="bg-background-light transition-colors text-sm">{item.label}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  )

  const ContactItems: React.FC = () => (
    <div className="flex gap-2 w-full">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className="flex-1"
        >
          <Link
            href={item.href}
            className="flex items-center justify-center p-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
          >
            <item.Icon className="w-4 h-4 bg-background-light transition-colors" />
          </Link>
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className="fixed top-4 left-4 z-50 font-thicccboi">
      <div className="relative">
        <motion.div
          ref={menuRef}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="absolute top-0 left-0 overflow-hidden rounded-xl bg-background-light transition-colors  backdrop-blur-sm border border-black/10 dark:border-white/10"
        >
          <motion.div
            variants={{
              open: { width: 240, height: 320, opacity: 1 },
              closed: { width: 40, height: 40, opacity: 0.9 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative flex items-center justify-center w-full h-full"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between h-full w-full p-8"
                >
                  <MenuItems onItemClick={() => setIsOpen(false)} />
                  <ContactItems />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.button
          ref={buttonRef}
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 bg-background-light transition-colors  backdrop-blur-sm rounded-lg border border-black/10 dark:border-white/10 w-10 h-10 flex items-center justify-center duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 bg-background-light transition-colors" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 bg-background-light transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  )
}

export default FloatingMenu