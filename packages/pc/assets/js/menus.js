const menus = [
	{
		title: '마켓 의뢰',
		submenus: [
			{
				icon: 'matching.svg',
				activeIcon: 'matching-on.svg',
				title: '매칭',
				to: '/market/commission/match',
			},
			{
				icon: 'process.svg',
				activeIcon: 'process-on.svg',
				title: '진행',
				to: '/market/commission/progress',
			},
			{
				icon: 'success.svg',
				activeIcon: 'success-on.svg',
				title: '완료',
				to: '/market/commission/complete',
			},
		],
	},
	{
		title: '마켓 수임',
		submenus: [
			{
				icon: 'matching.svg',
				activeIcon: 'matching-on.svg',
				title: '매칭',
				to: '/market/accept/match',
			},
			{
				icon: 'process.svg',
				activeIcon: 'process-on.svg',
				title: '진행',
				to: '/market/accept/progress',
			},
			{
				icon: 'success.svg',
				activeIcon: 'success-on.svg',
				title: '완료',
				to: '/market/accept/complete',
			},
		],
	},
	{
		title: '설정대리인',
		submenus: [
			{
				icon: 'check-box-gray.svg',
				activeIcon: 'check-box-black.svg',
				title: '설정업무',
				to: '/market/setting',
			},
		],
	},
	{
		title: '마이페이지',
		submenus: [
			{
				icon: 'peoples-gray.svg',
				activeIcon: 'peoples-black.svg',
				title: '사업장 정보',
				to: '/user/mypage/company',
			},
			{
				icon: 'people-gray.svg',
				activeIcon: 'people-black.svg',
				title: '내정보 관리',
				to: '/',
			},
			{
				icon: 'face-id-gray.svg',
				activeIcon: 'face-id-black.svg',
				title: '사용자관리',
				to: '/',
			},
			{
				icon: 'setting-gray-1.svg',
				activeIcon: 'setting-black-1.svg',
				title: '환경설정',
				to: '/',
			},
			{
				icon: 'card-add-gray.svg',
				activeIcon: 'card-add-black.svg',
				title: '결제등록 및 관리',
				to: '/',
			},
			{
				icon: 'graduation-cap-gray.svg',
				activeIcon: 'graduation-cap-black.svg',
				title: '협약 전문가 관리',
				to: '/',
			},
			{
				icon: 'edit-contained-gray.svg',
				activeIcon: 'edit-contained-black.svg',
				title: '일대일 문의',
				to: '/',
			},
		],
	},
	{
		title: '고객센터',
		submenus: [
			{
				icon: 'headphones-gray.svg',
				activeIcon: 'headphones-black.svg',
				title: '공지사항',
				to: '/customer/notice',
			},
			{
				icon: 'help-square-contained-gray.svg',
				activeIcon: 'help-square-contained-black.svg',
				title: '헬프센터',
				to: '/customer/help',
			},
		],
	},
];

export { menus };
