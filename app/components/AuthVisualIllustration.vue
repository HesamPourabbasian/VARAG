<template>
  <div class="relative w-full h-full overflow-hidden select-none">
    <!-- Full-fidelity Vector Artwork matching login.webp -->
    <svg
      viewBox="0 0 600 680"
      preserveAspectRatio="xMidYMid slice"
      class="w-full h-full block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Night Sky Gradient -->
        <linearGradient id="nightSky" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stop-color="#150838" />
          <stop offset="45%" stop-color="#280C5C" />
          <stop offset="85%" stop-color="#3F147A" />
          <stop offset="100%" stop-color="#5B21B6" />
        </linearGradient>

        <!-- Moon Glows -->
        <radialGradient id="moonGlowOuter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35" />
          <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </radialGradient>

        <radialGradient id="moonGlowInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
          <stop offset="70%" stop-color="#EDE9FE" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#DDD6FE" stop-opacity="0.2" />
        </radialGradient>

        <!-- Door Portal Warm Interior Light -->
        <linearGradient id="portalLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FEF08A" />
          <stop offset="30%" stop-color="#FDE047" />
          <stop offset="65%" stop-color="#F59E0B" />
          <stop offset="100%" stop-color="#D97706" />
        </linearGradient>

        <!-- Door Shadow & Surface -->
        <linearGradient id="doorSurface" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6B21A8" />
          <stop offset="40%" stop-color="#8B5CF6" />
          <stop offset="100%" stop-color="#A78BFA" />
        </linearGradient>

        <!-- Steps Gradient -->
        <linearGradient id="stepTop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F59E0B" />
          <stop offset="50%" stop-color="#FBBF24" />
          <stop offset="100%" stop-color="#D97706" />
        </linearGradient>

        <linearGradient id="stepFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#B45309" />
          <stop offset="100%" stop-color="#78350F" />
        </linearGradient>

        <!-- Villa Wall & Accents -->
        <linearGradient id="villaWall" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4C1D95" />
          <stop offset="100%" stop-color="#2E1065" />
        </linearGradient>

        <linearGradient id="villaWindowGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FEF9C3" />
          <stop offset="100%" stop-color="#F59E0B" />
        </linearGradient>

        <!-- Pathway Gradient -->
        <linearGradient id="pathwayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2DD4BF" stop-opacity="0.8" />
          <stop offset="50%" stop-color="#38BDF8" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#A855F7" stop-opacity="0.9" />
        </linearGradient>

        <!-- Leaf Stripe Pattern -->
        <pattern id="leafStripes" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#D97706" stroke-width="3" />
          <line x1="4" y1="0" x2="4" y2="8" stroke="#FBBF24" stroke-width="3" />
        </pattern>
      </defs>

      <!-- 1. Deep Sky Background -->
      <rect width="600" height="680" fill="url(#nightSky)" />

      <!-- 2. Twinkling Stars -->
      <g fill="#FFFFFF">
        <circle cx="80" cy="90" r="1.2" opacity="0.8" />
        <circle cx="130" cy="50" r="1.5" opacity="0.9" />
        <circle cx="170" cy="110" r="1" opacity="0.6" />
        <circle cx="220" cy="70" r="1.8" opacity="0.95" />
        <circle cx="260" cy="140" r="1.2" opacity="0.7" />
        <circle cx="310" cy="80" r="1" opacity="0.5" />
        <circle cx="350" cy="120" r="1.5" opacity="0.8" />
        <circle cx="390" cy="60" r="1.8" opacity="0.9" />
        <circle cx="430" cy="130" r="1.2" opacity="0.75" />
        <circle cx="470" cy="75" r="1" opacity="0.6" />
        <circle cx="520" cy="150" r="1.5" opacity="0.85" />
        <circle cx="560" cy="85" r="1.2" opacity="0.7" />
        <circle cx="290" cy="190" r="1" opacity="0.5" />
        <circle cx="380" cy="180" r="1.2" opacity="0.6" />
        <!-- Cross Sparkle Star -->
        <path d="M220 66 L220 74 M216 70 L224 70" stroke="#FFFFFF" stroke-width="1" opacity="0.9" />
        <path d="M390 56 L390 64 M386 60 L394 60" stroke="#FFFFFF" stroke-width="1" opacity="0.8" />
      </g>

      <!-- 3. Radiant Moon (Top Right as in login.webp) -->
      <g transform="translate(510, 110)">
        <!-- Outer Halo -->
        <circle cx="0" cy="0" r="48" fill="url(#moonGlowOuter)" />
        <!-- Mid Halo -->
        <circle cx="0" cy="0" r="32" fill="url(#moonGlowInner)" />
        <!-- Moon Disc -->
        <circle cx="0" cy="0" r="20" fill="#FFFFFF" />
      </g>

      <!-- 4. Distant Mountain Silhouettes -->
      <path
        d="M60 380 L180 230 L260 310 L390 170 L480 290 L600 160 L600 500 L60 500 Z"
        fill="#311054"
        opacity="0.85"
      />
      <path
        d="M120 400 L240 270 L340 370 L460 210 L560 320 L600 280 L600 520 L120 520 Z"
        fill="#431776"
        opacity="0.9"
      />

      <!-- 5. Pine Forest Silhouette Ridge -->
      <g fill="#1F0B38">
        <!-- Trees along mountain base -->
        <polygon points="180,380 190,310 200,380" />
        <polygon points="195,380 205,295 215,380" />
        <polygon points="210,380 220,315 230,380" />
        <polygon points="235,390 248,300 260,390" />
        <polygon points="255,390 268,285 280,390" />
        <polygon points="275,390 288,305 300,390" />
        <polygon points="340,390 355,275 370,390" />
        <polygon points="365,390 380,260 395,390" />
        <polygon points="390,390 402,280 415,390" />
        <polygon points="410,400 425,290 440,400" />
        <polygon points="435,400 450,270 465,400" />
        <polygon points="460,400 475,295 490,400" />
        <polygon points="500,400 515,280 530,400" />
        <polygon points="525,400 540,265 555,400" />
        <polygon points="550,400 565,290 580,400" />
      </g>

      <!-- 6. Architectural Modern Villa (Right of the door) -->
      <g>
        <!-- Villa Main Block Base -->
        <rect x="360" y="320" width="220" height="230" rx="4" fill="url(#villaWall)" />

        <!-- Villa Upper Floor Overhang Roof -->
        <polygon points="350,345 570,345 550,335 340,335" fill="#7C3AED" />
        <rect x="350" y="345" width="210" height="8" fill="#5B21B6" />

        <!-- Upper Floor Large Glowing Picture Window (Trellis slats) -->
        <rect x="365" y="365" width="125" height="42" rx="4" fill="url(#villaWindowGlow)" />
        <!-- Window Grids / Slats -->
        <g stroke="#D97706" stroke-width="2" opacity="0.65">
          <line x1="390" y1="365" x2="390" y2="407" />
          <line x1="415" y1="365" x2="415" y2="407" />
          <line x1="440" y1="365" x2="440" y2="407" />
          <line x1="465" y1="365" x2="465" y2="407" />
          <line x1="365" y1="386" x2="490" y2="386" />
        </g>

        <!-- Right Side Upper Small Glowing Windows -->
        <rect x="505" y="380" width="18" height="24" rx="2" fill="url(#villaWindowGlow)" />
        <rect x="532" y="380" width="18" height="24" rx="2" fill="url(#villaWindowGlow)" />
        <line x1="514" y1="380" x2="514" y2="404" stroke="#D97706" stroke-width="1.5" />
        <line x1="541" y1="380" x2="541" y2="404" stroke="#D97706" stroke-width="1.5" />

        <!-- Ground Floor Villa Structure -->
        <rect x="360" y="435" width="220" height="115" fill="#3B1569" />

        <!-- Ground Floor Warm Arched Portal / Door -->
        <path d="M410 520 L410 470 A20 20 0 0 1 450 470 L450 520 Z" fill="url(#portalLight)" />
        <rect x="428" y="470" width="4" height="50" fill="#B45309" opacity="0.4" />

        <!-- Ground Floor Siding / Modern Grille Texture -->
        <g stroke="#280D4C" stroke-width="2.5" opacity="0.7">
          <line x1="468" y1="460" x2="570" y2="460" />
          <line x1="468" y1="472" x2="570" y2="472" />
          <line x1="468" y1="484" x2="570" y2="484" />
          <line x1="468" y1="496" x2="570" y2="496" />
          <line x1="468" y1="508" x2="570" y2="508" />
        </g>
        <!-- Lit Tiny Arched Ground Windows -->
        <g fill="url(#villaWindowGlow)">
          <rect x="475" y="468" width="10" height="14" rx="4" />
          <rect x="495" y="468" width="10" height="14" rx="4" />
          <rect x="515" y="468" width="10" height="14" rx="4" />
          <rect x="535" y="468" width="10" height="14" rx="4" />
          <rect x="555" y="468" width="10" height="14" rx="4" />
        </g>
      </g>

      <!-- 7. The Grand Open Doorway (Centerpiece from login.webp) -->
      <g>
        <!-- Door Frame Outer Structure -->
        <rect x="235" y="270" width="130" height="175" rx="4" fill="#3B166E" />
        <rect x="238" y="273" width="124" height="169" rx="3" stroke="#7C3AED" stroke-width="3" fill="none" />

        <!-- Door Opening Interior Glow (Light pouring from within) -->
        <rect x="240" y="275" width="120" height="165" fill="url(#portalLight)" />

        <!-- Vertical Interior Light Rays / Slats -->
        <g stroke="#FEF08A" stroke-width="3.5" opacity="0.8">
          <line x1="255" y1="315" x2="255" y2="440" />
          <line x1="272" y1="315" x2="272" y2="440" />
          <line x1="289" y1="315" x2="289" y2="440" />
          <line x1="306" y1="315" x2="306" y2="440" />
          <line x1="323" y1="315" x2="323" y2="440" />
          <line x1="340" y1="315" x2="340" y2="440" />
        </g>
        <polygon points="240,275 360,275 345,315 255,315" fill="#FDE047" opacity="0.6" />

        <!-- The Open Door (Swung open at an angle to the right) -->
        <!-- Door Leaf Perspective Polygon -->
        <polygon points="360,250 435,275 435,465 360,440" fill="url(#doorSurface)" />
        <polygon points="435,275 440,278 440,468 435,465" fill="#4C1D95" />

        <!-- Door Knob (Circular 3D Handle in shiny lavender) -->
        <circle cx="420" cy="360" r="11" fill="#DDD6FE" stroke="#8B5CF6" stroke-width="2" />
        <circle cx="417" cy="358" r="4" fill="#FFFFFF" />
      </g>

      <!-- 8. Glowing Stone Steps (Leading down from open door) -->
      <g>
        <!-- Step 1 (Highest) -->
        <polygon points="225,440 370,440 365,455 220,455" fill="url(#stepTop)" />
        <polygon points="220,455 365,455 365,465 220,465" fill="url(#stepFront)" />

        <!-- Step 2 -->
        <polygon points="205,465 350,465 345,480 200,480" fill="url(#stepTop)" />
        <polygon points="200,480 345,480 345,490 200,490" fill="url(#stepFront)" />

        <!-- Step 3 -->
        <polygon points="185,490 330,490 325,505 180,505" fill="url(#stepTop)" />
        <polygon points="180,505 325,505 325,515 180,515" fill="url(#stepFront)" />

        <!-- Step 4 (Lowest terrace platform) -->
        <polygon points="165,515 310,515 305,532 160,532" fill="url(#stepTop)" />
        <polygon points="160,532 305,532 305,545 160,545" fill="url(#stepFront)" />
      </g>

      <!-- 9. Illuminated Geometric Foreground Pathway -->
      <g>
        <polygon points="160,545 360,545 460,680 280,680" fill="url(#pathwayGrad)" />
        <!-- Pathway polygon facets -->
        <polygon points="280,680 460,680 400,600 240,600" fill="#38BDF8" opacity="0.6" />
        <polygon points="160,545 240,600 400,600 360,545" fill="#5EEAD4" opacity="0.4" />
        <polygon points="460,680 600,680 600,600 400,600" fill="#C084FC" opacity="0.4" />
      </g>

      <!-- 10. Botanical Leaves & Plants (Bottom & surrounding door) -->
      <g>
        <!-- Purple Monstera/Fan Leaves (Left of stairs) -->
        <path d="M110 520 C90 480 120 440 160 450 C180 480 160 520 110 520 Z" fill="#6D28D9" />
        <path d="M125 540 C95 500 125 450 170 465 C190 500 170 540 125 540 Z" fill="#7C3AED" />

        <!-- Striped Golden Leaf (Exact match to login.webp amber fan leaf) -->
        <path d="M140 550 C130 510 160 480 195 490 C215 520 185 555 140 550 Z" fill="url(#leafStripes)" stroke="#D97706" stroke-width="2" />
        <circle cx="170" cy="520" r="18" fill="url(#leafStripes)" stroke="#B45309" stroke-width="2" />

        <!-- Foliage bushes behind steps -->
        <circle cx="180" cy="450" r="32" fill="#581C87" />
        <circle cx="150" cy="470" r="28" fill="#4C1D95" />
        <circle cx="130" cy="500" r="34" fill="#3B1569" />
        <circle cx="100" cy="525" r="30" fill="#2E1065" />
      </g>

      <!-- 11. Subtle ambient ground glow & reflections -->
      <ellipse cx="250" cy="560" rx="140" ry="25" fill="#F59E0B" opacity="0.25" />
    </svg>
  </div>
</template>

<script setup lang="ts">
// Full vector illustration reproducing the scene in login.webp
</script>
