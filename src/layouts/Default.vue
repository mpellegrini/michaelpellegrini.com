<template>
  <div class="antialiased text-gray-900 min-h-screen bg-gray-50">
    <NavBar/>
    <div class="mx-auto max-w-3xl mt-20 px-4 lg:px-0">
      <slot/>
    </div>
    <Footer class="mt-36"/>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    Footer
  }
}
</script>
