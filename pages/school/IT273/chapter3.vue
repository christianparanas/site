<template>
	<div class="c3">
	<div class="title">Chapter 3</div>

	<h1>Christian Paranas</h1>
	<br>
	<h3><u>Personal Information: </u></h3>
	<pre>
	Last Name      :      Paranas
	First Name     :      Christian
	Middle Name    :      Rosaroso
	Age            :      22
	Birthday       :      January 12, 1999
	</pre>
	<br>
	<h3><u>Educational Attainment:</u></h3>
	<pre>
	Elementary     :      Marasbaras Elementary School
	Year Graduated :      2011
  
	Secondary      :      Marasbaras National High School
	Year Graduated :      2014

	Tertiary       :      Eastern Visayas State University
	Degree         :      Bachelor of Science in Information Technology
	Year Graduated :      undergrad
	</pre>
	<NuxtLink to="/school/it273">
		<button class="back">Go back!</button>
	</NuxtLink>
	</div>
</template>

<style scoped>
	.title {
		display: grid;
		place-items: center;
		margin-bottom: 20px;
	}
	

	.c3 {
		padding: 20px;
	}

	.back {
   	 cursor: pointer; 
   	 color: white; 
   	 background: violet; 
   	 padding: 2px 8px; 
   	 border-radius: 3px; 
   	 font-size: 10px;
   	 margin-top: 20px;
   }
</style>