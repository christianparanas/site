<template>
	<div class="container">
		<div class="title">Login</div>
		<form action="#" autocomplete="off">
			<input type="text" placeholder="Username or Email" required>
			<input type="email" placeholder="Password" required>
			<input class="loginBtn" type="submit" value="Login">
		</form>
	</div>
</template>

<style scoped>
	.container {
		padding: 40px 20px;
	}

	.title {
		font-family: 'Fredoka One', cursive;
		display: grid;
		place-items: center;
		font-size: 40px;
		font-weight: 900;
		margin-bottom: 40px;
		margin-top: 100px;
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
</style>