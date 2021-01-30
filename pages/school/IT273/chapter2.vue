<template>
	<div class="c2">
		<div class="title">Chapter 2</div>

		<h3>WELCOME TO HTML</h3>
	    <p><b>Eastern Visayas State University</b></p>
	    <p><i>College of Enginering</i></p>
	    <p><i><b>Information Technology Department</b></i></p>
	    <NuxtLink to="/school/it273">
			<button class="back"><svg class="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button>
		</NuxtLink>
	</div>
</template>

<style>
	* {
    font-family: 'Montserrat', sans-serif;
   }

   .c2 {
   	padding: 40px 20px;
   	font-size: 13px;
   }

   .title {
		display: grid;
		place-items: center;
		margin-bottom: 20px;
		font-size: 18px
	}

   .back {
	 outline: 0;
	 position: absolute;
	 top: 0;
   	 cursor: pointer; 
   	 background-color: var(--hero1bg);
     color: var(--hero1color);
   	 padding: 4px 8px; 
   	 border-radius: 50%;
   	 font-size: 13px;
   	 margin-top: 20px;
   }
</style>