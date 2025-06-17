import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeaderComponent } from "./components/header/header.component"
import { HeroComponent } from "./components/hero/hero.component"
import { AboutComponent } from "./components/about/about.component"
import { EducationComponent } from "./components/education/education.component"
import { ProjectsComponent } from "./components/projects/projects.component"
import { SkillsComponent } from "./components/skills/skills.component"
import { ContactComponent } from "./components/contact/contact.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-education></app-education>
        <app-projects></app-projects>
        <app-skills></app-skills>
        <app-contact></app-contact>
      </main>
    </div>
  `,
  styles: [
    `
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    main {
      padding-top: 80px;
    }
  `,
  ],
})
export class AppComponent {
  title = "Omar Med Vall - Developer Portfolio"
}
