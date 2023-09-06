<script>
    import { cart, totalPrice } from "$lib/stores";
</script>

<div class="grid1">
    <pre class="border p-10 bg-indigo-200 shadow-xl">{JSON.stringify(
            $cart,
            null,
            2
        )}</pre>

    <button
        class="block border-0 text-white text-xl bg-gray-800 hover:bg-black w-full btn py-3 rounded-none shadow-xl"
        >Pay {$totalPrice}</button
    >
</div>
