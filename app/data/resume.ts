export const resumeData = {
  name: "Yatiesh Mehta",
  title: "BMath in Statistics and Combinatorics & Optimization",
  contact: {
    email: "yatiesh.mehta@uwaterloo.ca",
    phone: "+1 (437)-808-2718",
    location: "Waterloo, ON, Canada",
    linkedin: "https://www.linkedin.com/in/yatiesh-mehta/",
    github: "https://github.com/yatieshmehta"
  },
  education: [
    {
      institution: "University of Waterloo",
      degree: "BMath in Statistics and Combinatorics & Optimization",
      period: "Aug 2023 -- Jul 2028",
      location: "Waterloo, ON, Canada",
      achievements: [
        "Received the University of Waterloo President's Scholarship of Distinction",
        "Awarded Term Distinction and an Excellent Academic Standing for Fall 2023 term"
      ]
    }
  ],
  experience: [
    {
      company: "Fractal Analytics",
      position: "AI Engineering Intern",
      period: "Jan 2025 -- Apr 2025",
      location: "Remote",
      description: [
        "Built an internal LLMOps dashboard using Streamlit and Langfuse, aggregating Azure, AWS, and GCP usage to compute 25+ FinOps KPIs and leveraging matplotlib to power 10+ real-time graphs",
        "Designed a modular agentic workflow with 4+ autonomous agents to support dynamic visualization, KPI alerts, and custom dashboard generation",
        "Engineered a cross-cloud Pricing Intelligence Tool with advanced features such as spec matching, budget guardrails, AI-powered recommendations via Ollama and Groq, based on usage patterns"
      ],
      technologies: ["Python", "Streamlit", "Langfuse", "Azure", "AWS", "GCP", "Ollama", "Groq"]
    },
    {
      company: "Navneet Education Ltd.",
      position: "Software Engineering Intern",
      period: "May 2024 -- Sep 2024",
      location: "Remote",
      description: [
        "Directed the backend development for an AI-powered learning platform using Django Rest with JWT authentication to secure the API endpoints",
        "Constructed a RAG pipeline leveraging Langchain, GPT-4o, and Pinecone to query user uploaded textbooks",
        "Optimized efficiency in retrieval and response times with Langchain by 62% by adding metadata filtering and fine-tuning chunking parameters",
        "Managed file storage and retrieval using AWS S3 buckets and hosted the platform and MYSQL database on separate AWS EC2 instances, ensuring scalability and reliability"
      ],
      technologies: ["Python", "Django Rest", "JWT", "Langchain", "GPT-4", "Pinecone", "AWS S3", "AWS EC2", "MySQL"]
    }
  ],
  projects: [
    {
      title: "Road Object Detection System",
      description: "Developed a real-time object detection system for autonomous vehicles using YOLOv8 and OpenCV. Implemented lane detection and traffic sign recognition.",
      technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "NumPy"],
      github: "https://github.com/yourusername/road-object-detection",
      image: "roaddetection.png",
      period: "Jan 2024 - Present",
      location: "Waterloo, ON"
    },
    {
      title: "Minimalisp: A Minimalistic Lisp Variant",
      description: "Designed and implemented a Lisp interpreter in Python with support for basic arithmetic, list operations, and custom function definitions.",
      technologies: ["Python", "Lisp", "Parsing", "Interpreter Design"],
      github: "https://github.com/yourusername/minimalisp",
      image: "minimalisp.png",
      period: "Sep 2023 - Dec 2023",
      location: "Waterloo, ON"
    },
    {
      title: "AstroPi Competition",
      description: "Participated in the European Space Agency's AstroPi challenge, writing code to run on the International Space Station's Raspberry Pi.",
      technologies: ["Python", "Raspberry Pi", "AstroPi", "Space Science"],
      github: "https://github.com/yourusername/astropi",
      image: "astropi.jpg",
      period: "Mar 2023 - Jun 2023",
      location: "Waterloo, ON"
    }
  ],
  skills: {
    programming: ["Python", "C/C++", "Bash", "Racket", "SQL", "Unreal Engine", "Scheme", "JavaScript", "HTML", "CSS", "DAX", "Arduino"],
    devTools: ["Git", "Linux", "Django", "Django Rest", "Pandas", "Numpy", "TensorFlow", "Docker", "VS Code"],
    frameworks: ["PyTorch", "OpenCV", "Streamlit", "Langfuse", "Langchain", "YOLOv8"],
    cloud: ["AWS", "Azure", "GCP", "AWS S3", "AWS EC2"],
    databases: ["MySQL", "Pinecone"]
  }
};