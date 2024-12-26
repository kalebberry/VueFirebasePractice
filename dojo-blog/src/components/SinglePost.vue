<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['post']);
const snippet = computed(() => props.post.body.substring(0, 100) + '...');
</script>

<template>
	<div class="single-post">
		<router-link :to="{ name: 'details', params: { id: post.id } }">
			<h3>{{ post.title }}</h3>
		</router-link>
		<p>{{ snippet }}</p>
		<span v-for="tag in post.tags" :key="tag">#{{ tag }}&nbsp;</span>
	</div>
</template>

<style></style>
