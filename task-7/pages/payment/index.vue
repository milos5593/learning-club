<template>
    
    <div class="mainDiv container mx-auto bg-gray-100 pt-8 pb-16 grid md:grid-cols-3 gap-4">
      
        <div class="md:col-span-2">
        <FormKit type="form" id="payment" submit-label="Rent now"> 
            <div class="bg-white rounded-2xl p-6 mb-10">
                <div class="pb-1">
                    <h3 class="text-xl font-bold">Billing Info</h3>
                </div>
                <div class="flex justify-between pb-5">
                    <p class="text-gray-500 text-sm">Please enter your billing info</p>
                    <p class="text-gray-500 text-sm">Step 1 of 4</p>
                </div>
            <div class="flex">
              <div class="w-full">   
              <FormKit type="text" name="name" label="Name" placeholder="Your name" validation="required"/>
              <FormKit type="number" name="number" label="Phone number" placeholder="Phone number" validation="required"/>
              </div>
              <div class="w-full">
              <FormKit type="text" name="adress" label="Address" placeholder="Your adress" validation="required"/> 
              <FormKit type="text" name="city" label="Town / City" placeholder="Town or city" validation="required"/>
              </div>  
            </div>

            </div>

            <div class="bg-white rounded-2xl p-6 mb-10">
                <div class="pb-1">
                    <h3 class="text-xl font-bold">Rental info</h3>
                </div>
                <div class="flex justify-between pb-5">
                    <p class="text-gray-500 text-sm">Please select your rental date</p>
                    <p class="text-gray-500 text-sm">Step 2 of 4</p>
                </div>
                <FormKit type="checkbox" label="Pick Up" name="pickup" />
                <div class="flex">
                  <div class="w-full">  
                    <FormKit type="select" label="Locations" name="pick-locations" placeholder="Select your city" validation="required" :options="['Beograd', 'Zemun', 'Novi Sad', 'Nova Pazova']"/>
                    <FormKit type="date" name="pick-date" label="Date" />
                  </div> 
                  <div class="w-full">
                    <FormKit type="time" label="Time" name="time" value="10:00"/>
                  </div>  
                    
                </div>
                <FormKit type="checkbox" label="Drop-Off" name="drop-off" />
                <div class="flex">
                  <div class="w-full">  
                    <FormKit type="select" label="Locations" name="drop-locations" placeholder="Select your city" validation="required" :options="['Beograd', 'Zemun', 'Novi Sad', 'Nova Pazova']"/>
                    <FormKit type="date" name="drop-date" label="Date" />
                  </div> 
                  <div class="w-full">
                    <FormKit type="time" label="Time" name="drop=time" value="10:00"/>
                  </div>  
                    
                </div>
            </div>

            <div class="bg-white rounded-2xl p-6 mb-10">
                <div class="pb-1">
                    <h3 class="text-xl font-bold">Payment Method</h3>
                </div>
                <div class="flex justify-between pb-5">
                    <p class="text-gray-500 text-sm">Please enter your payment method</p>
                    <p class="text-gray-500 text-sm">Step 3 of 4</p>
                </div>
                <FormKit type="checkbox" name="visa" label="Credit Card"/>
                <div class="flex">
                    
                <div class="w-full">
                <FormKit type="tel" name="card-number" label="Card Number" placeholder="XXXX-XXXX-XXXX-XXXX" validation="number|required|matches:/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/" :validation-messages="{matches: 'Card number must be in the format xxxx-xxxx-xxxx-xxxx'}"/>
                <FormKit type="date" label="Expration Date" name="exp-date" validation="required|date_before:2023-09-01"/>
                </div>
                <div class="w-full">
                <FormKit type="text" label="Card Holder" name="card-holder" validation="required" placeholder="Card Holder"/>
                <FormKit type="tel"  name="cvc" label="CVC" placeholder="CVC" validation="number|required|length:3,3"/>
                </div>
                </div>
            </div>

            <div class="bg-white rounded-2xl p-6 mb-10">
                <div class="pb-1">
                    <h3 class="text-xl font-bold">Confirmation</h3>
                </div>
                <div class="flex justify-between pb-5">
                    <p class="text-gray-500 text-sm">We are getting to the end. Just a few clicks and your rental is ready!
                    </p>
                    <p class="text-gray-500 text-sm">Step 4 of 4</p>
                </div>
                <FormKit
                    type="checkbox"
                    label="I agree with sending an Marketing and newsletter emails. No spam, promised."
                    name="newsletter"
                />
                <FormKit
                    type="checkbox"
                    label="I agree with our terms and conditions and privacy policy"
                    name="terms"
                    :value="false"
                    validation="accepted"
                    validation-visibility="dirty"
                    outer="bg-red-300"
                />
                
                <h4 class="font-bold text-l pt-10">All your date are safe</h4>
                <p class="text-gray-500 text-sm">We are using the most advanced security to provide you the best experience
                    ever.</p>
            </div>
            
        </FormKit> 
        </div>
        
        
        <div class="col-span-1  bg-white rounded-2xl mb-20 ml-10 ">
            <h3 class="text-l font-bold">Rental Summary</h3>
            <p class="text-gray-500 text-sm">Prices may change depending on the lenght of the rental and the price of your rental car</p>
        </div>
    
    </div>

</template>
