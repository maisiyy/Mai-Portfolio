// Keep portfolio content in one place. Components should only describe how it is displayed.

export const navigationItems = [
  { label: 'Home', target: 'home' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
];

export const experiences = [
  {
    company: 'ROHM Electronics (Malaysia) Sdn. Bhd.',
    role: 'Information System Intern',
    period: 'March 2026 – August 2026',
    summary:
      'Completed a 24-week industrial training placement in the Information System Department, covering web application development, end-user IT support, and network and endpoint security.',
    responsibilities: [
      'Built and maintained internal corporate web applications using PHP and Microsoft SQL Server, covering backend development and database integration.',
      'Configured and deployed Windows laptops and desktops, including operating system setup, corporate software installation, security configuration, and Active Directory domain joining.',
      'Diagnosed and resolved hardware, software, and peripheral issues to keep disruption to daily operations to a minimum.',
      'Assisted with configuring and troubleshooting enterprise network infrastructure, including routers and switches, to maintain reliable connectivity.',
      'Supported endpoint security by monitoring antivirus status, reviewing threat-quarantine logs, and helping enforce corporate security-policy compliance.',
    ],
    logos: [
      { src: '/logos/rohm.png', alt: 'ROHM logo' },
    ],
  },

  {
    company: 'Employees Provident Fund (EPF)',
    role: 'PROTÉGÉ - Digital Testing',
    period: 'September 2026 - Present',
    responsibilities: [
      'Participating in software testing projects, including functional, regression, and performance testing.',
      'Collaborating with cross-functional teams to identify and resolve software defects and issues.',
      'Contributing to the continuous improvement of testing processes and methodologies.',
    ],
    logos: [
      { src: '/logos/epf.png', alt: 'EPF logo' },
    ],
  }
];

export const heroRoles = ['Computer Science Graduate', 'Full Stack Developer', 'Game Developer'];

export const heroStats = [
  { value: '4+', label: 'Years' },
  { value: '15+', label: 'Projects' },
  { value: 'Unity • UI/UX', label: 'Interests' },
];

export const socialLinks = [
  { name: 'GitHub', icon: 'github', color: '#333', url: 'https://github.com/maisiyy' },
  { name: 'LinkedIn', icon: 'linkedin', color: '#0077b5', url: 'https://www.linkedin.com/in/siti-nur-maisarah-ba225123a/' },
  // Fixed: the old colour (#e4405f) is Instagram's pink. itch.io's brand colour is #fa5c5c.
  { name: 'Itch.io', icon: 'itch', color: '#fa5c5c', url: 'https://maisiyy.itch.io/' },
];

export const skills = [
  { icon: 'react', name: 'React', color: '#61DAFB' },
  { icon: 'javascript', name: 'JavaScript', color: '#F7DF1E' },
  { icon: 'node', name: 'Node.js', color: '#339933' },
  { icon: 'html', name: 'HTML5', color: '#E34F26' },
  { icon: 'css', name: 'CSS3', color: '#1572B6' },
  { icon: 'tailwind', name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: 'bootstrap', name: 'Bootstrap', color: '#7952B3' },
  { icon: 'php', name: 'PHP', color: '#777BB4' },
  { icon: 'laravel', name: 'Laravel', color: '#FF2D20' },
  { icon: 'python', name: 'Python', color: '#3776AB' },
  { icon: 'csharp', name: 'C#', color: '#239120' },
  { icon: 'mysql', name: 'MySQL', color: '#00758f' },
  { icon: 'sqlserver', name: 'SQL Server', color: '#CC2927' },
  { icon: 'git', name: 'Git', color: '#F05032' },
  { icon: 'figma', name: 'Figma', color: '#F24E1E' },
  { icon: 'mobile', name: 'React Native', color: '#61DAFB' },
  { icon: 'camera', name: 'Mediapipe', color: '#ff8fab' },
  { icon: 'streamlit', name: 'Streamlit', color: '#ff4b4b' },
  { icon: 'azure', name: 'Azure', color: '#0078d4' },
  { icon: 'googleCloud', name: 'Google Cloud', color: '#4285f4' },
  { icon: 'aws', name: 'AWS', color: '#ff9900' },
  { icon: 'firebase', name: 'Firebase', color: '#ffca28' },
  { icon: 'unity', name: 'Unity', color: '#bdbdbd' },
  { icon: 'vr', name: 'Pano2VR', color: '#b388ff' },
  { icon: 'autodesk', name: 'Autodesk Maya', color: '#00bcd4' },
  { icon: 'photoshop', name: 'Photoshop', color: '#31a8ff' },
  { icon: 'image', name: 'PhotoScape', color: '#f48fb1' },
  { icon: 'canva', name: 'Canva', color: '#7c4dff' },
  { icon: 'anaconda', name: 'Anaconda Navigator', color: '#44a833' },
  { icon: 'jupyter', name: 'Jupyter Notebook', color: '#f37626' },
  { icon: 'looker', name: 'Looker Studio', color: '#4fc3f7' },
];

export const educationYears = ['2021', '2022', '2023', '2024', '2025', '2026'];

export const projects = [
  {
    title: 'REMA Lost Time Injury (LTI) Display Board & Management System',
    description: 'Real-time safety display board and management dashboard for the Safety & Health department, with REST APIs for announcements and incident reports.',
    tech: ['Vite', 'JavaScript', 'CSS', 'PHP', 'SQL Server', 'Aura SQL Query Builder', 'Rakit Validator'],
    icon: 'server',
    color: '#FF6B6B',
    type: 'Internship',
    features: ['Days-without-accident Counter', 'Scrolling Safety Announcements'],
    demo: '#',
    screenshot: '/project-screenshots/lti.jpeg',

  },
  {
    title: 'MY-HYGIENE: 2D Educational Game of Personal Hygiene',
    description: '2D educational game that uses real-time image processing to teach young learners handwashing, tooth brushing, and nail trimming through game-based learning.',
    tech: ['Unity', 'C#', 'Image Processing', 'Mediapipe'],
    icon: 'gamepad',
    color: '#FF6B9D',
    type: 'Final Year Project',
    features: ['Interactive Learning', 'Image Signal Processing', 'Child-friendly UI'],
    github: 'https://github.com/maisiyy',
    demo: '#',
    screenshot: '/project-screenshots/hygiene-game.png',
  },
  {
    title: 'AEGIS: Escape Protocol',
    description: '3D game with interactive maps, AI enemies, mission objectives, and custom gameplay systems.',
    tech: ['Unity 3D', 'C#', 'AI Programming', 'Game Design'],
    icon: 'gamepad',
    // Changed from #4CC9F0, which was identical to the PC Inventory card.
    color: '#5E81F4',
    type: 'Game Development',
    features: ['3D Environment', 'AI Enemies', 'Custom Mechanics', 'Mission System'],
    github: 'https://maisiyy.itch.io/aegis-escape-protocol',
    demo: '#',
    screenshot: '/project-screenshots/aegis-game.png',
  },
  {
    title: 'E-Blood Donation System',
    description: 'Web-based system that helps people register as blood donors and simplifies the donation process.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    icon: 'server',
    color: '#A3D9A5',
    type: 'Diploma Final Project',
    features: ['Database Management', 'User Registration', 'Admin Dashboard', 'Donation Tracking'],
    github: 'https://github.com/maisiyy/E-Blood-Donation.git',
    demo: '#',
    screenshot: '/project-screenshots/blood-donation.png',
  },
  {
    title: 'Language Learning VR App',
    description: 'VR language-learning application with object interaction, compatible with Oculus devices.',
    tech: ['Unity', 'VR Development', 'C#', 'Oculus SDK'],
    icon: 'brain',
    color: '#FFD166',
    type: 'VR Application',
    features: ['Immersive Learning', 'Hand Interaction', 'Multi-language', 'Oculus Compatible'],
    github: 'https://github.com/maisiyy/VR_Vocabulary-Exploration-in-Classroom.git',
    demo: '#',
    screenshot: '/project-screenshots/vr-app.JPG',
  },
  {
    title: 'Badang: Multiversal Destiny',
    description: '2D action-adventure game that takes players on a journey through multiple universes.',
    tech: ['Unity 2D', 'C#', 'Game Design', 'Pixel Art'],
    icon: 'gamepad',
    color: '#06D6A0',
    type: 'Game Development',
    features: ['Multi-universe Gameplay', 'Action Mechanics', 'Story-driven', 'Immersive World'],
    github: 'https://github.com/maisiyy/2D-Game-Badang-Multiversal-Destiny.git',
    demo: '#',
    screenshot: '/project-screenshots/badang-game.png',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive portfolio website showcasing multimedia projects and technical skills.',
    tech: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    icon: 'code',
    color: '#EF476F',
    type: 'Web Development',
    features: ['Responsive Design', 'Interactive UI', 'Project Showcase', 'Modern Design'],
    github: 'https://github.com/maisiyy/portfolio',
    demo: '#',
    screenshot: '/project-screenshots/portfolioo.JPG',
  },
];