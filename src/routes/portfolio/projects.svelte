<script>
  import FullCardViewer from "../../lib/app/FullCardViewer.svelte";
  import Icon from "@iconify/svelte";

  import Image from "../../lib/images/next.png";
  import Image1 from "../../lib/images/next01.png";
  import Image2 from "../../lib/images/next02.png";

    let thisData = [
        {
      title: "",
      content: "",
      url: Image,
    },
    {
      title: "",
      content: "",
      url: Image1,
    },
    {
      title: "",
      content: "",
      url: Image2,
    },


    ]



</script>

<div class="h-max rounded-xl bg-neutral-700 p-4">
  <div class="flex w-full h-full justify-between space-x-4 ">
    <div class="flex flex-col ">

      <div class="font-semibold text-xl">Working on</div>
      <div class="flex flex-col  h-full justify-center ">
        
        <div class="space-y-4">
          <div class="font-regular text-2xl">Next</div>
          <div class="flex w-max items-center rounded-md bg-neutral-800 p-2 space-x-3">
            <Icon icon="devicon:bootstrap" width="32" height="32" />
            <Icon icon="vscode-icons:file-type-django" width="32" height="32" />
            <Icon icon="devicon:python" width="32" height="32" />
            <Icon icon="vscode-icons:file-type-html" width="32" height="32" />
            <Icon icon="vscode-icons:file-type-css" width="32" height="32" />
            <Icon icon="logos:javascript" width="26" height="26" />
          </div>
          <div class="space-y-4 w-60 text-justify">
          
            <p>
              An activity manager system inspired in Google Classroom and Jira.
            </p>
            <p >
              Where, you can create, assign, and manage activities for your team.
              </p>
          </div>
        </div>
        
        <div>
          <div class="w-full flex justify-end">
            <a
              target="_blank"
              href="https://github.com/gitelam/next"
              class="flex p-0 font-semibold items-center hover:underline border-neutral-300 space-x-2"
            >
              <Icon icon="material-symbols:link" />
              <div>see on github</div>
            </a>
          </div>
        </div>
        
      </div>
    </div>

    
    <div class="zoom w-full rounded-xl hover:outline-double outline-neutral-400">
        <FullCardViewer  clickToSee={true}  data={thisData} />
    </div>


  </div>
  
</div>


<div class="flex flex-col">
 

  <div class="flex p-4 space-x-12 justify-evenly">
    <div class="space-y-4">
      <div class="text-2xl font-semibold">
        EntryFlow
      </div>
      <div class="flex w-max items-center rounded-md bg-neutral-800 p-2 space-x-3">
        <Icon icon="devicon:bootstrap" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-django" width="32" height="32" />
        <Icon icon="devicon:python" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-html" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-css" width="32" height="32" />
        <Icon icon="logos:javascript" width="26" height="26" />
      </div>
      <div class="truncate whitespace-normal w-96 text-justify text-lg space-y-4">
        <p>
          System that manages entries and exits in a company by means of facial recognition
  The application is built entirely in Ionic, using Javascript services through the OpenCV library to perform facial recognition of the company's employees.
        </p>
  
        <p>
          In this application I worked as a team, one dedicated to the backend and the other to the frontend. 
  I built the frontend design of the internal application: Employee creation, employee edition, profile edition, absenteeism and attendance summary as well as the reports and their tables accessing the endpoints correspondents.
        </p>
      </div>
      <div>
        <div class="w-full flex justify-end">
          <a
            target="_blank"
            href="https://github.com/gitelam/next"
            class="flex p-0 font-semibold items-center hover:underline border-neutral-300 space-x-2"
          >
            <Icon icon="material-symbols:link" />
            <div>see on github</div>
          </a>
        </div>
      </div>
    </div>
    
    <div class="bg-green-200 w-full flex justify-center">
      <div class="flex bg-red-200 h-full items-center">
        <img alt="" src="https://i.pinimg.com/originals/4f/76/57/4f765766c108b9e56d5adeb9e2feaa90.png" class="w-80 rounded-xl">
      </div>
    </div>
  
  </div>


  <div class="flex p-4 space-x-12 justify-evenly">
    <div class="space-y-4">
      <div class="text-2xl font-semibold">
        EntryFlow
      </div>
      <div class="flex w-max items-center rounded-md bg-neutral-800 p-2 space-x-3">
        <Icon icon="devicon:bootstrap" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-django" width="32" height="32" />
        <Icon icon="devicon:python" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-html" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-css" width="32" height="32" />
        <Icon icon="logos:javascript" width="26" height="26" />
      </div>
      <div class="truncate whitespace-normal w-96 text-justify text-lg space-y-4">
        <p>
          System that manages entries and exits in a company by means of facial recognition
  The application is built entirely in Ionic, using Javascript services through the OpenCV library to perform facial recognition of the company's employees.
        </p>
  
        <p>
          In this application I worked as a team, one dedicated to the backend and the other to the frontend. 
  I built the frontend design of the internal application: Employee creation, employee edition, profile edition, absenteeism and attendance summary as well as the reports and their tables accessing the endpoints correspondents.
        </p>
      </div>
      <div>
        <div class="w-full flex justify-end">
          <a
            target="_blank"
            href="https://github.com/gitelam/next"
            class="flex p-0 font-semibold items-center hover:underline border-neutral-300 space-x-2"
          >
            <Icon icon="material-symbols:link" />
            <div>see on github</div>
          </a>
        </div>
      </div>
    </div>
    <div class="bg-green-200 w-full flex justify-center">
      <div class="flex bg-red-200 h-full items-center">
        <img alt="" src="https://assets.justinmind.com/wp-content/uploads/2022/06/login-page-website.png" class=" rounded-xl">
      </div>
    </div>
  
  </div>






</div>






<!-- <dialog id="completeImgModal" class="h-full w-full rounded-2xl">
    <MiniCardNavSlider data={thisData} />
</dialog> -->

<style>
  .zoom{
    height: 50vh;
  }

</style>