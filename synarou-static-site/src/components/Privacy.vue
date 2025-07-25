<template>
  <div class="privacy">
    <div class="container">
      <div class="header">
        <router-link to="/" class="back-link">← Home</router-link>
      </div>

      <div class="content">
        <h1>개인정보처리방침</h1>

        <p>
          Synarou(이하 '서비스')는 개인정보보호법 등 관련 법령상의 개인정보보호
          규정을 준수하며, 이용자 권익 보호에 최선을 다하고 있습니다.
        </p>

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
          <li>
            선택 항목: 닉네임, Google Calendar 연동을 위한 암호화된 Refresh
            Token
          </li>
          <li>자동 수집 항목: 서비스 이용 기록, 접속 로그, 루틴 데이터</li>
        </ul>

        <h2>2. 개인정보의 처리 및 보유 기간</h2>
        <ul>
          <li>회원 정보: 회원 탈퇴 시까지</li>
          <li>
            서비스 이용 기록: 회원 탈퇴 후 2개월 보관 후 파기 (서비스 부정 이용
            방지 및 분쟁 해결 목적)
          </li>
        </ul>

        <h2>3. 개인정보의 제3자 제공</h2>
        <p>
          서비스는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단,
          법령에 규정이 있는 경우나 수사 목적으로 정해진 절차에 따라 요구가 있는
          경우는 예외로 합니다.
        </p>

        <h2>4. 개인정보 처리의 위탁</h2>
        <p>
          서비스는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를
          외부 전문업체에 위탁하여 운영하고 있습니다.
        </p>
        <ul>
          <li>
            위탁받는 자 (수탁업체): Google (Firebase, Google Cloud Platform)
          </li>
          <li>
            위탁하는 업무의 내용: Firebase Authentication을 이용한 회원 인증,
            Firestore DB를 이용한 데이터 저장 및 관리, Cloud Functions를 이용한
            서버 로직 처리, Google Analytics를 이용한 서비스 이용 통계 분석
          </li>
        </ul>

        <h2>5. 개인정보의 국외 이전</h2>
        <p>
          서비스는 클라우드 인프라 사용에 따라 다음과 같이 개인정보를 국외로
          이전합니다.
        </p>
        <ul>
          <li>이전받는 자: Google (Google Cloud Platform)</li>
          <li>
            이전되는 위치: Google의 글로벌 데이터 센터 (물리적 저장 위치는
            변경될 수 있음)
          </li>
          <li>이전 항목: 수집·이용에 동의한 모든 개인정보</li>
          <li>이전 목적: 데이터 저장 및 서비스 운영</li>
          <li>보유 및 이용 기간: 회원 탈퇴 또는 위탁 계약 종료 시까지</li>
        </ul>

        <h2>6. 정보주체와 법정대리인의 권리·의무 및 행사방법</h2>
        <ul>
          <li>
            이용자는 언제든지 등록된 자신의 개인정보를 조회·수정하거나 회원
            탈퇴를 통해 개인정보 수집 및 이용 동의를 철회할 수 있습니다.
          </li>
          <li>
            서비스는 만 14세 미만 아동의 개인정보를 의도적으로 수집하지
            않습니다. 만약 만 14세 미만 아동이 법정대리인의 동의 없이 가입한
            것으로 확인되는 경우, 회사는 지체 없이 해당 계정을 삭제하는 등
            필요한 조치를 취합니다.
          </li>
        </ul>

        <h2>7. 개인정보의 파기</h2>
        <p>
          보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 재생할 수 없는
          기술적 방법을 사용하여 지체 없이 파기합니다.
        </p>

        <h2>8. 개인정보 자동 수집 장치의 설치·운영 및 거부</h2>
        <p>
          서비스는 품질 개선을 위해 Google Analytics를 사용하며, 이 과정에서
          개인 식별이 불가능한 정보(예: 앱 사용 이력 등)가 자동으로 수집될 수
          있습니다. 이용자는 [프로필 > 설정 > 분석 데이터 수집] 메뉴에서 동의를
          거부할 수 있으며, 거부 시 맞춤형 서비스 제공에 일부 제한이 있을 수
          있습니다.
        </p>

        <h2>9. 개인정보의 안전성 확보 조치</h2>
        <ul>
          <li>
            기술적 조치: 주요 정보 암호화, Firebase 보안 규칙을 통한 접근 통제
          </li>
          <li>관리적 조치: 개인정보 취급 담당자 최소화 및 교육</li>
        </ul>

        <h2>10. 개인정보 보호책임자</h2>
        <ul>
          <li>이름: 이서진</li>
          <li>직책: 개발자</li>
          <li>연락처: synarou.dev@gmail.com</li>
        </ul>

        <h2>11. 개인정보처리방침 변경</h2>
        <p>
          본 방침이 변경되는 경우, 변경사항의 시행 7일 전부터 공지사항을 통하여
          고지할 것입니다.
        </p>

        <div class="date-info">
          <p>공고일자: 2025년 7월 17일</p>
          <p>시행일자: 2025년 7월 17일</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  background: white;
  color: #1a1a1a;
  min-height: 100vh;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0;
  padding-left: 80px;
  padding-right: 80px;
}

.header {
  margin-bottom: 40px;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s;
}

.back-link:hover {
  color: #764ba2;
}

.content {
  line-height: 1.8;
}

h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1a1a1a;
  text-align: left;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #1a1a1a;
  text-align: left;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 15px;
  color: #333;
  text-align: left;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
  color: #333;
  text-align: left;
}

ul {
  margin-bottom: 20px;
  padding-left: 20px;
}

li {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  text-align: left;
}

.date-info {
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid #e0e0e0;
  text-align: left;
}

.date-info p {
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

/* Tablet Responsive */
@media (max-width: 768px) {
  .privacy {
    padding: 30px 15px;
  }

  .container {
    max-width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  .header {
    margin-bottom: 30px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  h2 {
    font-size: 22px;
    margin-top: 35px;
    margin-bottom: 18px;
  }

  h3 {
    font-size: 17px;
    margin-top: 20px;
    margin-bottom: 12px;
  }

  p,
  li {
    font-size: 15px;
  }

  ul {
    padding-left: 18px;
  }

  .date-info {
    margin-top: 40px;
    padding-top: 25px;
  }
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .privacy {
    padding: 20px 10px;
  }

  .container {
    padding-left: 20px;
    padding-right: 20px;
  }

  .header {
    margin-bottom: 25px;
  }

  .back-link {
    font-size: 14px;
  }

  .content {
    line-height: 1.7;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 16px;
    margin-top: 18px;
    margin-bottom: 10px;
  }

  p,
  li {
    font-size: 14px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    margin-bottom: 15px;
    padding-left: 15px;
  }

  li {
    margin-bottom: 8px;
  }

  .date-info {
    margin-top: 35px;
    padding-top: 20px;
  }

  .date-info p {
    font-size: 13px;
  }
}
</style>
