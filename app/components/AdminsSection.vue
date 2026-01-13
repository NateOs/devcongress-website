<template>
  <section id="admins" class="py-20 px-6 ">
    <div class="max-w-7xl mx-auto flex flex-col gap-16">
      <h2 class="text-5xl md:text-7xl font-bold text-left tracking-tighter leading-tight">
        <span class="text-primary-500">Meet the Admins</span><br />
        who make
        <NuxtImg
          src="/images/logo.svg"
          alt="Devcongress Logo"
          class="h-16 w-auto inline-flex"
        />
        possible.
      </h2>

      <!-- Admin Grid -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 xl:gap-12"
      >
        <div
          v-for="(admin, i) in admins"
          :key="i"
          class="flex flex-col items-center gap-4 text-center group"
        >
          <!-- Image Mask -->
          <div
            class="w-full aspect-square grayscale-100 sepia-50 group-hover:grayscale-0 group-hover:sepia-0 opacity-70 group-hover:opacity-100 transition ease-out duration-300 delay-75 rounded-2xl shadow-xl bg-cover bg-center [mask-image:url('/images/pattern-square.svg')] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain] [-webkit-mask-image:url('/images/pattern-square.svg')] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]"
            :style="`background-image: url(${admin.image})`"
          ></div>

          <!-- Info -->
          <div>
            <h3 class="text-lg font-bold text-white">{{ admin.name }}</h3>
            <p class="text-sm text-gray-400 font-medium group-hover:text-secondary-400">
              {{ admin.role }}
            </p>

            <!-- Social Links -->
            <div class="flex items-center justify-center gap-4 mt-3">
              <a
                v-for="(social, s) in admin.socials"
                :key="s"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer text-gray-400 hover:text-primary-500 transition duration-200"
              >
                <component :is="icons[social.platform]" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import icons from lucide-vue-next (or @iconify/vue if you prefer)
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Globe,
  Youtube,
  Slack,
} from "lucide-vue-next";

const icons = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  website: Globe,
  slack: Slack,
};

const admins = [
  {
    name: "Andrew Smith",
    role: "Full-Stack Developer",
    image:
      "https://pbs.twimg.com/profile_images/1686721836795432960/Ghu7dKZC_400x400.jpg",
    socials: [
      { platform: "twitter", url: "https://twitter.com/andrewsmith" },
      { platform: "github", url: "https://github.com/andrewsmith" },
    ],
  },
  {
    name: "Bubunyo Nyavor",
    role: "Data Analyst",
    image: "https://pbs.twimg.com/media/FHvsk2MXMAQBovS?format=jpg&name=large",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/leo" },
      { platform: "github", url: "https://github.com/leo" },
    ],
  },
  {
    name: "Anthony Acquah",
    role: "Tech Lead",
    image:
      "https://pbs.twimg.com/profile_images/3248556771/feb8ad6b5f403e70ea321d17b80df232_400x400.png",
    socials: [
      { platform: "twitter", url: "https://twitter.com/anthonyacquah" },
      { platform: "linkedin", url: "https://linkedin.com/in/anthonyacquah" },
    ],
  },
  {
    name: "Claude Ayitey",
    role: "Full-Stack Developer",
    image: "https://www.devcongress.org/images/claude.jpg",
    socials: [
      { platform: "twitter", url: "https://twitter.com/claudeayitey" },
      { platform: "website", url: "https://claudeayitey.com" },
      { platform: "youtube", url: "https://claudeayitey.com" },
      { platform: "linkedin", url: "https://claudeayitey.com" },
    ],
  },
  {
    name: "Edem",
    role: "Data Analyst",
    image: "https://www.devcongress.org/images/edem.jpg",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/edem" },
      { platform: "github", url: "https://github.com/edem" },
    ],
  },
  {
    name: "Stefan",
    role: "Tech Lead",
    image: "https://pbs.twimg.com/profile_images/1875679658647138304/w--j-PK8_400x400.jpg",
    socials: [
      { platform: "twitter", url: "https://x.com/TheDumbTechGuy" },
    ],
  },
  {
    name: "Elorm Adjaho",
    role: "Tech Lead",
    image: "https://www.devcongress.org/images/elorm.jpg",
    socials: [
      { platform: "twitter", url: "https://twitter.com/elormadjaho" },
      { platform: "linkedin", url: "https://linkedin.com/in/elormadjaho" },
    ],
  },
  {
    name: "Francis Addai",
    role: "Full-Stack Developer",
    image: "https://www.devcongress.org/images/francis.jpg",
    socials: [
      { platform: "github", url: "https://github.com/francisaddai" },
      { platform: "website", url: "https://francisaddai.com" },
    ],
  },
  {
    name: "Saviour Kirk Agbenyegah",
    role: "Data Analyst",
    image: "https://www.devcongress.org/images/savekirk.jpg",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/saviourkirk" },
      { platform: "twitter", url: "https://twitter.com/savekirk" },
    ],
  },
  {
    name: "Yaw Boakye",
    role: "Tech Lead",
    image:
      "https://pbs.twimg.com/profile_images/1680929162616291329/_jCSwpti_400x400.jpg",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/yawboakye" },
      { platform: "twitter", url: "https://twitter.com/yawboakye" },
    ],
  },
  {
    name: "Nathan Sodja",
    role: "Software Engineer",
    image: "https://ca.slack-edge.com/T0A0T7A5Q-U01NAPY9TEC-f92ae3063f27-512",
    socials: [
      { platform: "slack", url: "#" },
      { platform: "github", url: "https://github.com/nathansodja" },
    ],
  },
  {
    name: "Blossom Dugbatey",
    role: "Software Engineer",
    image: "https://ca.slack-edge.com/T0A0T7A5Q-U02LQJ83N9H-42650d9d2b97-512",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/blossomdugbatey" },
      { platform: "twitter", url: "https://twitter.com/blossomdugbatey" },
    ],
  },
];
</script>
