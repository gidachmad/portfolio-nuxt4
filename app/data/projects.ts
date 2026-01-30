import type { projectTypes } from "~/types/portfolio";

const ngaksara: projectTypes = {
  title: "NgAksara",
  desc: "NgAksara is a free website for learning Sundanese Script purposes. NgAksara is a form of effort to preserve Indonesian 🇮🇩 culture, especially Sundanese Script.",
  skills: ["React", "TailwindCSS", "Vite"],
  kind: "normal",
  link: "https://ngaksara.vercel.app/",
};

export const codingProjects = [
  ngaksara,
];

const clippingExamples = {
  name: "VSPO clip",
  url: "https://youtu.be/JlwUh0iHggs",
  youtubeId: "JlwUh0iHggs",
};

const clipper: projectTypes = {
  title: "Clipping Vtuber",
  kind: "video",
  desc: "Leaning Japanese through Clipping Vtuber. I mainly clip VSPO's vtuber.",
  link: "https://www.youtube.com/@Regid_yt",
  examples: [clippingExamples],
};

const silenceSuzuka32 = {
  name: "Silence Suzuka 32x32",
  url: "https://art.pixilart.com/sr5z10c449df2aaws3.png",
};

const agnestachyon64 = {
  name: "Agnes Tachyon 64x64",
  url: "https://art.pixilart.com/sr5z03a11d90aaaws3.png",
};

const pixelart: projectTypes = {
  title: "Pixel Art",
  kind: "pixel-art",
  desc: "Learning Pixel art so that someday I can create my own game!(Hopefully).",
  link: "https://www.pixilart.com/regid-ysra",
  examples: [silenceSuzuka32, agnestachyon64],
};

export const sideProjects: projectTypes[] = [
  clipper,
  pixelart,
];
