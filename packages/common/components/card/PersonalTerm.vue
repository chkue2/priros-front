<template>
  <section class="terms-container" :class="{ pd0: !props.isPadding }">
    <h1 v-if="props.isTitleShow" class="terms-title mb-12">
      개인정보 처리방침
    </h1>
    <p class="terms-content mb-12">
      주식회사 로앤택은(이하 ‘회사’) 법률서비스 전문 플랫폼 ‘프리로스’와
      관련하여, 개인정보 보호법 제30조에 따라 정보주체(고객)의 개인정보를
      보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여
      다음과 같이 개인정보 처리지침을 수립하고 서비스 사이트(www.priros.com)를
      통해 상시 공개합니다.
    </p>
    <h2 class="terms-subtitle mb-12">1. 개인정보의 처리목적</h2>
    <p class="terms-content mb-8">
      회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적이외의
      용도로 이용하지 않습니다.
    </p>
    <p class="terms-content indent-1 mb-8">
      ① 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별․인증,
      회원자격 유지․관리 등.
    </p>
    <p class="terms-content indent-1 mb-12">
      ② 물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급․배송 등.
    </p>
    <h2 class="terms-subtitle mb-12">2. 개인정보의 처리 및 보유기간</h2>
    <p class="terms-content indent-1 mb-8">
      ① 회사는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보
      보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를
      처리․보유합니다.
    </p>
    <p class="terms-content indent-1 mb-8">
      ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
    </p>
    <p class="terms-content indent-2 mb-8">
      - 고객 가입 및 관리 : 서비스 이용계약 또는 회원가입 해지시까지, 다만
      채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지
    </p>
    <p class="terms-content indent-2 mb-12">
      - 전자상거래에서의 계약․청약철회, 대금결제, 재화 등 공급기록 : 5년
    </p>
    <h2 class="terms-subtitle mb-12">3. 개인정보의 제3자 제공</h2>
    <p class="terms-content indent-1 mb-8">
      ① 회사는 정보주체의 별도 동의, 법률의 특별한 규정 등 개인정보 보호법
      제17조에 해당하는 경우 외에는 개인정보를 제3자에게 제공하지 않습니다.
    </p>
    <p class="terms-content indent-1 mb-8">
      ② 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
    </p>
    <p class="terms-content indent-2 mb-8">
      - 개인정보를 제공받는 자 : 주식회사 한국무역정보통신
    </p>
    <p class="terms-content indent-2 mb-8">
      - 제공받는 자의 개인정보 이용목적 : 고객 등에 대한 개별업무 담당자의
      프로필 제공
    </p>
    <p class="terms-content indent-2 mb-8">
      - 제공하는 개인정보 항목 : 회사명, 회사주소, 직책, 이름, 휴대전화번호,
      회사전화번호
    </p>
    <p class="terms-content indent-2 mb-12">
      - 제공받는 자의 보유기간 : 개별업무완료 시 까지
    </p>
    <h2 class="terms-subtitle mb-12">4. 개인정보처리의 위탁</h2>
    <p class="terms-content mb-12">
      회사는 개인정보 처리업무를 외부에 위탁하지 않습니다.
    </p>
    <h2 class="terms-subtitle mb-12">
      5. 정보주체와 법정대리인의 권리․의무 및 행사방법
    </h2>
    <p class="terms-content mb-8">
      정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를
      행사할 수 있습니다.
    </p>
    <p class="terms-content indent-1 mb-8">1. 개인정보 열람요구</p>
    <p class="terms-content indent-1 mb-8">
      2. 개인정보에 오류 등이 있을 경우 정정 요구
    </p>
    <p class="terms-content indent-1 mb-8">3. 삭제요구</p>
    <p class="terms-content indent-1 mb-12">4. 처리정지 요구</p>
    <h2 class="terms-subtitle mb-12">6. 처리하는 개인정보 항목</h2>
    <p class="terms-content mb-8">
      회사는 다음의 개인정보 항목을 처리하고 있습니다.
    </p>
    <p class="terms-content indent-1 mb-8">
      - 필수항목 : 회사명, 회사주소, 직책, 이름, 휴대전화번호, 회사전화번호,
      이메일, 사업자등록번호
    </p>
    <p class="terms-content indent-1 mb-12">
      - 임의항목 : 프로필사진, 법인등록번호
    </p>
    <h2 class="terms-subtitle mb-12">7. 개인정보의 파기</h2>
    <p class="terms-content indent-1 mb-8">
      ① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
      되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
    </p>
    <p class="terms-content indent-1 mb-8">
      ②금융기관으로부터 제공받은 소유권이전등기 사건의 경우, 해당사건의
      접수보고일로부터 3개월이 경과한 사건의 개인정보를 매월 일괄 파기합니다.
    </p>
    <p class="terms-content indent-1 mb-8">
      ③ 회사는 다음의 방법으로 개인정보를 파기합니다.
    </p>
    <p class="terms-content indent-2 mb-8">
      - 전자적 파일 : 파일 삭제 및 디스크 등 저장매체 포맷
    </p>
    <p class="terms-content indent-2 mb-12">
      - 수기(手記) 문서 : 분쇄하거나 소각
    </p>
    <h2 class="terms-subtitle mb-12">8. 개인정보의 안전성 확보조치</h2>
    <p class="terms-content indent-1 mb-8">
      회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
    </p>
    <p class="terms-content indent-2 mb-8">
      - 관리적 조치 : 내부관리계획 수립․시행, 직원․종업원 등에 대한 정기적 교육
    </p>
    <p class="terms-content indent-2 mb-8">
      - 기술적 조치 : 개인정보처리시스템(또는 개인정보가 저장된 컴퓨터)의
      비밀번호설정 등 접근권한 관리, 백신소프트웨어 등 보안프로그램 설치,
      개인정보가 저장된 파일의 암호화
    </p>
    <p class="terms-content indent-2 mb-12">
      - 물리적 조치 : 개인정보가 저장․보관된 장소의 시건, 출입통제 등
    </p>
    <h2 class="terms-subtitle mb-12">
      9. 개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항
    </h2>
    <p class="terms-content indent-1 mb-8">
      ① 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를
      저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
    </p>
    <p class="terms-content indent-1 mb-8">
      ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
      브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에
      저장되기도 합니다.
    </p>
    <p class="terms-content indent-2 mb-8">
      가. 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문
      및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된
      정보 제공을 위해 사용됩니다.
    </p>
    <p class="terms-content indent-2 mb-8">
      나. 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보
      메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
    </p>
    <p class="terms-content indent-2 mb-12">
      다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
      있습니다.
    </p>
    <h2 class="terms-subtitle mb-12">10. 개인정보 보호책임자</h2>
    <p class="terms-content mb-8">
      회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
      관련한 정보 주체의 불만처리 및 피해구제를 처리하기 위하여 아래와 같이
      개인정보 보호책임자를 지정하고 있습니다.
    </p>
    <p class="terms-content mb-8">▶ 개인정보 보호책임자</p>
    <p class="terms-content indent-1 mb-8">성명 : 조성화</p>
    <p class="terms-content indent-1 mb-8">
      직책 : 개인정보관리책임자 / 대표이사
    </p>
    <p class="terms-content indent-1 mb-8">대표전화 : 1670-2361</p>
    <p class="terms-content indent-1 mb-12">이메일 : priros@lawandtech.co.kr</p>
    <h2 class="terms-subtitle mb-12">11. 개인정보 처리방침 변경</h2>
    <p class="terms-content mb-8">
      이 개인정보 처리방침은 2022. 08. 12.부터 적용됩니다.
    </p>
  </section>
</template>

<script setup>
const props = defineProps({
  isTitleShow: {
    type: Boolean,
    default: true,
  },
  isPadding: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@priros/common/assets/scss/terms/index.scss";
</style>
