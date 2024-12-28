<script setup>
import { defineProps } from 'vue';
import getPost from '@/composables/getPost';
import Spinner from '@/components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { projectFirestore } from '@/firebase/config';

const props = defineProps(['id']);
const { post, error, load } = getPost(props.id);
const route = useRoute();
const router = useRouter();
console.log(route);
load();

const handleClick = async () => {
	await projectFirestore.collection('posts').doc(props.id).delete();

	router.push('/');
};
</script>

<template>
	<article>
		<div v-if="error">{{ error }}</div>
		<div v-if="post" class="post flow">
			<h3>{{ post.title }}</h3>
			<p class="pre">{{ post.body }}</p>
			<button @click="handleClick" class="delete">Delete Post</button>
		</div>
		<div v-else>
			<Spinner />
		</div>
	</article>
</template>

<style scoped></style>
