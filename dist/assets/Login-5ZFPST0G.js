import{g,h as n,u as p,r as h,c as y,b as e,i as b,j as d,v as m,o as f,p as x,k as w,d as u}from"./index-aHfO-G92.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";g({id:"user",state:()=>({email:"",accessToken:""}),action:{async logout(){await n.post("https://localhost:7048/api/Supabase/Logout",{},{"Cache-Control":"no-cache","Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*"}),localStorage.setItem("accessToken",""),this.$patch({email:"",accessToken:""})},async login(o,a){let s=await n.post("https://localhost:7048/api/Supabase/Login",{email:o,password:a},{"Cache-Control":"no-cache","Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*"}).catch(c=>{console.log(c),p().push("Login")});localStorage.setItem("accessToken",s.data.data.accessToken),this.$patch({email:s.data.data.user.email,accessToken:s.data.data.accessToken})}}});const r=o=>(x("data-v-bb1cf5ea"),o=o(),w(),o),_={class:"flex flex-col items-center justify-center px-6 py-8 mx-auto mt-20 lg:py-0"},v=r(()=>e("a",{href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},[e("img",{class:"w-8 h-8 mr-2",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",alt:"logo"}),u(" Smart Community Solution ")],-1)),S={class:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"},T={class:"p-6 space-y-4 md:space-y-6 sm:p-8"},C=r(()=>e("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Sign in to your account ",-1)),I=r(()=>e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Your email",-1)),L=r(()=>e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1)),A=r(()=>e("button",{type:"submit",class:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Sign in",-1)),V=r(()=>e("p",{class:"text-sm font-light text-gray-500 dark:text-gray-400"},[u(" Don’t have an account yet? "),e("a",{href:"#",class:"font-medium text-primary-600 hover:underline dark:text-primary-500"},"Sign up")],-1)),B={__name:"Login",setup(o){const a=h({email:"",password:""}),s=p(),c=async()=>{await n.post("https://localhost:7048/api/Supabase/Login",{email:a.value.email,password:a.value.password},{"Cache-Control":"no-cache","Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*"}).then(t=>{console.log(t),localStorage.setItem("accessToken",t.data.data.accessToken),localStorage.setItem("email",t.data.data.email),s.push("Home")}).catch(t=>{console.log(t),s.push("Login")})};return(t,l)=>(f(),y("div",_,[v,e("div",S,[e("div",T,[C,e("form",{class:"space-y-4 md:space-y-6",onSubmit:b(c,["prevent"])},[e("div",null,[I,d(e("input",{"onUpdate:modelValue":l[0]||(l[0]=i=>a.value.email=i),type:"email",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[m,a.value.email]])]),e("div",null,[L,d(e("input",{"onUpdate:modelValue":l[1]||(l[1]=i=>a.value.password=i),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[m,a.value.password]])]),A,V],32)])])]))}},q=k(B,[["__scopeId","data-v-bb1cf5ea"]]);export{q as default};