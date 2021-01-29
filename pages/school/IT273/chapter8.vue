<template>
	<div class="container">
		<div class="title">Register</div>
		<form action="" autocomplete="off">
			<input type="text" placeholder="First Name">
			<input type="text" placeholder="Last Name">
			<input type="email" placeholder="Email">
		</form>
	</div>
</template>

<style scoped>
	.container {
		padding: 40px 20px;
	}

	.title {
		display: grid;
		place-items: center;
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 40px;
	}

	form {
		
	}

	input {
		width: 100%;
		padding: 5px 10px;
		margin-bottom: 8px;
		border-radius: 5px;
		outline-color: purple;
	}
</style>