import { defineStore } from 'pinia';

export const useChildStore = defineStore({
  id: 'child',
  state: () => ({
    childAccount: {
        name: "",
        points: 1000
    },
    testForChild: {}
  }),
  actions: {
    //загрузка изображения теста, вариантов ответов и правильных ответов.
    async loadTest(idTest) {
      if(idTest == 1) {
        let response = {
            id: 1,
            imgTest: require('@/assets/img/task_img.png'),
            answerArray: ['A', 'B', 'C'],
            trueAnwer: 'A',
            doForAnswer: 'Choose the right answer',
            textTest: 'Which shape shows thirds?'
          };
          this.testForChild = response;
      } else {
        let response = "404 not found"
        console.log(response);
      }
    },
    //сохранение имени, для след.страницы
    async loadNewAccount(itemName) {
        this.childAccount.name = itemName;
    }
  },
  getters: {
    getName: (state) => state.childAccount,
    getTest: (state) => state.testForChild
  }
});