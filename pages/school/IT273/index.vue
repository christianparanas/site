<template>
	<div class="it">
		<Nav />
		<div class="head">
			<h1 class="title">IT273 -  Web System and Technologies</h1>
			<p class="hello">Hello sir. Ronnie G. Cabillan, I am Christian R. Paranas from BSIT 2-E. These are the links I created to navigate to my activities. Thank you!</p>
		</div>
		<div class="links">
			<NuxtLink :to="exer.link" v-for="exer in exercises" :key="exer.name">
			<div class="nsvto shadow-md">Chapter {{ exer.name }}
				<svg class="w-4 h-4" style="display: inline-block; margin: 0 0 2px 4px" fill="none" stroke="#BCCDDF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
			</div>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
	* {
    font-family: 'Montserrat', sans-serif;
   }

	.it {
		padding: 0 0 40px;
	}

	.head {
		display: grid;
		padding: 100px 20px 50px;
	}

	.title {
		place-self: center;
		margin-bottom: 40px;
	}

	.hello {
		place-self: center;
		margin-bottom: 30px;
	}

	.links {
		padding: 20px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
		width: fit-content;
		margin: 0 auto;
	}

	a {
		place-self: center;
	}

	.nsvto {
		place-self: center;
		border-radius: 5px;
		
		padding: 8px 15px;
		width: 100%;
		background-color: var(--menubg);
		box-shadow: 0 10px 40px -10px rgb(0 64 128 / 20%);
    	transition: box-shadow .3s;
    }

	.nsvto:hover {
		color: #fff;
		background: purple;
	}

	
</style>

<script>
	export default {
		data() {
			return {
				exercises: [
					{ name: '2', link: '/school/it273/chapter2' },
					{ name: '3', link: '/school/it273/chapter3' },
					{ name: '4', link: '/school/it273/chapter4' },
					{ name: '5', link: '/school/it273/chapter5' },
					{ name: '6', link: '/school/it273/chapter6' },
					{ name: '7', link: '/school/it273/chapter7' },
					{ name: '8', link: '/school/it273/chapter8' },
				]
			}
			
		}
	}
</script>