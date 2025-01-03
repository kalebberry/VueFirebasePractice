<script setup>
import { ref } from 'vue';
import useSignUp from '@/composables/useSignup';

const displayName = ref('');
const email = ref('');
const password = ref('');
const emit = defineEmits(['signup']);
const { error, signup } = useSignUp();

const handleSubmit = async () => {
	await signup(email.value, password.value, displayName.value);
	console.log('user signed up');
	emit('signup');
};
</script>

<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" required placeholder="display name" v-model="displayName" />
		<input type="email" required placeholder="email" v-model="email" />
		<input type="password" required placeholder="password" v-model="password" />
		<div class="error">
			{{ error }}
		</div>
		<button type="submit">Sign Up</button>
	</form>
</template>

<style></style>
