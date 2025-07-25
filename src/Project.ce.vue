<script setup lang="ts">
interface ProjectProps {
  foo: number;
  bar: number;
}
withDefaults(defineProps<ProjectProps>(), { foo: -1, bar: -1 });
</script>

<template>
  <div>{{ foo + bar }}</div>
</template>
