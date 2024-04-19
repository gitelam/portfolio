<script>
  import { fade } from "svelte/transition";
  let currentIndex = 0;
  import Icon from "@iconify/svelte";

  export let clickToSee = false;

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

  let showDialog = false;
  function openModal(modalName) {
    showDialog = true;
  }

  function closeModal(modalName) {
    showDialog = false;
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

<div class="h-full w-full rounded-xl">
  <div class="rounded-xl w-full h-full flex justify-between">
    <div
      class="p-2 relative overflow-hidden w-full flex flex-col justify-center "
    >
      <div class="flex items-center ">
        {#if isContentChange}
        <div   in:fade>
          {#if clickToSee}
          <button
            in:fade
            on:click={() => {
              openModal();
            }}
          >
            <img
              class="staticImg rounded-xl absolute left-0 right-0 top-0 w-full"
              src={data[currentIndex].url}
              alt=""
            />
            <div class="relative flex flex-col items-start">
              <h3>{data[currentIndex].title}</h3>
              <p>{data[currentIndex].content}</p>
            </div>
          </button>
        {:else}
          <img
            class="rounded-xl absolute left-0 right-0 top-0 w-full"
            src={data[currentIndex].url}
            alt=""
          />
          <div class="relative flex flex-col items-start">
            <h3>{data[currentIndex].title}</h3>
            <p>{data[currentIndex].content}</p>
          </div>
        {/if}
        </div>
          
        {/if}
      </div>

      <div class="w-full h-full flex justify-between items-end">
        <button
          on:click={() => {
            prev();
          }}
          class="relative hover:text-blue-500 text-zinc-300"
        >
          <Icon icon="mdi:arrow-left-bold" width="32" height="32" />
        </button>
        <button
          on:click={() => {
            next();
          }}
          class="relative hover:text-blue-500 text-zinc-300"
        >
          <Icon icon="mdi:arrow-right-bold" width="32" height="32" />
        </button>
      </div>
    </div>
  </div>
</div>

<dialog open={showDialog} class="w-full h-full rounded-xl  right-0 bottom-0 left-0 top-0">
  <div class="h-full w-full rounded-xl">
    <div class="rounded-xl bg-zinc-800 w-full h-full flex justify-between">
      <div
        class="p-2 relative overflow-hidden h-full w-full flex flex-col justify-center"
      >
        <div class="flex items-center">
          {#if isContentChange}
            <div in:fade>
              <img
                class="dialogImage rounded-xl absolute left-0 right-0 top-0 w-full"
                src={data[currentIndex].url}
                alt=""
              />
              <div class="relative">
                <h3>{data[currentIndex].title}</h3>
                <p>{data[currentIndex].content}</p>
              </div>
            </div>
          {/if}
        </div>

        <div class="h-full flex items-end">
          <div
            class="relative rounded-xl mx-auto flex items-center justify-center px-4 space-x-8 bg-zinc-900 py-4"
          >
            <button
              on:click={() => {
                prev();
              }}
              class="relative hover:text-blue-500 text-zinc-300"
            >
              Previus
              <Icon icon="mdi:arrow-left-bold" width="32" height="32" />
            </button>
            <button
              on:click={() => {
                next();
              }}
              class="relative hover:text-blue-500 text-zinc-300"
            >
              Next
              <Icon icon="mdi:arrow-right-bold" width="32" height="32" />
            </button>

            <button
              on:click={() => {
                closeModal();
              }}
              class="p-1 text-white space-x-2 border-0 outline-blue flex h-12 rounded-xl justify-center items-center opacity-95 hover:opacity-100 hover:bg-blue-900"
            >
              <Icon icon="bytesize:close" width="24" height="24" />

              <div class="text-lg">close</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>

<style>

  img {
    opacity: 1;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  .dialogImage {
   
    opacity: 1;
    height: auto;
    object-fit: fit;
  }

 
</style>
