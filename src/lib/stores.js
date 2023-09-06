import { derived, writable } from "svelte/store";

const getTomorrow = () => {
    const today = new Date();
    const tomorrow = today.setDate(today.getDate() + 1)
    return new Date(tomorrow).toISOString().split("T")[0]
}

export const bookingDetails = writable({
    checkin: new Date().toISOString().split("T")[0],
    checkout: getTomorrow(),
    adults: 1,
    children: 0,
});

export const days = derived(bookingDetails, ($bookingDetails) => {
    const checkin = new Date($bookingDetails?.checkin)
    const checkout = new Date($bookingDetails?.checkout)
    const diff = +checkout - +checkin;
    return Math.floor(diff / (1000 * 24 * 60 * 60));
});


export const price = derived([days, bookingDetails], ([$days, $bookingDetails]) => {

    return $bookingDetails.adults * +$days * 1500

})











//cart

export const cart = writable([
    { title: "Apple", price: 20, quantity: 3 },
    { title: "Orange", price: 10, quantity: 3 },
]);

export const totalPrice = derived(
    cart,
    ($cart) =>
        $cart.reduce((a, b) => +a + b.price * b.quantity, 0)
);