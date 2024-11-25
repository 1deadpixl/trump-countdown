<script setup>
import { ref, onMounted } from "vue";

const words = [
  "America's Freedom",
  "Economic Growth",
  "America-First Policies",
  "Judicial Conservatism",
  "Border Security",
  "Law Enforcement Support",
  "Tax Reforms",
  "Deregulation",
  "Educational Freedom",
  "National Pride",
];
const interval = 5000;
const randomize = false;
const active = true;

let curIndex = ref(0);

function nextRandIndex() {
  let newRand = Math.floor(Math.random() * words.length);

  if (newRand === curIndex.value) {
    nextRandIndex();
  } else {
    curIndex.value = newRand;
  }
}

function nextIndex() {
  curIndex.value = curIndex.value === words.length - 1 ? 0 : curIndex.value + 1;
}

function step() {
  if (active) {
    if (randomize) {
      nextRandIndex();
    } else {
      nextIndex();
    }

    setTimeout(() => {
      step();
    }, interval);
  }
}

onMounted(() => {
  setTimeout(() => {
    step();
  }, interval);
});
</script>
<template>
  <div class="my-12 md:my-20">
    <div
      class="text-5xl md:text-[60px] lg:text-[72px] font-bold flex flex-col justify-center items-center gap-2 text-center"
    >
      <div>Countdown to</div>
      <div class="flex justify-center">
        <span class="hidden xl:invisible">&nbsp;</span>
        <span class="invisible xl:hidden">&nbsp;<br />&nbsp;</span>
        <Transition appear>
          <span :key="curIndex" class="absolute">{{ words[curIndex] }}</span>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
