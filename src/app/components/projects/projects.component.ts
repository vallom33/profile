import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  link?: string
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">My Projects</h2>
        <p class="section-subtitle">Here are some of the projects I've built</p>
        <div class="projects-grid">
          <div *ngFor="let project of projects" class="project-card">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <a *ngIf="project.link" [href]="project.link" class="project-link">View Project</a>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-technologies">
                <span *ngFor="let tech of project.technologies" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .projects {
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
      margin-bottom: 20px;
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
    
    .section-subtitle {
      text-align: center;
      color: #666;
      font-size: 1.1rem;
      margin-bottom: 60px;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }
    
    .project-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    
    .project-card:hover {
      transform: translateY(-10px);
    }
    
    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(102, 126, 234, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-link {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border: 2px solid white;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .project-link:hover {
      background: white;
      color: #667eea;
    }
    
    .project-content {
      padding: 30px;
    }
    
    .project-content h3 {
      font-size: 1.3rem;
      margin: 0 0 15px 0;
      color: #333;
    }
    
    .project-content p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    
    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .tech-tag {
      background: #f1f3f4;
      color: #333;
      padding: 5px 12px;
      border-radius: 15px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
  ],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
  title: "Rim-Commerce Platform",
  description: "A full-stack Rim-commerce solution with user authentication, product management, and payment integration.",
  technologies: ["Angular", "Node.js", "MongoDB", "Stripe"],
  image: "./assets/images/1.jpeg", // ✔️ هذا هو الصحيح
  link: "#",
}
,
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      image: "./assets/images/2.jpeg",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      image: "./assets/images/3.jpeg",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      technologies: ["Angular", "TypeScript", "SCSS", "Animations"],
      image: "./assets/images/p.png",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A content management system for bloggers with rich text editor and SEO optimization.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      image: "./assets/images/blog.png",
      link: "#",
    },
    {
      title: "Consult  App",
      description: "A secure consult doctor application with biometric authentication and transaction history.",
      technologies: ["React Native", "Redux", "Node.js", "JWT"],
      image: "./assets/images/dr.png",
      link: "#",
    },
  ]
}
