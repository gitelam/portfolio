<script>
  let withoutSidebarOpenStyle =
    "px-32 py-0 flex justify-center main-container overflow-auto ";

  let withSidebarOPenStyle =
    "px-8 py-0 flex justify-center main-container overflow-auto ";

  export let sidebar = false;

  import { Router, Route, Link } from "svelte-routing";

  // import {buttons} from '../lib/app/Navbar.svelte';



  export var COMPONENT;

  COMPONENT;

</script>




  <div class={sidebar ? withSidebarOPenStyle : withoutSidebarOpenStyle}>
    <div class="flex flex-col">
      <main>
        <!--default page to route-->
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
