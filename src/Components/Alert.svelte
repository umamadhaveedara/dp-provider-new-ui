<script>
  // @ts-nocheck
  
  import { Toast } from "flowbite-svelte";
  import { alert } from "../Stores/alertStore";
  import {
    CheckCircleSolid,
    ExclamationCircleSolid,
  } from "flowbite-svelte-icons";
</script>

<div
  style="position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 100%;"
>
  {#if $alert.visible}
    <Toast
      align={false}
      color={$alert.type === "error" ? "red" : "green"}
      class="mb-4 items-center"
      bind:this={$alert.visible}
    >
      <svelte:fragment slot="icon">
        {#if $alert.type === "error"}
          <ExclamationCircleSolid class="w-5 h-5" />
        {:else}
          <CheckCircleSolid class="w-5 h-5" />
        {/if}
        <span class="sr-only"></span>
      </svelte:fragment>
      {$alert.message}
    </Toast>
  {/if}
</div>
