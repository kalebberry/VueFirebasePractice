<script setup>
import Navbar from '@/components/Navbar.vue';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';

const { user } = getUser();
const router = useRouter();

watch(user, () => {
	if (!user.value) {
		router.push('/');
	}
});
</script>

<template>
	<div class="container">
		<Navbar />
		<ChatWindow />
		<NewChatForm />
	</div>
</template>

<style>
nav {
	padding: 20px;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
nav p {
	margin: 2px auto;
	font-size: 16px;
	color: #444;
}
nav p.email {
	font-size: 14px;
	color: #999;
}
</style>
