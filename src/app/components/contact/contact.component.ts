import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Let's work together on your next project</p>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h3>Email</h3>
                <p>omarmdvallahmed&#64;gmail.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-details">
                <h3>Phone</h3>
                <p>+222 44 86 97 80</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h3>Location</h3>
                <p>Mauritania</p>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link">LinkedIn</a>
              <a href="https://github.com/vallom33" class="social-link">GitHub</a>
              <a href="https://www.facebook.com/share/15mUQuE6Zi/" class="social-link">FaceBook</a>
            </div>
          </div>
          
          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                [(ngModel)]="formData.name"
                name="name"
                required>
            </div>
            
            <div class="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                [(ngModel)]="formData.email"
                name="email"
                required>
            </div>
            
            <div class="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                [(ngModel)]="formData.subject"
                name="subject"
                required>
            </div>
            
            <div class="form-group">
              <textarea 
                placeholder="Your Message" 
                rows="5"
                [(ngModel)]="formData.message"
                name="message"
                required></textarea>
            </div>
            
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .contact {
      padding: 100px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
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
      background: white;
      border-radius: 2px;
    }
    
    .section-subtitle {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 60px;
      opacity: 0.9;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: start;
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    
    .contact-item {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    
    .contact-icon {
      font-size: 2rem;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .contact-details h3 {
      margin: 0 0 5px 0;
      font-size: 1.2rem;
    }
    
    .contact-details p {
      margin: 0;
      opacity: 0.8;
    }
    
    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }
    
    .social-link {
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 25px;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: white;
      color: #667eea;
    }
    
    .contact-form {
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 20px;
      backdrop-filter: blur(10px);
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      background: white;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .submit-btn {
      width: 100%;
      padding: 15px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 10px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .social-links {
        justify-content: center;
      }
    }
    `
  ]
})
export class ContactComponent {
  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  onSubmit() {
    console.log("Form submitted:", this.formData);
    // Here you would typically send the form data to a backend service
    alert("Thank you for your message! I will get back to you soon.");

    // Reset form
    this.formData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
}