<script setup>
import { ref } from 'vue';
import SignUpForm from '@/components/SignUpForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { useRouter } from 'vue-router';

const showLogin = ref(true);
const router = useRouter();

const enterChat = () => {
	router.push('/chatroom');
};
</script>

<template>
	<main>
		<div class="welcome container">
			<p>Welcome</p>
			<div v-if="showLogin">
				<h2>Login</h2>
				<LoginForm @login="enterChat" />
				<p>
					No account yet?
					<span @click="showLogin = !showLogin">Sign Up</span>
				</p>
			</div>
			<div v-else>
				<h2>Sign Up</h2>
				<SignUpForm @signup="enterChat" />
				<p>
					Already have an account?
					<span @click="showLogin = !showLogin">Log In</span>
				</p>
			</div>
		</div>
	</main>
</template>

<style>
.welcome {
	text-align: center;
	padding: 20px 0;
}
/* form styles */
.welcome form {
	width: 300px;
	margin: 20px auto;
}
.welcome label {
	display: block;
	margin: 20px 0 10px;
}
.welcome input {
	width: 100%;
	padding: 10px;
	border-radius: 20px;
	border: 1px solid #eee;
	outline: none;
	color: #999;
	margin: 10px auto;
}

.welcome span {
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
}

.welcome button {
	margin: 20px auto;
}
</style>
