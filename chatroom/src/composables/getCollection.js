import { ref, watchEffect } from 'vue';
import { projectFirestore } from '@/firebase/config';

const getCollection = (collection) => {
	const documents = ref(null);
	const error = ref(null);

	let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

	const unsub = collectionRef.onSnapshot(
		(snap) => {
			let results = [];
			snap.docs.forEach((doc) => {
				// must wait for the server to create the timestamp & send it back
				// we don't want to edit data until it has done this
				doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
			});
			documents.value = results;
			error.value = null;
		},
		(err) => {
			console.log(err.message);
			documents.value = null;
			error.value = 'could not fetch the data';
		}
	);

	watchEffect((onInvalidate) => {
		// ubsub from prev collection when watcher is stopped ( component unmounted )
		onInvalidate(() => unsub());
	});

	return { documents, error };
};

export default getCollection;
