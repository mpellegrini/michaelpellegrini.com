<template>
  <Layout>
    <div class="flex flex-col-reverse sm:flex-row">
      <div>
        <h1 class="text-2xl pt-2 sm:pt-0 sm:text-3xl font-bold">
          <span class="text-green-600">Hello!</span> I'm Michael Pellegrini
        </h1>
        <p class="pt-2 font-medium">
          I usually go by Mike.  I've been a software architect/developer for many years.
          Welcome to my personal space on the internet where I share my thoughts, ideas and learnings
          about software development, home automation or whatever else is peaking my interests.
        </p>
        <div class="flex flex-wrap justify-between items-center mt-3">
          <div class="flex items-center mt-2 mr-2">
            <svg class="w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="ml-1">Connecticut, USA</span>
          </div>
          <SocialMedia class="mt-2" />
        </div>
      </div>
      <div class="flex-shrink-0 mx-auto sm:mx-0">
        <g-image class="h-44 w-44" alt="My Memoji" src="~/favicon.png"/>
      </div>
    </div>
  </Layout>
</template>

<script>
import SocialMedia from "../components/SocialMedia";

export default {
  components: {
    SocialMedia
  },
  metaInfo: {
    title:"",
    titleTemplate: "Michael Pellegrini",
  },
}
</script>

