<script>
  import Icon from "@iconify/svelte";

  let withoutSidebarOpenStyle =
    "px-32 py-6 justify-center main-container overflow-auto";

  let withSidebarOPenStyle =
    "px-6 py-6 justify-center main-container overflow-auto";

  export let sidebar = false;

  import { Router, Route, Link } from "svelte-routing";

  // import {buttons} from '../lib/app/Navbar.svelte';

  export var COMPONENT;

  COMPONENT;
</script>

<div class={sidebar ? withSidebarOPenStyle : withoutSidebarOpenStyle}>
  <div class="flex flex-col ">
    <main class="flex flex-col space-y-3">
      <!--default page to route, is used only to load a component of a dinamically way-->
      <!--este router solo se utiliza porque no conozco otra forma de cargar un componente de manera dinamica (es decir, que cambie con durante ejecucion)-->
      <Router>
        <Route component={COMPONENT} />
      </Router>

      <div class="bg-zinc-800 flex rounded-xl absolute z-50 space-x-4 right-10 bottom-2 p-2">
        <!-- contact icons -->
          <a
           class="hover:text-blue-500"
            href="
            https://www.linkedin.com/in/samuel-hiram-castro-708982253/
            "
            target="_blank"
          >
          <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>

          <a class = "hover:text-zinc-100"
            href="
            https://github.com/gitelam
            "
            target="_blank"
          >
          <Icon icon="mdi:github" width="24" height="24" />
          </a>

          <a
           class="hover:text-yellow-400"
            href="
            mailto:smiotics@gmail.com
            "
            target="_blank"
          >
          <Icon icon="ic:baseline-email" width="24" height="24" />
          </a>

      </div>

      <footer class="w-full text-neutral-200 py-4">
        <div class="w-full flex justify-center items-center space-x-2">
          <div>With</div>
          <Icon icon="mdi:heart" width="32" height="32" />
          <div>for the</div>
          <Icon icon="subway:world" width="32" height="32" />
          <div>by Samuel Hiram</div>
        </div>
      </footer>

    </main>
  </div>
</div>

<style>
  .main-container {
    height: 91.5vh;
  }

  @media (max-width: 1600px) {
    .main-container {
      height: 89.5vh;

    }
  }
  



</style>
