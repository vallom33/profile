import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Skill {
  name: string
  level: number
  category: string
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-categories">
          <div class="skill-category">
            <h3>Frontend Development</h3>
            <div class="skills-list">
              <div *ngFor="let skill of frontendSkills" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>Backend Development</h3>
            <div class="skills-list">
              <div *ngFor="let skill of backendSkills" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>Tools & Technologies</h3>
            <div class="skills-list">
              <div *ngFor="let skill of toolsSkills" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .skills {
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
    
    .skills-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
    }
    
    .skill-category {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .skill-category h3 {
      font-size: 1.5rem;
      margin-bottom: 30px;
      color: #333;
      text-align: center;
      position: relative;
    }
    
    .skill-category h3::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background: linear-gradient(45deg, #667eea, #764ba2);
    }
    
    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    
    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .skill-name {
      font-weight: 600;
      color: #333;
    }
    
    .skill-percentage {
      font-weight: 600;
      color: #667eea;
    }
    
    .skill-bar {
      height: 8px;
      background: #e9ecef;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-radius: 4px;
      transition: width 1s ease-in-out;
    }
    
    @media (max-width: 768px) {
      .skills-categories {
        grid-template-columns: 1fr;
      }
    }
  `,
  ],
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: "Angular", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Vue.js", level: 80, category: "frontend" },
    { name: "TypeScript", level: 88, category: "frontend" },
    { name: "JavaScript", level: 92, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
  ]

  backendSkills: Skill[] = [
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "Java", level: 75, category: "backend" },
    { name: "MongoDB", level: 82, category: "backend" },
    { name: "PostgreSQL", level: 78, category: "backend" },
    { name: "REST APIs", level: 90, category: "backend" },
  ]

  toolsSkills: Skill[] = [
    { name: "Git", level: 88, category: "tools" },
    { name: "Docker", level: 75, category: "tools" },
    { name: "AWS", level: 70, category: "tools" },
    { name: "Firebase", level: 85, category: "tools" },
    { name: "Figma", level: 80, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
  ]
}
