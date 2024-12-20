<script>
export default {
	props: ['theme'],
};
</script>

<template>
	<div class="backdrop">
		<div class="modal" :class="{ sale: theme === 'sale' }">
			<slot></slot>
			<div class="actions">
				<slot name="links"></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
.modal {
	width: 400px;
	padding: 20px;
	margin: 100px auto;
	background: white;
	border-radius: 10px;
}

.backdrop {
	top: 0;
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
}

.sale {
	color: red;
}
</style>
