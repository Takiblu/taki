// ─────────────────────────────────────────────────────────────
//  Site configuration — edit these values to make it yours
// ─────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "Taki",
  tagline: "Code. Create. Improve.",
  description:
    "I build modern web applications, custom FiveM resources, and clean user interfaces.",

  // Your GitHub profile: https://github.com/Takiblu
  githubUsername: "Takiblu",

  email: "wwinky932@gmail.com",

  // ← Set to your Discord tag (e.g. "taki") to enable the
  //   Discord contact card. Leave empty to hide it.
  discord: "",

  roles: ["Full-Stack Developer", "FiveM Developer", "UI/UX Designer"] as const,
};

export const githubProfileUrl = `https://github.com/${siteConfig.githubUsername}`;
export const githubAvatarUrl = `https://github.com/${siteConfig.githubUsername}.png?size=240`;
