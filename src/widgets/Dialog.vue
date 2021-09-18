<template>
    <teleport to="body">
        <div v-if="show" @click="$emit('close')" class="backdrop"></div>
        <transition name="dialog">
            <dialog open v-if="show">
                <img src="../assets/clapping.png" alt="image">
                <header>
                    <h2>Great Job!</h2>
                </header>
                <p>Your configurations have been updated successfully.</p>
            </dialog>
        </transition>
    </teleport>
</template>

<script>
    export default {
        name: "Dialog",
        props: {
            show: {
                type: Boolean,
                required: true,
            },
        },
        emits: ['close'],
    }
</script>

<style scoped>

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 10;
    }

    dialog {
        position: fixed;
        top: 20vh;
        left: 45%;
        z-index: 100;
        border-radius: 12px;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 0;
        margin: 0;
        overflow: hidden;
    }


    img {
        display: block;
        width: 128px;
        height: 128px;
        margin: 64px auto 32px;
    }

    p {
        display: block;
        margin: 0 64px 64px;
        font-size: 24px;
        text-align: center;
    }

    header {
        width: 100%;
        /*padding: 1rem;*/
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header h2 {
        margin-bottom: 32px;
        font-size: 48px;
        font-weight: bold;
    }

    @media (min-width: 769px) {
        dialog {
            width: 574px;
            height: 428px;
            left: calc((100% - 574px) / 2);
        }
    }

    @media (min-width: 415px) and (max-width: 768px) {
        dialog {
            width: 582px;
            height: 339px;
            left: calc((100% - 582px) / 2);
        }

        img {
            width: 96px;
            height: 96px;
            margin: 64px auto 24px;
        }

        header h2 {
            font-size: 40px;
            margin-bottom: 24px;
            margin-top: 0;
        }

        p {
            margin-bottom: 64px;
            text-align: center;
            font-size: 20px;
        }
    }

    @media (max-width: 415px) {
        dialog {
            width: 350px;
            height: 359px;
            left: calc((100% - 350px) / 2);
        }
        img{
            width: 80px;
            height: 80px;
            margin: 64px auto 20px;
        }

        header h2 {
            font-size: 40px;
            margin-bottom: 20px;
            margin-top: 0;
        }
        p{
            margin: 0 64px 64px;
            font-size: 20px;
        }
    }
</style>
