// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Sticky Header on Scroll ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Interactive Accordion for "Guidance After 10th" ---
    const guidanceItems = document.querySelectorAll('.guidance-item');
    guidanceItems.forEach(item => {
        const header = item.querySelector('.guidance-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            guidanceItems.forEach(otherItem => otherItem.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- ## NEW SCRIPT: AI Skill Analysis Logic ## ---
    const skillsForm = document.getElementById('skills-form');
    const aiResponseContainer = document.getElementById('ai-response-container');
    const spinner = aiResponseContainer.querySelector('.spinner');
    const aiResponseContent = aiResponseContainer.querySelector('.ai-response-content');

    skillsForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // 1. Show loading state
        aiResponseContainer.style.display = 'block';
        spinner.style.display = 'block';
        aiResponseContent.style.display = 'none';

        // 2. Gather user inputs
        const checkedSkills = Array.from(skillsForm.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
        const customSkill = document.getElementById('custom-skill-input').value.toLowerCase();
        
        let aiResponse = {};

        // 3. Simple logic to simulate AI
        if (customSkill.includes('gaming') || customSkill.includes('story') || checkedSkills.includes('Storytelling')) {
            aiResponse = {
                title: 'Game Narrative Designer',
                confidence: '92% Match',
                reasoning: 'Your interest in "Gaming" and "Storytelling" is a powerful combination for creating immersive game worlds. This role blends creativity with logical structuring of plots and characters.',
                support: 'It\'s wonderful that you have such a creative spark! Pursuing a career in gaming is exciting. Remember to build a portfolio of your writing or small game projects. Every big journey starts with a small, fun step.'
            };
        } else if (checkedSkills.includes('Problem Solving') && checkedSkills.includes('Math')) {
            aiResponse = {
                title: 'Data Analyst',
                confidence: '88% Match',
                reasoning: 'Your strengths in "Problem Solving" and "Math & Logic" are essential for a Data Analyst, who finds meaningful patterns in complex data to help businesses make smart decisions.',
                support: 'Your analytical mind is a huge asset! This field can seem challenging, but don\'t be intimidated. Start with free online courses to see how fun it can be to uncover secrets hidden in data. You\'ve got this!'
            }
        } else if (checkedSkills.includes('Art & Design') || checkedSkills.includes('Creativity')) {
             aiResponse = {
                title: 'UX/UI Designer',
                confidence: '85% Match',
                reasoning: 'A passion for "Art & Design" and "Creativity" is key for a UX/UI Designer. You would be creating beautiful and easy-to-use digital products that people love to interact with.',
                support: 'Your creative vision is unique and valuable! This is a field where you can truly make a difference in how people experience technology. Trust your artistic instincts and never stop creating.'
            }
        }
        else {
            aiResponse = {
                title: 'Generalist & Explorer',
                confidence: 'Let\'s Discover!',
                reasoning: 'You have a diverse set of interests! This is a sign of a curious and adaptable mind, which is a superpower in today\'s world. The best path for you is one of exploration.',
                support: 'It is completely okay not to have a single "passion" right now. Your journey is about discovering what you enjoy. Try different things, talk to people in different fields, and be kind to yourself. Your path will become clear as you explore.'
            };
        }

        // 4. Simulate AI processing time
        setTimeout(() => {
            // 5. Populate and show the response
            spinner.style.display = 'none';
            document.getElementById('career-title').textContent = aiResponse.title;
            document.getElementById('confidence-score').textContent = aiResponse.confidence;
            document.getElementById('career-reasoning').textContent = aiResponse.reasoning;
            document.getElementById('emotional-support').textContent = aiResponse.support;
            aiResponseContent.style.display = 'block';
        }, 2500); // 2.5-second delay
    });
});