<template>
  <div class="privacy">
    <header class="header">
      <div class="container">
        <router-link to="/" class="logo">Synarou</router-link>
      </div>
    </header>

    <main class="privacy-content">
      <div class="container">
        <h1>개인정보처리방침</h1>
        
        <p class="intro">Synarou(이하 '서비스')는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하며, 이용자 권익 보호에 최선을 다하고 있습니다.</p>

        <section>
          <h2>1. 개인정보의 처리 목적 및 항목</h2>
          
          <h3>가. 처리 목적</h3>
          <ul>
            <li>회원 식별 및 관리</li>
            <li>서비스 제공 및 개선 (일정 관리, 루틴 추적, 통계 제공 등)</li>
            <li>신규 서비스 개발 및 맞춤형 서비스 제공</li>
          </ul>

          <h3>나. 처리 항목</h3>
          <ul>
            <li>필수 항목: Google 이메일</li>
            <li>선택 항목: 닉네임, Google Calendar 연동을 위한 암호화된 Refresh Token</li>
            <li>자동 수집 항목: 서비스 이용 기록, 접속 로그, 루틴 데이터</li>
          </ul>
        </section>

        <section>
          <h2>2. 개인정보의 처리 및 보유 기간</h2>
          <ul>
            <li>회원 정보: 회원 탈퇴 시까지</li>
            <li>서비스 이용 기록: 회원 탈퇴 후 2개월 보관 후 파기 (서비스 부정 이용 방지 및 분쟁 해결 목적)</li>
          </ul>
        </section>

        <section>
          <h2>3. 개인정보의 제3자 제공</h2>
          <p>서비스는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 법령에 규정이 있는 경우나 수사 목적으로 정해진 절차에 따라 요구가 있는 경우는 예외로 합니다.</p>
        </section>

        <section>
          <h2>4. 개인정보 처리의 위탁</h2>
          <p>서비스는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 외부 전문업체에 위탁하여 운영하고 있습니다.</p>
          <ul>
            <li>위탁받는 자 (수탁업체): Google (Firebase, Google Cloud Platform)</li>
            <li>위탁하는 업무의 내용: Firebase Authentication을 이용한 회원 인증, Firestore DB를 이용한 데이터 저장 및 관리, Cloud Functions를 이용한 서버 로직 처리, Google Analytics를 이용한 서비스 이용 통계 분석</li>
          </ul>
        </section>

        <section>
          <h2>5. 개인정보의 국외 이전</h2>
          <p>서비스는 클라우드 인프라 사용에 따라 다음과 같이 개인정보를 국외로 이전합니다.</p>
          <ul>
            <li>이전받는 자: Google (Google Cloud Platform)</li>
            <li>이전되는 위치: Google의 글로벌 데이터 센터 (물리적 저장 위치는 변경될 수 있음)</li>
            <li>이전 항목: 수집·이용에 동의한 모든 개인정보</li>
            <li>이전 목적: 데이터 저장 및 서비스 운영</li>
            <li>보유 및 이용 기간: 회원 탈퇴 또는 위탁 계약 종료 시까지</li>
          </ul>
        </section>

        <section>
          <h2>6. 정보주체와 법정대리인의 권리·의무 및 행사방법</h2>
          <ul>
            <li>이용자는 언제든지 등록된 자신의 개인정보를 조회·수정하거나 회원 탈퇴를 통해 개인정보 수집 및 이용 동의를 철회할 수 있습니다.</li>
            <li>서비스는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 만약 만 14세 미만 아동이 법정대리인의 동의 없이 가입한 것으로 확인되는 경우, 회사는 지체 없이 해당 계정을 삭제하는 등 필요한 조치를 취합니다.</li>
          </ul>
        </section>

        <section>
          <h2>7. 개인정보의 파기</h2>
          <p>보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 재생할 수 없는 기술적 방법을 사용하여 지체 없이 파기합니다.</p>
        </section>

        <section>
          <h2>8. 개인정보 자동 수집 장치의 설치·운영 및 거부</h2>
          <p>서비스는 품질 개선을 위해 Google Analytics를 사용하며, 이 과정에서 개인 식별이 불가능한 정보(예: 앱 사용 이력 등)가 자동으로 수집될 수 있습니다. 이용자는 [프로필 > 설정 > 분석 데이터 수집] 메뉴에서 동의를 거부할 수 있으며, 거부 시 맞춤형 서비스 제공에 일부 제한이 있을 수 있습니다.</p>
        </section>

        <section>
          <h2>9. 개인정보의 안전성 확보 조치</h2>
          <ul>
            <li>기술적 조치: 주요 정보 암호화, Firebase 보안 규칙을 통한 접근 통제</li>
            <li>관리적 조치: 개인정보 취급 담당자 최소화 및 교육</li>
          </ul>
        </section>

        <section>
          <h2>10. 개인정보 보호책임자</h2>
          <ul>
            <li>이름: 이서진</li>
            <li>직책: 개발자</li>
            <li>연락처: synarou.dev@gmail.com</li>
          </ul>
        </section>

        <section>
          <h2>11. 개인정보처리방침 변경</h2>
          <p>본 방침이 변경되는 경우, 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
        </section>

        <div class="dates">
          <p>공고일자: 2025년 7월 17일</p>
          <p>시행일자: 2025년 7월 17일</p>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Synarou. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.privacy {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  line-height: 1.8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.logo {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -1px;
}

/* Content */
.privacy-content {
  flex: 1;
  padding: 60px 0;
  background: #f8f9fa;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 40px;
  text-align: center;
  color: #666;
}

section {
  background: white;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
}

h3 {
  font-size: 1.3rem;
  margin: 20px 0 15px 0;
  color: #555;
}

ul {
  margin-left: 25px;
  margin-bottom: 15px;
}

li {
  margin-bottom: 10px;
  color: #555;
}

p {
  margin-bottom: 15px;
  color: #555;
}

.dates {
  margin-top: 40px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
  text-align: center;
}

.dates p {
  margin-bottom: 5px;
  font-weight: 600;
}

/* Footer */
.footer {
  background: #333;
  color: white;
  padding: 30px 0;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  section {
    padding: 20px;
  }
}
</style>