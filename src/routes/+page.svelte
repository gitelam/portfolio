<script>

  let withoutSidebarOpenStyle =
    "px-48 py-12 flex justify-center main-container overflow-auto ";

  let withSidebarOPenStyle =
    "px-6 py-6 flex justify-center main-container overflow-auto ";

  export let sidebar = false;

  import { Router, Route, Link } from "svelte-routing";

  // import {buttons} from '../lib/app/Navbar.svelte';

  export var COMPONENT;

  COMPONENT;

</script>




  <div class={sidebar ? withSidebarOPenStyle : withoutSidebarOpenStyle}>
    <div class="flex flex-col w-full h-full">
      <main class="">

        <!--default page to route, is used only to load a component of a dinamically way-->
        <!--este router solo se utiliza porque no conozco otra forma de cargar un componente de manera dinamica (es decir, que cambie con durante ejecucion)-->
        <Router>
          <Route component={COMPONENT} />
        </Router>

      </main>
    </div>
  </div>

<style>
  .main-container {
    height: 91.6vh;
  }

  @media (max-width: 1600px) {
    .main-container {
      height: 89.6vh;
    }
  }
</style>
