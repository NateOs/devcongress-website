<template>
  <section class="py-24 px-6 text-white">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-5xl lg:text-7xl font-bold text-center mb-16 tracking-tighter">
        See What’s Possible When You <br class="hidden sm:inline-flex" />
        <span class="text-primary-500">Have the Right Support</span>
      </h2>
    </div>

    <!-- HORIZONTAL SCROLLER -->
    <div class="relative mx-auto">
      <div class="overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6">
        <div class="grid grid-flow-col auto-cols-[minmax(16rem,20rem)] gap-8 py-2">
          <!-- CARD -->
          <div v-for="(t, i) in testimonials" :key="i" class="snap-start group">
            <div
              class="relative w-full aspect-[4/3] sm:aspect-[9/16] rounded-3xl overflow-hidden shadow-lg group hover:scale-[1.02] transition duration-300"
            >
              <img
                :src="t.image"
                :alt="t.name"
                class="w-full h-full object-cover grayscale-100 group-hover:grayscale-0 group-hover:sepia-0 transition ease-out duration-300 delay-75"
              />
            </div>

            <p class="text-base text-gray-100 mt-4 italic leading-relaxed">
              “{{ t.quote }}”
              <br />
              <span
                class="not-italic font-semibold text-gray-400 group-hover:text-secondary-400"
              >
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
const testimonials = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1686721836795432960/Ghu7dKZC_400x400.jpg",
    name: "Andrew Smith",
    role: "Full-Stack Developer",
    quote:
      "I never imagined I could transition from graphic design to full-stack. DevCongress made it possible.",
  },
  {
    image: "https://pbs.twimg.com/profile_images/1875679658647138304/w--j-PK8_400x400.jpg",
    name: "Stefan",
    role: "Cyber Security Expert",
    quote:
      "The red-team drills and mentorship sharpened my threat detection instincts and opened the door to leading incident response at Microsoft.",
  },
  {
    image: "https://pbs.twimg.com/media/FHvsk2MXMAQBovS?format=jpg&name=large",
    name: "Leo",
    role: "Data Analyst",
    quote: "Mentorship here was invaluable, guiding me to a position at Microsoft.",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/3248556771/feb8ad6b5f403e70ea321d17b80df232_400x400.png",
    name: "Anthony Acquah",
    role: "Tech Lead",
    quote: "Best decision of my career; now I lead a startup team in Silicon Valley.",
  },
  {
    image: "https://www.devcongress.org/images/claude.jpg",
    name: "Claude Ayitey",
    role: "Full-Stack Developer",
    quote:
      "I never imagined I could transition from graphic design to full-stack. DevCongress made it possible.",
  },
  {
    image: "https://www.devcongress.org/images/edem.jpg",
    name: "Leo",
    role: "Data Analyst",
    quote: "Mentorship here was invaluable, guiding me to a position at Microsoft.",
  },
  {
    image: "https://www.devcongress.org/images/elorm.jpg",
    name: "Elorm Adjaho",
    role: "Tech Lead",
    quote: "Best decision of my career; now I lead a startup team in Silicon Valley.",
  },
  {
    image: "https://www.devcongress.org/images/francis.jpg",
    name: "Francis Addai",
    role: "Full-Stack Developer",
    quote:
      "I never imagined I could transition from graphic design to full-stack. DevCongress made it possible.",
  },
  {
    image: "https://www.devcongress.org/images/savekirk.jpg",
    name: "Saviour Kirk Agbenyegah",
    role: "Data Analyst",
    quote: "Mentorship here was invaluable, guiding me to a position at Microsoft.",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1680929162616291329/_jCSwpti_400x400.jpg",
    name: "Yaw Boakye",
    role: "Tech Lead",
    quote: "Best decision of my career; now I lead a startup team in Silicon Valley.",
  },
  {
    image: "https://ca.slack-edge.com/T0A0T7A5Q-U01NAPY9TEC-f92ae3063f27-512",
    name: "Nathan Sodja",
    role: "Software Engineer",
    quote: "Gave me confidence to build my own startup.",
  },
  {
    image: "https://ca.slack-edge.com/T0A0T7A5Q-U02LQJ83N9H-42650d9d2b97-512",
    name: "Blossom Dugbatey",
    role: "Software Engineer",
    quote: "Gave me confidence to build my own startup.",
  },
];
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
