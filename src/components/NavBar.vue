<template>
  <header class="border-t-2 border-green-500">
    <div class="relative max-w-screen-xl mx-auto flex items-center justify-between">
      <!-- small screen menu button -->
      <div class="absolute sm:hidden">
        <button @click="toggleMenu" class="align-middle p-2 rounded-md text-gray-400 can-hover:hover:bg-gray-200 can-hover:hover:text-green-600 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-green-500" :aria-expanded="menuOpen.toString()">
          <span class="sr-only">Open main menu</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <!-- heroicons menu (hamburger) image -->
            <path v-show="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <!-- heroicons X (close) image -->
            <path v-show="menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- logo -->
      <div class="flex flex-1 justify-center sm:justify-start">
        <g-link class="inline-flex items-center focus:outline-none" to="/">
          <svg class="h-8 w-8 sm:h-10 sm:w-10 text-green-200 p-2 bg-green-500 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span class="ml-2 text-xl sm:text-2xl tracking-tighter"><span class="font-light">michael</span><span class="font-medium">pellegrini</span><span class="text-sm">.com</span> </span>
        </g-link>
      </div>
      <!-- main site navigation -->
      <nav class="hidden sm:block flex flex-wrap sm:space-x-2">
        <g-link exact-active-class="navbar-active-link" v-for="page in pages" :key="page.name" :to="page.to"
                class="lowercase font-semibold px-3 py-2 rounded-md can-hover:hover:bg-gray-200 can-hover:hover:text-green-600">{{ page.name }}</g-link>
      </nav>
    </div>
    <!-- small screen menu dropdown -->
    <div v-if="menuOpen">
      <nav class="px-2 pt-2 pb-3 space-y-1">
        <g-link v-for="page in pages" :key="page.name" @click.native="toggleMenu" :to="page.to"
                class="block px-3 py-2 text-base font-medium can-hover:hover:bg-gray-200 can-hover:hover:text-green-600"
                >{{ page.name }}
        </g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuOpen: false,
      pages: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Blog',
          to: '/blog/'
        },
        {
          name: 'Contact',
          to: '/contact/'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
.navbar-active-link {
  @apply border-b border-green-300 rounded-b-none;
}
</style>

