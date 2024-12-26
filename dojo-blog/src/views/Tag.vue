<script setup>
import { defineProps, computed } from 'vue';
import getPosts from '@/composables/getPosts';
import Spinner from '@/components/Spinner.vue';
import PostList from '@/components/PostList.vue';
import { useRoute } from 'vue-router';
import TagCloud from './TagCloud.vue';

// Destructure the returned object from the getPosts composable
const { posts, error, load } = getPosts();
const route = useRoute();
const currentTag = computed(() => {
	return posts.value.filter((p) => p.tags.includes(route.params.tag));
});
const props = defineProps(['posts']);

load();
</script>

<template>
	<div class="tag">
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length">
			<PostList :posts="currentTag" />
			<TagCloud :posts="posts" />
		</div>
		<div v-else><Spinner /></div>
	</div>
</template>

<style></style>
