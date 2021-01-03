<template>
  <Layout>
    <div class="flex">
      <div>
        <h1 class="text-3xl font-bold">
          <span class="text-green-600">Hello!</span> I'm Michael Pellegrini
        </h1>
        <p class="pt-2 font-medium">
          I usually go by Mike.  I've been a software architect/developer for many years.
          Welcome to my personal space on the internet where I share my thoughts, ideas and learnings
          about software development, home automation and whatever else is peaking my interests.
        </p>
        <div class="pt-6 flex justify-between">
          <div class="flex">
            <svg class="w-5 h-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="ml-0.5 text-">Connecticut, USA</span>
          </div>
          <SocialMedia />
        </div>
      </div>
      <g-image class="h-44 w-44" alt="My Memoji" src="~/favicon.png"/>
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
    title: 'Home'
  }
}
</script>

