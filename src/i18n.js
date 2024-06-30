// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
            translation: {
              intro: {
                title: 'Hi, I\'m Manuel',
                description: 'I\'m a passionate Full Stack developer. I love coding beautifully simple things as well as fairly complex ones, both as part of a team and on my own.\n (Click to change the language)'
              },
              navbar: {
                home: 'Home',
                contact: 'Contact',
              },
              aboutMe: {
                title: 'About me',
                downloadCV: 'Download CV',
                description: 'I\'m a 28-year-old Full Stack Developer from Argentina. I love software development, and I\'m a proactive person, so I can do anything I set my mind to. I started my journey in 2018 at my college, UNGS, in my city, San Miguel, where I learned everything about OOP. Then, in my free time, I decided to learn web development through web courses like Google and Udemy. Later, I participated in the state project "Arg Programa," which helped me apply this knowledge to an app project that served as my personal portfolio. It was there that I fell in love with front-end development and decided to build this simple portfolio with React. Recently, I developed an Android application that registers entries and exits with facial recognition as part of completing my career as a Systems Technician. Consequently, I decided to dedicate my life to bringing ideas to life in systems. I\'m confident, naturally curious, and always working on improving my professional skills.'
              },
              skills: {
                title: 'Skills',
                html: 'Html-5',
                css: 'Css3',
                javascript: 'JavaScript',
                angular: 'Angular',
                java: 'Java',
                reactjs: 'React JS',
                git: 'Git',
                kotlin: 'Kotlin',
                python: 'Python',
                firebase: 'Firebase',
                npm: 'Npm',
                phpmysql: 'Php/MySQL',
                psql: 'PSQL',
                mongodb: 'MongoDB'
              },
              contact: {
                title: 'Send me an email',
                description: 'Feel free to send me a message, I\'m always open to new ideas.',
                description2:'I’m excited to learn about your project. Reach me and I will contact you as soon as possible.',
                nameLabel: 'Name',
                emailLabel: 'Email',
                messageLabel: 'Message',
                submitButton: 'Submit',
                backToTop: 'Back to top',
                successMessage: 'Your message has been sent successfully.',
                errorMessage: 'An error occurred. Please try again later.'
              },
              socials: {
                title: 'Visit my professional profiles',
                description: 'Feel free to reach me through LinkedIn or explore my projects on GitHub.'
              },
              projects: {
                title: 'Projects',
                description: 'Here are a few projects I\'ve worked on recently.',
                clickToSee: 'Click the images to see descriptions.',
                project1: 'Fuera Luces/Lights Off',
                project1Description: 'This project was created for college with Java using an adjacency matrix. The goal was to train development in different layers: one for logic, one for design, and one for data.',
                project2: 'Clima App',
                project2Description: 'This was created for my portfolio. The app is a common project for developers. It\'s a simple page.',
                project3: 'UNGS War',
                project3Description: 'This is a practical work for my college. We had to create a game, with different layers for logic, data, and design.',
                project4: 'Message Encryptor',
                project4Description: 'This was created for my portfolio. It\'s a simple page for encrypting messages.',
                project5: 'Translator App',
                project5Description: 'Fun project I made to learn react-router-dom.',
                project6: 'Arg Programa Portfolio App',
                project6Description: 'This is the state project "Argentina Programa". It\'s a full stack app with Login (without register), developed with Angular, NodeJS, Typescript, and Java for the backend.',
                project7: 'Loger Android App (Facial Recognition)',
                project7Description: 'This is a university project to complete the Systems Technician program. It is an Android application that registers entries and exits to establishments using facial recognition. (you can see the demo in the video)',
                project8: 'Web Chat Bot with Fingerprint Reader',
                project8Description: 'It\'s a help desk application, a web API service with a chatbot for services, which also includes a fingerprint reader.'
              }
            }
          },
      es: {
        translation: {
          intro: {
            title: 'Hola, soy Manuel',
            description: 'Soy un desarrollador Full Stack apasionado. Me encanta programar cosas hermosamente simples así como también cosas bastante complejas, tanto en equipo como por mi cuenta.\n (Haga click para cambiar el idioma)'
          },
          navbar: {
            home: 'Inicio',
            contact: 'Contacto',
          },
          aboutMe: {
            title: 'Sobre mí',
            description: 'Soy un desarrollador Full Stack de 28 años de Argentina. Me encanta el desarrollo de software, soy una persona proactiva, así que puedo hacer cualquier cosa que me proponga. Comencé mi viaje en 2018 en mi universidad, UNGS, en mi ciudad, San Miguel, donde aprendí todo sobre POO. Luego, en mi tiempo libre, decidí aprender desarrollo web a través de cursos web como Google; Udemy; Coderhouse; Youtueb; etc. Más tarde, participé en el proyecto estatal "Arg Programa," que me ayudó a aplicar este conocimiento a un proyecto del tipo Full Stack que sirvió como mi portafolio personal durante un tiempo. Fue allí donde me enamoré del desarrollo front-end y decidí realizar éste portfolio mas simple con React. Recientemente, desarrollé una aplicación Android que registra entradas y salidas con reconocimiento facial como parte de completar mi carrera como Técnico en Sistemas. En consecuencia, decidí dedicar mi vida a dar vida a las ideas en sistemas. Soy confiado, naturalmente curioso y siempre trabajo en mejorar mis habilidades profesionales',
            downloadCV: 'Descargar CV'
          },
          skills: {
            title: 'Habilidades',
            html: 'Html-5',
            css: 'Css3',
            javascript: 'JavaScript',
            angular: 'Angular',
            java: 'Java',
            reactjs: 'React JS',
            git: 'Git',
            kotlin: 'Kotlin',
            python: 'Python',
            firebase: 'Firebase',
            npm: 'Npm',
            phpmysql: 'Php/MySQL',
            psql: 'PSQL',
            mongodb: 'MongoDB'
          },
          contact: {
            description: 'Siéntete libre de enviarme un mensaje, siempre estoy abierto a nuevas ideas.',
            description2: 'Estoy emocionado de conocer tu proyecto. Contáctame y te responderé lo antes posible.',
            title: 'Envíame un correo',
            nameLabel: 'Nombre',
            emailLabel: 'Correo electrónico',
            messageLabel: 'Mensaje',
            submitButton: 'Enviar',
            backToTop: 'Volver arriba',
            successMessage: 'Tu mensaje ha sido enviado exitosamente.',
            errorMessage: 'Ocurrió un error. Por favor, inténtalo de nuevo más tarde.'
          },
          socials: {
            title: 'Visita mis redes profesionales',
            description: 'Siéntete libre de contactarme a través de LinkedIn o explorar mis proyectos en GitHub.'
          },
          projects: {
            title: 'Proyectos',
            description: 'Aquí tienes algunos proyectos en los que he trabajado recientemente.',
            clickToSee: 'Haz clic en las imágenes para ver las descripciones.',
            project1: 'Fuera Luces/Lights Off',
            project1Description: 'Este proyecto fue creado para la universidad con Java utilizando una matriz de adyascencia. El objetivo era entrenar el desarrollo en distintas capas: una para la lógica, otra para el diseño y otra para los datos.',
            project2: 'Clima App',
            project2Description: 'Esta fue creada para mi portafolio. La app es un proyecto común para desarrolladores. Es una página simple.',
            project3: 'UNGS War',
            project3Description: 'Este es un trabajo práctico para mi universidad. Teníamos que crear un juego, con capas distintas para la lógica, los datos y el diseño.',
            project4: 'Encriptador de msj',
            project4Description: 'Este fue creado para mi portafolio. Es una página simple para encriptar mensajes.',
            project5: 'Traductor App',
            project5Description: 'Proyecto divertido que hice para aprender react-router-dom.',
            project6: 'Arg Programa Portfolio App',
            project6Description: 'Este es el proyecto estatal "Argentina Programa". Es una aplicación full stack con Login (sin registro), desarrollada con Angular, NodeJS, Typescript y Java para el backend.',
            project7: 'Loger Android App (Reconocimiento Facial)',
            project7Description: 'Este es un proyecto universitario para completar la carrera de Técnico en Sistemas. Es una aplicación Android que registra entradas y salidas de establecimientos utilizando reconocimiento facial. (en el video puedes ver la demostración)',
            project8: 'Chat Bot web con Lector de Huellas',
            project8Description: 'Es una aplicación de mesa de ayuda, un servicio API web con un chatbot para servicios, que también incluye un lector de huellas digitales.'
          }
        }
      }
    }
  });

export default i18n;
