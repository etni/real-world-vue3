<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'
const event = ref(null)
const errorMessage = ref(null)

const props = defineProps({
  id: {
    required: true,
  },
})


onMounted(async () => {
  try {
    errorMessage.value = null
    const response = await EventService.getEvent(props.id)
    event.value = response.data
  } catch (error) {
    console.error(error.code)
    errorMessage.value = error.message
  }
})

</script>
<template>
  <div v-if="errorMessage">
    <p>An error occurred: {{ errorMessage }}</p>
  </div>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
