<template>
	<form @submit.prevent="updateProject">
		<label for="title">Title</label>
		<input v-model="title" type="text" required />
		<label>Details:</label>
		<textarea v-model="details" required></textarea>
		<button>Update Project</button>
	</form>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			title: '',
			details: '',
			uri: 'http://localhost:3000/projects/' + this.id,
		};
	},
	methods: {
		updateProject() {
			let p = {
				title: this.title,
				details: this.details,
			};
			fetch(this.uri, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ ...p }),
			})
				.then(() => {
					this.$router.push('/');
				})
				.catch((err) => console.log(err));
		},
	},
	mounted() {
		fetch(this.uri)
			.then((res) => res.json())
			.then((data) => {
				this.title = data.title;
				this.details = data.details;
			});
	},
};
</script>

<style></style>
