<script setup>
import { projectFirestore } from '@/firebase/config';
import { ref } from 'vue';

const posts = ref([]);

projectFirestore
	.collection('posts')
	.orderBy('createdAt', 'desc')
	.onSnapshot((snap) => {
		let docs = snap.docs.map((doc) => {
			return { ...doc.data(), id: doc.id };
		});
		console.log('documents: ', docs);
		posts.value = docs;
	});
</script>

<template>
	<div>
		<h1>Real Time</h1>
		<div v-for="post in posts" :key="post.id">
			<div>{{ post.title }}</div>
		</div>
	</div>
</template>

<style></style>
