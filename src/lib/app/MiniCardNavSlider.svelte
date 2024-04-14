<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let currentIndex = 0;
  import Icon from "@iconify/svelte";

  export let data = [
    {
      title: "Music",
      content: "I love listen to Mozart. ",
      url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      title: "Info 2",
      content: "This is information 2",
      url: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
    {
      title: "Info 3",
      content: "This is information 3",
      url: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
    },
  ];

  // Función para navegar al div anterior
  function prev() {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    contentChange();
  }

  // Función para navegar al div siguiente
  function next() {
    currentIndex = (currentIndex + 1) % data.length;
    contentChange();
  }

  let isContentChange = true;

  function contentChange() {
    isContentChange = false;
    setInterval(() => {
      isContentChange = true;
    }, 100);
  }
</script>

<!--
  <div>
    <button on:click={prev}>Anterior</button>
    <button on:click={next}>Siguiente</button>
  </div>
  
  <div>
    <h3>{data[currentIndex].title}</h3>
    <p>{data[currentIndex].content}</p>
  </div>
-->

<div class="h-full w-full rounded-xl ">
  <div class="rounded-xl bg-zinc-800 w-full h-full flex justify-between">
    <div
      class="p-2 relative overflow-hidden h-full w-full flex flex-col justify-center"
    >
      <div  class="flex items-center ">
        {#if isContentChange}
          <div in:fade>
            <img  
            class="rounded-xl absolute left-0 right-0 top-0 w-full"
            src={data[currentIndex].url}
            alt=""
          />
          <div  class="relative">
            <h3>{data[currentIndex].title}</h3>
            <p>{data[currentIndex].content}</p>
          </div>
          </div>
        {/if}
      </div>

      <div class="w-full h-full flex justify-between items-end ">
        <button on:click={()=>{prev()}}  class="relative hover:text-zinc-100 text-zinc-400">
          <Icon icon="mdi:arrow-left-bold" width="24" height="24" />
        </button>
        <button on:click={()=>{next()}} class="relative hover:text-zinc-100 text-zinc-400">
          <Icon icon="mdi:arrow-right-bold" width="24" height="24" />
        </button>
      </div>

    </div>
  </div>
</div>

<style>
  img {
    opacity: 0.3;
    height: 100%;
    width: 100%;
    object-fit: cover;
    
  }
</style>
