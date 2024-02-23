<template>
	<p class="join-title">회원가입</p>
	<div class="join-container">
		<div class="join-form">
			<p class="join-form-title">회원유형 <span class="red-point">*</span></p>
			<div class="join-form-input-container">
				<select class="join-form-input">
					<option value="">선택해주세요</option>
				</select>
			</div>
			<p class="join-form-title">대표자 <span class="red-point">*</span></p>
			<div class="join-form-input-container">
				<input
					type="text"
					class="join-form-input w-60"
					placeholder="본인인증이 필요합니다"
				/>
				<button class="join-form-gray-button">본인확인</button>
			</div>
			<p class="join-form-title">
				휴대전화번호 <span class="red-point">*</span>
			</p>
			<div class="join-form-input-container">
				<input
					type="tel"
					class="join-form-input"
					placeholder="본인인증 후 자동입력"
					readonly
				/>
			</div>
			<p class="join-form-title">사업장 대표 이메일</p>
			<div class="join-form-input-container">
				<input
					type="email"
					class="join-form-input"
					placeholder="사업장 대표 이메일을 입력해주세요"
				/>
			</div>
			<p class="join-form-title">
				사업장 대표 전화번호 <span class="red-point">*</span>
			</p>
			<div class="join-form-input-container">
				<input
					type="tel"
					class="join-form-input"
					placeholder="사업장 대표 전화번호를 입력해주세요"
				/>
			</div>
		</div>
		<i class="join-container-line"></i>
		<div class="join-form">
			<p class="join-subtitle">
				<span class="red-point">*</span>는 필수 입력 항목입니다.
			</p>
			<p class="join-form-title">직책 <span class="red-point">*</span></p>
			<div class="join-form-input-container">
				<input
					type="text"
					class="join-form-input w-60"
					placeholder="직책을 입력해주세요"
				/>
			</div>
			<p class="join-form-title">
				사업장 등록증 <span class="red-point">*</span>
			</p>
			<div class="join-form-input-container">
				<button class="join-form-input-file">등록증을 업로드해주세요</button>
				<input type="file" />
			</div>
			<p class="join-form-title">
				전문가 등록증 <span class="red-point">*</span>
			</p>
			<div class="join-form-input-container">
				<button class="join-form-input-file">등록증을 업로드해주세요</button>
				<input type="file" />
			</div>
			<div class="join-form-double-container">
				<div class="join-form-double-left">
					<p class="join-form-title">
						만료예정일 <span class="red-point">*</span>
					</p>
					<div class="join-form-input-container">
						<input type="date" class="join-form-input" />
					</div>
				</div>
				<div class="join-form-double-right">
					<p class="join-form-title">
						공제증서 또는 보험증권 <span class="red-point">*</span>
					</p>
					<div class="join-form-input-container">
						<button class="join-form-input-file">파일을 업로드해주세요</button>
						<input type="file" class="join-form-input" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<label class="join-form-label">
		<input type="checkbox" />
		<p>
			상기 정보를 제공하여 회원가입에 동의하며 가입승인 후 가입절차에 필요한
			정보수집에 동의합니다.
		</p>
	</label>
	<div class="join-form-buttons">
		<button
			class="join-form-button button--gray"
			@click="handlerClickCancelButton"
		>
			취소
		</button>
		<button class="join-form-button" @click="handlerClickApplyButton">
			가입완료
		</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handlerClickCancelButton = () => {
	router.back();
};

const handlerClickApplyButton = () => {
	alert('validation check');
	router.push('/user/join/expert-success');
};
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/join/container.scss';
.join-form-double-container {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 4px;
	.join-form-double-left {
		grid-column: span 2;
	}
	.join-form-double-right {
		grid-column: span 3;
	}
}
.join-form-label {
	margin: 40px 0 30px;
	justify-content: center;
	align-items: center;
	& > input[type='checkbox'] {
		width: 16px;
		height: 16px;
	}
}
</style>
