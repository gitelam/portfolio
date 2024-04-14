<script>
  // import {Test} from '../lib/app/testForLayout.svelte';
  import Content from "./+page.svelte";

  import "../app.css";
  import Navbar from "../lib/app/Navbar.svelte";
  import Sidebar from "../lib/app/Sidebar.svelte";
  import { onMount } from "svelte";
  import Button from "../lib/app/Button.svelte";

  import { fade, scale, fly } from "svelte/transition";

  let open = false;
  const animate1 = (node, args) => scale(node, args);

  let show = false;
  onMount(() => {
    show = true;
  });

  import { Router, Route, Link } from "svelte-routing";
  import { getPathsComponents } from "./paths.js";
  var pages = getPathsComponents();


</script>

<svelte:head>
  <title>Samuel Hiram - Portfolio</title>
</svelte:head>

{#if show}
  <div  class="flex w-full">
    <Sidebar bind:open />

    <Button bind:open />

    <div class="w-full">
      
      
      <Router>
        <Navbar bind:sidebar={open} />

        <!-- <Route path="">
        <Content sidebar={open} COMPONENT={Default} />
      </Route>
      <Route path="figma">
        <Content sidebar={open} COMPONENT={Figma} />
      </Route> -->

        {#each pages as page}
          <Route path={page.path}>
            <Content sidebar={open} COMPONENT={page.component} />
          </Route>
        {/each}
      </Router>




    </div>
  </div>
{/if}

<style>
  :global(body) {
    padding: 0;
    margin: 0;
    background: #606060;
  }
</style>
