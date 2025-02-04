'use client'

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Lightbulb, Palette, Phone, Mail, Menu, X, PenTool } from 'lucide-react'

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
    { label: "", href: "/", Icon: Home },
    { label: "We Imagine", href: "/weimagine", Icon: Lightbulb },
    { label: "We Design", href: "/wedesign", Icon: Palette },
    { label: "We Create", href: "/wecreate", Icon: PenTool },
  ]

  const contactItems: ContactItem[] = [
    { type: "call", label: "Call", href: "tel:+919419196416", Icon: Phone },
    { type: "email", label: "Email", href: "mailto:info@alphacoders.co.in", Icon: Mail },
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
    <div className="flex items-center flex-col sm:flex-row gap-4 ">
      {menuItems.map((item, index) => (
        <motion.div
          key={item.label || 'home'}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
        >
          <Link
            href={item.href}
            onClick={onItemClick}
            className="flex items-center justify-center p-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200 gap-1"
          >
            <item.Icon className="w-8 h-8 sm:h-5 sm:w-5" />
            {item.label || (
              <span className="ml-2 text-sm hidden md:inline">{item.label}</span>
            )}
          </Link>
        </motion.div>
      ))}
    </div>
  )

  const ContactItems: React.FC = () => (
    <div className="flex items-center space-x-2 gap-5 mb-3 sm:mb-0">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
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
      <div className="flex flex-col items-start space-y-6">
        <motion.button
          ref={buttonRef}
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 bg-background-light transition-colors backdrop-blur-sm rounded-lg sm:w-20  border border-black/10 dark:border-white/10 w-10 h-10 flex items-center justify-center duration-200 "
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
                <Menu className="w-5 h-5  bg-background-light transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <motion.div
          ref={menuRef}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="overflow-hidden rounded-xl bg-background-light transition-colors backdrop-blur-sm border border-black/10 dark:border-white/10 mt-2"
        >
          <motion.div
            variants={{
              open: { width: 'auto', height: 'auto', opacity: 1, x: 0 },
              closed: { width: 0, height: 0, opacity: 0, x: -20 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative flex items-center justify-center"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-4 p-2 whitespace-nowrap flex-col sm:flex-row  gap-3"
                >
                  <MenuItems onItemClick={() => setIsOpen(false)} />
                  <ContactItems />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>


      </div>
    </div>
  )
}

export default FloatingMenu

