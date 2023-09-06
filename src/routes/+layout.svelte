<script>
    import "@unocss/reset/tailwind.css";
    import "virtual:uno.css";
</script>

<div class="wrapper flex place-content-center">
    <slot />
</div>

<style>
    .wrapper {
        max-width: 800px;
        margin: 10em auto;
    }
</style>
