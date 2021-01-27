<template>
	<div style="padding: 20px;">
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

   .title {
		display: grid;
		place-items: center;
		margin-bottom: 20px;
	}

   .back {
	 border: 2px solid #6B21A8;
   	 cursor: pointer; 
   	 color: white; 
   	 padding: 2px 8px; 
   	 border-radius: 3px; 
   	 font-size: 15px;
   	 margin-top: 20px;
   }
</style>