<template>
    <div class="container">
        <div class="row">
            <div class="col-1">
                <img src="../assets/Image.png" alt="image">
            </div>
            <div class="col-2">
                <div class="form-group">
                    <div class="mb-32">
                        <span class="f-s-48 bolder uppercase">My Account</span>
                    </div>
                    <form>
                        <input class="text-body" id="name" name="name" placeholder=" " type="text" required>
                        <label for="name" class="text-small-uppercase">Name</label>

                        <div class="grouped">
                            <div class="group-1">
                                <input class="text-body" id="Mobile" name="Mobile" placeholder=" " type="text" required>
                                <label for="Mobile" class="text-small-uppercase">Mobile</label>
                            </div>
                            <div class="group-2">
                                <input class="text-body" id="email" name="email" placeholder=" " type="email" required>
                                <label for="email" class="text-small-uppercase">Email</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="hzn-line"></div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
</style>

