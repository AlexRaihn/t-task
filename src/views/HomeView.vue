<template>
  <div class="home-cont">
    <NameForm/>
  </div>
</template>

<script>
import NameForm from '@/components/NameForm.vue';

export default {
  name: 'HomeView',
  components: {
    NameForm
  }
}
</script>

<style scoped>
.home-cont{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
</style>
