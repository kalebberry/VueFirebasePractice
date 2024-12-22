<template>
	<div class="home">
		<FilterNav @filterChange="current = $event" :current="current" />
		<div v-if="projects.length">
			<div v-for="project in filteredProjects" :key="project.id">
				<SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
			</div>
		</div>
	</div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue';
import { computed } from 'vue';

export default {
	name: 'Home',
	components: { SingleProject, FilterNav },
	data() {
		return {
			projects: [],
			current: 'all',
		};
	},
	mounted() {
		fetch('http://localhost:3000/projects')
			.then((res) => res.json())
			.then((data) => (this.projects = data))
			.catch((err) => console.error(err.message));
	},
	methods: {
		handleDelete(id) {
			this.projects = this.projects.filter((project) => {
				return project.id !== id;
			});
		},
		handleComplete(id) {
			console.log('This is being called');
			let p = this.projects.find((project) => {
				console.log(project.id);
				return project.id === id;
			});
			p.completed = !p.completed;
		},
	},
	computed: {
		filteredProjects() {
			if (this.current === 'completed') {
				return this.projects.filter((project) => project.completed);
			} else if (this.current === 'ongoing') {
				return this.projects.filter((project) => !project.completed);
			}
			return this.projects;
		},
	},
};
</script>
