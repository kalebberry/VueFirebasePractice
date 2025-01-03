<script setup>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';

const { error, logout } = useLogout();
const { user } = getUser();
const emit = defineEmits(['logout']);

const handleClick = async () => {
	await logout();
	if (!error.value) {
		console.log('user is logged out');
	}
};
</script>

<template>
	<nav v-if="user">
		<div>
			<p>Hey there {{ user.displayName }}</p>
			<p class="email">currently logged in as {{ user.email }}</p>
		</div>
		<button @click="handleClick">Logout</button>
	</nav>
</template>

<style></style>
