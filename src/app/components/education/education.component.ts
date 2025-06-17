import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-education",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="education">
      <div class="container">
        <h2 class="section-title">Education</h2>
        <div class="education-content">
          <div class="education-item">
            <div class="education-icon">🎓</div>
            <div class="education-details">
              <h3>License Degree</h3>
              <h4>Faculté des Sciences et Techniques (FST)</h4>
              <p class="education-period">2022 - 2025</p>
              <p class="education-description">
                Specialized in Computer Science and Software Engineering. 
                Gained strong foundation in programming, algorithms, database management, 
                and software development methodologies.
              </p>
              <div class="education-highlights">
                <span class="highlight-tag">Data Structures</span>
                <span class="highlight-tag">Algorithms</span>
                <span class="highlight-tag">Database Design</span>
                <span class="highlight-tag">Software Engineering</span>
              </div>
            </div>
          </div>
          
          <div class="education-item">
            <div class="education-icon">💻</div>
            <div class="education-details">
              <h3>Self-Taught Development</h3>
              <h4>Continuous Learning</h4>
              <p class="education-period">2020 - Present</p>
              <p class="education-description">
                Continuously expanding knowledge through online courses, tutorials, and hands-on projects.
                Staying updated with the latest technologies and industry best practices.
              </p>
              <div class="education-highlights">
                <span class="highlight-tag">Web Development</span>
                <span class="highlight-tag">Mobile Development</span>
                <span class="highlight-tag">Cloud Technologies</span>
                <span class="highlight-tag">DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .education {
      padding: 100px 0;
      background: #f8f9fa;
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
    
    .education-content {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    
    .education-item {
      display: flex;
      gap: 30px;
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .education-item:hover {
      transform: translateY(-5px);
    }
    
    .education-icon {
      font-size: 3rem;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .education-details h3 {
      font-size: 1.5rem;
      color: #333;
      margin: 0 0 10px 0;
    }
    
    .education-details h4 {
      font-size: 1.2rem;
      color: #667eea;
      margin: 0 0 10px 0;
      font-weight: 600;
    }
    
    .education-period {
      color: #888;
      font-weight: 500;
      margin-bottom: 15px;
    }
    
    .education-description {
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    
    .education-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .highlight-tag {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .education-item {
        flex-direction: column;
        text-align: center;
      }
      
      .education-icon {
        align-self: center;
      }
    }
  `,
  ],
})
export class EducationComponent {}
