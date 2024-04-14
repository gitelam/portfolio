<script>
  import hatchIcon from "../icons/hatch-one.svg";
  import image from "../images/profile_photo.png";
  import Icon from "@iconify/svelte";
  import MiniCardNavSlider from "./MiniCardNavSlider.svelte";
  import { scale, fade } from "svelte/transition";

  var contactButtonsIconsStyle = "text-zinc-400 hover:bg-zinc-800 hover:rounded-full hover:p-1 hover:text";
  

  let contactButtonIconsArray = [
    {
      icon: "mdi:github",
      style: contactButtonsIconsStyle+"-zinc-100"
    },
    {
      icon: "mdi:linkedin",
      style: contactButtonsIconsStyle+"-blue-500"
    },
    {
      icon: "material-symbols:mail",
      style: contactButtonsIconsStyle+"-yellow-400"
    },
  ];

  let whatIKnowIconsArray = [
    {
      icon: "logos-python",
      desc: "python",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "devicon:csharp",
      desc: "c-sharp",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "logos:javascript",
      desc: "javascript",
      exp: "Api creation on Django and FastApi; This is my experience.",
    },
    {
      icon: "vscode-icons:file-type-css",
      desc: "CSS",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "vscode-icons:file-type-html",
      desc: "HTML",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "devicon:svelte",
      desc: "svelte",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "devicon:tailwindcss",
      desc: "tailwindcss",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "devicon:bootstrap",
      desc: "bootstrap",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "vscode-icons:file-type-excel",
      desc: "excel",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "devicon:microsoftsqlserver",
      desc: "sql server",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "logos:postgresql",
      desc: "postgresql",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "hatchone",
      desc: "hatch.one",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "devicon:figma",
      desc: "figma",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "skill-icons:wordpress",
      desc: "wordpress",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
    {
      icon: "logos:ionic-icon",
      desc: "ionic",
      exp: "Api creation on Django and FastApi; This is my experience.",

    },
  ];

  let btn_comparation = "";

  function showToolTipOfButtonName(btn_name) {
    console.log(btn_name);
    btn_comparation = btn_name;
  }

</script>

<div in:scale out:fade class="flex space-x-8">
  <div class="w-full flex flex-col space-y-4">
    <div class="w-full flex justify-center">
      <img class="h-38" alt="The project logo" src={image} />
    </div>

    <div class="space-y-4">
      <div class="text-base">hover and see my exp.</div>

      <div class="grid grid-rows-8 grid-flow-col gap-4">
        
        {#each whatIKnowIconsArray as item}
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore a11y-mouse-events-have-key-events -->
          <div
            on:mouseover={() => {
              showToolTipOfButtonName(item.desc);
            }}
            on:mouseout={() => {
              showToolTipOfButtonName("");
            }}
            class={btn_comparation == item.desc
              ? "w-full flex flex-col items-center justify-center bg-neutral-700 rounded-full"
              : "w-full flex flex-col items-center justify-center"}
          >
            
            {#if btn_comparation == item.desc}
            <div 
            class="tooltip h-14 left-0 right-0 bottom-0 top-0 flex justify-center items-center absolute visible bg-zinc-900 text-xs "
          >
              <!--UPPER DESCRIPTION-->
            <div class="flex items-center">
              <div>My experience on</div>
              <div class="flex flex-col justify-center items-center px-8 uppercase font-bold">
               
                  {#if item.icon != "hatchone"}
                    <Icon icon={item.icon} width="28" height="28" />
                    {item.desc}
                  {:else}
                    <img src={hatchIcon} alt="hatch icon" class="h-7" />
                    {item.desc}
                  {/if}
                </div>
            </div>
            <div>is: {item.exp}</div>
          </div>
              {/if}


            {#if item.icon != "hatchone"}
              <Icon icon={item.icon} width="28" height="28" />
            {:else}
              <img src={hatchIcon} alt="hatch icon" class="h-7" />
            {/if}

            <div class="text-xs flex justify-center text-zinc-400">{item.desc}</div>
          
          </div>
        {/each}

      </div>
    </div>
  </div>

  <div class="flex w-auto">
    <div class="flex flex-col w-auto space-y-4">
      <div class="flex space-x-4 w-auto">
        <div class="flex flex-col items-center">
          <div class="name w-max text-3xl font-semibold">Samuel Hiram</div>

          <div class="alias text-3xl font-light">web developer</div>
        </div>

        <div class="h-full w-full flex items-center justify-center">
          <div class="flex w-max justify-evenly space-x-3 items-center">
            <!-- <button
              class=""
            >
              <Icon icon="mdi:github" width="32" height="32" />
            </button>
            <button
              class="hover:text-blue-500 text-zinc-400 hover:bg-zinc-800 hover:rounded-full hover:p-2"
            >
              <Icon icon="ion:logo-linkedin" width="32" height="32" />
            </button>
            <button
              class="hover:text-yellow-400 text-zinc-400 hover:bg-zinc-800 hover:rounded-full hover:p-2"
            >
              <Icon icon="material-symbols:mail" width="32" height="32" />
            </button> -->
            
            {#each contactButtonIconsArray as item}
              <button class={item.style}>
                <Icon icon={item.icon} width="32" height="32" />
              </button>
            {/each}

          </div>
        </div>
      </div>

      <div class="text-base text-justify w-auto space-y-4">
        <p class="truncate whitespace-normal">
          Systems Engineering with strong technical skills and software
          development experience, passionate about technological innovation and
          dedicated to continuous learning.
        </p>

        <div class="flex w-full">
          <div class="w-full space-y-3">
            <div class="font-bold">Aptitudes</div>
            <div>
              <ul class="list-disc px-6 text-zinc-300">
                <li>Resilience</li>
                <li>Communication</li>
                <li>Emphaty</li>
                <li>Teamwork</li>
                <li>Problem-Solving</li>
              </ul>
            </div>
          </div>

          <div class="w-full space-y-3">
            <div class="font-bold">Idioms</div>
            <div>
              <ul class="list-disc px-6">
                <li>Spanish native</li>
                <li>English intermidiate</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <div class="font-bold">Studies</div>
          <div>
            <div class="mb-2">
              <div class="font-semibold uppercase">
                Computacional Systems Engineering
              </div>
              <div class="text-sm">
                Instituto Tecnológico de Tijuana (ITT) | september 2020
              </div>
            </div>
            <div>
              Mastering algorithms, programming logic, elementary and
              fundamental concepts of problem solving and computation.
            </div>
            <div class="w-full flex justify-end">
              <a
                target="_blank"
                href="https://www.tijuana.tecnm.mx/wp-content/uploads/2017/12/Reticula_Ingenieria_en_Sistemas_Computacionales.pdf"
                class="flex p-0 font-semibold items-center hover:underline border-neutral-300 space-x-2"
              >
                <Icon icon="material-symbols:link" />
                <div>see syllabus</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <MiniCardNavSlider />
    </div>
  </div>
</div>

<style>
  .tooltip {
    opacity: 0.9;
  }
  @media(max-width: 768px){

  }
</style>
