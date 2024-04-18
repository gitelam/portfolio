<script>
  import  SidebarContent  from './SidebarContent.svelte'
  import {  horizontalSlide } from '../custom-transitions/transitions.js';

  export let open = false;
</script>

{#if open}
  <aside
  transition:horizontalSlide={{axis: 'x', duration: 150}}
    class="bg-neutral-900 w-8/12 h-full shadow-lg "
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


    div {
        scrollbar-width: none; /* Oculta la barra de desplazamiento en Firefox */
       
    }


/* Estilos específicos para Chrome y otros navegadores basados en WebKit */
@media screen and (-webkit-min-device-pixel-ratio:0) {

   ::-webkit-scrollbar {
        display: none; /* Oculta la barra de desplazamiento en Chrome y navegadores WebKit */
       
    }
}


::-webkit-scrollbar-button {
    background-color: transparent; /* Color del botón de flecha */
    border-radius: 0px; /* Radio de borde del botón de flecha */
}




::-webkit-scrollbar-thumb {
    background-color: #3d3d3d; /* Color del pulgar de la barra de desplazamiento */
    border-radius: 0px; /* Radio de borde del pulgar */
}

::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* Color de la pista de la barra de desplazamiento */
    border-radius: 0px; /* Radio de borde de la pista */
}

</style>
