<script>
  import {
    Button,
    Helper,
    Input,
    Label,
    Spinner
  } from "flowbite-svelte";
  import OuterHeader from "../Components/OuterHeader.svelte";
  import { showAlerts } from "../Stores/alertStore";
  import { isValidEmail } from "./Validations/validation";
  let email = "";
  let showLoader = false;
  $: isDisabled = !email;
  let errors = { email: "" };

  const validateForm = () => {
    showLoader = false;
    errors = { email: "" };
    if (email.trim() === "") {
      errors.email = "Email is required";
    } else {
      if (!isValidEmail(email)) {
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
        showAlerts("Email sent sucessfully", "sucess");
      }, 3000);

      console.log("Form submitted:", { email });
    }
  };
</script>

<div>
  <OuterHeader myProp="Forgot Password" />
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
    <Button
      class="bg-loginbtn rounded-md font-bold"
      type="submit"
      style="width:100%"
      bind:disabled={isDisabled}
    >
      {#if showLoader}
        <Spinner color="white" size="6" />
      {:else}
        Reset
      {/if}
    </Button>
    <div class="text-center py-5 text-xs">
      <div class="py-2 color-black">
        Have an account? <a href="/signup">Sign in now</a>
      </div>
    </div>
  </form>
</div>

<style>
  body {
    font-family: "Satoshi", sans-serif !important;
  }
  .form-wd {
    max-width: 430px;
    margin: 0 auto;
  }
  .color-black {
    color: black;
  }
</style>
