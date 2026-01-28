export function Logo({ className = "" }: { className?: string }) {
    return (
        <svg 
            viewBox="0 0 320 100" 
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M 20 75 L 80 30 L 140 75" 
                stroke="#C41E3A" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="miter"
            />
            
            <path 
                d="M 105 75 L 160 30 L 215 75" 
                stroke="#C41E3A" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="miter"
            />
            
            <path 
                d="M 180 75 L 240 30 L 300 75" 
                stroke="#C41E3A" 
                strokeWidth="10" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="miter"
            />
            
            <rect 
                x="148" 
                y="52" 
                width="10" 
                height="10" 
                fill="#C41E3A"
            />
            <rect 
                x="162" 
                y="52" 
                width="10" 
                height="10" 
                fill="#C41E3A"
            />
            <rect 
                x="148" 
                y="66" 
                width="10" 
                height="10" 
                fill="#C41E3A"
            />
            <rect 
                x="162" 
                y="66" 
                width="10" 
                height="10" 
                fill="#C41E3A"
            />
        </svg>
    )
}
