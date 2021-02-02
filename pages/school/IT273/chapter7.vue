<template>
	<div class="container">
		

		<div class="schedules">
			
			<div class="schedule_mobile_container">
				<div class="head">
					<div class="title">ABS-CBN TV Schedules</div>
				</div>
				<div class="contents">
					<div class="time">
						<div class="times" v-for="time in times" :key="time"><div class="inn">{{ time }}</div></div>
					</div>
					<div class="con">
						<div class="c1">Sunday </div>
						<img class="img" v-for="day in days[0]" :style="'width: ' + day.length + ';' + 'margin-left: ' + day.marginLeft + ';' + 'height: 60px'" :src="day.pic" alt="">
					</div>
					<div class="con">
						<div class="c1">Monday </div>
						<img class="img" v-for="day in days[1]" :style="'width: ' + day.length + ';' + 'margin-left: ' + day.marginLeft+ ';' + 'height: 60px'" :src="day.pic" alt="">
					</div>
					<div class="con">
						<div class="c1">Tuesday </div>
						<img class="img" v-for="day in days[1]" :style="'width: ' + day.length + ';' + 'margin-left: ' + day.marginLeft+ ';' + 'height: 60px'" :src="day.pic" alt="">
					</div>
					<div class="con">
						<div class="c1">Wednesday </div>
						<img class="img" v-for="day in days[1]" :style="'width: ' + day.length + ';' + 'margin-left: ' + day.marginLeft+ ';' + 'height: 60px'" :src="day.pic" alt="">
					</div>
					<div class="con">
						<div class="c1">Thursday </div>
						<img class="img" v-for="day in days[1]" :style="'width: ' + day.length + ';' + 'margin-left: ' + day.marginLeft+ ';' + 'height: 60px'" :src="day.pic" alt="">
					</div>
					<div class="con">
						<div class="c1">Friday </div>
						<img class="img" v-for="day in days[1]" :style="'width: ' + day.length + ';' + 'margin-left: ' + day.marginLeft+ ';' + 'height: 60px'" :src="day.pic" alt="">
					</div>
					<div class="con">
						<div class="c1">Saturday </div>
						<img class="img" v-for="day in days[2]" :style="'width: ' + day.length + ';' + 'margin-left: ' + day.marginLeft+ ';' + 'height: 60px'" :src="day.pic" alt="">
					</div>
				</div>
			</div>
		</div>
		<NuxtLink to="/school/it273">
			<button class="back"><svg class="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></button>
		</NuxtLink>
	</div>
</template>

<style scoped>
	.container {
		padding: 40px 20px;
		margin: 0 auto;
	}

	.schedules {
		
	}

	.head {
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.title {
		font-family: 'Fredoka One', cursive;
		font-size: 20px;
	}

	.contents {
		display: grid;
		font-size: 12px;
	}

	.time {
		display: grid;
		grid-template-columns: repeat(7, 120px);
		margin-bottom: 5px;
		background-color: var(--hero1bg);
     	color: var(--hero1color);
		padding: 10px 0;
		border-radius: 2px;
	}

	.img {
		padding: 1px 1px;
		border-radius: 2px;
		transition: transform .5s ease;
	}

	.img:hover {
		transform: scale(1.2);
	}

	.times {
		width: 100%;
		margin-left: 2px;
		place-self: center;
		border-left: 1px solid pink;
	}

	.inn {
		width: fit-content;
		margin: 0 auto;
		background-color: var(--hero1bg);
     	color: var(--hero1color);

	}

	.con {
		display: flex;
	}

	.c1 {
		width: 120px;
		display: grid;
		place-items: center;
		background-color: var(--menubg);
		box-shadow: 0 10px 40px -10px rgb(0 64 128 / 20%);
     	margin: 1px;
     	border-radius: 2px;
	}

	.seriesname, .time {
		font-size: 10px;
	}
</style>

<script>
	export default {
		data() {
			return {
				times: [
					"","5:00am","6:00am","7:00am","8:00am","9:00am","10:00am"
				],
				days: [
					[
						{ marginLeft: "120px", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-Schedule-The-Healing-Eucharist.jpg" },
						{ marginLeft: "0", length: "50px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Wikaharian.jpg" },
						{ marginLeft: "0", length: "50px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-MathDali.jpg", },
						{ marginLeft: "0", length: "50px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Bayani.jpg" },
						{ marginLeft: "0", length: "50px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Hiraya-Manawari.jpg" },
						{ marginLeft: "0", length: "50px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Swak-na-Swak.jpg" },
						{ marginLeft: "0", length: "60px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-G-Diaries.jpg" },
						{ marginLeft: "0", length: "50px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-FitFil.jpg" },
					],
					[
						{ marginLeft: "60px", length: "60px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Kapamilya-Daily-Mass.jpg" },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Sakto.jpg" },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Teleradyo-Balita.jpg", },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Kabayan.jpg" },
						{ marginLeft: "0", length: "60px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Go-Back-Couple.jpg" },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-Schedule-Kapamilya-Blockbusters.jpg" },
					],
					[
						{ marginLeft: "60px", length: "60px", pic: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Kapamilya-Daily-Mass.jpg" },
						{ marginLeft: "0", length: "80px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Sched-Robocar-Poli.jpg" },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Sched-Tom-Sawyer.jpg", },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Pop-Babies.jpg" },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Sched-Team-Yey.jpg" },
						{ marginLeft: "0", length: "120px", pic: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Swak-na-Swak.jpg" },
					],

				],

			}
		}
	}
</script>