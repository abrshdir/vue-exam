<template>
        <ul class="nav-links">
            <li>
                Dashboard
            </li>
            <li class="active">
                Account
            </li>
            <li>
                Help
            </li>
            <li v-show="logout">
                Logout
            </li>
        </ul>
</template>

<script>
    export default {
        props: ["logout"],
        name: "NavLinks"
    }
</script>

<style scoped>

</style>
