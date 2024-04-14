import Default from "./portfolio/default.svelte";



import Figma from "./portfolio/figma.svelte";
import Projects from "./portfolio/projects.svelte";
import Wordpress from "./portfolio/wordpress.svelte";
import Hatchone from "./portfolio/hatchone.svelte";

export var paths = ["projects", "figma", "wordpress", "hatch.one"];
export var components = [Projects, Figma, Wordpress, Hatchone];

export function getPathsComponents() {
  return paths.map((path, i) => {
    return { path, component: components[i] };
  });
}