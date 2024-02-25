<template>
    <div>
    <img src="../assets/bulb.png" alt="not found" @click="isOpen = true"/>
        <div v-if="isOpen == true" class="modal-container">
            <div class="modal-content">
                <h2>Modal Window</h2>
                <h3 @click="isOpen = !isOpen" class="modal-closer">Close</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalWindow",
    data() {
        return {
            isOpen: false
        }
    },
}
</script>

<style scoped>
.modal-container{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content{
    z-index: 3;
    background: white;
    border: 1px solid black;
    width: 40%;
    height: 60%;
    opacity: 1;
}
@media(min-height: 800px) {
    .modal-content{
        width: 80%;
        height: 20%;
        padding: 1%;
        font-size: 140%;
        margin-bottom: 20%;
    }
}
.modal-closer{
    font-size: 120%;
    text-decoration: underline;
    margin-top: 10%;
}
</style>