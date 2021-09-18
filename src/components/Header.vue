<template>
    <!--    Caption on the very first top of the page-->
    <div class="caption">
        <font-awesome-icon icon="exclamation-triangle"
                           style=" color: #FC732F; width: 24px; height: 24px; line-height: 40px; font-weight: 800; padding-right: 16px"/>
        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
    </div>

    <!--    Header the second top layer after caption that holds the navigation links aa well as logo and icons for smaller devices-->
    <div class="header">
        <div class="bars" @click="ToggleDrawer">
            <!--            np install fort awesome and related brand icons-->
            <div v-if="drawerOpened">
                <font-awesome-icon :icon="['fa', 'times']"
                                   style=" color: #FFFFFF; line-height: 40px; font-weight: 800"/>
            </div>
            <div v-else-if="!drawerOpened">
                <font-awesome-icon :icon="['fa', 'bars']" style=" color: #FFFFFF; line-height: 40px; font-weight: 800"/>
            </div>
        </div>

        <h1 className="main-navigation__title logo">
            <font-awesome-icon :icon="['fab', 'rocketchat']"
                               style=" color: #FC732F; line-height: 40px; font-weight: 800; padding-right: 16px"/>
            <span style="color: #FC732F"><span style="color: #FFFFFF">Logo</span>Ipsum</span>
        </h1>

        <nav class="mobileMenu" :style="{display: drawerOpened ? 'block': 'none'}">
            <NavLinks :logout="false"/>
        </nav>

        <nav class="desktopMenu">
            <NavLinks :logout="!drawerOpened"/>
        </nav>

        <div class="logout">
            <font-awesome-icon :icon="['fa', 'sign-out-alt']"
                               style=" color: #FFFFFF; line-height: 40px; font-weight: 800;"/>
        </div>
    </div>
</template>

<script>
    import NavLinks from "./NavLinks";

    export default {
        name: "Header",
        components: {NavLinks},
        data() {
            return {
                drawerOpened: false,
                resized: true,
            }
        },
        methods: {
            ToggleDrawer() {
                this.drawerOpened = !this.drawerOpened;
                this.resized = !this.resized;
            },
        },
    }
</script>

<style scoped>

</style>
