<template>
  <div id="hero" class="select-none z-20 relative">
    <div id="herobg" class="mx-auto min-h-[calc(100svh-0rem)] md:min-h-[calc(100vh-0rem)] bg-red-200 bg-cover bg-center">
      <div class="flex flex-col items-center gap-y-2 justify-between text-center min-h-[calc(100svh-0rem)] md:min-h-[calc(100vh-0rem)]">
        <div class="min-h-[0rem]"></div>
        <div class="px-4 sm:px-6 lg:px-8 relative">
          <SvgStroke 
            ref="svgStrokeRef"
            stroke-color="#00da9c"
            target-selector="#strokepos"
            :position-offset="{ left: -0.15, top: 0}"
            :width-multiplier="1.15"
            svg-id="svgme"
            path-id="herostroke"
            :animate="true"
          />
          <h1 id="heroelem" class="text-5xl md:text-6xl 2xl:text-7xl mb-7 font-extrabold font-nave text-brand-yellow relative z-10">
            Media <span id="strokepos" class="relative z-10">Audience</span> <br />Experts.
          </h1>
          <p id="heroelem" class="text-md md:text-2xl 2xl:text-3xl font-light mb-7 max-w-2xl mx-auto font-myriadvariable text-brand-yellow leading-tight">
            Helping brands achieve impactful ad performance by creating custom, high-quality audiences at scale.
          </p>
          <div id="heroelem" class="mb-5">
            <!-- <router-link
              to="https://nativetouch.com/newsite/about"
              class="inline-block font-myriadvariable font-bold text-brand-green px-8 py-4 text-[0.625rem] md:text-[0.8rem] 2xl:text-lg border-2 border-brand-darkgreen rounded-full bg-transparent hover:bg-brand-darkgreen hover:text-white transition duration-300 ease-in-out"
            >
              LEARN MORE
            </router-link> -->
            <a
                href="https://www.nativetouch.com"
                target="_blank" rel="noopener noreferrer" class="inline-block font-myriadvariable font-bold text-brand-green px-8 py-4 text-[0.625rem] md:text-[0.8rem] 2xl:text-lg border-2 border-brand-darkgreen rounded-full bg-transparent hover:bg-brand-darkgreen hover:text-white transition duration-300 ease-in-out"
                >
                LEARN MORE
              </a>
          </div>
        </div>
        <div>
          <div id="heroelem" class="flex justify-center mb-2 animate-bounce">
            <img
              src="../assets/home/scroll-icon.svg"
              alt="scroll down"
              class="w-10 h-10"
            />
          </div>
          <p id="heroelem" class="text-[0.625rem] 2xl:text-[0.8rem] font-myriadvariable max-w-2xl mx-auto text-white">
            SCROLL DOWN
          </p>
        </div>
        <div class="w-full">
          <p id="brandselem" class="text-xs md:text-sm 2xl:text-lg font-myriadvariable mb-1 max-w-2xl mx-auto text-white">
            Brand's we've worked with
          </p>
          <hr id="hrlineelem" class="border-t border-white w-4/5 mx-auto mb-3" />
          <div id="logoselem" class="w-full overflow-hidden mb-6">
            <div class="logos-scroll flex gap-6 items-center">
              <div class="logo-item flex-shrink-0">
                <img
                  src="../assets/logos/logo-ikea.svg"
                  alt="IKEA"
                  class="h-5 md:h-6 w-auto"
                />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-brp.svg"
                    alt="BRP"
                    class="h-6 md:h-7 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-sony.svg"
                    alt="SONY"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-porsche.svg"
                    alt="PORSCHE"
                    class="h-2 md:h-3 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-n.svg"
                    alt="Nespresso"
                    class="h-6 md:h-7 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-canada-goose.svg"
                    alt="Canada Goose"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-shiseido.svg"
                    alt="SHISEIDO"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-td.svg"
                    alt="TD"
                    class="h-5 md:h-6 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-sephora.svg"
                    alt="SEPHORA"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-gm.svg"
                    alt="GM"
                    class="h-6 md:h-7 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-subway.svg"
                    alt="SUBWAY"
                    class="h-4 md:h-5 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-air-canada.svg"
                    alt="SUBWAY"
                    class="h-8 md:h-9 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-amazon.svg"
                    alt="SUBWAY"
                    class="h-5 md:h-6 w-auto"
                  />
                </div>
                <!-- Duplicate logos for seamless loop -->
                <div class="logo-item flex-shrink-0">
                <img
                  src="../assets/logos/logo-ikea.svg"
                  alt="IKEA"
                  class="h-5 md:h-6 w-auto"
                />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-brp.svg"
                    alt="BRP"
                    class="h-6 md:h-7 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-sony.svg"
                    alt="SONY"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-porsche.svg"
                    alt="PORSCHE"
                    class="h-2 md:h-3 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-n.svg"
                    alt="Nespresso"
                    class="h-6 md:h-7 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-canada-goose.svg"
                    alt="Canada Goose"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-shiseido.svg"
                    alt="SHISEIDO"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-td.svg"
                    alt="TD"
                    class="h-5 md:h-6 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-sephora.svg"
                    alt="SEPHORA"
                    class="h-3 md:h-4 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-gm.svg"
                    alt="GM"
                    class="h-6 md:h-7 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-subway.svg"
                    alt="SUBWAY"
                    class="h-4 md:h-5 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-air-canada.svg"
                    alt="SUBWAY"
                    class="h-8 md:h-9 w-auto"
                  />
              </div>
              <div class="logo-item flex-shrink-0">
                <img
                    src="../assets/logos/logo-amazon.svg"
                    alt="SUBWAY"
                    class="h-5 md:h-6 w-auto"
                  />
                </div>
              <!-- Duplicate logos for seamless loop -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted ,ref} from 'vue';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import homeHeroImage from '../assets/home/home-hero.jpg';
import SvgStroke from './SvgStroke.vue';

let lenis;
const svgStrokeRef = ref(null);
// Function to preload image
function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function animateStroke() {
  if (svgStrokeRef.value) {
    svgStrokeRef.value.animateStroke();
  }
}

function repositionStroke() {
  if (svgStrokeRef.value) {
    svgStrokeRef.value.positionSVG();
  }
}
// Function to initialize animations
function initAnimations() {
  
  gsap.registerPlugin(DrawSVGPlugin);
  
  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'power3.out',
    }
  });
  
  tl
    .add('intro')
    .set('#hero', { opacity: 1 }, 'intro')
    .from('#heroelem', { autoAlpha: 0, y: 50, stagger: 0.1, filter: 'blur(10px)' }, 'intro')
    .from('#hrlineelem', { autoAlpha: 0, y: -5 }, '>')
    .from('#brandselem', { autoAlpha: 0, y: 5 }, '<')
    .from('#logoselem', { autoAlpha: 0 }, '>')
    .call(moveLogos, [], 'intro+=2')
    .call(repositionStroke, [], 'intro+=0.8') // Reposition after elements are animated
    .call(animateStroke, [], '>+=0.1'); // Animate stroke after repositioning
}

function moveLogos() {
  const logosContainer = document.querySelector(".logos-scroll");
  const logoItems = gsap.utils.toArray(".logo-item");
  
  if (!logosContainer || logoItems.length === 0) {
    return;
  }
  
  const originalCount = logoItems.length / 2;
  let totalWidth = 0;
  
  for (let i = 0; i < originalCount; i++) {
    totalWidth += logoItems[i].offsetWidth;
  }
  
  const firstDuplicate = logoItems[originalCount];
  const distanceToLoop = firstDuplicate.offsetLeft - logoItems[0].offsetLeft;
  
  const tl = gsap.timeline({ repeat: -1 });
  
  tl.to(logosContainer, {
    x: `-=${distanceToLoop}`,
    ease: "none",
    duration: 90,
  });
}

onMounted(async () => {
  try {
    // Preload the hero image before starting animations
    await preloadImage(homeHeroImage);
  } catch (error) {
    console.error('Error preloading hero image:', error);
  }
  
  // Wait for fonts to load before initializing animations
  // This ensures accurate text measurements for stroke positioning
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  } else {
    // Fallback: wait a bit for fonts to load
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  // Initialize animations
  initAnimations();
});

onUnmounted(() => {
  // Cleanup handled by component
});
</script>

<style scoped>
svg {
  position: absolute;
}

#hero {
  opacity: 0;
}

#herobg {
  background-image: url('../assets/home/home-hero.jpg');
}
  
  /* .logos-scroll {
    animation: scroll 30s linear infinite;
    will-change: transform;
  }
  
  .logos-scroll:hover {
    animation-play-state: paused;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  } */
  
  /* .logo-item img {
    filter: brightness(0) invert(1);
  } */
  
  </style>  