// Translation data
const translations = {
    en: {
        hero: {
            title: "Vanguard Designer",
            subtitle: "Crafting Digital Excellence"
        },
        about: {
            title: "About Me",
            description: "A sophisticated designer specializing in high-end digital experiences with a focus on dark aesthetics, glassmorphism, and modern typography. Transforming complex problems into elegant, intuitive interfaces.",
            downloadCV: "Download CV",
            contact: "Contact"
        },
        skills: {
            title: "Core Expertise"
        },
        projects: {
            title: "Latest Work",
            viewAll: "View All"
        },
        experience: {
            title: "Experience"
        }
    },
    es: {
        hero: {
            title: "Diseñadora Vanguardista",
            subtitle: "Creando Excelencia Digital"
        },
        about: {
            title: "Sobre Mí",
            description: "Una diseñadora sofisticada especializada en experiencias digitales de alta gama con un enfoque en estéticas oscuras, glassmorfismo y tipografía moderna. Transformando problemas complejos en interfaces elegantes e intuitivas.",
            downloadCV: "Descargar CV",
            contact: "Contacto"
        },
        skills: {
            title: "Competencias Clave"
        },
        projects: {
            title: "Trabajos Recientes",
            viewAll: "Ver Todos"
        },
        experience: {
            title: "Experiencia"
        }
    }
};

// Projects data
const projects = [
    {
        id: 1,
        title: {
            en: 'Luminary App',
            es: 'App Luminary'
        },
        description: {
            en: 'A fintech dashboard redesign for high-net-worth individuals.',
            es: 'Un rediseño de dashboard fintech para individuos de alto patrimonio.'
        },
        url: 'luminary-project.co',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuiRGNBP07ZrmaH7F-Q5XCG8XcmSnVisQQn-Tq4zMmt4oxFQYhnVmEZ16pqAEXpXmPJ29Xc42MlLHJHMla4Q1dMWqm2apfbWMmKQW4gH3fD35Piy_YM1xG2DEHO_es1DqVWQ1GzgmjaRrLehiCzLynVjvtlIg7p5NL8kDBwKBkPqk_nYfYK7jv1lDBrVN4AZ1Hz_j_sRfkerkDWmP2oaTSQh0gN2DLNyN-r34Nda4Dp3GWFWRjZSlivobGKj0mj0eg7QK_Fqcp5GU'
    },
    {
        id: 2,
        title: {
            en: 'Ether OS',
            es: 'Sistema Ether'
        },
        description: {
            en: 'A minimalist operating system concept based on spatial UI.',
            es: 'Un concepto de sistema operativo minimalista basado en UI espacial.'
        },
        url: 'ether-spatial.io',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvWd-Z_6rj37HlgWlrmx1VJHroq2bg6Pv0atKO0GnAF5_74-yfWaASnLWaWh5J6NiThTvt1W3avgzNI3bOpEG0GoVeYjwZxqMwZZRIiaaODFunpArG-H2otP37dkbfuWzOP_QoEWn6INmZ8YFm50k3YDvoCyZNrnv1dETjWlyg2cok9MP4IIqJLDVxp5Yi32R9BUDgxGlVWLUceUR71hTQRKQqKI9jsQPH7E0Y1OLKeCOZ1Wo-RKabzipc2Vtvmo6RtGvT2X0VoSE'
    }
];

// Experience data
const experience = [
    {
        period: '2022 - Present',
        title: {
            en: 'Senior UX Designer',
            es: 'Diseñadora UX Senior'
        },
        company: 'Studio Vanta • Remote',
        description: {
            en: 'Leading the design language for next-gen SaaS products and immersive web experiences.',
            es: 'Liderando el lenguaje de diseño para productos SaaS de próxima generación y experiencias web inmersivas.'
        },
        isActive: true,
    },
    {
        period: '2020 - 2022',
        title: {
            en: 'Product Designer',
            es: 'Diseñadora de Producto'
        },
        company: 'Flow Digital • Madrid',
        description: {
            en: 'Conceptualized and launched 4 mobile applications with over 1M combined downloads.',
            es: 'Conceptualicé y lancé 4 aplicaciones móviles con más de 1M de descargas combinadas.'
        },
        isActive: false,
    }
];

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || this.getSystemPreference();
        this.init();
    }

    getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        document.documentElement.classList.toggle('dark', this.theme === 'dark');
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const icon = document.querySelector('#theme-toggle .material-symbols-outlined');
        if (icon) {
            icon.textContent = this.theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
    }

    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        this.applyLanguage();
        this.setupEventListeners();
        this.renderDynamicContent();
    }

    applyLanguage() {
        document.documentElement.lang = this.currentLang;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    }

    toggle() {
        this.currentLang = this.currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('language', this.currentLang);
        this.applyLanguage();
        this.renderDynamicContent();
    }

    renderDynamicContent() {
        this.renderProjects();
        this.renderExperience();
    }

    renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = projects.map(project => `
            <div class="group relative rounded-xl overflow-hidden glass-dark">
                <div 
                    class="h-48 bg-cover bg-center" 
                    alt="Abstract purple 3D geometric shapes background" 
                    style="background-image: url('${project.image}')"
                ></div>
                <div class="p-5">
                    <h4 class="text-xl font-bold mb-1">${project.title[this.currentLang]}</h4>
                    <p class="text-slate-400 text-sm mb-4">${project.description[this.currentLang]}</p>
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-sm">link</span>
                        <span class="text-xs font-mono uppercase tracking-widest">${project.url}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderExperience() {
        const container = document.getElementById('experience-container');
        if (!container) return;

        container.innerHTML = `
            <div class="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/20">
                ${experience.map(job => `
                    <div class="relative pl-8">
                        <div class="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-background-dark border-2 flex items-center justify-center ${job.isActive ? 'border-primary' : 'border-primary/30'}">
                            <div class="w-2 h-2 rounded-full ${job.isActive ? 'bg-primary' : 'bg-primary/30'}"></div>
                        </div>
                        <span class="text-xs font-bold text-primary mb-1 block uppercase tracking-tighter ${!job.isActive ? 'text-slate-500' : ''}">${job.period}</span>
                        <h4 class="text-lg font-bold">${job.title[this.currentLang]}</h4>
                        <p class="text-slate-400 text-sm">${job.company}</p>
                        <p class="mt-2 text-sm leading-relaxed text-slate-500">${job.description[this.currentLang]}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    setupEventListeners() {
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggle());
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new LanguageManager();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add fade-in animation to sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
