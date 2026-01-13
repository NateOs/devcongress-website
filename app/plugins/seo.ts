export default defineNuxtPlugin(() => {
  const cfg = useRuntimeConfig().public;

  // Only run on client side for SPA mode
  if (process.client) {
    const reqUrl = useRequestURL();
    const absoluteUrl = new URL(reqUrl.pathname + reqUrl.search + reqUrl.hash, cfg.siteUrl).toString();

    // Ensure og:image is absolute too
    const absoluteOg = cfg.socialPreview?.startsWith("http")
      ? cfg.socialPreview
      : new URL(cfg.socialPreview || "/images/devcongress-social-card.jpg", cfg.siteUrl).toString();

    useHead({
      link: [{ rel: "canonical", href: absoluteUrl }],
      meta: [
        { property: "og:url", content: absoluteUrl },
        { name: "twitter:image", content: absoluteOg },
      ],
    });
  }
});