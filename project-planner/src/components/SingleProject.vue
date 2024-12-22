<template>
	<div class="project" :class="{ completed: project.completed }">
		<div class="actions">
			<h3 @click="this.details = !this.details">{{ project.title }}</h3>
			<div>
				<router-link :to="{ name: 'EditProject', params: { id: project.id } }">
					<i class="fa-solid fa-pen-to-square"></i>
				</router-link>
				<i @click="deleteProject" class="fa-solid fa-trash"></i>
				<i @click="toggleComplete" class="fa-solid fa-check tick"></i>
			</div>
		</div>
		<div class="details" v-if="details">
			<p>{{ project.details }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project'],
	data() {
		return {
			details: false,
			uri: 'http://localhost:3000/projects/' + this.project.id,
		};
	},
	methods: {
		deleteProject() {
			fetch(this.uri, { method: 'DELETE' })
				.then(() => this.$emit('delete', this.project.id))
				.catch((err) => console.log(err));
		},
		toggleComplete() {
			fetch(this.uri, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ completed: !this.project.completed }),
			})
				.then(() => {
					this.$emit('complete', this.project.id);
				})
				.catch((err) => console.log(err));
		},
	},
};
</script>

<style>
.project {
	margin: 20px auto;
	background: white;
	padding: 10px 20px;
	border-radius: 4px;
	box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
	border-left: 4px solid #e90074;

	&.completed {
		border-left: 4px solid #00b74a;

		& .tick {
			color: #00b74a;
		}
	}
}
h3 {
	cursor: pointer;
}
.actions {
	display: flex;
	justify-content: space-between;
	align-items: center;

	& i {
		margin: 0 5px;
		cursor: pointer;
		opacity: 0.5;

		&:hover {
			opacity: 1;
		}
	}
}
</style>
