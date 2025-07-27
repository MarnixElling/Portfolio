<script setup lang="ts">
import { LightColors } from '@assets/enums';

interface Props {
  color?: LightColors;
}

withDefaults(defineProps<Props>(), {
  color: LightColors.PINK,
});

const instance = getCurrentInstance();
</script>

<template>
  <div v-if="instance" class="absolute" aria-hidden="true">
    <svg width="768" height="768" viewBox="0 0 768 768" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect 
        opacity="0.5" 
        width="768" 
        height="768" 
        transform="matrix(-1 0 0 1 768 0)" 
        :fill="`url(#paint0_radial_${instance.uid})`"
      />
      <defs>
        <radialGradient 
          :id="`paint0_radial_${instance.uid}`" 
          cx="0" 
          cy="0" 
          r="1" 
          gradientUnits="userSpaceOnUse" 
          gradientTransform="translate(384 384) rotate(90) scale(384)"
        >
          <stop offset="0.134615" :stop-color="`var(--color-${color})`" stop-opacity="0.25"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>