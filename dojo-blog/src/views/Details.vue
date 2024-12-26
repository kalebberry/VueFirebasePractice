<script setup>
import { defineProps } from 'vue';
import getPost from '@/composables/getPost';
import Spinner from '@/components/Spinner.vue';
import { useRoute } from 'vue-router';

const props = defineProps(['id']);
const { post, error, load } = getPost(props.id);
const route = useRoute();
console.log(route);
load();
</script>

<template>
	<article>
		<div v-if="error">{{ error }}</div>
		<div v-if="post" class="post flow">
			<h3>{{ post.title }}</h3>
			<p class="pre">{{ post.body }}</p>
		</div>
		<div v-else>
			<Spinner />
		</div>
	</article>
</template>

<style scoped></style>
