<template>
    <div class="container">
        <div class="row">
            <span class="f-s-36 f-s-md-32">Select Configuration</span>
        </div>
        <div class="row">
            <table>
                <tr>
                    <td>
                        <font-awesome-icon icon="check-circle"
                                           style=" color: #86EAAE; font-size: 24px; line-height: 40px; font-weight: 800; padding-right: 16px"/>
                    </td>
                    <td>
                        <div class="title">
                            Manual Configuration
                        </div>
                        <div class="description">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </div>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <div class="title" style="font-weight: 400">
                            Services Access
                        </div>
                        <div class="description exceptional">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. Integer
                            posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien
                            vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris dignissim, lectus
                            sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="circle small">
                        </div>
                    </td>
                    <td>
                        <div class="title">
                            Semi-auto Configuration
                        </div>
                        <div class="description">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="circle small">
                        </div>
                    </td>
                    <td>
                        <div class="title">
                            Automatic Configuration
                        </div>
                        <div class="description">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="buttons">
            <a @click="tryOpen" class="block-btn button2">
                <font-awesome-icon icon="exchange-alt"
                                   style="color: #FFFFFF; font-size: 16px; line-height: 40px; font-weight: 800; padding-right: 10px"/>
                Update Configuration</a>
            <a href="#" class="outline-btn button2">
                <font-awesome-icon icon="times"
                                   style=" color: #FC732F; font-size: 16px; line-height: 40px; font-weight: 800; padding-right: 10px"/>
                Cancel</a>
        </div>
        <base-dialog :show="openModal" @close="closeModal" title="An error occurred">
            <p>{{ error }}</p>
        </base-dialog>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data() {
            return {
                openModal: false,
            }
        },
        methods: {
            tryOpen() {
                this.openModal = true;
            },
            closeModal() {
                this.openModal = false;
            },
        }
    }
</script>

<style scoped>

</style>
