<template>
	<div class="container">
		<div class="title">Sign Up</div>
		<form action="#" autocomplete="off">
			<input type="text" placeholder="Username" required>
			<input type="text" placeholder="Given Name" required>
			<input type="text" placeholder="Surname" required>
			<input type="email" placeholder="Email" required>
			<input type="password" placeholder="Password" required>
			<input type="password" placeholder="Re-enter password" required>
			<input class="loginBtn" type="submit" value="Sign Up">
			<div class="option"><NuxtLink to="/school/it273/chapter8" class="option">Already registered? Sign In!</NuxtLink></div>
		</form>
	</div>
</template>

<style scoped>
	.container {
		padding: 40px 20px;
	}

	.option {
		font-size: 12px;
		display: grid;
		place-items: center;
	}

	.title {
		font-family: 'Fredoka One', cursive;
		display: grid;
		place-items: center;
		font-size: 40px;
		font-weight: 900;
		margin-bottom: 40px;
		margin-top: 80px;
		letter-spacing: 2px;
	}

	form {
		width: 320px;
		margin: 0 auto;
	}

	input {
		width: 100%;
		padding: 10px 15px;
		margin-bottom: 15px;
		border-radius: 5px;
		outline-color: purple;
		font-size: 13px;
		background-color: var(--menubg);
		box-shadow: 0 10px 40px -10px rgb(0 64 128 / 20%);
	}

	.loginBtn {
		color: #fff;
		background-color: purple;
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