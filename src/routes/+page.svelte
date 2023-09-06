<script>
    import { bookingDetails, days, price } from "$lib/stores";

    $: console.log({ $bookingDetails, $days, $price });
</script>

<div
    class="max-w-md bg-indigo-300/90 place-items-center gap-10 shadow-xl"
>
    <div class="grid grid-cols-2 gap-4 px-4 py-8">
        <div class="md:text-center">
            <p class="font-bold mb-2">Check In</p>
            <input
                class="date-input"
                bind:value={$bookingDetails.checkin}
                name="checkin"
                type="date"
                max={$bookingDetails.checkout}
                min={new Date().toISOString().split("T")[0]}
            />
        </div>
        <div class="md:text-center">
            <p class="font-bold mb-2">Check Out</p>
            <input
                class="date-input"
                bind:value={$bookingDetails.checkout}
                name="checkout"
                type="date"
            />
        </div>
        <div class="md:text-center">
            <p class="font-bold mb-2">Adults</p>
            <select
                bind:value={$bookingDetails.adults}
                name="adults"
                class="w-14 md:w-24"
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
        </div>
        <div class="md:text-center">
            <p class="font-bold mb-2">Children</p>
            <select
                bind:value={$bookingDetails.children}
                name="children"
                class="w-14 md:w-24"
            >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
        </div>
    </div>
    <div class="max-w-md text-center z-10">
   
            <button on:click={() => alert(`Please pay`)}
                class="block border-0 text-white text-xl bg-gray-800 hover:bg-black w-full btn py-3 rounded-none shadow-xl"
                >Book a room</button
            >
      
    </div>
</div>

<style>
    input {
        border: 1px solid #333333;
        padding: 0.25em;
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: inset 0 0 4px rgba(165, 180, 252, 0.9);
    }

    select {
        border: 1px solid #333333;
        padding: 0.25em;
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: inset 0 0 4px rgba(165, 180, 252, 0.9);
    }
</style>
