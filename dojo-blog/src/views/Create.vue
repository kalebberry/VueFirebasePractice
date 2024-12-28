<script setup>
import { projectFirestore, timestamp } from '@/firebase/config';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('');
const body = ref('');
const tag = ref('');
const tags = ref([]);
const router = useRouter();

const handleKeyDown = () => {
	if (!tags.value.includes(tag.value)) {
		tag.value = tag.value.replace(/\s/g, '');
		tags.value.push(tag.value);
	}
	tag.value = '';
};

const handleSubmit = async () => {
	const post = {
		title: title.value,
		body: body.value,
		tags: tags.value,
		createdAt: timestamp(),
	};

	// this works because it comes from a different source, it is using
	const res = await projectFirestore.collection('posts').add(post);

	router.push('/');
};
</script>

<template>
	<div class="create">
		<form @submit.prevent="handleSubmit">
			<label for="title">Title</label>
			<input v-model="title" type="text" id="title" required />

			<label for="body">body</label>
			<textarea v-model="body" id="content" required></textarea>
			<label>Tags (Hit enter to add a tag)</label>
			<input v-model="tag" type="text" @keydown.enter.prevent="handleKeyDown" />
			<div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
			<button>Add Post</button>
		</form>
	</div>
</template>

<style>
input,
textarea {
	display: block;
	margin: 10px 0;
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
	border: 1px solid #eee;
}
textarea {
	height: 160px;
}

button {
	display: block;
	margin-top: 30px;
	background: #ff8800;
	color: white;
	border: none;
	padding: 8px 16px;
	font-size: 18px;
}
.pill {
	display: inline-block;
	margin: 10px 10px 0 0;
	color: #444;
	background: #ddd;
	padding: 8px;
	border-radius: 20px;
	font-size: 14px;
}
</style>
