<template>
  <div>
    <h1 class="app-title">Community Voices</h1>
    <button @click="selectQuestion()" class="app-icon-button">
      <font-awesome-icon icon="dice"></font-awesome-icon>
    </button>

    <questions-vue :questions="questions"></questions-vue>
  </div>
</template>

<script>
import QuestionsVue from '../components/Questions.vue';
import * as randomize from '../utils/randomize';

export default {
  name: 'Home',
  data() {
    return {
      questions: [],
    };
  },
  methods: {
    questionPicker: randomize.questionPicker(),
    selectQuestion() {
      const q = this.questionPicker();

      this.questions.push(q);
    },
  },
  components: {
    QuestionsVue,
  },
};
</script>

<style lang="sass" scoped>
.app-title
  @apply font-bold text-4xl my-4 text-blue-600

.app-icon-button
  @apply cursor-pointer text-6xl mb-8

  &:hover
    @apply text-blue-600

  &:focus
    @apply outline-none
</style>
