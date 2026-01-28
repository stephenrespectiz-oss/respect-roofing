import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import classicImage from '@/assets/images/classic.png'
import grandaImage from '@/assets/images/granda.png'
import fierraImage from '@/assets/images/fierra.png'

const products = [
    {
        name: 'Classic / Classic Plus',
        specs: [
            'Загальна ширина листа: 1200 мм',
            'Робоча ширина листа: 1100 мм',
            'Довжина модуля: 350 мм',
            'Висота профілю: 23 мм',
            'Висота штампування: 15 мм / 20 мм',
            'Товщина металу: 0,45–0,5 мм',
            'Мінімальний кут нахилу: 14°'
        ]
    },
    {
        name: 'Granada / Granada Plus',
        specs: [
            'Загальна ширина листа: 1200 мм',
            'Робоча ширина листа: 1100 мм',
            'Довжина модуля: 350 мм',
            'Висота профілю: 25 мм',
            'Висота штампування: 15 мм / 20 мм',
            'Товщина металу: 0,45–0,5 мм',
            'Мінімальний кут нахилу: 14°'
        ]
    },
    {
        name: 'Finera / Finera Plus',
        specs: [
            'Загальна ширина листа: 1200 мм',
            'Робоча ширина листа: 1140 мм',
            'Довжина модуля: 350 мм',
            'Висота профілю: 28 мм',
            'Висота штампування: 20 мм / 30 мм',
            'Товщина металу: 0,45–0,5 мм',
            'Мінімальний кут нахилу: 14°'
        ]
    }
]

export function MetalTiles() {
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
                        МЕТАЛОЧЕРЕПИЦЯ
                    </h2>
                    <div className="h-1 w-16 sm:w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.15,
                                ease: "easeOut" 
                            }}
                            whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-accent/30">
                                {index === 0 && (
                                    <div className="w-full aspect-[4/3]">
                                        <img 
                                            src={classicImage} 
                                            alt="Classic / Classic Plus металочерепиця" 
                                            className="w-full h-full object-contain bg-white p-2"
                                        />
                                    </div>
                                )}
                                {index === 1 && (
                                    <div className="w-full aspect-[4/3]">
                                        <img 
                                            src={grandaImage} 
                                            alt="Granada / Granada Plus металочерепиця" 
                                            className="w-full h-full object-contain bg-white p-2"
                                        />
                                    </div>
                                )}
                                {index === 2 && (
                                    <div className="w-full aspect-[4/3]">
                                        <img 
                                            src={fierraImage} 
                                            alt="Finera / Finera Plus металочерепиця" 
                                            className="w-full h-full object-contain bg-white p-2"
                                        />
                                    </div>
                                )}
                                <div className="p-4 sm:p-5 md:p-6">
                                    <Badge className="mb-2 sm:mb-3 bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 text-xs">
                                        Металочерепиця
                                    </Badge>
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                                        {product.name}
                                    </h3>
                                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                                        {product.specs.map((spec, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-accent mr-2 mt-1 flex-shrink-0">▪</span>
                                                <span className="leading-relaxed">{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
