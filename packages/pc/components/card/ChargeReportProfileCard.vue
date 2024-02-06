<template>
	<div class="charge-profile-card">
		<div class="profile-card-top">
			<img src="/img/icon/profile-iu.png" class="profile-card-image" />
			<div class="profile-card-right">
				<div class="profile-card-title">
					<p class="profile-card-name">아이유</p>
					<img src="/img/icon/check-circle-blue.svg" />
				</div>
				<p class="profile-card-place">다이렉트로 법무사 사무소</p>
				<div class="profile-card-tags">
					<span class="profile-card-tag">5년이상</span>
					<span class="profile-card-tag">배상책임보험가입</span>
				</div>
				<div class="profile-card-badges">
					<span class="profile-card-badge">
						<img src="/img/icon/medal-icon.svg" /><span>고객평가우수</span>
					</span>
				</div>
			</div>
		</div>
		<div class="profile-card-bottom">
			<p class="text--gray">서울특별시 서초구 서초동</p>
			<p class="text--gray">•</p>
			<p>010-1234-5678</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.charge-profile-card {
	width: 390px;
	padding: 25px 45px 23px;
	box-shadow: 0px 7px 29px 0px #00000033;
	border-radius: 10px;
	background-color: #ffffff;
	margin: 0 auto;
	.profile-card-top {
		display: flex;
		gap: 16px;
		margin-bottom: 22px;
	}
	.profile-card-image {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.profile-card-right {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.profile-card-title {
		display: flex;
		align-content: center;
		gap: 10px;
	}
	.profile-card-name {
		font-size: 20px;
		font-weight: $ft-bold;
		line-height: 29px;
		letter-spacing: -1px;
	}
	.profile-card-place {
		font-size: 18px;
		line-height: 26px;
		letter-spacing: -1px;
	}
	.profile-card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		.profile-card-tag {
			padding: 0 3px;
			line-height: 18px;
			color: #61666c;
			font-size: 12px;
			background-color: #eef1f8;
			border-radius: 3px;
		}
	}
	.profile-card-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		.profile-card-badge {
			display: flex;
			align-items: center;
			& > span {
				font-size: 12px;
				font-weight: $ft-medium;
				line-height: 17px;
				color: #686868;
			}
		}
	}
	.profile-card-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& > p {
			font-weight: $ft-medium;
			letter-spacing: -1px;
			&.text--gray {
				color: #bebebe;
			}
		}
	}
}
</style>
