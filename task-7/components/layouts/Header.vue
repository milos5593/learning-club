<template>
    <div class="bg-white">
        <div class="container mx-auto flex justify-between py-10">
            <div class="flex items-center">
                <a href="/">
                    <svgo-logo class="svg mr-20" filled />
                </a>
                <label class="relative">
                    <svgo-search filled
                        class="svg pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 cursor-pointer" />
                    <input type="text" name="search" id="search" placeholder="Search something here"
                        class="form-input border border-gray-300 py-3 px-4 rounded-full placeholder-gray-500 text-gray-500 appearance-none w-full block pl-14 focus:outline-none">
                    <svgo-filter filled
                        class="svg pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer" />
                </label>
            </div>
            <div class="icons flex gap-5">
                <button class="p-3 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <svgo-hearth filled class="headerIcon" />
                </button>
                <button class="p-3 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <svgo-notification filled class="headerIcon" />
                </button>
                <button class="p-3 border border-solid border-gray-300 rounded-full hover:border-gray-500 ease-in duration-200">
                    <svgo-settings filled class="headerIcon" />
                </button>
                <button>
                    <svgo-profileImage filled class="profileImage"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

</script>

<style scoped>
.svg {
    width: fit-content;
}
.headerIcon {
    width: 24px;
    height: 24px;
}

.profileImage {
    width: 44px;
    height: 44px;
}
</style>