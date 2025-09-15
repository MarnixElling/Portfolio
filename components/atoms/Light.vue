<script setup lang="ts">
import { getCurrentInstance } from 'vue';
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
    <svg width="788" height="788" viewBox="0 0 788 788" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect 
        opacity="0.5" 
        width="788" 
        height="788" 
        transform="matrix(-1 0 0 1 788 0)" 
        :fill="`url(#paint0_radial_${instance.uid})`"
      />
      <defs>
        <radialGradient 
          :id="`paint0_radial_${instance.uid}`" 
          cx="0" 
          cy="0" 
          r="1" 
          gradientUnits="userSpaceOnUse" 
          gradientTransform="translate(344 344) rotate(90) scale(344)"
        >
          <stop offset="0.134615" :stop-color="`var(--color-${color})`" stop-opacity="0.3"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
