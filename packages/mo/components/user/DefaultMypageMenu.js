export default [
    {
        type: "link",
        subtitle: "각종 보고 업무를 수행할 수 있어요",
        title: "내 사건",
        to: "/case/my-case",
        active: false,
    },
    {
        type: "toggle",
        subtitle: "여러가지 업무정보를 조회할 수 있어요",
        title: "업무 조회",
        active: false,
        submenu: [
            {
                title: "등기필정보 조회",
                to: '/enquiry/registered'
            }, {
                title: "채권할인율 조회",
                to: '/enquiry/bond-discount'
            }
        ],
    },
    {
        type: "toggle",
        subtitle: "소중한 내 정보를 관리해요",
        title: "마이페이지",
        active: false,
        submenu: [
            {
                title: "회원(사업자)정보",
                to: '/user/mypage/info'
            },
            {
                title: "사용자 정보",
                to: '/user/mypage/user-info',
                // sub_btn: '행정안전부 모바일 신분증',
                // sub_btn_click: (router) => {
                //     router.push('/');
                // }
            }
        ],
    },
    // {
    //     type: "link",
    //     subtitle: "고객의 사건을 직접 등록하고 싶을때",
    //     title: "프로필카드 보내기",
    //     to: "/user/send/profile",
    //     active: false,
    // },
];