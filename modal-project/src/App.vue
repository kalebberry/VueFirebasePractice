<script>
import Modal from './components/Modal.vue';

export default {
	name: 'App',
	components: { Modal },
	data() {
		return {
			title: 'Hello World!, Whats up.',
		};
	},
};
</script>

<template>
	<h1>{{ title }}</h1>
	<Modal theme="sale">
		<template v-slot:links>
			<a href="">Sign up now</a>
			<a href="">More info</a>
		</template>
		<h1>Ninja Giveaway!</h1>
		<p>Grab your ninja swag for half price!</p>
	</Modal>
</template>

<style lang="scss" scoped></style>
