import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Certificate, ShieldCheck, Package, Truck } from '@phosphor-icons/react'

const badges = [
    {
        icon: Certificate,
        title: 'Якість',
        description: 'Сертифікована продукція'
    },
    {
        icon: ShieldCheck,
        title: 'Гарантія',
        description: 'Надійність матеріалів'
    },
    {
        icon: Package,
        title: 'Виробництво',
        description: 'Власний завод'
    },
    {
        icon: Truck,
        title: 'Доставка',
        description: 'Швидке відвантаження'
    }
]

export function TrustBadges() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-8 sm:py-10 md:py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon
                        return (
                            <motion.div
                                key={badge.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    ease: "easeOut" 
                                }}
                                className="flex flex-col items-center text-center px-2"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                                    <Icon size={24} weight="bold" className="text-accent sm:w-7 sm:h-7" />
                                </div>
                                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                                    {badge.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {badge.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
