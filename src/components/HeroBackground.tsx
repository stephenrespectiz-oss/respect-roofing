export function HeroBackground() {
    return (
        <svg 
            className="w-full h-full" 
            viewBox="0 0 1920 1080" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#d4dce6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#e8eef5', stopOpacity: 1 }} />
                </linearGradient>
                
                <pattern id="metalTile" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                    <rect width="40" height="30" fill="#2c3e50" />
                    <rect x="0" y="0" width="40" height="14" fill="#34495e" />
                    <rect x="0" y="14" width="40" height="2" fill="#1a252f" />
                    <rect x="0" y="16" width="40" height="12" fill="#2c3e50" />
                    <rect x="0" y="28" width="40" height="2" fill="#495b6d" />
                    <line x1="0" y1="7" x2="40" y2="7" stroke="#3d5168" strokeWidth="0.5" />
                    <line x1="0" y1="23" x2="40" y2="23" stroke="#3d5168" strokeWidth="0.5" />
                </pattern>
                
                <pattern id="metalTileDark" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                    <rect width="40" height="30" fill="#1a252f" />
                    <rect x="0" y="0" width="40" height="14" fill="#243441" />
                    <rect x="0" y="14" width="40" height="2" fill="#0f1821" />
                    <rect x="0" y="16" width="40" height="12" fill="#1a252f" />
                    <rect x="0" y="28" width="40" height="2" fill="#2c3e50" />
                    <line x1="0" y1="7" x2="40" y2="7" stroke="#2a3a4a" strokeWidth="0.5" />
                    <line x1="0" y1="23" x2="40" y2="23" stroke="#2a3a4a" strokeWidth="0.5" />
                </pattern>
                
                <filter id="shadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="2" dy="4" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <rect width="1920" height="1080" fill="url(#skyGradient)" />
            
            <ellipse cx="500" cy="200" rx="80" ry="80" fill="#ffffff" opacity="0.6" />
            <ellipse cx="1400" cy="300" rx="100" ry="60" fill="#ffffff" opacity="0.5" />
            <ellipse cx="800" cy="250" rx="120" ry="70" fill="#ffffff" opacity="0.4" />
            
            <g filter="url(#shadow)">
                <polygon points="300,450 850,200 1400,450" fill="url(#metalTileDark)" />
                <rect x="600" y="450" width="500" height="450" fill="#e8ecf0" />
                <rect x="700" y="550" width="120" height="160" fill="#34495e" opacity="0.8" />
                <rect x="705" y="555" width="55" height="75" fill="#5a7a92" opacity="0.3" />
                <rect x="760" y="555" width="55" height="75" fill="#5a7a92" opacity="0.3" />
                <rect x="705" y="635" width="55" height="70" fill="#5a7a92" opacity="0.3" />
                <rect x="760" y="635" width="55" height="70" fill="#5a7a92" opacity="0.3" />
                
                <rect x="950" y="600" width="100" height="140" fill="#34495e" opacity="0.8" />
                <rect x="955" y="605" width="90" height="65" fill="#5a7a92" opacity="0.3" />
                <rect x="955" y="675" width="90" height="60" fill="#5a7a92" opacity="0.3" />
                
                <rect x="850" y="180" width="40" height="70" fill="#8b5a5a" />
                <rect x="830" y="150" width="80" height="30" fill="#6d4545" />
                <rect x="825" y="145" width="90" height="5" fill="#4a3030" />
                
                <polygon points="550,420 650,380 750,420 750,450 550,450" fill="url(#metalTile)" />
            </g>
            
            <g filter="url(#shadow)" transform="translate(500, 50)">
                <polygon points="1100,550 1500,380 1900,550" fill="url(#metalTile)" />
                <rect x="1300" y="550" width="400" height="400" fill="#f5f7fa" />
                
                <rect x="1380" y="650" width="100" height="130" fill="#34495e" opacity="0.8" />
                <rect x="1385" y="655" width="90" height="60" fill="#5a7a92" opacity="0.3" />
                <rect x="1385" y="720" width="90" height="55" fill="#5a7a92" opacity="0.3" />
                
                <rect x="1550" y="700" width="90" height="120" fill="#34495e" opacity="0.8" />
                <rect x="1555" y="705" width="80" height="55" fill="#5a7a92" opacity="0.3" />
                <rect x="1555" y="765" width="80" height="50" fill="#5a7a92" opacity="0.3" />
                
                <rect x="1490" y="360" width="30" height="50" fill="#8b5a5a" />
                <rect x="1475" y="340" width="60" height="20" fill="#6d4545" />
                <rect x="1472" y="337" width="66" height="3" fill="#4a3030" />
                
                <polygon points="1250,520 1320,490 1390,520 1390,550 1250,550" fill="url(#metalTileDark)" />
            </g>
            
            <ellipse cx="1650" cy="850" rx="60" ry="30" fill="#7a9b5f" opacity="0.6" />
            <ellipse cx="1720" cy="870" rx="50" ry="25" fill="#6b8a52" opacity="0.7" />
            <ellipse cx="1780" cy="860" rx="45" ry="28" fill="#5c7a45" opacity="0.6" />
            
            <ellipse cx="200" cy="750" rx="70" ry="35" fill="#7a9b5f" opacity="0.6" />
            <ellipse cx="280" cy="770" rx="55" ry="30" fill="#6b8a52" opacity="0.7" />
            <ellipse cx="150" cy="765" rx="50" ry="32" fill="#5c7a45" opacity="0.6" />
        </svg>
    )
}
