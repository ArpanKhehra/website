'use client'
import React, { useEffect, useRef } from 'react'
import FAQAccordion from '@/components/faq-accordion'
import { faqData } from '@/utilities/data'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FaqSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const accordionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const description = descriptionRef.current
    const accordion = accordionRef.current

    gsap.set([title, description], { x: -50, opacity: 0 })
    gsap.set(accordion, { y: 50, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        once: true
      }
    })

    tl.to([title, description], {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.out'
    }).to(
      accordion,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out'
      },
      '-=0.3'
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-light flex flex-col lg:flex-row relative padding-container md:!pr-0 !py-0 gap-16 md:h-[700px]"
    >
      <div className="padding-container flex relative flex-col items-center w-full lg:w-[90%] !px-0 pb-12">
        <div className="flex relative flex-col items-center -mb-6 w-full max-md:mb-2.5 max-md:max-w-full">
          <h2
            ref={titleRef}
            className="text-[1.5625rem] md:text-[3.5rem] text-left w-full text-5xl font-semibold leading-none text-primary"
          >
            Frequently Asked Questions?
          </h2>
          <p
            ref={descriptionRef}
            className="mt-5 text-xs md:text-lg leading-none text-left w-full text-gray max-md:max-w-full"
          >
            We are here to help you
          </p>
          <div
            ref={accordionRef}
            className="w-full mt-7"
          >
            <FAQAccordion faqs={faqData} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-start justify-end inset-0">
        <Image
          src="/faq-banner.png"
          alt="FAQ"
          width={582}
          height={615}
          className="hidden lg:inline"
          style={{
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>
  )
}
