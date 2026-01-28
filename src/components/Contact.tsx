import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, InstagramLogo, TiktokLogo } from '@phosphor-icons/react'
import { toast } from 'sonner'

export function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [copiedPhone, setCopiedPhone] = useState<string | null>(null)

    const handlePhoneClick = (phone: string, displayPhone: string) => {
        navigator.clipboard.writeText(phone)
        setCopiedPhone(phone)
        toast.success(`Номер ${displayPhone} скопійовано`)
        setTimeout(() => setCopiedPhone(null), 2000)
    }

    return (
        <section id="contact" ref={ref} className="py-8 sm:py-10 md:py-16 bg-primary text-primary-foreground relative overflow-hidden">
            <div 
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            currentColor,
                            currentColor 2px,
                            transparent 2px,
                            transparent 40px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            currentColor,
                            currentColor 2px,
                            transparent 2px,
                            transparent 40px
                        )
                    `
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-6 sm:mb-8"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 tracking-tight">
                        Зв'яжіться з нами
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto px-4">
                        Готові відповісти на ваші питання та допомогти з вибором матеріалів
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20"
                    >
                        <div className="flex items-center mb-3 sm:mb-4">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center mr-2 sm:mr-3">
                                <Phone size={18} weight="bold" className="sm:w-5 sm:h-5" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold">Телефони</h3>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                            <motion.button
                                onClick={() => handlePhoneClick('0960606161', '096 060 61 61')}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full text-left group cursor-pointer"
                            >
                                <a 
                                    href="tel:0960606161"
                                    className="block text-lg sm:text-xl md:text-2xl font-semibold hover:text-accent transition-colors duration-300"
                                >
                                    096 060 61 61
                                </a>
                            </motion.button>
                            
                            <motion.button
                                onClick={() => handlePhoneClick('0977550555', '097 755 05 55')}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full text-left group cursor-pointer"
                            >
                                <a 
                                    href="tel:0977550555"
                                    className="block text-lg sm:text-xl md:text-2xl font-semibold hover:text-accent transition-colors duration-300"
                                >
                                    097 755 05 55
                                </a>
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20"
                    >
                        <div className="flex items-center mb-3 sm:mb-4">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center mr-2 sm:mr-3">
                                <MapPin size={18} weight="bold" className="sm:w-5 sm:h-5" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold">Адреси</h3>
                        </div>
                        
                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <p className="text-xs text-primary-foreground/70 mb-1 font-medium">
                                    Виробництво:
                                </p>
                                <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                                    м. Ізмаїл, вул. Лісна, 22
                                </p>
                            </div>
                            
                            <div>
                                <p className="text-xs text-primary-foreground/70 mb-1 font-medium">
                                    Офіс продажу:
                                </p>
                                <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                                    пр-т Суворова, 141-6
                                </p>
                                <p className="text-xs text-primary-foreground/70 mt-1">
                                    (кут Рєпіна)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-center mt-6 sm:mt-8 flex flex-col items-center gap-4 sm:gap-5"
                >
                    <div className="w-full sm:w-auto">
                        <Button 
                            size="lg"
                            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            onClick={() => window.open('tel:0960606161')}
                        >
                            <Phone className="mr-2" weight="bold" size={20} />
                            Подзвонити зараз
                        </Button>
                    </div>
                    
                    <div className="flex gap-3 sm:gap-4 items-center flex-wrap justify-center">
                        <p className="text-xs sm:text-sm text-primary-foreground/70">Ми в соцмережах:</p>
                        <div className="flex gap-3">
                            <motion.a
                                href="https://www.instagram.com/respect_izmail?igsh=Ym42YThrYjZrbjc3&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white transition-all duration-500 cursor-pointer"
                                style={{
                                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                    boxShadow: '0 4px 15px rgba(225, 48, 108, 0.4)'
                                }}
                            >
                                <InstagramLogo size={20} weight="fill" className="sm:w-[22px] sm:h-[22px]" />
                            </motion.a>
                            
                            <motion.a
                                href="https://www.tiktok.com/@respect.zvd.izmail?_r=1&_t=ZS-93OkyI1dY81"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-white transition-all duration-500 cursor-pointer"
                                style={{
                                    background: '#000000',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                                }}
                            >
                                <TiktokLogo size={20} weight="fill" className="sm:w-[22px] sm:h-[22px]" />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:hidden z-50">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 shadow-2xl"
                        onClick={() => window.open('tel:0960606161')}
                    >
                        <Phone size={22} weight="bold" className="sm:w-6 sm:h-6" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
