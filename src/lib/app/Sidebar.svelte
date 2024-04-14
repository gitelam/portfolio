<script>
  import  SidebarContent  from './SidebarContent.svelte'
  import {  horizontalSlide } from '../custom-transitions/transitions.js';

  export let open = false;
</script>

{#if open}
  <aside
  transition:horizontalSlide={{axis: 'x', duration: 150}}
    class="bg-neutral-900 w-8/12 h-screen shadow-lg"
    class:open
  >
    <div class="h-screen overflow-auto pl-12 px-8 py-8">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <SidebarContent />
      
    </div>
   
  </aside>
{/if}

<style>
  aside {
	max-width: fit-content;
  }

  .open {
    left: 0;
  }
</style>
