<script>
    import Toast from "./Alert.svelte";
    export let component;
</script>
<div>
<Toast></Toast>
<svelte:component this={component} />
</div>