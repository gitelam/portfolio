<script>
  import MiniCardNavSlider from "../../lib/app/MiniCardNavSlider.svelte";
  import Icon from "@iconify/svelte";



    let thisData = [
        {
      title: "Music",
      content: "I love listen to Mozart. ",
      url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },

    ]


</script>

<div class="rounded-xl bg-zinc-800  p-8">
  <div class="flex w-full h-full justify-between space-x-4">
    <div class="flex flex-col space-y-6">
      <div class="font-bold text-xl">Coming soon</div>
      <div class="flex flex-col space-y-4">
        <div class="header">
          <div class="font-regular text-2xl">Next</div>
          <div>
            An activity manager system inspired in Google Classroom and Jira.
          </div>
        </div>
        <div class="flex w-max items-center rounded-md bg-neutral-700 p-2 space-x-3">
          <Icon icon="devicon:bootstrap" width="32" height="32" />
          <Icon icon="vscode-icons:file-type-django" width="32" height="32" />
          <Icon icon="devicon:python" width="32" height="32" />
          <Icon icon="vscode-icons:file-type-html" width="32" height="32" />
          <Icon icon="vscode-icons:file-type-css" width="32" height="32" />
          <Icon icon="logos:javascript" width="26" height="26" />
        </div>
      </div>
    </div>

    
    <div class="w-full">
      <MiniCardNavSlider data={thisData} />
    </div>

  </div>
</div>

<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nisi ut felis finibus egestas non at tellus. In consequat hendrerit malesuada. Fusce consectetur dui sit amet est sollicitudin accumsan. Aenean porttitor velit congue mauris convallis scelerisque. Etiam imperdiet magna vitae tincidunt tempor. Nunc hendrerit tellus lacus. Aenean dui nunc, lobortis et eleifend non, rutrum ac mauris. Ut urna ipsum, rutrum ac pretium eu, tempus sed sem.

    Nullam auctor tincidunt metus. Pellentesque nec tempus sapien. Nullam quis odio ante. Praesent tristique, neque a consequat posuere, ante odio volutpat tortor, eu faucibus ligula ipsum id metus. Etiam lacus mauris, volutpat vitae interdum sit amet, tincidunt eget est. In viverra, quam eu dictum consequat, tellus ipsum tempor sem, sit amet vestibulum ligula eros ac diam. Sed a risus sit amet velit semper ultrices. Integer id condimentum ex. Mauris ut lectus sed velit lobortis tincidunt vel vitae ante. Proin hendrerit vel nisl quis ultricies. Duis hendrerit porttitor ex. Nunc cursus aliquet urna in placerat. Vivamus tempor imperdiet imperdiet.
    
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor leo diam, id porttitor nisi sodales nec. Cras ultricies commodo convallis. Etiam condimentum lacus vitae dui fringilla aliquet. Fusce sed tincidunt mi, at scelerisque neque. Mauris varius pharetra est sed fermentum. Sed at justo elit. Etiam feugiat libero in urna sollicitudin euismod. Nullam in imperdiet justo. Vestibulum congue gravida commodo. Etiam eget imperdiet risus, at rutrum libero. Ut euismod feugiat massa sit amet consectetur. Mauris accumsan non diam sed egestas.
    
    Proin mollis placerat est. Fusce tincidunt odio quis urna faucibus, at vulputate ante fringilla. Duis blandit turpis felis. Fusce at nisi auctor, dignissim enim cursus, venenatis orci. Nam aliquet sagittis risus at auctor. Praesent sit amet ante libero. Nunc facilisis tellus id interdum finibus. Nam sed mauris in magna iaculis pulvinar nec a arcu. Quisque cursus a mauris eget sollicitudin. Donec a dui auctor, consequat felis vel, scelerisque augue. Morbi nec lorem sed ante mattis consequat.
</p>


<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nisi ut felis finibus egestas non at tellus. In consequat hendrerit malesuada. Fusce consectetur dui sit amet est sollicitudin accumsan. Aenean porttitor velit congue mauris convallis scelerisque. Etiam imperdiet magna vitae tincidunt tempor. Nunc hendrerit tellus lacus. Aenean dui nunc, lobortis et eleifend non, rutrum ac mauris. Ut urna ipsum, rutrum ac pretium eu, tempus sed sem.

    Nullam auctor tincidunt metus. Pellentesque nec tempus sapien. Nullam quis odio ante. Praesent tristique, neque a consequat posuere, ante odio volutpat tortor, eu faucibus ligula ipsum id metus. Etiam lacus mauris, volutpat vitae interdum sit amet, tincidunt eget est. In viverra, quam eu dictum consequat, tellus ipsum tempor sem, sit amet vestibulum ligula eros ac diam. Sed a risus sit amet velit semper ultrices. Integer id condimentum ex. Mauris ut lectus sed velit lobortis tincidunt vel vitae ante. Proin hendrerit vel nisl quis ultricies. Duis hendrerit porttitor ex. Nunc cursus aliquet urna in placerat. Vivamus tempor imperdiet imperdiet.
    
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor leo diam, id porttitor nisi sodales nec. Cras ultricies commodo convallis. Etiam condimentum lacus vitae dui fringilla aliquet. Fusce sed tincidunt mi, at scelerisque neque. Mauris varius pharetra est sed fermentum. Sed at justo elit. Etiam feugiat libero in urna sollicitudin euismod. Nullam in imperdiet justo. Vestibulum congue gravida commodo. Etiam eget imperdiet risus, at rutrum libero. Ut euismod feugiat massa sit amet consectetur. Mauris accumsan non diam sed egestas.
    
    Proin mollis placerat est. Fusce tincidunt odio quis urna faucibus, at vulputate ante fringilla. Duis blandit turpis felis. Fusce at nisi auctor, dignissim enim cursus, venenatis orci. Nam aliquet sagittis risus at auctor. Praesent sit amet ante libero. Nunc facilisis tellus id interdum finibus. Nam sed mauris in magna iaculis pulvinar nec a arcu. Quisque cursus a mauris eget sollicitudin. Donec a dui auctor, consequat felis vel, scelerisque augue. Morbi nec lorem sed ante mattis consequat.
</p>


<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nisi ut felis finibus egestas non at tellus. In consequat hendrerit malesuada. Fusce consectetur dui sit amet est sollicitudin accumsan. Aenean porttitor velit congue mauris convallis scelerisque. Etiam imperdiet magna vitae tincidunt tempor. Nunc hendrerit tellus lacus. Aenean dui nunc, lobortis et eleifend non, rutrum ac mauris. Ut urna ipsum, rutrum ac pretium eu, tempus sed sem.

    Nullam auctor tincidunt metus. Pellentesque nec tempus sapien. Nullam quis odio ante. Praesent tristique, neque a consequat posuere, ante odio volutpat tortor, eu faucibus ligula ipsum id metus. Etiam lacus mauris, volutpat vitae interdum sit amet, tincidunt eget est. In viverra, quam eu dictum consequat, tellus ipsum tempor sem, sit amet vestibulum ligula eros ac diam. Sed a risus sit amet velit semper ultrices. Integer id condimentum ex. Mauris ut lectus sed velit lobortis tincidunt vel vitae ante. Proin hendrerit vel nisl quis ultricies. Duis hendrerit porttitor ex. Nunc cursus aliquet urna in placerat. Vivamus tempor imperdiet imperdiet.
    
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer auctor leo diam, id porttitor nisi sodales nec. Cras ultricies commodo convallis. Etiam condimentum lacus vitae dui fringilla aliquet. Fusce sed tincidunt mi, at scelerisque neque. Mauris varius pharetra est sed fermentum. Sed at justo elit. Etiam feugiat libero in urna sollicitudin euismod. Nullam in imperdiet justo. Vestibulum congue gravida commodo. Etiam eget imperdiet risus, at rutrum libero. Ut euismod feugiat massa sit amet consectetur. Mauris accumsan non diam sed egestas.
    
    Proin mollis placerat est. Fusce tincidunt odio quis urna faucibus, at vulputate ante fringilla. Duis blandit turpis felis. Fusce at nisi auctor, dignissim enim cursus, venenatis orci. Nam aliquet sagittis risus at auctor. Praesent sit amet ante libero. Nunc facilisis tellus id interdum finibus. Nam sed mauris in magna iaculis pulvinar nec a arcu. Quisque cursus a mauris eget sollicitudin. Donec a dui auctor, consequat felis vel, scelerisque augue. Morbi nec lorem sed ante mattis consequat.
</p>
