<template>
	<div class="container">
		

		<div class="schedules">
			
			<div class="schedule_mobile_container">
				<div class="head">
					<div class="title">Schedules</div>
					<select name="weekdays" id="weekdays">
					  <option value="sunday">Sunday</option>
					  <option value="monday">Monday</option>
					  <option value="tuesday">Tuesday</option>
					  <option value="wednesday">Wednesday</option>
					  <option value="thursday">Thursday</option>
					  <option value="friday">Friday</option>
					  <option value="saturday">Saturday</option>
					</select>
				</div>
				<div class="contents">
					<div class="content" v-for="day in weekdays[0]" :key="day.name">
						<div class="time">{{ day.time }}</div>
						<div class="seriesname">{{ day.name }}</div>
						<img class="imgSeries" :src="day.imgUrl" alt="">
					</div>
				</div>
			</div>
		</div>
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
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.content {
		display: grid;
		grid-template-columns: 70px 1fr 1fr;
		place-items: center;
		margin-bottom: 10px;
		background-color: var(--menubg);
		box-shadow: 0 10px 40px -10px rgb(0 64 128 / 20%);
		border-radius: 10px;
	}

	.seriesname, .time {
		font-size: 10px;
	}
</style>

<script>
	export default {
		data() {
			return {
				weekdays: [
					[
						{ time: "12:30AM", name: "Movie Central", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Movie-Central.jpg" },
						{ time: "6:00AM", name: "The Healing Eucharist", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-Schedule-The-Healing-Eucharist.jpg" },
						{ time: "7:00AM", name: "Wikaharian", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Wikaharian.jpg" },
						{ time: "7:25AM", name: "Mathdali", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-MathDali.jpg" },
						{ time: "7:50AM", name: "Bayani", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Bayani.jpg" },
						{ time: "8:15AM", name: "Hiraya Manawari", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Hiraya-Manawari.jpg" },
						{ time: "8:40AM", name: "Swak Na Swak", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Swak-na-Swak.jpg" },
						{ time: "9:10AM", name: "G Diaries", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-G-Diaries.jpg" },
						{ time: "9:40AM", name: "Team Fit-Fil", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-FitFil.jpg" },
						{ time: "10:00AM", name: "KB Family Weekend Back-to-Back", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-KB-Weekend.jpg" },
						{ time: "12:00PM", name: "ASAP Natin 'To", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-Schedule-ASAP.jpg" },
						{ time: "2:00PM", name: "FPJ Da King", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-FPJ-Da-King.jpg" },
						{ time: "4:00PM", name: "Ipaglaban Mo", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-Schedule-Ipaglaban-Mo.jpg" },
						{ time: "5:00PM", name: "Lucky’ng Tulong", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Luckng-Tulong.jpg" },
						{ time: "5:30PM", name: "TV Patrol Weekend", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-Schedule-TV-Patrol.jpg" },
						{ time: "6:30PM", name: "Iba 'Yan", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-ABS-CBN-Iba-Yan.jpg" },
						{ time: "7:30PM", name: "I Can See Your Voice", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-I-Can-See-You-Voice-Schedule.jpg" },
						{ time: "8:30PM", name: "Pinoy Big Brother Connect", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-PBB-Season-9.jpg" },
						{ time: "10:00PM", name: "Real Talk: Heart of the Matter", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/ABS-CBN-Entertainment-Real-Talk.jpg" },
						{ time: "11:00PM", name: "Sunday's Best", imgUrl: "https://asset-ent.abs-cbn.com/home/schedules/Entertainment-Schedule-Sunday-Best.jpg" },
					]
				]
			}
		}
	}
</script>