<template>
  <div>
    <div class="questions-list">
      <template v-for="([theme, question], index) in questions">
        <div class="questions-list-item" :key="`${index}-${theme}`">
          <p>{{theme}}</p>
        </div>
        <div class="questions-list-item" :key="`${index}-${question}`">
          <p>{{question}}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
.questions-list
  @apply grid-cols-2 grid row-gap-2 col-gap-4

.questions-list-item
  @apply rounded bg-blue-600 text-white
</style>
