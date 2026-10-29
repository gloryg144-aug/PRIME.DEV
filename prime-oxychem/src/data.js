export const links = {
  whatsapp: 'https://wa.me/917699602561',
  website: 'https://oxychem-alauddin.lovable.app/#subjects',
  // Set to a form backend URL (e.g. a Formspree endpoint) to show a contact form.
  formEndpoint: '',
}

export const nav = [
  { id: 'home', label: 'Home', icon: 'solar:home-2-linear' },
  { id: 'about', label: 'About', icon: 'solar:user-circle-linear' },
  { id: 'focus', label: 'Focus', icon: 'solar:moon-stars-linear' },
  { id: 'skills', label: 'Skills', icon: 'solar:widget-5-linear' },
  { id: 'projects', label: 'Projects', icon: 'solar:clapperboard-play-linear' },
  { id: 'showcase', label: 'Feed', icon: 'solar:widget-5-linear' },
  { id: 'contact', label: 'Contact', icon: 'solar:letter-linear' },
]

export const roles = ['Educator', 'Chemistry Mentor', 'Notes Designer', 'App Builder']

// iOS system colours for the small app-icon tiles
export const ios = {
  blue: '#0a84ff',
  green: '#30d158',
  orange: '#ff9f0a',
  pink: '#ff375f',
  purple: '#bf5af2',
  teal: '#40c8e0',
  red: '#ff453a',
  indigo: '#5e5ce6',
}

export const hobbies = [
  { icon: 'solar:book-2-linear', label: 'Math', color: ios.blue },
  { icon: 'solar:cpu-bolt-linear', label: 'Science', color: ios.green },
  { icon: 'solar:bookmark-linear', label: 'Notes', color: ios.purple },
  { icon: 'solar:database-linear', label: 'Graphs', color: ios.orange },
  { icon: 'solar:code-linear', label: 'Code', color: ios.pink },
]

// Subjects and products represented by the linked OXYCHEM projects.
export const focus = [
  { icon: 'solar:book-2-linear', label: 'WBBSE Bengali-medium learning', color: ios.blue },
  { icon: 'solar:code-linear', label: 'Mathematics', color: ios.purple },
  { icon: 'solar:cpu-bolt-linear', label: 'Physical Science', color: ios.green },
  { icon: 'solar:users-group-rounded-linear', label: 'Life Science', color: ios.teal },
  { icon: 'solar:database-linear', label: 'Class 10 statistics', color: ios.orange },
  { icon: 'solar:flashlight-linear', label: 'Class 8 light and optics', color: ios.pink },
  { icon: 'solar:home-angle-2-linear', label: 'Study planning and progress', color: ios.indigo },
  { icon: 'solar:play-circle-linear', label: 'Interactive practice', color: ios.red },
]

export const reminders = [
  'Explains complex concepts with step-by-step visuals',
  'Builds clean interfaces for learning and digital products',
  'Turns notes, chemistry and code into clear experiences',
]

// Skill folders: tap to open. `apps` are shown as app icons, `notes` as short captions.
export const skills = [
  {
    title: 'Teaching',
    apps: [
      { name: 'Math', icon: 'solar:code-linear' },
      { name: 'Physical Science', icon: 'solar:cpu-bolt-linear' },
      { name: 'Life Science', icon: 'solar:users-group-rounded-linear' },
    ],
    notes: [
      ['Class 8 Light', 'A Bengali WBBSE concept lesson with an interactive practice lab.'],
      ['Class 10 Statistics', 'Visual explanations of averages and grouped data.'],
      ['OXYCHEM', 'Concept-first WBBSE learning in Bengali medium.'],
    ],
  },
  {
    title: 'Create',
    apps: [
      { name: 'Lessons', icon: 'solar:book-bookmark-linear' },
      { name: 'Practice', icon: 'solar:check-read-linear' },
      { name: 'Study plans', icon: 'solar:home-angle-2-linear' },
    ],
    notes: [
      ['Interactive lessons', 'Visual explanations with worked examples and practice.'],
      ['Study Tracker', 'Goals, assignments, focus sessions and progress insights.'],
    ],
  },
  {
    title: 'Build',
    apps: [
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'React', icon: 'solar:code-linear' },
      { name: 'Responsive', icon: 'solar:smartphone-linear' },
      { name: 'APIs', icon: 'solar:plug-circle-linear' },
    ],
    notes: [
      ['Website development', 'Clean, practical digital experiences.'],
      ['App development', 'Fast, polished interfaces for learning and brands.'],
      ['Frontend', 'Same attention to detail as this portfolio.'],
    ],
  },
]

export const skillEvidence = [
  {
    label: 'Teaching & curriculum',
    group: 'Education',
    icon: 'solar:book-2-linear',
    projectIds: ['oxychem-learning-platform', 'class-10-statistics', 'class-8-light'],
  },
  {
    label: 'Interactive learning',
    group: 'Education',
    icon: 'solar:cpu-bolt-linear',
    projectIds: ['oxychem-learning-platform', 'class-10-statistics', 'class-8-light'],
  },
  {
    label: 'Study planning',
    group: 'Product',
    icon: 'solar:home-angle-2-linear',
    projectIds: ['study-tracker'],
  },
  {
    label: 'Web experiences',
    group: 'Development',
    icon: 'solar:code-linear',
    projectIds: ['oxychem-learning-platform', 'study-tracker', 'class-10-statistics', 'class-8-light'],
  },
]

export const projects = [
  {
    id: 'oxychem-learning-platform',
    name: 'OXYCHEM Learning Platform',
    description: 'A concept-first learning hub for WBBSE Mathematics, Physical Science and Life Science.',
    type: 'Learning platform',
    screenshot: 'projects/oxychem-learning-platform.png',
    icon: 'solar:cpu-bolt-linear',
    color: ios.blue,
    url: 'https://oxychem-alauddin.lovable.app/#subjects',
  },
  {
    id: 'study-tracker',
    name: 'Study Tracker',
    description: 'A focused study planner for sessions, goals, assignments and progress insights.',
    type: 'Study productivity',
    screenshot: 'projects/study-tracker.png',
    icon: 'solar:database-linear',
    color: ios.purple,
    url: 'https://study-tracker-a4.netlify.app/',
  },
  {
    id: 'class-10-statistics',
    name: 'Class 10 Statistics',
    description: 'A Bengali visual lesson on arithmetic mean, grouped data and the direct method.',
    type: 'Interactive lesson · Class 10',
    screenshot: 'projects/class-10-statistics.png',
    icon: 'solar:database-linear',
    color: ios.orange,
    url: 'https://x-statistic-oxychem-note-q-p1.netlify.app/',
  },
  {
    id: 'class-8-light',
    name: 'Class 8 Light',
    description: 'A Bengali WBBSE lesson with concept explanations and an interactive practice lab.',
    type: 'Interactive lesson · Class 8',
    screenshot: 'projects/class-8-light.png',
    icon: 'solar:flashlight-linear',
    color: ios.teal,
    url: 'https://viii-light-alauddin1.netlify.app/',
  },
]

export const connect = [
  { label: 'WhatsApp', icon: 'solar:chat-round-dots-linear', url: links.whatsapp },
]
