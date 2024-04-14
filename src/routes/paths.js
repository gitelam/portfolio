import Default from "./portfolio/default.svelte";

//este archivo estructura el ruteo de mi pagina


import Figma from "./portfolio/figma.svelte";
import Projects from "./portfolio/projects.svelte";
import Wordpress from "./portfolio/wordpress.svelte";
import Hatchone from "./portfolio/hatchone.svelte";

export var paths = ["projects", "wordpress","figma", "hatch.one"];
export var components = [Projects,Wordpress , Figma, Hatchone];

export function getPathsComponents() {
  return paths.map((path, i) => {
    return { path, component: components[i] };
  });
}