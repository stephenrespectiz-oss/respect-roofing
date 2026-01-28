import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, InstagramLogo, TiktokLogo } from '@phosphor-icons/react'
import { Logo } from '@/components/Logo'
import heroBackground from '@/assets/images/1.png'

export function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-[80vh] sm:min-h-[75vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-8 sm:py-12">
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroBackground} 
                    alt="Roofing background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-blue-50/88 to-slate-100/90" />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl lg:max-w-4xl mx-auto text-center"
                >
                    <div 
                        className="backdrop-blur-md bg-white/40 border border-white/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 shadow-2xl"
                        style={{
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                        }}
                    >
                        <motion.div 
                            className="mb-3 flex justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <Logo className="w-40 sm:w-52 md:w-60 lg:w-64 h-auto" />
                        </motion.div>
                        
                        <motion.h1 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 tracking-wide"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            RESPECT
                        </motion.h1>
                        
                        <motion.p 
                            className="text-xs sm:text-sm md:text-base text-accent font-semibold mb-1 uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45, duration: 0.8 }}
                        >
                            Офіційний представник
                        </motion.p>
                        
                        <motion.p 
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 mb-5 sm:mb-6 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Завод Покрівельних Матеріалів
                        </motion.p>
                        
                        <motion.div 
                            className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-5 sm:mb-6 text-sm sm:text-base md:text-lg text-primary/80 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <span>• ПРОФНАСТИЛ</span>
                            <span>• МЕТАЛОЧЕРЕПИЦЯ</span>
                            <span>• ШТАКЕТНИК</span>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="flex flex-col gap-3 sm:gap-4 items-center"
                        >
                            <motion.div 
                                whileHover={{ y: -2 }}
                                className="w-full sm:w-auto cursor-pointer"
                            >
                                <Button 
                                    size="lg"
                                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_oklch(0.70_0.18_40_/_0.3)] hover:shadow-[0_6px_25px_oklch(0.70_0.18_40_/_0.4)]"
                                    onClick={scrollToContact}
                                >
                                    <Phone className="mr-2" weight="bold" size={20} />
                                    Зв'язатися з нами
                                </Button>
                            </motion.div>
                            
                            <div className="flex gap-3">
                                <motion.a
                                    href="https://www.instagram.com/respect_izmail?igsh=Ym42YThrYjZrbjc3&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white transition-all duration-500 cursor-pointer"
                                    style={{
                                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                        boxShadow: '0 4px 15px rgba(225, 48, 108, 0.3)'
                                    }}
                                >
                                    <InstagramLogo size={22} weight="fill" />
                                </motion.a>
                                
                                <motion.a
                                    href="https://www.tiktok.com/@respect.zvd.izmail?_r=1&_t=ZS-93OkyI1dY81"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white transition-all duration-500 cursor-pointer"
                                    style={{
                                        background: '#000000',
                                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                                    }}
                                >
                                    <TiktokLogo size={22} weight="fill" />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div 
                        className="w-1.5 h-1.5 bg-primary/50 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    )
}
