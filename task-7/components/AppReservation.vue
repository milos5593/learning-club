<template>
    <div class="cr__reservation flex gap-10 items-center">
        <div class="cr__pickUp bg-white py-5 px-10 flex flex-col flex-1 gap-4 rounded-lg">
            <div class="cr__pickUpRadio">
                <input type="radio" id="pickUp" name="pickUp" value="true" checked>&nbsp;
                <label for="pickUp" class="font-medium">Pick - Up</label>
            </div>
            <div class="cr__pickUpDropDown flex">
                <div class="cr__pickUpLocations w-full border-r">
                    <label for="locations" class="font-bold">Locations</label><br>
                    <select name="locations" id="locations" class="text-xs bg-white text-gray-500">
                        <option value="" disabled selected>Select your city</option>
                        <option value="value">Value</option>
                    </select>
                </div>
                <div class="cr__pickUpDate w-full ml-4 border-r">
                    <label for="pickUpDate" class="font-bold">Date</label><br>
                    <select name="date" id="pickUpDate" class="text-xs bg-white text-gray-500">
                        <option value="" disabled selected>Select your date</option>
                        <option value="value">Value</option>
                    </select>
                </div>
                <div class="cr__pickUpTime w-full ml-4">
                    <label for="pickUpTime" class="font-bold">Time</label><br>
                    <select name="time" id="pickUpTime" class="text-xs bg-white text-gray-500">
                        <option value="" class="" disabled selected>Select your time</option>
                        <option value="value">Value</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="cr__switch bg-blue-700 flex justify-center items-center rounded-lg w-14 h-14">
            <svgo-switch filled class="svg" />
        </div>
        <div class="cr__dropOff bg-white py-5 px-10 flex flex-col flex-1 gap-4 rounded-lg">
            <div class="cr__dropDownRadio">
                <input type="radio" id="dropOff" name="dropOff" value=true checked>&nbsp;
                <label for="dropOff" class="font-medium">Drop - Off</label>
            </div>
            <div class="cr__dropOffDownDropDown flex">
                <div class="cr__dropDownLocations w-full border-r">
                    <label for="dropOffLocations" class="font-bold">Locations</label><br>
                    <select name="dropOffLocations" id="dropOffLocations" class="text-xs bg-white text-gray-500">
                        <option value="" disabled selected>Select your city</option>
                        <option value="value">Value</option>
                    </select>
                </div>
                <div class="cr__dropDownDate w-full ml-4 border-r">
                    <label for="dropDownDate" class="font-bold">Date</label><br>
                    <select name="date" id="dropDownDate" class="text-xs bg-white text-gray-500">
                        <option value="" disabled selected>Select your date</option>
                        <option value="value">Value</option>
                    </select>
                </div>
                <div class="cr__dropDownTime w-full ml-4">
                    <label for="dropDownTime" class="font-bold">Time</label><br>
                    <select name="time" id="dropDownTime" class="text-xs bg-white text-gray-500">
                        <option value="" class="" disabled selected>Select your time</option>
                        <option value="value">Value</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.svg {
    width: fit-content;
}
</style>