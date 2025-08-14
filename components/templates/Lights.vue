<script setup lang="ts">
import Light from '@components/atoms/Light.vue'

import { LightColors } from '@assets/enums/theme'
</script>

<template>
  <div aria-hidden="true" class="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10">
    <div class="floating absolute" style="top: 0%; left: 5%;">
      <Light :color="LightColors.PINK" />
    </div>
    <div class="floating delay-1 absolute" style="top: 5%; left: 30%;">
      <Light :color="LightColors.PURPLE" />
    </div>
    <div class="floating delay-2 absolute" style="top: 20%; left: 15%;">
      <Light :color="LightColors.YELLOW" />
    </div>
    <div class="floating delay-3 absolute" style="top: 30%; left: 40%;">
      <Light :color="LightColors.BLUE" />
    </div>
  </div>
</template>

<style scoped>
@keyframes slowFloat {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  20% {
    transform: translate(calc(-50% + 100px), calc(-50% - 120px));
  }
  40% {
    transform: translate(calc(-50% - 120px), calc(-50% + 200px));
  }
  60% {
    transform: translate(calc(-50% + 80px), calc(-50% + 240px));
  }
  80% {
    transform: translate(calc(-50% - 100px), calc(-50% - 160px));
  }
}

.floating {
  animation: slowFloat 40s ease-in-out infinite;
  will-change: transform;
}

.floating.delay-1 {
  animation-delay: 6s;
}
.floating.delay-2 {
  animation-delay: 12s;
}
.floating.delay-3 {
  animation-delay: 18s;
}
</style>