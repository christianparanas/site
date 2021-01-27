<template>
	<div class="it">
		<div class="head">
			<h1 class="title">IT273 -  Web System and Technologies</h1>
			<p class="hello">Hello sir. Ronnie G. Cabillan, these are the links I created to navigate to my activities. Thank you!</p>
			<p>- Christian R. Paranas BSIT 2-E</p>
		</div>
		<div class="links">
			<NuxtLink to="/school/it273/chapter2">
				<button>Chapter 2
				<svg class="w-5 h-5" style="display: inline-block; margin: 0 0 2px 4px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
			</button>
			</NuxtLink>
			<NuxtLink to="/school/it273/chapter3">
				<button>Chapter 3
				<svg class="w-5 h-5" style="display: inline-block; margin: 0 0 2px 4px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
			</button>
			</NuxtLink>
			<NuxtLink to="/school/it273/chapter4">
				<button>Chapter 4
				<svg class="w-5 h-5" style="display: inline-block; margin: 0 0 2px 4px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
			</button>
			</NuxtLink>
			
		</div>
	</div>
</template>

<style scoped>
	* {
    font-family: 'Montserrat', sans-serif;
   }

	.it {
		padding: 40px 20px;
	}

	.head {
		display: grid;
	}

	.title {
		place-self: center;
		margin-bottom: 40px;
	}

	.hello {
		margin-bottom: 30px;
	}

	.links {
		margin-top: 60px;
		padding: 20px;
		display: grid;
		grid-gap: 10px;
	}

	a {
		place-self: center;
	}

	button {
		place-self: center;
		border-radius: 4px;
		width: fit-content;
		padding: 10px 30px;
		outline: 0;
		border: 2px solid #6B21A8;
	}

	button:hover {
		background: #161E2E;
	}

	
</style>