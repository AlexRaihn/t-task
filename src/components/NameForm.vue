<template>
    <div class="form-container">
        <div class="form-item">
            <input type="text" v-model="childName" placeholder="name">
        </div>
        <div class="form-item">
            <button @click="SubmitName()">Submit</button>
        </div>
    </div>
</template>

<script>
import { useChildStore } from '@/store/index';
import { mapActions } from 'pinia';

export default {
    name: "NameForm",
    dara() {
        return {
            childName: ""
        }
    },
    methods: {
        ...mapActions(useChildStore, ['loadNewAccount']),

        SubmitName: async function() {
            //отправка имени ребёнка
            await this.loadNewAccount(this.childName);
            //переадресация на страницу с тестом.
            this.$router.push({name: 'TestView', params: { id: 1}});
        }
    }
}
</script>

<style scoped>
.form-container{
    min-width: 50px;
    min-height: 200px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5%;
}
.form-item{
    margin: 10px;
}
input {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
}
input:focus{
    border-bottom: 1px solid black;
}
button {
    margin-top: 20%;
    border: 1 px solid black;
    border-radius: 20px;
    font-size: 120%;
    padding: 5px;
}
</style>