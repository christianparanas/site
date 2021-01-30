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
		<button class="back"><svg class="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button>
	</NuxtLink>
	</div>
</template>

<style scoped>

	.title {
		display: grid;
		place-items: center;
		margin-bottom: 20px;
		font-size: 18px;
	}
	

	.c3 {
		padding: 40px 20px;
		font-size: 13px
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
