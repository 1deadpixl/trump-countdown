<script setup>
import { onMounted } from "vue";
import wordSwitcher from "word-switcher";
const words = ["America's Freedom", "Better Choices", "Strong Economy"];

onMounted(() => {
  const target = document.querySelector("#word-switch");
  wordSwitcher(target, words, { random: true, animationDuration: 250 });
});
</script>

<template>
  <div class="text-center leading-tight my-20">
    <p class="text-5xl lg:text-[72px] font-bold">
      Counting down to<br /><span id="word-switch"></span>
    </p>
  </div>
</template>

<style lang="css">
.word-switcher-enter-active,
.word-switcher-leave-active {
  transition: opacity 1s;
}
.word-switcher-enter,
.word-switcher-leave-to {
  opacity: 0;
}
</style>
