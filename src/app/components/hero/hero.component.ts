import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="highlight">Omar Med Vall</span>
            </h1>
            <p class="hero-subtitle">Full Stack Developer & Software Engineer</p>
            <p class="hero-description">
              Passionate about creating innovative solutions and building amazing digital experiences.
              I love turning complex problems into simple, beautiful designs.
            </p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">View My Work</a>
              <a href="#contact" class="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="profile-card">
              <div class="profile-avatar">

                <img src="assets/images/profile.jpeg" alt="Omar Med Vall" class="avatar-image" />
              </div>

              <div class="profile-info">
                <h3>Omar Med Vall</h3>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    
    .highlight {
      background: linear-gradient(45deg, #ff6b6b, #feca57);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      margin-bottom: 20px;
      opacity: 0.9;
    }
    
    .hero-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 40px;
      opacity: 0.8;
    }
    
    .hero-buttons {
      display: flex;
      gap: 20px;
    }
    
    .btn {
      padding: 15px 30px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .btn-primary {
      background: white;
      color: #667eea;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }
    
    .btn-secondary:hover {
      background: white;
      color: #667eea;
    }
    
    .profile-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .avatar-placeholder {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(45deg, #ff6b6b, #feca57);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: bold;
      color: white;
      margin: 0 auto 20px;
    }
    
    .profile-info h3 {
      margin: 0 0 10px 0;
      font-size: 1.5rem;
    }
    
    .profile-info p {
      margin: 0;
      opacity: 0.8;
    }
    
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-buttons {
        justify-content: center;
      }
    }
  `,
  ],
})
export class HeroComponent {}
