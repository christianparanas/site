<template>
	<div class="container">
		<div class="title">Sign Up</div>
		<form action="#" autocomplete="off">
			<input type="text" placeholder="Username" required>
			<input type="text" placeholder="Full name" required>
			<input type="email" placeholder="Email" required>

			<input :type="typePass1" placeholder="Password" required>
			<div class="seePass">
				<svg v-if="seePass1" @click="changeVisi(1)" class="w-6 h-6" fill="none" stroke="#BCCDDF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
				<svg v-if="!seePass1" @click="changeVisi(1)" class="w-6 h-6" fill="none" stroke="#BCCDDF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
			</div>

			<input :type="typePass2" placeholder="Re-enter password" required>
			<div class="seePass">
				<svg v-if="seePass2" @click="changeVisi(2)" class="w-6 h-6" fill="none" stroke="#BCCDDF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
				<svg v-if="!seePass2" @click="changeVisi(2)" class="w-6 h-6" fill="none" stroke="#BCCDDF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
			</div>

			<input class="loginBtn" type="submit" value="Sign Up">
			<div class="option"><NuxtLink to="/school/it273/chapter8" class="option">Already registered? Sign In!</NuxtLink></div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				seePass1: false,
				typePass1: "password",
				typePass2: "password",
				seePass2: false,
			}
		},
		methods: {
			changeVisi(param){
				if(param == 1) {
					this.typePass1 = this.typePass1 == "password" ? "text": "password"
					this.seePass1 = !this.seePass1
				} else {
					this.typePass2 = this.typePass2 == "password" ? "text": "password"
					this.seePass2 = !this.seePass2
				}
			}	
		}

	}
</script>

<style scoped>
	.container {
		padding: 40px 20px;
		margin: 0 auto;
	}

	.option {
		font-size: 12px;
		display: grid;
		place-items: center;
	}

	.seePass {
		position: relative;
		
	}

	svg {
		position: absolute;
		top: -47px;
		right: 15px;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}

	.title {
		font-family: 'Fredoka One', cursive;
		display: grid;
		place-items: center;
		font-size: 40px;
		font-weight: 900;
		margin-bottom: 20px;
		margin-top: 80px;
		letter-spacing: 2px;
	}

	form {
		width: 320px;
		margin: 0 auto;
		position: relative;
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
		background-color: var(--hero1bg);
     color: var(--hero1color);
     cursor: pointer;
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