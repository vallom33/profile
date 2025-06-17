import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="intro">
              Hello! I'm Omar Med Vall, a passionate full-stack developer with a strong foundation in modern web technologies.
              I graduated with a License degree from FST (Faculté des Sciences et Techniques), where I developed my technical skills
              and passion for software development.
            </p>
            <p>
              Throughout my journey, I've built numerous projects ranging from web applications to mobile solutions.
              I enjoy solving complex problems and creating user-friendly interfaces that provide exceptional user experiences.
            </p>
            <p>
              My approach to development focuses on clean code, scalable architecture, and continuous learning.
              I'm always excited to take on new challenges and collaborate with teams to bring innovative ideas to life.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div class="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div class="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .about {
      padding: 100px 0;
      background: white;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 60px;
      color: #333;
      position: relative;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 2px;
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 60px;
      align-items: center;
    }
    
    .about-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #666;
    }
    
    .intro {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 25px;
    }
    
    .about-text p {
      margin-bottom: 20px;
    }
    
    .about-stats {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    
    .stat-item {
      text-align: center;
      padding: 30px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }
    
    .stat-item h3 {
      font-size: 2.5rem;
      margin: 0 0 10px 0;
      font-weight: 700;
    }
    
    .stat-item p {
      margin: 0;
      opacity: 0.9;
    }
    
    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .about-stats {
        flex-direction: row;
        justify-content: space-around;
      }
      
      .stat-item {
        flex: 1;
        margin: 0 10px;
      }
    }
  `,
  ],
})
export class AboutComponent {}
