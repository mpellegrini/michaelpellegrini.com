<template>
  <div class="antialiased text-gray-900 min-h-screen bg-gray-50">
    <NavBar class="px-2 lg:px-8 py-8"/>
    <main class="max-w-3xl mx-auto mt-4 sm:mt-20 px-4 lg:px-0">
      <slot/>
    </main>
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
