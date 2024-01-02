<script>
  export let myProp;
  import logo from "../assets/Images/logo.png";
</script>

<div class="px-6 py-2.5 h-20">
  <img src={logo} alt="logo" width="321px" height="61px" />
</div>
<div class="title-bg-color h-20 flex justify-center items-center">
  <h2 class="text-4xl font-medium">{myProp}</h2>
</div>

<style>
  body {
    font-family: "Satoshi", sans-serif !important;
  }
  .title-bg-color {
    background: linear-gradient(
      90deg,
      rgba(103, 169, 217, 1) 0%,
      rgba(121, 137, 224, 1) 100%
    );
    color: white;
    font-weight: 400;
    font-size: 40px;
    line-height: 35px;
    letter-spacing: 0.1px;
    color: #ffffff;
    height: 80px;
    text-align: center;
  }
</style>
