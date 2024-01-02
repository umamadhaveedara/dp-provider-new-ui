<script>
  // import Router  from 'svelte-spa-router';
  // import routes from './routes';
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
  import Login from './Pages/Login.svelte';
  import ForgotPassword from "./Pages/ForgotPassword.svelte";
  import NotFound from "./Pages/NotFound.svelte";
  import { fade } from "svelte/transition";
  import Layout from "./Components/Layout.svelte";
  import { onMount } from 'svelte';
  import SignUp from "./Pages/SignUp.svelte";

let isLoading = true;

onMount(() => {
  // Simulate app initialization logic
  // Replace this with your actual initialization logic
  window.addEventListener('load', () => {
    isLoading = false;
  });
});
</script>


{#if isLoading}
  <div style="align-items: center;
  /* background: red; */
  height: 100%;
  display: flex;
  justify-content: center;color:black"><img style="height: 50px;" src="./assets/Images/logo.png" alt="Please Wait..."/></div>
{:else}
<main>
  <Router {url} viewtransition="{() => ({ fn: fade,duration: 500 })}">
    <div class="font-Satoshi">
      <Route path="/">
        <Layout component={Login}>
        </Layout></Route>
      <Route path="/signup"><Layout component={SignUp}>
      </Layout></Route>
      <Route path="/forgotpassword">
        <Layout component={ForgotPassword}>
        </Layout>
      </Route>
      <Route path="*" component={NotFound} />
    </div>
  </Router>
</main>
{/if}

