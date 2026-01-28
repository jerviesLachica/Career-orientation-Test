// Strand Data
const strandData = {
    STEM: {
        name: 'STEM',
        fullName: 'Science, Technology, Engineering, and Mathematics',
        icon: '🔬',
        description: 'The STEM strand focuses on developing strong foundations in science, mathematics, and technology. Students learn to apply scientific methods, solve complex problems, and innovate through technology. This strand is ideal for those interested in understanding how the world works and creating solutions for the future.',
        whyGoodFit: 'You have demonstrated strong analytical and logical thinking skills. Your interests align with problem-solving, research, and technological innovation.',
        keySubjects: [
            'Biology',
            'Chemistry',
            'Physics',
            'Advanced Mathematics',
            'Computer Science',
            'Engineering Technology'
        ],
        collegeCourses: [
            'Bachelor of Science in Computer Science',
            'Bachelor of Science in Engineering',
            'Bachelor of Science in Biology',
            'Bachelor of Science in Chemistry',
            'Bachelor of Science in Physics',
            'Information Technology'
        ],
        careers: [
            'Software Engineer',
            'Data Scientist',
            'Civil Engineer',
            'Pharmacist',
            'Research Scientist',
            'Aerospace Engineer'
        ]
    },
    ABM: {
        name: 'ABM',
        fullName: 'Accountancy, Business, and Management',
        icon: '💼',
        description: 'The ABM strand prepares students for careers in business, finance, and management. Students develop skills in accounting, economics, business law, and organizational management. This strand equips learners with practical knowledge for the modern business world.',
        whyGoodFit: 'You have shown strong interpersonal and organizational skills. Your interests in business strategy, finance, and leadership suggest you\'re suited for this strand.',
        keySubjects: [
            'Accounting',
            'Economics',
            'Business Management',
            'Business Ethics',
            'Finance',
            'Entrepreneurship'
        ],
        collegeCourses: [
            'Bachelor of Science in Accountancy',
            'Bachelor of Science in Business Administration',
            'Bachelor of Science in Finance',
            'Bachelor of Science in Management',
            'Bachelor of Science in Entrepreneurship',
            'Bachelor of Science in International Business'
        ],
        careers: [
            'Certified Public Accountant',
            'Business Manager',
            'Financial Analyst',
            'Entrepreneur',
            'Marketing Manager',
            'Human Resources Director'
        ]
    },
    HUMSS: {
        name: 'HUMSS',
        fullName: 'Humanities and Social Sciences',
        icon: '📚',
        description: 'The HUMSS strand explores human behavior, societies, cultures, and history. Students develop critical thinking, research, and communication skills. This strand is perfect for those passionate about understanding humanity and making a positive impact on society.',
        whyGoodFit: 'You have demonstrated excellent communication and critical thinking abilities. Your interests in culture, society, and human development align well with this strand.',
        keySubjects: [
            'Philippine History',
            'World History',
            'Sociology',
            'Psychology',
            'Philosophy',
            'Literature'
        ],
        collegeCourses: [
            'Bachelor of Arts in Psychology',
            'Bachelor of Arts in Sociology',
            'Bachelor of Arts in History',
            'Bachelor of Arts in Political Science',
            'Bachelor of Arts in Journalism',
            'Bachelor of Arts in Education'
        ],
        careers: [
            'Psychologist',
            'Journalist',
            'Social Worker',
            'Teacher',
            'Anthropologist',
            'Policy Analyst'
        ]
    },
    TVL: {
        name: 'TVL',
        fullName: 'Technical-Vocational-Livelihood',
        icon: '🔧',
        description: 'The TVL strand focuses on practical, hands-on skills and technical training. Students learn trades and vocational skills that prepare them for immediate employment. This strand combines classroom learning with practical experience.',
        whyGoodFit: 'You have shown practical skills and interest in hands-on learning. Your preferences for applied knowledge and trades suggest TVL is a great fit.',
        keySubjects: [
            'Automotive Technology',
            'Welding',
            'Electrical Installation',
            'Plumbing',
            'Carpentry',
            'Culinary Arts'
        ],
        collegeCourses: [
            'Certificate in Automotive Technology',
            'Diploma in Electrical Installation',
            'Certificate in Welding Technology',
            'Diploma in Culinary Arts',
            'Certificate in HVAC Technology',
            'Associate Degree in Electronics Technology'
        ],
        careers: [
            'Electrician',
            'Welder',
            'Automotive Technician',
            'Chef',
            'HVAC Technician',
            'Construction Supervisor'
        ]
    }
};

// Quiz Questions
const quizQuestions = [
    {
        id: 1,
        question: 'When watching a documentary, what captures your attention?',
        answers: [
            { text: 'How discoveries are made and tested', strand: 'STEM', weight: 2 },
            { text: 'Success stories of entrepreneurs', strand: 'ABM', weight: 2 },
            { text: 'Cultural and historical narratives', strand: 'HUMSS', weight: 2 },
            { text: 'How things are built or constructed', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 2,
        question: 'In group projects, what role do you naturally take?',
        answers: [
            { text: 'Explaining the "why" behind ideas', strand: 'STEM', weight: 2 },
            { text: 'Organizing tasks and deadlines', strand: 'ABM', weight: 2 },
            { text: 'Making sure everyone\'s voice is heard', strand: 'HUMSS', weight: 2 },
            { text: 'Handling the technical execution', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 3,
        question: 'What frustrates you most in a subject?',
        answers: [
            { text: 'When things don\'t have logical explanations', strand: 'STEM', weight: 2 },
            { text: 'Inefficiency and wasteful processes', strand: 'ABM', weight: 2 },
            { text: 'Superficial understanding without depth', strand: 'HUMSS', weight: 2 },
            { text: 'Pure theory without practical application', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 4,
        question: 'When you see a problem, what\'s your first instinct?',
        answers: [
            { text: 'Analyze it systematically', strand: 'STEM', weight: 3 },
            { text: 'Figure out what\'s the most efficient solution', strand: 'ABM', weight: 3 },
            { text: 'Understand the context and impact on people', strand: 'HUMSS', weight: 3 },
            { text: 'Think about how to fix it practically', strand: 'TVL', weight: 3 }
        ]
    },
    {
        id: 5,
        question: 'What type of book or content do you prefer?',
        answers: [
            { text: 'Science fiction or technology-focused stories', strand: 'STEM', weight: 2 },
            { text: 'Business biographies and success stories', strand: 'ABM', weight: 2 },
            { text: 'Historical fiction or psychology-based narratives', strand: 'HUMSS', weight: 2 },
            { text: 'How-to guides and instructional content', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 6,
        question: 'If you had a free weekend, you\'d most likely:',
        answers: [
            { text: 'Experiment with a new gadget or coding project', strand: 'STEM', weight: 2 },
            { text: 'Work on a side business idea', strand: 'ABM', weight: 2 },
            { text: 'Attend a cultural event or volunteer', strand: 'HUMSS', weight: 2 },
            { text: 'Work on fixing or building something', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 7,
        question: 'What type of feedback motivates you most?',
        answers: [
            { text: 'Recognition for accurate or innovative thinking', strand: 'STEM', weight: 2 },
            { text: 'Praise for efficiency and results', strand: 'ABM', weight: 2 },
            { text: 'Appreciation for impact on people\'s lives', strand: 'HUMSS', weight: 2 },
            { text: 'Acknowledgment of quality craftsmanship', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 8,
        question: 'When learning something new, you prefer:',
        answers: [
            { text: 'Understanding the underlying principles first', strand: 'STEM', weight: 2 },
            { text: 'Learning the steps to maximize performance', strand: 'ABM', weight: 2 },
            { text: 'Getting the full context and background', strand: 'HUMSS', weight: 2 },
            { text: 'Getting your hands dirty with it immediately', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 9,
        question: 'What bothers you about inefficiency?',
        answers: [
            { text: 'The lack of logical optimization', strand: 'STEM', weight: 2 },
            { text: 'Wasted time and resources', strand: 'ABM', weight: 2 },
            { text: 'The negative impact on people affected', strand: 'HUMSS', weight: 2 },
            { text: 'Poor execution or craftsmanship', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 10,
        question: 'In a class discussion, you typically:',
        answers: [
            { text: 'Ask detailed "how" and "why" questions', strand: 'STEM', weight: 2 },
            { text: 'Point out practical implications', strand: 'ABM', weight: 2 },
            { text: 'Bring up different perspectives and examples', strand: 'HUMSS', weight: 2 },
            { text: 'Relate it to real-world applications', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 11,
        question: 'What kind of achievement feels most satisfying?',
        answers: [
            { text: 'Solving a complex puzzle or problem', strand: 'STEM', weight: 3 },
            { text: 'Completing a project efficiently and profitably', strand: 'ABM', weight: 3 },
            { text: 'Making a positive difference in someone\'s life', strand: 'HUMSS', weight: 3 },
            { text: 'Creating something tangible and useful', strand: 'TVL', weight: 3 }
        ]
    },
    {
        id: 12,
        question: 'You\'re most interested in understanding:',
        answers: [
            { text: 'The mechanisms behind natural phenomena', strand: 'STEM', weight: 2 },
            { text: 'Market trends and economic patterns', strand: 'ABM', weight: 2 },
            { text: 'Human motivation and social dynamics', strand: 'HUMSS', weight: 2 },
            { text: 'How to master a specific skill or trade', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 13,
        question: 'When stressed, you usually:',
        answers: [
            { text: 'Dive into problem-solving mode', strand: 'STEM', weight: 2 },
            { text: 'Make a plan to get things under control', strand: 'ABM', weight: 2 },
            { text: 'Talk it through with others', strand: 'HUMSS', weight: 2 },
            { text: 'Work on something hands-on to clear your mind', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 14,
        question: 'What kind of person do you admire most?',
        answers: [
            { text: 'Innovators and groundbreaking researchers', strand: 'STEM', weight: 2 },
            { text: 'Successful business leaders', strand: 'ABM', weight: 2 },
            { text: 'Activists and social reformers', strand: 'HUMSS', weight: 2 },
            { text: 'Skilled craftspeople and specialists', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 15,
        question: 'You feel most confident when:',
        answers: [
            { text: 'You understand something thoroughly', strand: 'STEM', weight: 2 },
            { text: 'You\'ve organized and planned everything', strand: 'ABM', weight: 2 },
            { text: 'You\'ve helped or supported someone', strand: 'HUMSS', weight: 2 },
            { text: 'You\'ve done something well with your hands', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 16,
        question: 'What\'s your approach to a challenging task?',
        answers: [
            { text: 'Break it down into logical steps', strand: 'STEM', weight: 2 },
            { text: 'Create a strategic plan with clear objectives', strand: 'ABM', weight: 2 },
            { text: 'Collaborate and get multiple perspectives', strand: 'HUMSS', weight: 2 },
            { text: 'Jump in and learn by doing', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 17,
        question: 'In your daily life, you\'re most interested in:',
        answers: [
            { text: 'How technology and innovation are changing things', strand: 'STEM', weight: 2 },
            { text: 'Career advancement and personal growth', strand: 'ABM', weight: 2 },
            { text: 'Current events and their social implications', strand: 'HUMSS', weight: 2 },
            { text: 'Learning practical skills and improving your abilities', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 18,
        question: 'You get bored when:',
        answers: [
            { text: 'There\'s no mental challenge or problem to solve', strand: 'STEM', weight: 2 },
            { text: 'Things are disorganized or inefficient', strand: 'ABM', weight: 2 },
            { text: 'Conversations lack depth or substance', strand: 'HUMSS', weight: 2 },
            { text: 'You\'re stuck doing purely theoretical work', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 19,
        question: 'What motivates you to work hard?',
        answers: [
            { text: 'The desire to understand and discover', strand: 'STEM', weight: 2 },
            { text: 'The goal of achieving success and rewards', strand: 'ABM', weight: 2 },
            { text: 'Making a meaningful contribution to society', strand: 'HUMSS', weight: 2 },
            { text: 'The satisfaction of creating something real', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 20,
        question: 'When explaining something to others, you tend to:',
        answers: [
            { text: 'Use logical frameworks and diagrams', strand: 'STEM', weight: 2 },
            { text: 'Focus on the practical benefits', strand: 'ABM', weight: 2 },
            { text: 'Share stories and context', strand: 'HUMSS', weight: 2 },
            { text: 'Demonstrate with examples', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 21,
        question: 'Your ideal workspace would have:',
        answers: [
            { text: 'Modern equipment and technology', strand: 'STEM', weight: 2 },
            { text: 'Organized systems and clear processes', strand: 'ABM', weight: 2 },
            { text: 'Diverse team and collaborative environment', strand: 'HUMSS', weight: 2 },
            { text: 'Good tools and materials to work with', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 22,
        question: 'When making decisions, you rely mostly on:',
        answers: [
            { text: 'Data and logical analysis', strand: 'STEM', weight: 2 },
            { text: 'Cost-benefit and efficiency considerations', strand: 'ABM', weight: 2 },
            { text: 'Values and impact on people', strand: 'HUMSS', weight: 2 },
            { text: 'Experience and practical wisdom', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 23,
        question: 'What kind of failure bothers you most?',
        answers: [
            { text: 'Not understanding why something doesn\'t work', strand: 'STEM', weight: 2 },
            { text: 'Wasting resources or missing a deadline', strand: 'ABM', weight: 2 },
            { text: 'Hurting someone or failing to help', strand: 'HUMSS', weight: 2 },
            { text: 'Producing poor quality work', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 24,
        question: 'You\'re happiest when:',
        answers: [
            { text: 'You\'ve solved a difficult problem', strand: 'STEM', weight: 3 },
            { text: 'You\'ve successfully completed a project', strand: 'ABM', weight: 3 },
            { text: 'You\'ve helped improve someone\'s situation', strand: 'HUMSS', weight: 3 },
            { text: 'You\'ve built or created something useful', strand: 'TVL', weight: 3 }
        ]
    },
    {
        id: 25,
        question: 'In class, you struggle most with:',
        answers: [
            { text: 'Accepting information without understanding it deeply', strand: 'STEM', weight: 2 },
            { text: 'Lack of clear objectives or measurable progress', strand: 'ABM', weight: 2 },
            { text: 'Disconnection from real-world impact', strand: 'HUMSS', weight: 2 },
            { text: 'Too much reading and not enough doing', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 26,
        question: 'What captures your curiosity?',
        answers: [
            { text: 'Scientific mysteries and how the world works', strand: 'STEM', weight: 2 },
            { text: 'How successful people build empires', strand: 'ABM', weight: 2 },
            { text: 'Different cultures and human experiences', strand: 'HUMSS', weight: 2 },
            { text: 'Practical ways to improve processes or products', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 27,
        question: 'You prefer working:',
        answers: [
            { text: 'Independently on complex problems', strand: 'STEM', weight: 2 },
            { text: 'As part of a structured team with clear roles', strand: 'ABM', weight: 2 },
            { text: 'With people and focusing on relationships', strand: 'HUMSS', weight: 2 },
            { text: 'Where results are visible and tangible', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 28,
        question: 'What would make you feel proud about your work?',
        answers: [
            { text: 'Contributing to scientific or technological advancement', strand: 'STEM', weight: 2 },
            { text: 'Building something that generates value or profit', strand: 'ABM', weight: 2 },
            { text: 'Knowing you\'ve positively impacted lives', strand: 'HUMSS', weight: 2 },
            { text: 'Creating excellent quality work that lasts', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 29,
        question: 'When you help others, you typically:',
        answers: [
            { text: 'Explain how things work and why', strand: 'STEM', weight: 2 },
            { text: 'Help them organize and plan better', strand: 'ABM', weight: 2 },
            { text: 'Listen and provide emotional support', strand: 'HUMSS', weight: 2 },
            { text: 'Show them how to do it themselves', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 30,
        question: 'Your natural talent seems to be in:',
        answers: [
            { text: 'Solving technical or mathematical problems', strand: 'STEM', weight: 3 },
            { text: 'Organizing, planning, and managing resources', strand: 'ABM', weight: 3 },
            { text: 'Understanding people and communication', strand: 'HUMSS', weight: 3 },
            { text: 'Building, fixing, and creating things', strand: 'TVL', weight: 3 }
        ]
    },
    {
        id: 31,
        question: 'You\'d rather spend time:',
        answers: [
            { text: 'Reading or learning about new concepts', strand: 'STEM', weight: 2 },
            { text: 'Planning projects and optimizing systems', strand: 'ABM', weight: 2 },
            { text: 'Discussing ideas and perspectives', strand: 'HUMSS', weight: 2 },
            { text: 'Getting hands-on experience with skills', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 32,
        question: 'When facing obstacles, you:',
        answers: [
            { text: 'Analyze to find the root cause', strand: 'STEM', weight: 2 },
            { text: 'Create an action plan to overcome them', strand: 'ABM', weight: 2 },
            { text: 'Reach out for support and perspectives', strand: 'HUMSS', weight: 2 },
            { text: 'Roll up your sleeves and work through them', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 33,
        question: 'What excites you about a future career?',
        answers: [
            { text: 'Making groundbreaking discoveries', strand: 'STEM', weight: 2 },
            { text: 'Building a successful enterprise', strand: 'ABM', weight: 2 },
            { text: 'Creating positive social change', strand: 'HUMSS', weight: 2 },
            { text: 'Mastering a valuable craft', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 34,
        question: 'You feel most energized when:',
        answers: [
            { text: 'Learning something new and complex', strand: 'STEM', weight: 2 },
            { text: 'Achieving targets or goals', strand: 'ABM', weight: 2 },
            { text: 'Connecting with and helping others', strand: 'HUMSS', weight: 2 },
            { text: 'Producing quality results', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 35,
        question: 'In arguments, you typically:',
        answers: [
            { text: 'Use facts and logic to support your point', strand: 'STEM', weight: 2 },
            { text: 'Focus on practical outcomes', strand: 'ABM', weight: 2 },
            { text: 'Try to understand all perspectives', strand: 'HUMSS', weight: 2 },
            { text: 'Suggest practical solutions', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 36,
        question: 'You\'re most impressed by people who are:',
        answers: [
            { text: 'Intellectually brilliant and innovative', strand: 'STEM', weight: 2 },
            { text: 'Successful and accomplished', strand: 'ABM', weight: 2 },
            { text: 'Compassionate and socially aware', strand: 'HUMSS', weight: 2 },
            { text: 'Highly skilled at their craft', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 37,
        question: 'What kind of goals motivate you?',
        answers: [
            { text: 'Reaching new levels of understanding', strand: 'STEM', weight: 2 },
            { text: 'Achieving financial or professional success', strand: 'ABM', weight: 2 },
            { text: 'Making a meaningful difference', strand: 'HUMSS', weight: 2 },
            { text: 'Developing expertise and mastery', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 38,
        question: 'You\'d be most frustrated with a job that:',
        answers: [
            { text: 'Doesn\'t engage your mind intellectually', strand: 'STEM', weight: 2 },
            { text: 'Lacks clear structure or efficiency', strand: 'ABM', weight: 2 },
            { text: 'Feels disconnected from human impact', strand: 'HUMSS', weight: 2 },
            { text: 'Doesn\'t produce tangible results', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 39,
        question: 'Your ideal project involves:',
        answers: [
            { text: 'Complex problem-solving and innovation', strand: 'STEM', weight: 2 },
            { text: 'Clear objectives and measurable success', strand: 'ABM', weight: 2 },
            { text: 'Team collaboration and shared values', strand: 'HUMSS', weight: 2 },
            { text: 'Creating something concrete and useful', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 40,
        question: 'You naturally gravitate toward:',
        answers: [
            { text: 'Technical and analytical challenges', strand: 'STEM', weight: 2 },
            { text: 'Strategic planning and optimization', strand: 'ABM', weight: 2 },
            { text: 'Understanding and helping people', strand: 'HUMSS', weight: 2 },
            { text: 'Hands-on work and craftsmanship', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 41,
        question: 'What makes a subject engaging for you?',
        answers: [
            { text: 'The underlying principles and theories', strand: 'STEM', weight: 2 },
            { text: 'Its practical application and value', strand: 'ABM', weight: 2 },
            { text: 'Its relevance to real-world situations', strand: 'HUMSS', weight: 2 },
            { text: 'The skills you can develop from it', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 42,
        question: 'When something goes wrong, you:',
        answers: [
            { text: 'Investigate to understand what happened', strand: 'STEM', weight: 2 },
            { text: 'Quickly shift to damage control', strand: 'ABM', weight: 2 },
            { text: 'Consider how it affects everyone involved', strand: 'HUMSS', weight: 2 },
            { text: 'Get right to fixing it', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 43,
        question: 'Your friends would say you\'re someone who:',
        answers: [
            { text: 'Always has interesting ideas and insights', strand: 'STEM', weight: 2 },
            { text: 'Gets things done efficiently', strand: 'ABM', weight: 2 },
            { text: 'Genuinely cares about others', strand: 'HUMSS', weight: 2 },
            { text: 'Can build or fix almost anything', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 44,
        question: 'You\'d choose a career where you could:',
        answers: [
            { text: 'Continuously learn and innovate', strand: 'STEM', weight: 2 },
            { text: 'Rise through the ranks with hard work', strand: 'ABM', weight: 2 },
            { text: 'Make a positive difference daily', strand: 'HUMSS', weight: 2 },
            { text: 'Perfect your skills over time', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 45,
        question: 'What keeps you awake at night thinking?',
        answers: [
            { text: 'Unanswered questions about how things work', strand: 'STEM', weight: 2 },
            { text: 'Goals you want to achieve', strand: 'ABM', weight: 2 },
            { text: 'Ways to help people or society', strand: 'HUMSS', weight: 2 },
            { text: 'Projects you want to work on', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 46,
        question: 'You learn best from:',
        answers: [
            { text: 'Detailed explanations and research', strand: 'STEM', weight: 2 },
            { text: 'Practical examples and case studies', strand: 'ABM', weight: 2 },
            { text: 'Discussion and different viewpoints', strand: 'HUMSS', weight: 2 },
            { text: 'Direct experience and mentorship', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 47,
        question: 'At the end of a project, you feel satisfied when:',
        answers: [
            { text: 'You\'ve expanded your understanding', strand: 'STEM', weight: 2 },
            { text: 'You\'ve delivered results on time', strand: 'ABM', weight: 2 },
            { text: 'Everyone is happy and fulfilled', strand: 'HUMSS', weight: 2 },
            { text: 'The quality exceeds expectations', strand: 'TVL', weight: 2 }
        ]
    },
    {
        id: 48,
        question: 'Looking forward, you want a life where:',
        answers: [
            { text: 'You\'re constantly pushing boundaries', strand: 'STEM', weight: 3 },
            { text: 'You\'re building wealth and security', strand: 'ABM', weight: 3 },
            { text: 'You\'re contributing to social good', strand: 'HUMSS', weight: 3 },
            { text: 'You\'re recognized for your expertise', strand: 'TVL', weight: 3 }
        ]
    }
];

// Quiz State
let currentQuestion = 0;
let answers = {};
let strandScores = { STEM: 0, ABM: 0, HUMSS: 0, TVL: 0 };

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if on quiz page or results page
    if (document.getElementById('quizForm')) {
        initializeQuiz();
    } else if (document.getElementById('strandIcon')) {
        initializeResults();
    }
});

// ===== QUIZ PAGE FUNCTIONS =====
function initializeQuiz() {
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    displayQuestion(0);
    
    // Event listeners
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('quizForm').addEventListener('submit', submitQuiz);
}

function displayQuestion(questionIndex) {
    currentQuestion = questionIndex;
    const question = quizQuestions[questionIndex];
    const container = document.getElementById('questionsContainer');
    
    // Update progress
    document.getElementById('currentQuestion').textContent = questionIndex + 1;
    const progressPercent = ((questionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    
    // Clear container
    container.innerHTML = '';
    
    // Display question
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card';
    questionDiv.innerHTML = `
        <h2 class="question-text">${question.question}</h2>
        <div class="answers-container" id="answersContainer"></div>
    `;
    container.appendChild(questionDiv);
    
    // Display answers
    const answersContainer = document.getElementById('answersContainer');
    question.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        label.className = 'answer-option';
        label.innerHTML = `
            <input type="radio" name="question-${question.id}" value="${index}" ${answers[question.id] === index ? 'checked' : ''}>
            <span class="answer-text">${answer.text}</span>
        `;
        
        answersContainer.appendChild(label);
        
        // Add change event listener
        label.querySelector('input').addEventListener('change', function() {
            answers[question.id] = index;
            updateNextButtonState();
        });
    });
    
    // Update button visibility
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.style.display = questionIndex > 0 ? 'inline-block' : 'none';
    
    if (questionIndex === quizQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
    
    // Update Next button state
    updateNextButtonState();
}

function updateNextButtonState() {
    const nextBtn = document.getElementById('nextBtn');
    const question = quizQuestions[currentQuestion];
    const isAnswered = answers.hasOwnProperty(question.id);
    
    if (isAnswered) {
        nextBtn.disabled = false;
        nextBtn.classList.remove('disabled');
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    } else {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
    }
}

function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        displayQuestion(currentQuestion + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        displayQuestion(currentQuestion - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function submitQuiz(e) {
    e.preventDefault();
    
    // Calculate scores
    strandScores = { STEM: 0, ABM: 0, HUMSS: 0, TVL: 0 };
    
    Object.keys(answers).forEach(questionId => {
        const question = quizQuestions.find(q => q.id == questionId);
        const answerIndex = answers[questionId];
        const selectedAnswer = question.answers[answerIndex];
        
        strandScores[selectedAnswer.strand] += selectedAnswer.weight;
    });
    
    // Find recommended strand
    const recommendedStrand = Object.keys(strandScores).reduce((a, b) => 
        strandScores[a] > strandScores[b] ? a : b
    );
    
    // Calculate match percentage
    const totalScore = Object.values(strandScores).reduce((a, b) => a + b, 0);
    const matchScore = Math.round((strandScores[recommendedStrand] / totalScore) * 100);
    
    // Save results
    const results = {
        recommendedStrand: recommendedStrand,
        matchScore: matchScore,
        strandScores: strandScores
    };
    
    localStorage.setItem('quizResults', JSON.stringify(results));
    
    // Redirect to results page
    window.location.href = 'result.html';
}

// ===== RESULTS PAGE FUNCTIONS =====
function initializeResults() {
    const quizResults = JSON.parse(localStorage.getItem('quizResults'));
    
    if (!quizResults) {
        window.location.href = 'quiz.html';
        return;
    }

    const recommendedStrand = quizResults.recommendedStrand;
    const matchScore = quizResults.matchScore;
    const strandScores = quizResults.strandScores;

    // Display recommended strand
    displayRecommendedStrand(recommendedStrand, matchScore);

    // Display college courses
    displayCollegeCourses(recommendedStrand);

    // Display career opportunities
    displayCareerOpportunities(recommendedStrand);

    // Display alternative strands
    displayAlternativeStrands(recommendedStrand, strandScores);
}

function displayRecommendedStrand(strandKey, matchScore) {
    const strand = strandData[strandKey];

    document.getElementById('strandIcon').textContent = strand.icon;
    document.getElementById('strandName').textContent = strand.name;
    document.getElementById('strandFullName').textContent = strand.fullName;
    document.getElementById('strandDescription').textContent = strand.description;
    document.getElementById('whyGoodFit').textContent = strand.whyGoodFit;
    document.getElementById('matchScore').textContent = matchScore;

    // Animate score bar
    const scoreFill = document.getElementById('scoreFill');
    setTimeout(() => {
        scoreFill.style.width = matchScore + '%';
    }, 100);

    // Display key subjects
    const keySubjectsList = document.getElementById('keySubjects');
    keySubjectsList.innerHTML = '';
    strand.keySubjects.forEach(subject => {
        const li = document.createElement('li');
        li.textContent = subject;
        keySubjectsList.appendChild(li);
    });
}

function displayCollegeCourses(strandKey) {
    const strand = strandData[strandKey];
    const container = document.getElementById('collegeCoursesContainer');
    if (!container) return;
    
    container.innerHTML = '';

    strand.collegeCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.innerHTML = `
            <h4>📖 ${course}</h4>
            <p>A recommended college course path for ${strand.name} students.</p>
        `;
        container.appendChild(card);
    });
}

function displayCareerOpportunities(strandKey) {
    const strand = strandData[strandKey];
    const container = document.getElementById('careerOpportunitiesContainer');
    container.innerHTML = '';

    strand.careers.forEach(career => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.innerHTML = `
            <h4>💼 ${career}</h4>
            <p>A potential career path for graduates of the ${strand.name} strand.</p>
        `;
        container.appendChild(card);
    });
}

function displayAlternativeStrands(recommendedStrandKey, strandScores) {
    const container = document.getElementById('alternativeStrandsContainer');
    container.innerHTML = '';

    // Get all strands except the recommended one
    const allStrands = Object.keys(strandData);
    const alternatives = allStrands
        .filter(key => key !== recommendedStrandKey)
        .sort((a, b) => (strandScores[b] || 0) - (strandScores[a] || 0));

    alternatives.forEach(strandKey => {
        const strand = strandData[strandKey];
        const score = strandScores[strandKey] || 0;
        
        const card = document.createElement('div');
        card.className = 'alt-strand-card';
        card.innerHTML = `
            <div class="alt-strand-icon">${strand.icon}</div>
            <h4>${strand.name}</h4>
            <p style="color: #999; font-size: 0.85rem; margin-bottom: 0.5rem;">${strand.fullName}</p>
            <div class="alt-strand-score">Match: ${score}%</div>
        `;
        
        card.addEventListener('click', () => {
            // Update localStorage and reload
            const newResults = {
                recommendedStrand: strandKey,
                matchScore: score,
                strandScores: strandScores
            };
            localStorage.setItem('quizResults', JSON.stringify(newResults));
            location.reload();
        });
        
        container.appendChild(card);
    });
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Track page views
window.addEventListener('load', () => {
    console.log('Results page loaded successfully');
});
