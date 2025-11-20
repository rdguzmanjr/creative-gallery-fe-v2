<template>
  <svg 
    :id="svgId" 
    ref="svgElement"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 407 146.1"
    :class="svgClass"
    :style="svgStyle"
    class="svg-stroke-hidden"
  >
    <path 
      :id="pathId" 
      ref="pathElement"
      d="M135.8 102.2c-24.4-.1-49.3-1.7-72-10.6-16.1-6.3-32.7-19.8-31-37.1.7-7.4 4.8-14 9.9-19.4 14.6-15.2 36.6-20.3 57.4-23.8C192.2-4.2 289.8-2.8 375.4 34.6c13 5.7 27.2 14.2 29.3 28.2 1.4 8.9-2.8 18-9.1 24.5s-14.4 10.8-22.5 14.7c-56.9 27.4-120.2 39.9-183.2 41.9-63.1 1.9-126.1-6.6-187.9-19.6" 
      :style="pathStyle"
    />
  </svg>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

const props = defineProps({
  // Color props
  strokeColor: {
    type: String,
    default: '#00da9c' // Default green color
  },
  strokeWidth: {
    type: String,
    default: '4px'
  },
  // Positioning props
  targetSelector: {
    type: String,
    default: null // CSS selector for element to position relative to
  },
  positionOffset: {
    type: Object,
    default: () => ({ left: -0.1, top: -0.1 }) // Percentage offsets
  },
  widthMultiplier: {
    type: Number,
    default: 1.15 // How much wider than target element
  },
  // Style props
  svgClass: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: 'absolute' // 'absolute', 'relative', 'static', etc.
  },
  // ID props for animation targeting
  svgId: {
    type: String,
    default: 'svgme'
  },
  pathId: {
    type: String,
    default: 'herostroke'
  },
  // Auto-positioning
  autoPosition: {
    type: Boolean,
    default: true
  },
  // Animation props
  animate: {
    type: Boolean,
    default: true
  },
  animationDelay: {
    type: Number,
    default: 0
  },
  animationDuration: {
    type: Number,
    default: 1
  },
  animationEase: {
    type: String,
    default: 'power1.inOut'
  }
});

const emit = defineEmits(['animationComplete']);

const svgElement = ref(null);
const pathElement = ref(null);
let resizeTimeout = null;
let animationTimeline = null;

const pathStyle = computed(() => ({
  fill: 'none',
  stroke: props.strokeColor,
  strokeLinecap: 'round',
  strokeMiterlimit: 10,
  strokeWidth: props.strokeWidth
}));

const svgStyle = computed(() => {
  const baseStyle = {
    position: props.position
  };
  
  // If auto-positioning is disabled, return base style
  if (!props.autoPosition || !props.targetSelector) {
    return baseStyle;
  }
  
  return baseStyle;
});

function positionSVG(retryCount = 0) {
  if (!props.autoPosition || !props.targetSelector || !svgElement.value) {
    return;
  }

  const targetEl = document.querySelector(props.targetSelector);
  
  if (targetEl && svgElement.value) {
    // Force a reflow to ensure layout is complete
    void targetEl.offsetHeight;
    
    const targetRect = targetEl.getBoundingClientRect();
    const containerRect = svgElement.value.parentElement?.getBoundingClientRect() || { left: 0, top: 0 };
    
    // Only position if target has dimensions
    if (targetRect.width > 0 && targetRect.height > 0) {
      // Calculate position relative to container
      const relativeLeft = targetRect.left - containerRect.left + (targetRect.width * props.positionOffset.left);
      const relativeTop = targetRect.top - containerRect.top + (targetRect.height * props.positionOffset.top);
      
      // Set SVG width based on target width
      const svgWidth = targetRect.width * props.widthMultiplier;
      
      // Apply styles to SVG
      svgElement.value.style.width = `${svgWidth}px`;
      svgElement.value.style.left = `${relativeLeft}px`;
      svgElement.value.style.top = `${relativeTop}px`;
      
      // Ensure initial state is set before showing
      gsap.set(`#${props.pathId}`, {
        drawSVG: '0%'
      });
      
      // Remove hidden class once positioned and initial state is set
      svgElement.value.classList.remove('svg-stroke-hidden');
      
      // If not animating, draw the full stroke immediately
      if (!props.animate) {
        gsap.set(`#${props.pathId}`, {
          drawSVG: '100%'
        });
      }
    } else if (retryCount < 20) {
      // Retry if element exists but has no dimensions yet
      // Increased retry count and use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        setTimeout(() => positionSVG(retryCount + 1), 50);
      });
    }
  } else if (retryCount < 20) {
    // Retry if target element not found yet
    // Increased retry count and use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      setTimeout(() => positionSVG(retryCount + 1), 50);
    });
  }
}

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    positionSVG();
  }, 100);
}

function animateStroke() {
  if (!pathElement.value) {
    return;
  }

  // Register DrawSVGPlugin if not already registered
  if (gsap.plugins.DrawSVGPlugin) {
    gsap.registerPlugin(DrawSVGPlugin);
  }

  // Ensure initial state is set
  gsap.set(`#${props.pathId}`, {
    drawSVG: '0%'
  });

  // Create animation timeline
  animationTimeline = gsap.timeline({
    delay: props.animationDelay,
    onComplete: () => {
      emit('animationComplete');
    }
  });

  animationTimeline.to(`#${props.pathId}`, {
    drawSVG: '100%',
    duration: props.animationDuration,
    ease: props.animationEase
  });
}

onMounted(async () => {
  await nextTick();
  
  // Register DrawSVGPlugin (needed even if animation is external)
  try {
    if (typeof DrawSVGPlugin !== 'undefined') {
      gsap.registerPlugin(DrawSVGPlugin);
    }
  } catch (error) {
    console.warn('DrawSVGPlugin registration:', error);
  }
  
  // Set initial state immediately to prevent flash
  // Use drawSVG only, let CSS handle initial visibility
  if (pathElement.value) {
    gsap.set(`#${props.pathId}`, {
      drawSVG: '0%'
    });
  }
  
  // Wait for fonts to load before positioning
  // This ensures accurate text measurements
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }
  
  // Wait for DOM to be ready and ensure layout is complete
  await nextTick();
  
  // Use requestAnimationFrame to ensure layout is complete
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      positionSVG();
      
      // Only auto-animate if not being controlled externally
      // (The parent component will call animateStroke when ready)
      if (props.animate && !props.targetSelector) {
        animateStroke();
      }
    });
  });
  
  if (props.autoPosition && props.targetSelector) {
    window.addEventListener('resize', handleResize);
  }
});

onUnmounted(() => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  window.removeEventListener('resize', handleResize);
  
  // Kill animation timeline if it exists
  if (animationTimeline) {
    animationTimeline.kill();
  }
});

// Watch for target element changes
watch(() => props.targetSelector, () => {
  setTimeout(() => {
    positionSVG();
  }, 100);
}, { immediate: false });

// Watch for color changes
watch(() => props.strokeColor, () => {
  // Update path style when color changes
  if (pathElement.value) {
    pathElement.value.style.stroke = props.strokeColor;
  }
});

defineExpose({
  animateStroke,
  positionSVG
});

</script>

<style scoped>
svg {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  z-index: 0;
}

svg:not(.svg-stroke-hidden) {
  opacity: 1;
  visibility: visible;
}
</style>

