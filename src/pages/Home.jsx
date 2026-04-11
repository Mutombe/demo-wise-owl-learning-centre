/**
 * Layout C — "Dark Bold Industrial"
 * Inspired by: Induztry, Lockey, Ecoland
 * Dark theme throughout, centered hero with cutout worker,
 * numbered service cards, full-width project showcase, bold CTA
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Phone,
  WhatsappLogo,
  Quotes,
  CheckCircle,
  ShieldCheck,
  UsersThree,
  Trophy,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import HeroCarousel from '../components/HeroCarousel';
import siteData from '../data/siteData';
import iconMap from '../data/iconMap';

const statIcons = [Trophy, Star, ShieldCheck, UsersThree];

function Home() {
  const { business, hero, stats, servicesPreview, featuredProjects, whyChooseUs, homeTestimonials, homeCta } = siteData;

  return (
    <PageTransition>
      {/* Hero — full dark with centered text, top info bar */}
      <HeroCarousel
        images={hero.backgroundImages}
        backgroundImage={hero.backgroundImage}
        backgroundAlt={hero.backgroundAlt}
        overlay="center"
        className="min-h-screen flex flex-col pt-28 sm:pt-32 pb-20 lg:pt-0 lg:pb-0"
      >
        {/* Top info bar */}
        <div className="relative z-20 bg-gold-500 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-4 sm:gap-6 text-navy-900 font-medium">
              <span>{business.phone}</span>
              <span className="hidden sm:inline">{business.address}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} weight="fill" className={i < business.ratingRounded ? 'text-navy-900' : 'text-navy-900/30'} />
              ))}
              <span className="text-navy-900 font-semibold ml-1">{business.reviewCount} Reviews</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8 font-semibold text-xs sm:text-sm"
            >
              <Trophy size={16} weight="fill" />
              {hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-6 sm:mb-8 uppercase tracking-tight"
            >
              {hero.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-gold-400 block">{part.text}</span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-sm sm:text-lg text-white/50 mb-8 sm:mb-12 max-w-xl mx-auto"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5">
                {hero.ctaPrimary}
                <ArrowRight size={20} weight="bold" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5">
                {hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat, index) => {
                const IconComp = statIcons[index] || Trophy;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="py-4 sm:py-6 px-3 sm:px-6 text-center"
                  >
                    <div className="text-xl sm:text-3xl font-black text-gold-400">{stat.number}</div>
                    <div className="text-[10px] sm:text-xs text-white/40 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Services — numbered dark cards */}
      <section className="section-padding bg-navy-900" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div>
                <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Our Services</span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 uppercase">
                  What We Build
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-gold-400 font-bold hover:gap-3 transition-all">
                All Services <ArrowRight size={18} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {servicesPreview.map((service, index) => {
              const IconComp = iconMap[service.iconName] || iconMap.Buildings;
              return (
                <SectionReveal key={service.title} delay={index * 0.08}>
                  <div className="group relative bg-navy-800 hover:bg-gold-500 p-8 transition-all duration-500 h-full">
                    {/* Large number watermark */}
                    <div className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-navy-900/10 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <IconComp size={32} className="text-gold-400 group-hover:text-navy-900 mb-6 transition-colors" />
                    <h3 className="text-xl font-bold text-white group-hover:text-navy-900 mb-3 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/50 group-hover:text-navy-900/70 text-sm leading-relaxed transition-colors">
                      {service.desc}
                    </p>
                    <div className="mt-6">
                      <ArrowRight size={20} className="text-gold-400 group-hover:text-navy-900 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects — full-width showcase */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Portfolio</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 uppercase">
                Featured Projects
              </h2>
            </div>
          </SectionReveal>

          {/* Large featured + side stack */}
          <div className="grid lg:grid-cols-5 gap-4">
            {featuredProjects[0] && (
              <SectionReveal className="lg:col-span-3">
                <Link to="/projects" className="group block relative rounded-xl overflow-hidden aspect-[16/10]">
                  <img src={featuredProjects[0].image} alt={featuredProjects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1.5 uppercase tracking-wider mb-3">
                      {featuredProjects[0].category}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{featuredProjects[0].title}</h3>
                  </div>
                </Link>
              </SectionReveal>
            )}

            <div className="lg:col-span-2 grid gap-4">
              {featuredProjects.slice(1, 3).map((project, index) => (
                <SectionReveal key={project.title} delay={index * 0.15}>
                  <Link to="/projects" className="group block relative rounded-xl overflow-hidden aspect-[16/9]">
                    <img src={project.image} alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-gold-400 text-xs font-bold uppercase">{project.category}</span>
                      <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — dark with accent border cards */}
      <section className="section-padding bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img src={whyChooseUs.image} alt={whyChooseUs.imageAlt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/30" />
                {/* Experience badge */}
                <div className="absolute bottom-6 left-6 bg-gold-500 text-navy-900 px-6 py-4 rounded-xl">
                  <div className="text-4xl font-black">{whyChooseUs.experienceYears}</div>
                  <div className="text-sm font-bold">{whyChooseUs.experienceLabel}</div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left">
              <div>
                <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Why Us</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-10">
                  {whyChooseUs.titleParts.map((part, i) =>
                    part.highlight ? (
                      <span key={i} className="text-gold-400">{part.text}</span>
                    ) : (
                      <React.Fragment key={i}>{part.text}</React.Fragment>
                    )
                  )}
                </h2>
                <div className="space-y-4">
                  {whyChooseUs.points.map((item, i) => (
                    <div key={item.title} className="border-l-4 border-gold-500 bg-navy-800 p-5 rounded-r-xl">
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials — dark cards */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-gold-400 text-sm font-bold uppercase tracking-widest">Reviews</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 uppercase">Client Feedback</h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {homeTestimonials.map((item, index) => (
              <SectionReveal key={item.name} delay={index * 0.12}>
                <div className="bg-navy-900 border border-white/5 p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-gold-400" />
                    ))}
                  </div>
                  <p className="text-white/70 leading-relaxed flex-1 mb-6">"{item.text}"</p>
                  <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.name}</p>
                      <p className="text-white/40 text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — bold full-width */}
      <section className="relative py-28 overflow-hidden bg-gold-500">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 22px)',
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 mb-6 uppercase">
              {homeCta.titleParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-white">{part.text}</span>
                ) : (
                  <React.Fragment key={i}>{part.text}</React.Fragment>
                )
              )}
            </h2>
            <p className="text-navy-900/70 text-lg mb-10 max-w-2xl mx-auto">{homeCta.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5">
                <Phone size={22} />
                {homeCta.ctaPrimary}
              </Link>
              <a href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(homeCta.whatsappText)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5">
                <WhatsappLogo size={22} weight="fill" />
                WhatsApp Us
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
