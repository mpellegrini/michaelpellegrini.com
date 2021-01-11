<template>
  <Layout>
    <h1 class="text-3xl font-bold">Get in touch with me</h1>
    <form action="https://getform.io/f/d88eaa1f-a442-4c95-afdc-d87693f35299" method="POST">
      <div class="flex flex-wrap">
        <div class="p-2 w-full sm:w-1/2">
          <div class="relative">
            <label for="name" class="leading-loose text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-full sm:w-1/2">
          <div class="relative">
            <label for="email" class="leading-loose text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-loose text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-baseline">
            <svg class="w-4 h-4 mr-0.5 transform rotate-45" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span>Send</span>
          </button>
        </div>
      </div>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  },
}
</script>
