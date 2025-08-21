import {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

// Skill icons URLs from CDN
const skillIcons = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  ClojureScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojurescript/clojurescript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Power Platform": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  "REST API": "https://img.icons8.com/color/48/api.png",
  MCP: "https://img.icons8.com/color/48/network.png",
  "Prompt Engineering": "https://img.icons8.com/color/48/chatgpt.png",
};

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "database" | "api" | "ai";
  description: string;
}

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 4,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 3,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 2,
    },
  };

  const skills: Skill[] = [
    {
      name: "React",
      level: 90,
      category: "frontend",
      description: "Building interactive UIs with hooks and modern patterns",
    },
    {
      name: "TypeScript",
      level: 85,
      category: "frontend",
      description: "Type-safe JavaScript for robust applications",
    },
    {
      name: "Node.js",
      level: 80,
      category: "backend",
      description: "Server-side JavaScript with Express and APIs",
    },
    {
      name: "Prompt Engineering",
      level: 80,
      category: "ai",
      description: "Crafting effective prompts for AI models and LLMs",
    },
    {
      name: "Next.js",
      level: 75,
      category: "frontend",
      description: "Full-stack React framework with SSR/SSG",
    },
    {
      name: "Docker",
      level: 70,
      category: "tools",
      description: "Containerization and deployment automation",
    },
    {
      name: "Git",
      level: 85,
      category: "tools",
      description: "Version control and collaborative development",
    },
    {
      name: "MongoDB",
      level: 75,
      category: "database",
      description: "NoSQL database design and optimization",
    },
    {
      name: "CSS",
      level: 90,
      category: "frontend",
      description: "Modern CSS with Flexbox, Grid, and animations",
    },
    {
      name: "Java",
      level: 65,
      category: "backend",
      description: "Enterprise applications with Spring and Tapestry",
    },
    {
      name: "PostgreSQL",
      level: 75,
      category: "database",
      description: "Advanced SQL queries and database optimization",
    },
    {
      name: "Power Platform",
      level: 80,
      category: "tools",
      description: "Microsoft Power Apps, Power Automate, and Power BI",
    },
    {
      name: "Python",
      level: 75,
      category: "backend",
      description: "Data analysis, scripting, and backend development",
    },
    {
      name: "ClojureScript",
      level: 55,
      category: "frontend",
      description: "Functional programming for interactive web applications",
    },
    {
      name: "REST API",
      level: 85,
      category: "api",
      description: "RESTful web services design and implementation",
    },
    {
      name: "MCP",
      level: 80,
      category: "api",
      description: "Model Context Protocol for AI system integration",
    },
  ];

  const categories = [
    {id: "all", name: "All Skills", icon: "🚀"},
    {id: "frontend", name: "Frontend", icon: "🎨"},
    {id: "backend", name: "Backend", icon: "⚙️"},
    {id: "tools", name: "Tools", icon: "🛠️"},
    {id: "database", name: "Database", icon: "🗄️"},
    {id: "api", name: "APIs & Integration", icon: "🔗"},
    {id: "ai", name: "AI & Prompt Engineering", icon: "🤖"},
  ];

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className='skill-enhanced'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx-enhanced wow zoomIn'>
              <h2>Technical Skills</h2>
              <p>My expertise spans across the full development stack, from creating stunning user interfaces to building robust backend systems and managing cloud infrastructure.</p>

              {/* Category Filter */}
              <div className='skill-categories'>
                {categories.map((category) => (
                  <button key={category.id} className={`category-btn ${activeCategory === category.id ? "active" : ""}`} onClick={() => setActiveCategory(category.id)}>
                    <span className='category-icon'>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className='skills-grid'>
                {filteredSkills.map((skill, index) => (
                  <div className='skill-card' key={index}>
                    <div className='skill-icon'>
                      <img
                        src={skillIcons[skill.name as keyof typeof skillIcons]}
                        alt={skill.name}
                        onError={(e) => {
                          // Fallback específico para Prompt Engineering
                          if (skill.name === "Prompt Engineering") {
                            e.currentTarget.src = "https://img.icons8.com/color/48/artificial-intelligence.png";
                            e.currentTarget.onerror = () => {
                              // Si el segundo fallback también falla, usar texto
                              e.currentTarget.style.display = "none";
                              const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallbackElement) {
                                fallbackElement.textContent = "PE";
                                fallbackElement.style.display = "flex";
                              }
                            };
                          } else {
                            // Fallback to text if icon fails to load
                            e.currentTarget.style.display = "none";
                            const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallbackElement) {
                              fallbackElement.textContent = skill.name.charAt(0);
                              fallbackElement.style.display = "flex";
                            }
                          }
                        }}
                      />
                      <span className='fallback-icon'></span>
                    </div>
                    <h3>{skill.name}</h3>
                    <p className='skill-description'>{skill.description}</p>
                    <div className='skill-progress'>
                      <div className='progress-bar'>
                        <div className='progress-fill' style={{width: `${skill.level}%`}}></div>
                      </div>
                      <span className='progress-text'>{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legacy Carousel for compatibility */}
              <div className='legacy-carousel'>
                <h3>Quick Overview</h3>
                <Carousel responsive={responsive} infinite={true} className='skill-slider-legacy'>
                  {skills.map((skill, index) => (
                    <div className='item' key={index}>
                      <div className='skill-item-legacy'>
                        <img src={skillIcons[skill.name as keyof typeof skillIcons]} alt={skill.name} className='skill-legacy-icon' />
                        <h4>{skill.name}</h4>
                        <div className='skill-bar'>
                          <div className='skill-fill' style={{width: `${skill.level}%`}}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Background' />
    </section>
  );
};
