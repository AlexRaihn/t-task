<template>
  <div class="test-cont">
    <div class="account-cont">
      <div class="account-data">
        <p style:="'text-align: left;'">{{ getName.name }}</p>
        <p>
          {{ getName.points }}
          <img src="../assets/coin.png" alt="not found"/>
        </p>
      </div>
    </div>
    <div class="quest-cont">
        <div>
          <img src="../assets/close_btn.png" alt="not found"/>
        </div>
        <div>
          {{ getTest.doForAnswer }}
          <h2>{{ getTest.textTest }}</h2>
        </div>
        <div>
          <ModalWindow/>
        </div>
    </div>
    <div class="test-img" :style="'background-image: url('+getTest.imgTest+')'">
    </div>
    <div class="buttons-cont">
      <div v-for="(answer,index) in getTest.answerArray" class="button-cont" v-bind:key="index" @click="userAnswer = answer[index]">
          {{ answer }}
      </div>
      <div class="button-cont" @click="CheckTrueAnswer()">
        Check
      </div>
    </div>
  </div>
</template>

<script>
import { useChildStore } from '@/store/index';
import { mapState, mapActions } from 'pinia';
import ModalWindow from '../components/ModalWindow.vue'

export default {
  name: "TestView",
  data() {
    return {
      userAnswer: ''
    }
  },
  computed: {
    ...mapState(useChildStore, ['getName', 'getTest'])
  },
  methods: {
    ...mapActions(useChildStore, ['loadTest']),

    CheckTrueAnswer: function() {
      if(this.userAnswer == this.getTest.trueAnwer) {
        this.getName.points = this.getName.points + 5;
        alert("Very Good!")
      } else {
        this.getName.points = this.getName.points - 5;
        alert("Not Good!")
      }
      this.userAnswer = ''
    }
  },
  async mounted() {
    await this.loadTest(this.$route.params.id)
    console.log(this.getTest.imgTest);
  },
  components: {
    ModalWindow
  }
}
</script>

<style scoped>
.account-cont{
  display: flex;
  justify-content: right;
}
.quest-cont{
  display: flex;
  justify-content: space-between;
}
.test-cont{
  font-size: 140%;
  text-align: center;
  width: 100%;
}
.test-img{
  margin-top: 10%;
  min-width: 100px;
  min-height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.button-cont{
  min-width: 50px;
  border: 1px solid black;
  border-radius: 20px;
}
.button-cont:hover{
  cursor: pointer;
}
@media(min-width: 1024px) {
  .button-cont{
    min-width: 200px;
  }
}
@media(min-width: 300px) {
  .test-cont{
    font-size: 200%;
  }
}
.buttons-cont{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15%;
}
</style>
