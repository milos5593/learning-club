<script lang="ts" setup>
const props = defineProps(['length'])
</script>

<template>
    <div class="cr__showMore flex justify-center mt-16 relative">
        <button v-if="length > 0" class="text-white bg-blue-700 py-3 px-5 rounded-md">Show more
            car</button>
        <p class="absolute right-0 top-3 text-gray-500">{{ length }}
            Cars</p>
    </div>
</template>