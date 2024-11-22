<script setup>
import { ref, onMounted } from "vue";
import { DateTime } from "luxon";
import { useIntervalFn } from "@vueuse/core";

const END_DATETIME = DateTime.fromISO("2025-01-20T12:00:00", {
  zone: "America/New_York",
});

const getTimeLeft = () =>
  END_DATETIME.diffNow(["days", "hours", "minutes", "seconds"]);

const timeLeft = ref(getTimeLeft());

onMounted(() => {
  useIntervalFn(function () {
    timeLeft.value = getTimeLeft();
  }, 1000);
});
</script>

<template>
  <div
    class="grid grid-rows-4 sm:grid-rows-none sm:grid-cols-4 mx-auto px-8 text-center text-[54px] lg:text-[84px] xl:text-[108px] max-w-screen-lg gap-4 text-zinc-50"
  >
    <div
      class="bg-slate-600 backdrop-blur-md bg-opacity-80 rounded-lg px-4 py-2"
    >
      <span class="font-orbitron font-semibold">{{
        String(timeLeft.values.days).padStart(2, "0")
      }}</span>
      <p class="text-xs text-right uppercase font-semibold font-orbitron">
        days
      </p>
    </div>
    <div
      class="bg-slate-600 backdrop-blur-md bg-opacity-80 rounded-lg px-4 py-2"
    >
      <span class="font-orbitron font-semibold">{{
        String(timeLeft.values.hours).padStart(2, "0")
      }}</span>
      <p class="text-xs text-right uppercase font-semibold font-orbitron">
        hours
      </p>
    </div>
    <div
      class="bg-slate-600 backdrop-blur-md bg-opacity-80 rounded-lg px-4 py-2"
    >
      <span class="font-orbitron font-semibold">{{
        String(timeLeft.values.minutes).padStart(2, "0")
      }}</span>
      <p class="text-xs text-right uppercase font-semibold font-orbitron">
        minutes
      </p>
    </div>
    <div
      class="bg-slate-600 backdrop-blur-md bg-opacity-80 rounded-lg px-4 py-2"
    >
      <span class="font-orbitron font-semibold">{{
        String(Math.floor(timeLeft.values.seconds)).padStart(2, "0")
      }}</span>
      <p class="text-xs text-right uppercase font-semibold font-orbitron">
        seconds
      </p>
    </div>
  </div>
</template>
