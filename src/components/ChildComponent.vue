<script setup lang="ts">
    defineProps([ 'HCourse' ])
    import { inject } from 'vue'

    const fees = inject('fees')
    // const release = inject('release')
</script>

<template>
    <h1>
        Child Component
    </h1>

    <h2>
        {{ HCourse }}
    </h2>

    <h3>
        {{ fees }}
    </h3>

    <!-- <h2>
        release-date is : {{ 'release' }}
    </h2> -->
    
</template>