<template>
	<NuxtLayout name="mypage" now-page="user-info">
		<UserInfoPasswordView
			v-if="depth === 1"
			@handler-click-apply-button="nextDepth"
		/>
		<UserInfoUpdateForm v-if="depth === 2" />
	</NuxtLayout>
</template>
<script setup>
import { ref } from 'vue';
import UserInfoPasswordView from '~/views/user/UserInfoPasswordView.vue';
import UserInfoUpdateForm from '~/views/user/UserInfoUpdateForm.vue';

definePageMeta({
	layout: false,
});

const depth = ref(1);
const nextDepth = () => {
	depth.value++;
};
</script>
<style scoped lang="scss"></style>
