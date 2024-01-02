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
      Select
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
    let selectType="";
    let firstName="";
    let lastName="";
    let show = false;
    let showLoader = false;
    let showAlert = false;
    $: isDisabled = !email || !selectType || !firstName || !lastName;
    let errors = { email: "" };
  
    const validateForm = () => {
      showLoader = false;
      errors = {email: "" };
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
    const handleSignUpSubmit = () => {
      if (validateForm()) {
        showLoader = true;
        setTimeout(() => {
          showLoader = false;
          showAlerts("Signup scusess","sucess")
        }, 3000);
        
        console.log("Form submitted:", { password, email });
      }
    };
   let providertype=[
    {value:"Dental", name:"Dental"},
    {value:"Vision",name:"Vision"},
       {value:"Accupuncture",name:"Accupuncture"},
       {value:"Chiropractic",name:"Chiropractic"},
       {value:"Mental Health",name:"Mental Health"},
       {value:"Vet",name:"Vet"},
       {value:"Physical Therapy",name:"Physical Therapy"},
       {value:"Hospital",name:"Hospital"},
       {value:"Yoga",name:"Yoga"},
       {value:"Doctor Specialist",name:"Doctor Specialist"},
       {value:"Others",name:"Others"}
   ]
  </script>
  
  <div>
    <OuterHeader myProp="Welcome Provider!" />
    <form
      on:submit|preventDefault={handleSignUpSubmit}
      class={`form-wd py-10 px-5 ${
        !showLoader ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
    <div class="mb-6">
        <Label for="type" class="mb-2 font-extrabold">Provider Type</Label>
        <Select id="select-disabled" items={providertype} placeholder="Select" bind:value={selectType}/>
  </div>
    <div class="mb-6">
        <Label for="firstName" class="mb-2 font-extrabold">First Name</Label>
        <Input
          type="text"
          id="firstName"
          placeholder="Enter"
          bind:value={firstName}
        />
      </div>
      <div class="mb-6">
        <Label for="lastName" class="mb-2 font-extrabold">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          placeholder="Enter"
          bind:value={lastName}
        />
      </div>
      <div class="mb-6">
        <Label for="email" class="mb-2 font-extrabold">Practice Email</Label>
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
          Create Account
        {/if}
      </Button>
      <div class="text-center py-5 text-xs">
        <div class="py-2 color-black">
            Have an account? <a href="/">Sign in now</a>
        </div>
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
  