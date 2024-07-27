<script setup lang="ts">
    import Parent from './ParentComponent.vue'
    import { provide } from 'vue'

    const HEmployeeName = 'Ahamad'
    const HState = 'Andhra Pradesh'
    const HCourse = 'VueJs'

    provide('fees', 18000)
    
    
</script>

<template>
    <Parent :HEmployeeName="HEmployeeName" :HState="HState" :HCourse="HCourse"></Parent>
</template>