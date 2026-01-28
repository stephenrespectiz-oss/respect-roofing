import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ps8Img from '@/assets/images/ps8.png'
import ps10Img from '@/assets/images/ps10.png'
import ps14Img from '@/assets/images/ps14.png'
import pk20Img from '@/assets/images/pk20.png'
import pk35Img from '@/assets/images/pk35.png'

const products = [
    {
        name: 'ПС8',
        type: 'стіновий, паркановий',
        image: ps8Img,
        specs: [
            'Загальна ширина листа: 1195 мм',
            'Робоча ширина листа: 1175 мм',
            'Товщина металу: 0,30–0,55 мм',
            'Мінімальна довжина: 100 мм'
        ]
    },
    {
        name: 'ПС10',
        type: 'стіновий, паркановий',
        image: ps10Img,
        specs: [
            'Загальна ширина листа: 1210 мм',
            'Робоча ширина листа: 1145 мм',
            'Товщина металу: 0,30–0,55 мм',
            'Мінімальна довжина: 100 мм'
        ]
    },
    {
        name: 'ПС14',
        type: 'стіновий',
        image: ps14Img,
        specs: [
            'Загальна ширина листа: 1170 мм',
            'Робоча ширина листа: 1140 мм',
            'Товщина металу: 0,30–0,55 мм',
            'Мінімальна довжина: 100 мм'
        ]
    },
    {
        name: 'ПК20',
        type: 'покрівельний',
        image: pk20Img,
        specs: [
            'Загальна ширина листа: 1150 мм',
            'Робоча ширина листа: 1100 мм',
            'Товщина металу: 0,30–0,55 мм',
            'Мінімальна довжина: 200 мм'
        ]
    },
    {
        name: 'ПК35',
        type: 'покрівельний',
        image: pk35Img,
        specs: [
            'Загальна ширина листа: 1120 мм',
            'Робоча ширина листа: 1060 мм',
            'Товщина металу: 0,40–0,55 мм',
            'Мінімальна довжина: 400 мм'
        ]
    }
]

export function ProfiledSheeting() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-8 sm:py-10 md:py-14 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-6 sm:mb-8"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3 tracking-tight">
                        ПРОФНАСТИЛ
                    </h2>
                    <div className="h-1 w-16 sm:w-20 bg-accent rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                ease: "easeOut" 
                            }}
                            whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <Card className="p-0 h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-accent/30 overflow-hidden flex flex-col">
                                <div className="aspect-[4/3] w-full overflow-hidden bg-muted/30">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                                    <Badge className="mb-2 sm:mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 text-xs w-fit">
                                        {product.type}
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
