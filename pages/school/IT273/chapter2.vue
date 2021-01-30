<template>
	<div class="c2">
		<div class="title">Chapter 2</div>

		<h3>WELCOME TO HTML</h3>
	    <p><b>Eastern Visayas State University</b></p>
	    <p><i>College of Enginering</i></p>
	    <p><i><b>Information Technology Department</b></i></p>
	    <NuxtLink to="/school/it273">
			<button class="back">Go back!</button>
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
	 
   	 cursor: pointer; 
   	 background-color: var(--hero1bg);
     color: var(--hero1color);
   	 padding: 4px 8px; 
   	 border-radius: 5px;
   	 font-size: 13px;
   	 margin-top: 20px;
   }
</style>