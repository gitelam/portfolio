<script>
    
    import { scale, fade } from 'svelte/transition';

    import Icon from '@iconify/svelte';

	export let open = false;
	
	function showSideBar(){
		open = !open; 
		console.log(open);
	}


    let invertArrow = false;
    let dontShowFirstIcon = true;
    let isAnimate = false;

    let button_bar_style = "hover:bg-neutral-100";

    function doAnimation(){
        console.log("doing animation");
        isAnimate = !isAnimate;
        invertArrow = !invertArrow;
        dontShowFirstIcon = !dontShowFirstIcon;
        button_bar_style = isAnimate? "hover:bg-neutral-500" : "hover:bg-neutral-100 ";        
    }

    let moreButton = "flex w-9 items-center h-24 bg-neutral-800";

    let lessButton = "flex w-9 items-center h-24 bg-neutral-100";

    let showHideTip = false;
    
    

</script>


    <div  class="absolute max-[600px]:hidden">
        <button on:mouseenter={()=>{showHideTip = true}} on:mouseleave={()=>{showHideTip = false}}  class="absolute h-screen {button_bar_style} bg-opacity-50"  on:click={() => { showSideBar(); doAnimation();}}>
	
            <div class=" flex items-center space-x-4">
                
                <button class={isAnimate? lessButton : moreButton } >
                    
                    {#if dontShowFirstIcon}
                        <div class="w-full flex flex-col justify-center items-center" in:fade={{y:0,duration:100}} >  
                            <Icon icon="ep:arrow-right-bold" width="24" height="24" />
                        </div>
                        
                        <div out:scale={{y:0,duration:100}} class="text-xs flex items-start absolute left-12 justify-start hover:text-neutral-900">
                            <p class="flex justify-start text-left">
                                see details
                            </p>
                        </div>
                    {/if}
                    
                    {#if invertArrow}
                        
                        <div class=" text-neutral-800 w-full flex flex-col justify-center items-center space-y-2" in:fade={{y:0,duration:100}}>  
                            <Icon class="rotate-180 " icon="ep:arrow-right-bold" width="24" height="24" />
                            {#if showHideTip}
                            <div class="text-base justify-start hover:text-neutral-900">
                                hide
                             </div>
                            {/if}
                        </div>
                        
                    {/if}

                </button>


               
            </div>  
            
            
        </button>

       

    </div>