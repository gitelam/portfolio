<script>
  import Icon from "@iconify/svelte";
  import FullCardViewer from "../FullCardViewer.svelte";
</script>

<div class="flex p-4 space-x-12 justify-evenly">
    <div class="space-y-4">
      <div class="text-2xl font-semibold">
        Asiscan
      </div>
      <div class="grid grid-cols-6 gap-4 w-max items-center rounded-md bg-neutral-800 p-2 ">
        <Icon icon="devicon:bootstrap" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-django" width="32" height="32" />
        <Icon icon="devicon:python" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-html" width="32" height="32" />
        <Icon icon="vscode-icons:file-type-css" width="32" height="32" />
        <Icon icon="logos:javascript" width="26" height="26" />
        
       
      </div>
      <div class="w-72 text-lg space-y-4 text-justify ">
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
    <div class=" rounded-xl w-full flex ">
      <div class="flex w-full h-full items-center py-12">
        <!-- <img alt="" src="https://assets.justinmind.com/wp-content/uploads/2022/06/login-page-website.png" class=" rounded-xl"> -->


      </div>
    </div>
  
</div>