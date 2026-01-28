import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import image1 from '@/assets/images/1.png'
import image2 from '@/assets/images/2.png'

export function MetalFence() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-8 sm:py-10 md:py-14 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-6 sm:mb-8"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3 tracking-tight">
                        ШТАКЕТНИК
                    </h2>
                    <div className="h-1 w-16 sm:w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Card className="p-5 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-accent/30">
                            <div className="mb-6">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 text-accent"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3 text-center">
                                    Металевий штакетник
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-center px-4">
                                    Сучасне рішення для огорож. Довговічний матеріал з широким вибором кольорів і профілів.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                                    className="overflow-hidden rounded-lg h-64 sm:h-80 md:h-96"
                                >
                                    <img
                                        src={image1}
                                        alt="Металевий штакетник - варіант 1"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                                    className="overflow-hidden rounded-lg h-64 sm:h-80 md:h-96"
                                >
                                    <img
                                        src={image2}
                                        alt="Металевий штакетник - варіант 2"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>

                            <div className="flex justify-center">
                                <div className="inline-block px-4 sm:px-5 py-2 bg-secondary/10 rounded-lg border border-secondary/20">
                                    <p className="text-secondary font-medium text-xs sm:text-sm">
                                        Детальні характеристики уточнюйте у менеджера
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
