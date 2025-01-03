import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Chatroom from '@/views/Chatroom.vue';
import { projectAuth } from '@/firebase/config';

const requireNoAuth = (to, from, next) => {
	let user = projectAuth.currentUser;

	if (user) {
		next({ name: 'chatroom' });
	} else {
		next();
	}
};

// auth guard
const requireAuth = (to, from, next) => {
	let user = projectAuth.currentUser;

	if (!user) {
		next({ name: 'welcome' });
	} else {
		next();
	}
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'welcome',
			component: Welcome,
			beforeEnter: requireNoAuth,
		},
		{
			path: '/chatroom',
			name: 'chatroom',
			component: Chatroom,
			beforeEnter: requireAuth,
		},
	],
});

export default router;
