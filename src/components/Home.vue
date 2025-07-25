<template>
  <div class="home">
    <header class="hero-section">
      <div class="container">
        <h1 class="logo">Synarou</h1>
        <p class="tagline">AI를 통해 쉽게 일정을 생성해봐요!</p>
        <p class="subtitle">나만의 루틴과 일정을 AI와 함께 관리하는 스마트한 방법</p>
      </div>
    </header>

    <section class="features">
      <div class="container">
        <h2>주요 기능</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">📅</div>
            <h3>AI 일정 관리</h3>
            <p>AI가 도와주는 스마트한 일정 생성과 관리로 더욱 효율적인 하루를 만들어보세요.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>루틴 추적</h3>
            <p>매일의 루틴을 쉽게 생성하고 추적하여 건강한 습관을 만들어가세요.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🗓️</div>
            <h3>Google Calendar 연동</h3>
            <p>Google Calendar와 완벽하게 연동되어 모든 일정을 한 곳에서 관리할 수 있습니다.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3>메모 & 타이머</h3>
            <p>간편한 메모 기능과 타이머로 작업 효율성을 높이세요.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="app-preview">
      <div class="container">
        <h2>앱 미리보기</h2>
        <div class="preview-content">
          <p>직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.</p>
          <ul>
            <li>✨ 심플하고 깔끔한 디자인</li>
            <li>🎯 AI 기반 일정 추천</li>
            <li>📊 월간 루틴 시각화</li>
            <li>🔔 스마트 알림 기능</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>지금 시작하세요!</h2>
        <p>Synarou와 함께 더 나은 하루를 만들어보세요.</p>
        <div class="download-buttons">
          <a href="#" class="download-btn">Google Play에서 다운로드</a>
          <a href="#" class="download-btn">App Store에서 다운로드</a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Synarou. All rights reserved.</p>
        <p>
          <router-link to="/privacy">개인정보처리방침</router-link> | 
          <a href="mailto:synarou.dev@gmail.com">문의하기</a>
        </p>
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

.home {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.logo {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: -2px;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Features Section */
.features {
  padding: 80px 0;
  background: #f8f9fa;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.8;
}

/* App Preview Section */
.app-preview {
  padding: 80px 0;
}

.app-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
}

.preview-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.preview-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #666;
}

.preview-content ul {
  list-style: none;
  text-align: left;
  display: inline-block;
}

.preview-content li {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #555;
}

/* CTA Section */
.cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.download-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.download-btn {
  background: white;
  color: #667eea;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.download-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

/* Footer */
.footer {
  background: #333;
  color: white;
  padding: 30px 0;
  text-align: center;
}

.footer a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.footer a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .logo {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .features h2, .app-preview h2, .cta h2 {
    font-size: 2rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .download-buttons {
    flex-direction: column;
    align-items: center;
  }

  .download-btn {
    width: 250px;
    text-align: center;
  }
}
</style>