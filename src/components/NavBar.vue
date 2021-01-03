<template>
  <div class="border-t-4 border-green-600">
    <header class="max-w-6xl mx-auto flex items-center justify-between px-4 xlg:px-0 py-8">
      <div class="flex items-center">
        <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
        <g-link class="pl-1" to="/">
          <span class="text-2xl lowercase tracking-tight font-medium text-green-600">michael</span>
          <span class="text-2xl lowercase tracking-tight font-semibold">pellegrini</span>
          <span class="lowercase font-semibold text-gray-600">.com</span>
        </g-link>
      </div>
      <nav>
        <g-link class="ml-5 lowercase font-semibold hover:text-green-600" to="/">Home</g-link>
        <g-link class="ml-5 lowercase font-semibold hover:text-green-600" to="/blog/">Blog</g-link>
        <g-link class="ml-5 lowercase font-semibold hover:text-green-600" to="/contact/">Contact</g-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

