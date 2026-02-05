<template>
  <section class="py-24 px-6 text-white">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-5xl lg:text-7xl font-bold text-center mb-16 tracking-tighter">
        See What’s Possible When You <br class="hidden sm:inline-flex" />
        <span class="text-primary-500">Have the Right Support</span>
      </h2>
    </div>

    <!-- HORIZONTAL SCROLLER -->
    <div class="relative mx-auto max-w-7xl">
      <!-- Prev / Next buttons -->
      <button
        @click="scrollBy(-1)"
        aria-label="Previous testimonials"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-md text-white rounded-full p-2 hover:bg-black/60 focus:outline-none"
      >
        ‹
      </button>
      <button
        @click="scrollBy(1)"
        aria-label="Next testimonials"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-md text-white rounded-full p-2 hover:bg-black/60 focus:outline-none"
      >
        ›
      </button>

      <div
        ref="scroller"
        role="region"
        aria-label="Testimonials carousel"
        tabindex="0"
        class="overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 py-2"
      >
        <div class="flex gap-8 items-start">
          <!-- CARD -->
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="snap-start min-w-[16rem] w-[20rem] sm:w-[24rem] shrink-0 group"
          >
            <div
              class="relative w-full rounded-3xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300"
              style="aspect-ratio: 4/3"
            >
              <img
                :src="t.image"
                :alt="t.name"
                class="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 transition ease-out duration-300"
              />
            </div>

            <p class="text-base text-gray-100 mt-4 italic leading-relaxed">
              “{{ t.quote }}”
              <br />
              <span class="not-italic font-semibold text-gray-400 group-hover:text-secondary-400">
                – {{ t.name }}, {{ t.role }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { testimonials } from '../data/testimonials';

const scroller = ref(null);

function scrollBy(direction = 1) {
  const el = scroller.value;
  if (!el) return;
  const amount = Math.round(el.clientWidth * 0.8);
  el.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

let pointerDown = false;
let startX = 0;
let scrollLeft = 0;

function onPointerDown(e) {
  const el = scroller.value;
  if (!el) return;
  pointerDown = true;
  el.setPointerCapture(e.pointerId);
  startX = e.clientX;
  scrollLeft = el.scrollLeft;
}

function onPointerMove(e) {
  if (!pointerDown) return;
  const el = scroller.value;
  if (!el) return;
  const dx = e.clientX - startX;
  el.scrollLeft = scrollLeft - dx;
}

function onPointerUp(e) {
  const el = scroller.value;
  if (!el) return;
  pointerDown = false;
  try {
    el.releasePointerCapture?.(e.pointerId);
  } catch (err) {
    // ignore
  }
}

function onKeyDown(e) {
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    scrollBy(-1);
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    scrollBy(1);
  }
}

onMounted(() => {
  const el = scroller.value;
  if (!el) return;
  el.addEventListener('pointerdown', onPointerDown);
  el.addEventListener('pointermove', onPointerMove);
  el.addEventListener('pointerup', onPointerUp);
  el.addEventListener('pointercancel', onPointerUp);
  el.addEventListener('keydown', onKeyDown);
});

onBeforeUnmount(() => {
  const el = scroller.value;
  if (!el) return;
  el.removeEventListener('pointerdown', onPointerDown);
  el.removeEventListener('pointermove', onPointerMove);
  el.removeEventListener('pointerup', onPointerUp);
  el.removeEventListener('pointercancel', onPointerUp);
  el.removeEventListener('keydown', onKeyDown);
});
</script>

<style>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
