<template>
	<div class="c5">
		<div class="title">Chapter 5</div>

		<div class="lists">
			<div class="unlist">
				<h2>Names  <span>Unordered List</span></h2>
				<br>
				<ul class="list-disc">
					<li>Thea</li>
					<li>Kalel</li>
					<li>Kristel</li>
					<li>Christian</li>
				</ul>
			</div>
			<br>
			<div class="unlist">
				<h2>Steps on how to learn to code  <span>Ordered List</span></h2>
				<br>
				<ol class="list-decimal">
					<li>Open your computer</li>
					<li>Surf the internet and choose what you wannt to learn.</li>
					<li>Read the documentation or watch other people on how they're doing it</li>
					<li>Practice</li>
					<li>Repeat</li>
				</ol>
			</div>
			<br>
			<div class="unlist">
				<h2>Languages and Frameworks  <span>Discription List</span></h2>
				<br>
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
			</div>
		</div>


		<NuxtLink to="/school/it273">
			<button class="back">Go back!</button>
		</NuxtLink>
	</div>
</template>

<style scoped>
	.c5 {
	  padding: 40px 20px;
	  font-size: 12px;
   }

   .title {
   	display: grid;
   	place-items: center;
   	font-size: 18px;
   }

   .lists {
   	 margin: 20px 0;
   }

   .unlist {
   	width: fit-content;
   	background-color: var(--menubg);
   	padding: 20px;
   	border-radius: 8px;
   }

   ul, ol {
   	padding-left: 20px;
   }

   dt {
   	position: relative;
   }

   dd {
   	margin-left: 15px;
   }

   span {
   	margin-left: 4px;
   	font-size: 10px;
   	padding: 4px 10px;
   	border-radius: 4px;
   	background-color: var(--hero1bg);
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