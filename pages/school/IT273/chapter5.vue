<template>
	<div class="c5">
		<div class="title">Chapter 5</div>

		<div class="lists">
			<div class="unlist">
				<h2>Names - Unordered List</h2>
				<ul class="list-disc">
					<li>Thea</li>
					<li>Kalel</li>
					<li>Kristel</li>
					<li>Christian</li>
				</ul>
			</div>
			<div class="unlist">
				<h2>Steps on how to learn to code - Ordered List</h2>
				<ol class="list-decimal">
					<li>Open your computer</li>
					<li>Surf the internet and choose what you wannt to learn.</li>
					<li>Read the documentation or watch other people on how they're doing it</li>
					<li>Practice</li>
					<li>Repeat</li>
				</ol>
			</div>
			<fieldset class="unlist">
				<legend>Description List</legend>
				<h2>Languages and Frameworks</h2>
				<dl>
					<dt>Javascript</dt>
  					<dd>Nodejs</dd>
  					<dd>Vuejs</dd>
  					<dd>Angular</dd>
  					<br>
  					<dt>Php</dt>
  					<dd>Laravel</dd>
  					<dd>Codeigniter</dd>
  					<br>
  					<dt>Javascript</dt>
  					<dd>Nodejs</dd>
				</dl>
			</fieldset>
		</div>


		<NuxtLink to="/school/it273">
			<button class="back">Go back!</button>
		</NuxtLink>
	</div>
</template>

<style scoped>
	.c5 {
	  padding: 40px 20px;
   }

   .lists {
   	 padding: 20px;
   }

   .back {
	 
   	 cursor: pointer; 
   	 background-color: var(--hero1bg);
     color: var(--hero1color);
   	 padding: 4px 8px; 
   	 border-radius: 5px;
   	 font-size: 15px;
   	 margin-top: 20px;
   }
</style>