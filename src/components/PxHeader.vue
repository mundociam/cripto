<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-red-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         <img src="@/assets/Bitcoins.png" class="mr-2" width="70px" height="50px"/>
          <span class="font-semibold text-4xl tracking-tight">CriptoMonedas</span>
        </div>

        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto px-3">
          
          <router-link to="/about">
              <button class=" sm:bg-red-600 hover:bg-red-700 px-4 mx-2"> About </button>
           </router-link>
           <router-link to="/">
              <button class=" sm:bg-red-600 hover:bg-red-700 px-4 mx-2"> Home </button>
           </router-link>
        </div>

      </nav>
    </nav>
  </header>
</template>

<script>
export default {
    name:'PxHeader',

}
</script>