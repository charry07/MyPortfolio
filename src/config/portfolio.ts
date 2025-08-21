// Portfolio Configuration
// Centralizada para fácil modificación

export const PORTFOLIO_CONFIG = {
  // Información personal
  developer: {
    name: "Anderson Charry Naranjo",
    yearsExperience: 4,
    title: "Full Stack Software Developer",
    specialization: "creating efficient and scalable solutions",
  },

  // Textos reutilizables
  experience: {
    // Texto base que se puede personalizar según el contexto
    getOverviewText: (includeLocation = false) => {
      const baseText = `Over ${PORTFOLIO_CONFIG.developer.yearsExperience} years of experience as a ${PORTFOLIO_CONFIG.developer.title}, specializing in ${PORTFOLIO_CONFIG.developer.specialization}`;

      if (includeLocation) {
        return `${baseText} for companies in Colombia, Bermuda, and international clients.`;
      }

      return `${baseText}. I have worked on both front-end and back-end projects, demonstrating skills in various technologies and agile methodologies. I consider myself a responsible, dynamic, punctual, and honest individual with a strong desire for improvement and a great willingness to take on new challenges. I possess the ability to work in a team and under high-pressure conditions, learn quickly, and meet the objectives set by the company.`;
    },
  },

  // Contacto
  contact: {
    buttonText: "Let's Connect",
  },
};

// Función helper para obtener solo los años de experiencia
export const getYearsOfExperience = () => PORTFOLIO_CONFIG.developer.yearsExperience;

// Función helper para obtener el texto de experiencia para Home
export const getHomeExperienceText = () => PORTFOLIO_CONFIG.experience.getOverviewText(false);

// Función helper para obtener el texto de experiencia para Experience section
export const getExperiencePageText = () => PORTFOLIO_CONFIG.experience.getOverviewText(true);
