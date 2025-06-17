import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="logo">
          <h2>Omar Med Vall</h2>
        </div>
        <nav class="nav">
          <a href="#about" class="nav-link">About</a>
          <a href="#education" class="nav-link">Education</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  `,
  styles: [
    `
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
    
    .logo h2 {
      margin: 0;
      color: #333;
      font-weight: 700;
    }
    
    .nav {
      display: flex;
      gap: 30px;
    }
    
    .nav-link {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    
    .nav-link:hover {
      color: #667eea;
    }
    
    @media (max-width: 768px) {
      .nav {
        display: none;
      }
    }
  `,
  ],
})
export class HeaderComponent {}
