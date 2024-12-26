<script setup>
import { defineProps } from 'vue';
import SinglePost from './SinglePost.vue';

const props = defineProps(['posts']);
</script>

<template>
	<div class="post-list">
		<div v-for="post in posts" :key="post.id">
			<SinglePost :post="post" />
		</div>
	</div>
</template>
