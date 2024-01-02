// @ts-ignore
import Login from './Pages/Login.svelte'
// @ts-ignore
import Signup from './Pages/SignUp.svelte'
// @ts-ignore
import ForgotPassword from './Pages/ForgotPassword.svelte'

import NotFound from './Pages/NotFound.svelte';
import { Router, Link, Route } from "svelte-routing";
export default {
    '/': Login,
    '/signup': Signup,
    '/forgotpassword': ForgotPassword,
    '*': NotFound,
}
