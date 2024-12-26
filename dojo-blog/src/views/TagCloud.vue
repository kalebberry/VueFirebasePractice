<script setup>
import { defineProps } from 'vue';
import useTags from '@/composables/useTags';

const props = defineProps(['posts']);
const { tags } = useTags(props.posts);
</script>

<template>
	<div class="tag-cloud flow">
		<hr />
		<h4>Tags</h4>
		<div class="tag-cloud-content">
			<div v-for="tag in tags" :key="tag">
				<router-link :to="{ name: 'tags', params: { tag: tag } }">#{{ tag }}</router-link>
			</div>
		</div>
	</div>
</template>

<style>
.tag-cloud {
	margin-top: 2rem;
}

.tag-cloud a.router-link-active {
	color: #000;
	opacity: 1;
	font-weight: bold;
}

.tag-cloud-content {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
