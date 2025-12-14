const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 * @see {@link https://docs.base.org/mini-apps/core-concepts/manifest}
 */
export const minikitConfig = {

  // Paste accountAssociation object here
  accountAssociation: {
    header: "eyJmaWQiOjE2MDg5MTYsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhGMkQyQ2E4ZThjNjdlOWZiRjZkRUNkNUUyNEY4NUIxOUZlMDVjOThhIn0",
    payload: "eyJkb21haW4iOiJ5YXd6LWdlbmVzaXMtYXBwLnZlcmNlbC5hcHAifQ",
    signature: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGZKg2ytxbk7NLGM85IsvEssvWt5DT0VToFAFxDOEKQRIkQ8Td14reb47QXsl3i_RTQouaCQbOqIK0r4z26o0EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKeyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiUHNNcnNPZE1QclZ2Sk9mMXFBNy1PSzdJS1NRa3N3eXhRaEEwMVJ6cWNrNCIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2V9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  },

  miniapp: {
    version: "1",
    name: "YAWZ Genesis App",
    subtitle: "Quickstart Template",
    description:
      "A starter template for building YAWZ Genesis App using Next.js. By Trio Blockchain Labs.",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "developer-tools",
    tags: ["developer-tools", "productivity"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "YAWZ Genesis App",
    ogTitle: "YAWZ Genesis App",
    ogDescription:
      "A template for building YAWZ Genesis App using Next.js and TypeScript. By Trio Blockchain Labs",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
