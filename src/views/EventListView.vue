<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { ref, onMounted } from 'vue'

const events = ref(null)

const errorMessage = ref(null)
onMounted(async () => {
  try {
    errorMessage.value = null
    const response = await EventService.getEvents()
    events.value = response.data
  } catch (error) {
    console.error(error.code)
    errorMessage.value = error.message
  }

})

</script>

<template>
  <h1>Events for Good</h1>
  <p v-if="errorMessage">An error occurred: {{ errorMessage }}</p>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
