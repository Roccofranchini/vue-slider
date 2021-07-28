/*
Descrizione:
Inizializzare Vue e stampare a schermo un messaggio all’interno di un h1, utilizzando le properietà di Vue presenti in data.
Bonus
Aggiungere alla pagina un’immagine, la cui sorgente derivi anch'essa dai data di Vue.
*/

console.log("vue test", Vue);
Vue.config.devtools = true;

const root = new Vue({
	el: "#root",
	data: {
		currentIndex: 0,
		images: [
			"./img/image1.jpg",
			"./img/image2.jpg",
			"./img/image3.jpg",
			"./img/image4.jpg",
		],
	},
	methods: {
		isActive(index) {
			return this.currentIndex === index ? "active" : "";
		},
		increaseIndex() {
			if (this.currentIndex === this.images.length - 1) {
				this.currentIndex = 0;
			} else {
				this.currentIndex++;
			}
		},
		decreaseIndex() {
			if (this.currentIndex === 0) {
				this.currentIndex = this.images.length - 1;
			} else {
				this.currentIndex--;
			}
		},
		setCurrentIndex(newIndex) {
			this.currentIndex = newIndex;
		},
	},
});
