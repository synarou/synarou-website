<template>
  <div class="home">
    <header class="hero-section">
      <div class="container">
        <h1 class="logo">Synarou</h1>
        <p class="tagline">AI를 통해 쉽게 일정을 생성해봐요!</p>
        <p class="subtitle">
          나만의 루틴과 일정을 AI와 함께 관리하는 스마트한 방법
        </p>
      </div>
    </header>

    <section class="image-sections">
      <div class="section-wrapper">
        <div class="container">
          <div class="content-row reverse">
            <div class="text-col">
              <h2>구글 캘린더와의 연동으로 어디서나 일정관리</h2>
            </div>
            <div class="image-col">
              <img src="/img/home.PNG" alt="Synarou 홈화면" />
            </div>
          </div>
        </div>
      </div>

      <div class="section-wrapper alt-bg">
        <div class="container">
          <div class="content-row">
            <div class="image-col">
              <img src="/img/routine.PNG" alt="Synarou 루틴 페이지" />
            </div>
            <div class="text-col">
              <h2>나만의 하루 루틴을 만들고 실천해봐요!</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="section-wrapper">
        <div class="container">
          <div class="content-row reverse">
            <div class="text-col">
              <h2>쉽게 파악하는 월별 루틴</h2>
            </div>
            <div class="image-col">
              <img src="/img/stat.PNG" alt="Synarou 통계 페이지" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Synarou. All rights reserved.</p>
        <p>
          <router-link to="/privacy">개인정보처리방침</router-link> |
          <router-link to="/terms">이용약관</router-link> |
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
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
  padding: 120px 0;
  text-align: center;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.logo {
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  letter-spacing: -2px;
}

.tagline {
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Image Sections */
.image-sections {
  padding: 0;
}

.section-wrapper {
  padding: 100px 0;
}

.section-wrapper.alt-bg {
  background: #f8f9fa;
}

.content-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.content-row.reverse .image-col {
  order: 2;
}

.content-row.reverse .text-col {
  order: 1;
}

.image-col img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-col img:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.text-col h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
  line-height: 1.2;
  word-break: keep-all;
  white-space: normal;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  font-size: 1.125rem;
  margin-bottom: 20px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* App Preview Section */
.app-preview {
  padding: 100px 0;
  background: white;
}

.app-preview h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 60px;
  color: #333;
  font-weight: 700;
}

.preview-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.preview-content p {
  font-size: 1.4rem;
  margin-bottom: 40px;
  color: #666;
}

.preview-content ul {
  list-style: none;
  text-align: left;
  display: inline-block;
}

.preview-content li {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
}

/* Footer */
.footer {
  background: #333;
  color: white;
  padding: 40px 0;
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

/* Desktop Medium */
@media (max-width: 1440px) {
  .content-row {
    gap: 60px;
  }
}

/* Desktop Small */
@media (max-width: 1280px) {
  .container {
    max-width: 1100px;
  }

  .logo {
    font-size: 4rem;
  }

  .content-row {
    gap: 40px;
  }

  .text-col h2 {
    font-size: 2.2rem;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
    min-height: 500px;
  }

  .logo {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .section-wrapper {
    padding: 60px 0;
  }

  .content-row {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .content-row.reverse {
    direction: ltr;
  }

  .image-col {
    order: -1;
  }

  .text-col h2 {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .feature-list li {
    font-size: 1rem;
  }

  .app-preview {
    padding: 60px 0;
  }

  .app-preview h2 {
    font-size: 2rem;
  }

  .footer {
    padding: 25px 0;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .hero-section {
    padding: 40px 0;
    min-height: 400px;
  }

  .logo {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .tagline {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .section-wrapper {
    padding: 40px 0;
  }

  .content-row {
    gap: 30px;
  }

  .text-col h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 25px;
  }

  .feature-list li {
    font-size: 0.95rem;
    margin-bottom: 15px;
  }

  .image-col img {
    border-radius: 12px;
  }

  .app-preview {
    padding: 40px 0;
  }

  .app-preview h2 {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  .preview-content p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .preview-content li {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }

  .footer {
    padding: 20px 0;
    font-size: 0.9rem;
  }

  .footer a {
    font-size: 0.9rem;
  }
}
</style>
