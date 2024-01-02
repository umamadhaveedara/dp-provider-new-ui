<script>
  import OuterHeader from "../Components/OuterHeader.svelte";
  import Alert from "../Components/Alert.svelte";
  import {
    Input,
    Label,
    Helper,
    Button,
    Checkbox,
    A,
    Spinner,
  } from "flowbite-svelte";
  import {
    EyeOutline,
    EyeSlashOutline,
    InfoCircleSolid,
  } from "flowbite-svelte-icons";
  import { fly } from "svelte/transition";
  import { alert, showAlerts } from "../Stores/alertStore";
  let email = "";
  let password = "";
  let show = false;
  let showLoader = false;
  let showAlert = false;
  $: isDisabled = !email || !password;
  let errors = { password: "", email: "" };

  const validateForm = () => {
    showLoader = false;
    errors = { password: "", email: "" };
    if (password.trim() === "") {
      errors.password = "Password is required";
    }
    if (email.trim() === "") {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "Please enter valid email address";
      }
    }
    return Object.values(errors).every((error) => error === "");
  };

  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    validateForm();
  };
  const handleSubmit = () => {
    if (validateForm()) {
      showLoader = true;
      setTimeout(() => {
        showLoader = false;
        showAlerts("loggined sucessfully","sucess")
      }, 3000);
      
      console.log("Form submitted:", { password, email });
    }
  };
  const showPassword = (e) => {
    e.preventDefault();
    e.stopPropagation();
    show = !show;
  };
 
</script>

<div>
  <OuterHeader myProp="Welcome" />
  <form
    on:submit|preventDefault={handleSubmit}
    class={`form-wd py-10 px-5 ${
      !showLoader ? "pointer-events-auto" : "pointer-events-none"
    }`}
  >
    <div class="mb-6">
      <Label for="email" class="mb-2 font-extrabold">Enter Email</Label>
      <Input
        type="text"
        id="email"
        placeholder="john.doe@company.com"
        on:input={(e) => handleChange(e)}
        bind:value={email}
      />
      {#if errors.email}
        <Helper class="mt-2" color="red">
          <span class="font-medium">{errors.email}</span>
        </Helper>
      {/if}
    </div>
    <div class="mb-6">
      <Label for="password" class="mb-2 font-extrabold">Enter Password</Label>
      <Input
        type={show ? "text" : "password"}
        id="password"
        placeholder="•••••••••"
        bind:value={password}
      >
        <button
          slot="right"
          on:click={(e) => showPassword(e)}
          class="pointer-events-auto"
          style="padding:0px;background:white"
        >
          {#if show}
            <EyeOutline class="w-5 h-4" color="grey"/>
          {:else}
            <EyeSlashOutline class="w-4 h-4" color="grey"/>
          {/if}
        </button>
      </Input>
    </div>
    <Button
      class="bg-loginbtn rounded-md font-bold"
      type="submit"
      style="width:100%"
      bind:disabled={isDisabled}
    >
      {#if showLoader}
        <Spinner color="white" size="6" />
      {:else}
        Login
      {/if}
    </Button>
    <div class="text-center py-5 text-xs">
      <div class="py-2 color-black">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
      <div class="text-xs linkcolor"><a href="/forgotpassword">Forgot Password</a></div>
    </div>
  </form>

</div>

<style>
  .form-wd {
    max-width: 430px;
    margin: 0 auto;
  }
  .color-black{
    color: black;
  }
</style>
