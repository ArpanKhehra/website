'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ChevronDown, X, ChevronRight, ChevronLeft, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}

const MenuItem = ({ setActive, active, item, children }) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setActive])

  const handleClick = () => {
    setActive(active === item ? null : item)
  }

  return (
    <div
      ref={ref}
      className="relative bg-white"
    >
      <motion.div
        onClick={handleClick}
        transition={{ duration: 0.3 }}
        className="cursor-pointer navbar-text hover:text-primary flex items-center bg-white"
      >
        {item}
        <ChevronDown className="ml-1 w-4 h-4" />
      </motion.div>
      <AnimatePresence className="bg-white">
        {active === item && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            className=""
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white rounded-2xl overflow-hidden border border-primary/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4 bg-white"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileNavLink = ({ href, children, onClick, hasSubmenu = false }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-between py-3 px-4',
        isActive ? 'text-primary font-semibold' : 'text-gray-700'
      )}
      onClick={onClick}
    >
      <span>{children}</span>
      {hasSubmenu && <ChevronRight size={20} />}
    </Link>
  )
}

const DesktopNavbar = () => {
  const pathname = usePathname()
  const [isAtTop, setIsAtTop] = useState(true) // To track if the user is at the top
  const [isNavbarVisible, setIsNavbarVisible] = useState(true) // To track if the navbar is visible
  const [isScrolling, setIsScrolling] = useState(false) // To track scrolling activity
  let scrollTimer = null

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset

      // Check if we are at the top of the page
      setIsAtTop(currentScrollY === 0)

      // Clear any existing timeout to hide the navbar
      if (scrollTimer) clearTimeout(scrollTimer)

      // Set scrolling state to true
      setIsScrolling(true)

      // Set a timer to hide the navbar after 2 seconds of no scrolling
      scrollTimer = setTimeout(() => {
        setIsScrolling(false)
      }, 1000)

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [])

  // Hide the navbar after 2 seconds of no scrolling
  useEffect(() => {
    if (!isScrolling && !isAtTop) {
      setIsNavbarVisible(false)
    } else {
      setIsNavbarVisible(true)
    }
  }, [isScrolling, isAtTop])

  return (
    <nav
      className={`bg-white shadow-md z-100 hidden xl:flex fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isAtTop ? '' : ''
      } ${!isNavbarVisible ? '-translate-y-full' : ''}`} // Slide up when hidden
    >
      <div className="w-full !ml-0 !mr-0 flex items-center justify-between bg-white padding-container !py-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/' && 'text-primary font-semibold'
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about-us"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/about-us' && 'text-primary font-semibold'
                  )}
                >
                  About AKF
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/services"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/services' && 'text-primary font-semibold'
                  )}
                >
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/plans"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/plans' && 'text-primary font-semibold'
                  )}
                >
                  Our Plans
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Conditionally render the logo */}
        <motion.div
          // initial={
          //   isAtTop ? { width: 100, height: 145 } : { width: 70, height: 100 }
          // }
          // animate={
          //   isAtTop ? { width: 100, height: 145 } : { width: 70, height: 100 }
          // }
          // transition={
          //   isAtTop ? { duration: 0.3, ease: "easeInOut" } : { duration: 0 }
          // } // Smooth when large, instant when small
          className="absolute left-1/2 transform -translate-x-1/2 top-[0.25rem]"
        >
          {/* {isAtTop ? (
            <Link href="/" className="block">
              <Image
                src="/akf-logo-new.svg"
                alt="Arpan Khehra Fitness Logo"
                width={100} // Larger logo when at the top
                height={145}
                className="object-cover"
              />
            </Link>
          ) : (
            <Image
              src="/akf-logo-new.svg"
              alt="Arpan Khehra Fitness Logo"
              width={70} // Smaller logo when scrolling
              height={100}
              className="object-cover"
            />
          )} */}
          <Link
            href="/"
            className="block"
          >
            <Image
              src="/akf-logo-new.png"
              alt="Arpan Khehra Fitness Logo"
              width={70} // Smaller logo when scrolling
              height={100}
              className="object-cover"
            />
          </Link>
        </motion.div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/recognitions"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/recognitions' && 'text-primary font-semibold'
                  )}
                >
                  Recognitions
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/gallery"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/gallery' && 'text-primary font-semibold'
                  )}
                >
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/blogs"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Blogs
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Read our latest fitness and nutrition articles
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/calculators/bmi"
                    title="BMI Calculator"
                  >
                    Calculate your Body Mass Index
                  </ListItem>
                  <ListItem
                    href="/calculators/lbm"
                    title="LBM Calculator"
                  >
                    Calculate your Lean Body Mass
                  </ListItem>
                  <ListItem
                    href="/calculators/bmr"
                    title="BMR Calculator"
                  >
                    Calculate your Basal Metabolic Rate
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact-us"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/contact-us' && 'text-primary font-semibold'
                  )}
                >
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'

const Navbar = () => {
  const [active, setActive] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSubmenu, setCurrentSubmenu] = useState(null)
  const mobileMenuRef = useRef(null)

  const handleLinkClick = () => {
    setActive(null)
    setIsMobileMenuOpen(false)
    setCurrentSubmenu(null)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const sidebarVariants = {
    closed: {
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  }

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, transition: { duration: 0.2 } }
  }

  return (
    <>
      <DesktopNavbar />
      {/* Mobile Navbar */}
      <nav className="bg-white shadow-md xl:hidden">
        <div className="relative max-page md:padding-container flex items-center justify-end px-4 !py-3">
          <Link
            href="/"
            className="absolute z-10 left-1/2 -translate-x-1/2 top-0"
          >
            <div className="relative py-2 pt-0">
              <Image
                src="/akf-logo-new.png"
                alt="Arpan Khehra Fitness Logo"
                width={50}
                height={72}
                className="relative top-[10px]"
              />
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={overlayVariants}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                ref={mobileMenuRef}
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
                className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-primary focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="py-2">
                  <MobileNavLink
                    href="/"
                    onClick={handleLinkClick}
                  >
                    Home
                  </MobileNavLink>
                  <MobileNavLink
                    href="/about-us"
                    onClick={handleLinkClick}
                  >
                    About AKF
                  </MobileNavLink>
                  <MobileNavLink
                    href="/services"
                    onClick={handleLinkClick}
                  >
                    Services
                  </MobileNavLink>
                  <MobileNavLink
                    href="/plans"
                    onClick={handleLinkClick}
                  >
                    Our Plans
                  </MobileNavLink>
                  <MobileNavLink
                    href="/recognitions"
                    onClick={handleLinkClick}
                  >
                    Recognitions
                  </MobileNavLink>
                  <MobileNavLink
                    href="/gallery"
                    onClick={handleLinkClick}
                  >
                    Gallery
                  </MobileNavLink>
                  <MobileNavLink
                    href="/blogs"
                    onClick={handleLinkClick}
                  >
                    Blog
                  </MobileNavLink>
                  <MobileNavLink
                    href="#"
                    onClick={() => setCurrentSubmenu('resources')}
                    hasSubmenu
                  >
                    Resources
                  </MobileNavLink>
                  <MobileNavLink
                    href="/contact-us"
                    onClick={handleLinkClick}
                  >
                    Contact us
                  </MobileNavLink>
                </div>
                <AnimatePresence>
                  {currentSubmenu === 'resources' && (
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }}
                      className="absolute inset-0 bg-white"
                    >
                      <div className="flex items-center p-4 border-b border-gray-200">
                        <button
                          onClick={() => setCurrentSubmenu(null)}
                          className="text-gray-500 hover:text-primary mr-2"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <h3 className="text-lg font-semibold">Resources</h3>
                      </div>
                      <div className="py-2">
                        <MobileNavLink
                          href="/calculators/bmi"
                          onClick={handleLinkClick}
                        >
                          BMI Calculator
                        </MobileNavLink>
                        <MobileNavLink
                          href="/calculators/lbm"
                          onClick={handleLinkClick}
                        >
                          LBM Calculator
                        </MobileNavLink>
                        <MobileNavLink
                          href="/calculators/bmr"
                          onClick={handleLinkClick}
                        >
                          BMR Calculator
                        </MobileNavLink>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
