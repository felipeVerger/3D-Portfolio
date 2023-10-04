import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    dh,
    minimahuella,
    nextjs,
    realestate,
    travellers,
    food,
    todoapp,
    gym,
    spacetourism,
    youtube,
    catwiki,
    traveladvisor,
    shareme,
    blog,
    aisummarizer,
    spotify,
    thread,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI and Blockchain enthusiast",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Next.js",
      icon: nextjs
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Digital House",
      icon: dh,
      iconBg: "#383E56",
      date: "May 2022 - July 2022",
      points: [
        "Applied responsive web design using styled-components.",
        "Handling authorization and authentication on the frontend side.",
        "Rest API consumption to handle CRUD operations.",
        "Design and development of modern and intuitive interfaces.",
      ],
    },
    {
      title: "Data translation",
      company_name: "Minima Huella",
      icon: minimahuella,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Aug 2022",
      points: [
        "I translated the data from the database from Spanish to English and French.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Real Estate",
      description: "Web application for users to explore apartments, villas homes and more. Also the users are able to add filters to the search based on their needs",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "chakra-ui",
          color: "pink-text-gradient",
        },
      ],
      image: realestate,
      source_code_link: "https://github.com/felipeVerger/BookIt_realestate",
      deploy_link: "https://nimble-gingersnap-217942.netlify.app/"
    },
    {
      name: "Recipes",
      description: "In this Web App you can find a wide variety of recipes with their corresponding instructions and ingredients. Plus, you can search for recipes and filter by specific cultures.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/felipeVerger/Deliciousss",
      deploy_link: "https://delicousss.netlify.app/"
    },
    {
      name: "Gym Exercises",
      description: "When the user finds the exercise, they will find instructions and videos for how to perform it. They can search or filter the exercises by muscle area..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/felipeVerger/gym-excercises-clone",
      deploy_link: "https://gym-exercises-felipe.netlify.app",
    },
    {
      name: "Youtube clone",
      description: "Youtube clone, the user can search, filter videos by some categories watch videos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient"
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/felipeVerger/youtube-clone",
      deploy_link: "https://youtube-clone-fv.netlify.app"
    },
    {
      name: "Cat Wiki",
      description: "In this web app you can get to know better about the different types of cat breeds.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient"
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: catwiki,
      source_code_link: "https://github.com/felipeVerger/CatWiki",
      deploy_link: "https://cat-wiki-fv.netlify.app"
    },
    {
      name: "Travel Advisor",
      description: "Search for best restaurants, accommodations and attraction around the world.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient"
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: traveladvisor,
      source_code_link: "https://github.com/felipeVerger/Travel-Advisor",
      deploy_link: "https://fv-travel-advisor.netlify.app"
    },
    {
      name: "ShareMe",
      description: "Social App to share photos, comment, save and filter them by category.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient"
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: shareme,
      source_code_link: "https://github.com/felipeVerger/ShareMe",
      deploy_link: "https://weshare-fv.netlify.app"
    },
    {
      name: "Blogger",
      description: "Webblog to share anything you want with other people.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "GraphQL",
          color: "green-text-gradient"
        },
        {
          name: "Hygraph",
          color: "orange-text-gradient"
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/felipeVerger/Blog",
      deploy_link: "https://blog-brown-eight.vercel.app/"
    },
    {
      name: "AI-Summarizer",
      description: "Simple and modern interface that uses AI(Chat GPT 4) to summarize any content from a provided URL.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient"
        }
      ],
      image: aisummarizer,
      source_code_link: "https://github.com/felipeVerger/AI-Summarizer",
      deploy_link: "https://frolicking-faun-06048e.netlify.app/"
    },
    {
      name: "Spotify clone",
      description: "Play and like music from other users and add your own music.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient"
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient"
        }
      ],
      image: spotify,
      source_code_link: "https://github.com/felipeVerger/spotify-clone",
      deploy_link: "https://spotify-clone-bay-six.vercel.app/"
    },
    {
      name: "Threads clone",
      description: "A thread clone from meta with additional features.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient"
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient"
        },
        {
          name: "Clerk",
          color: "orange-text-gradient"
        }
      ],
      image: thread,
      source_code_link: "https://github.com/felipeVerger/threads-clone",
      deploy_link: "https://threads-clone-woad.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };