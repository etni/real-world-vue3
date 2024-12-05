<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Dog Adoption Day',
    description: 'Come meet our furry friends and take home a new family member!',
    location: '123 Main St, Springfield, IL',
    date: 'January 28, 2023',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Springfield Animal Shelter',
  },
  {
    id: 5928102,
    category: 'community',
    title: 'Community Cleanup',
    description: 'Help us clean up the park and keep our community beautiful!',
    location: '456 Elm St, Springfield, IL',
    date: 'February 4, 2023',
    time: '10:00',
    petsAllowed: false,
    organizer: 'Springfield Parks Department',
  },
  {
    id: 5928103,
    category: 'fundraiser',
    title: 'Charity Auction',
    description: 'Bid on unique items and experiences to support local charities!',
    location: '789 Oak St, Springfield, IL',
    date: 'February 11, 2023',
    time: '18:00',
    petsAllowed: false,
    organizer: 'Springfield Charity Foundation',
  },

])

</script>

<template>
  <h1>Events for Good</h1>
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
