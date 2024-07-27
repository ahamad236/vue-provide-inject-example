<script setup lang="ts">
    import Child from './ChildComponent.vue'
    defineProps([ 'HEmployeeName', 'HState', 'HCourse' ])
</script>

<template>
    <!-- <h2>
        HEmployeeName is : {{ HEmployeeName }}
    </h2>
    <h2>
        HState is : {{ HState }}
    </h2> -->

    <Child :HCourse="HCourse"></Child>
</template>