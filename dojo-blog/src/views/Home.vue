<script setup>
import PostList from '@/components/PostList.vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';
import TagCloud from './TagCloud.vue';

// Destructure the returned object from the getPosts composable
const { posts, error, load } = getPosts();
load();
</script>

<template>
	<div class="home flow">
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length">
			<PostList :posts="posts" />
			<TagCloud :posts="posts" />
		</div>
		<div v-else><Spinner /></div>
	</div>
</template>
