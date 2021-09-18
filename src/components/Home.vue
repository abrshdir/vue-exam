<template>
    <div class="main">
        <Header />
        <FormInput/>
        <Table />
    </div>
</template>

<script>
    import FormInput from "./FormInput";
    import Header from "./Header";
    import Table from "./Table";

    export default {
        name: "HomePage",
        components: {
            FormInput, Header, Table
        },
    }
</script>

<style scoped>
</style>
