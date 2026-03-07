document.addEventListener('DOMContentLoaded', function() {
    const lessonMatch = document.title.match(/Lesson (\d+):/);
    const lessonNum = lessonMatch ? lessonMatch[1] : '1';

    let questions;

    if (lessonNum === '1') {
        questions = [
            { q: "Why is rainforest soil generally nutrient-poor?", a: "Fast decomposition and leaching", options: ["Lack of organic matter", "Fast decomposition and leaching", "Extreme cold"] },
            { q: "Where is the majority of biological wealth stored?", a: "In living biomass", options: ["In deep soil", "In living biomass", "In sand"] },
            { q: "What is laterite?", a: "Hard, unproductive clay soil", options: ["Exotic flower", "Hard, unproductive clay soil", "Volcanic ash"] },
            { q: "How do wildlife corridors help biodiversity?", a: "By preventing fragmentation", options: ["By preventing fragmentation", "By building roads", "By isolating groups"] },
            { q: "Which layer acts as the primary 'roof' of the forest?", a: "The Canopy", options: ["Forest Floor", "Understory", "The Canopy"] },
            { q: "What happens when rainforest nutrients are washed away by rain?", a: "Leaching", options: ["Photosynthesis", "Leaching", "Fragmentation"] }
        ];
    } else {
        const allQuestions = {
            "2": [
                { "q": "What is the Great Pacific Garbage Patch?", "a": "A massive accumulation of plastic debris", "options": ["A coral reef", "A massive accumulation of plastic debris", "A volcanic island"] },
                { "q": "How does plastic pollution affect marine animals?", "a": "They ingest microplastics", "options": ["They grow larger", "They ingest microplastics", "They become invisible"] },
                { "q": "What causes ocean acidification?", "a": "Absorption of CO2 from the atmosphere", "options": ["Plastic waste", "Absorption of CO2 from the atmosphere", "Overfishing"] },
                { "q": "How much of the ocean floor do coral reefs cover?", "a": "Less than 1%", "options": ["50%", "Less than 1%", "10%"] },
                { "q": "What is bioaccumulation in marine food chains?", "a": "Toxins building up in higher organisms", "options": ["Fish growing bigger", "Toxins building up in higher organisms", "Water becoming cleaner"] },
                { "q": "Why are oceans important for climate regulation?", "a": "They absorb heat and CO2", "options": ["They create wind", "They absorb heat and CO2", "They produce oxygen"] }
            ],
            "3": [
                { "q": "What are coral reefs often called?", "a": "The rainforests of the sea", "options": ["Deserts of the ocean", "The rainforests of the sea", "Mountains underwater"] },
                { "q": "What causes coral bleaching?", "a": "Rising water temperatures", "options": ["Cold water", "Rising water temperatures", "Lack of sunlight"] },
                { "q": "What do coral polyps secrete to build reefs?", "a": "Calcium carbonate", "options": ["Plastic", "Calcium carbonate", "Sand"] },
                { "q": "What percentage of marine species live in coral reefs?", "a": "About 25%", "options": ["50%", "About 25%", "5%"] },
                { "q": "What is the symbiotic relationship in corals?", "a": "With zooxanthellae algae", "options": ["With fish", "With zooxanthellae algae", "With seaweed"] },
                { "q": "How do corals get most of their energy?", "a": "From photosynthesis by algae", "options": ["From eating fish", "From photosynthesis by algae", "From the water"] }
            ],
            "4": [
                { "q": "What is the Midnight Zone in the ocean?", "a": "The deep sea where no light penetrates", "options": ["The surface", "The deep sea where no light penetrates", "The coral reefs"] },
                { "q": "What adaptations do deep-sea creatures have?", "a": "Bioluminescence and large eyes", "options": ["Wings", "Bioluminescence and large eyes", "Thick fur"] },
                { "q": "What is hydrothermal vent?", "a": "An opening in the seafloor where hot water emerges", "options": ["A type of fish", "An opening in the seafloor where hot water emerges", "A coral structure"] },
                { "q": "How do deep-sea fish survive pressure?", "a": "Special body structures", "options": ["By swimming fast", "Special body structures", "By breathing air"] },
                { "q": "What is the abyssal plain?", "a": "The flat, deep ocean floor", "options": ["A mountain range", "The flat, deep ocean floor", "A reef"] },
                { "q": "Why is the deep sea important?", "a": "It covers most of the ocean and has unique species", "options": ["It has beaches", "It covers most of the ocean and has unique species", "It is shallow"] }
            ],
            "5": [
                { "q": "What is the main cause of freshwater crisis?", "a": "Pollution and overuse", "options": ["Too much rain", "Pollution and overuse", "Ice melting"] },
                { "q": "What percentage of water on Earth is freshwater?", "a": "About 3%", "options": ["70%", "About 3%", "50%"] },
                { "q": "What is groundwater?", "a": "Water stored in aquifers underground", "options": ["Rainwater", "Water stored in aquifers underground", "Ocean water"] },
                { "q": "How does climate change affect freshwater?", "a": "Alters precipitation patterns", "options": ["Makes it saltier", "Alters precipitation patterns", "Increases volume"] },
                { "q": "What is desalination?", "a": "Removing salt from seawater", "options": ["Adding salt", "Removing salt from seawater", "Freezing water"] },
                { "q": "Why is clean water valuable?", "a": "It's essential for life and becoming scarce", "options": ["It's free", "It's essential for life and becoming scarce", "It's everywhere"] }
            ],
            "6": [
                { "q": "What is the Albedo effect?", "a": "Reflection of sunlight by ice", "options": ["Absorption of heat", "Reflection of sunlight by ice", "Melting of ice"] },
                { "q": "How does Arctic ice melting affect sea levels?", "a": "Causes them to rise", "options": ["Lowers them", "Causes them to rise", "No effect"] },
                { "q": "What lives in the Arctic?", "a": "Polar bears and penguins", "options": ["Tigers", "Polar bears and penguins", "Lions"] },
                { "q": "What is permafrost?", "a": "Permanently frozen ground", "options": ["Hot soil", "Permanently frozen ground", "Wet mud"] },
                { "q": "Why is the Arctic important?", "a": "Regulates global climate", "options": ["Has beaches", "Regulates global climate", "Grows crops"] },
                { "q": "What threatens the Arctic?", "a": "Climate change and melting ice", "options": ["Volcanoes", "Climate change and melting ice", "Earthquakes"] }
            ],
            "7": [
                { "q": "What is desertification?", "a": "Process of fertile land becoming desert", "options": ["Making deserts green", "Process of fertile land becoming desert", "Building cities"] },
                { "q": "What causes desertification?", "a": "Overgrazing and deforestation", "options": ["Rain", "Overgrazing and deforestation", "Snow"] },
                { "q": "What is the Great Green Wall?", "a": "A project to plant trees across Africa", "options": ["A wall", "A project to plant trees across Africa", "A river"] },
                { "q": "How do deserts form?", "a": "Low precipitation and high evaporation", "options": ["Lots of rain", "Low precipitation and high evaporation", "Cold temperatures"] },
                { "q": "What adaptations do desert animals have?", "a": "Water conservation and heat tolerance", "options": ["Thick fur", "Water conservation and heat tolerance", "Gills"] },
                { "q": "Why is desertification a problem?", "a": "Leads to loss of arable land", "options": ["Creates more land", "Leads to loss of arable land", "Improves soil"] }
            ],
            "8": [
                { "q": "What is vertical zonation in mountains?", "a": "Different ecosystems at different altitudes", "options": ["Horizontal layers", "Different ecosystems at different altitudes", "Same everywhere"] },
                { "q": "How does temperature change with altitude?", "a": "Decreases", "options": ["Increases", "Decreases", "Stays the same"] },
                { "q": "What is the tree line?", "a": "The highest altitude where trees grow", "options": ["Sea level", "The highest altitude where trees grow", "Mountain top"] },
                { "q": "Why are mountains important?", "a": "Water sources and biodiversity", "options": ["Flat land", "Water sources and biodiversity", "No life"] },
                { "q": "What is orographic precipitation?", "a": "Rain caused by mountains blocking wind", "options": ["No rain", "Rain caused by mountains blocking wind", "Snow only"] },
                { "q": "How do animals adapt to high altitudes?", "a": "Larger lungs and more red blood cells", "options": ["Smaller bodies", "Larger lungs and more red blood cells", "No adaptations"] }
            ],
            "9": [
                { "q": "What are wetlands?", "a": "Areas saturated with water like swamps and marshes", "options": ["Deserts", "Areas saturated with water like swamps and marshes", "Mountains"] },
                { "q": "Why are wetlands called carbon sinks?", "a": "They store large amounts of carbon", "options": ["They release carbon", "They store large amounts of carbon", "Burn carbon"] },
                { "q": "How do wetlands filter water?", "a": "Plants and soil trap pollutants", "options": ["Add pollutants", "Plants and soil trap pollutants", "Evaporate water"] },
                { "q": "What is biodiversity in wetlands?", "a": "High variety of species", "options": ["Low variety", "High variety of species", "No species"] },
                { "q": "What threatens wetlands?", "a": "Drainage for agriculture", "options": ["Flooding", "Drainage for agriculture", "Planting trees"] },
                { "q": "Why are wetlands important for birds?", "a": "Breeding and migration stops", "options": ["No birds", "Breeding and migration stops", "Hunting"] }
            ],
            "10": [
                { "q": "What is animal migration?", "a": "Seasonal movement to find food or breed", "options": ["Staying in one place", "Seasonal movement to find food or breed", "Flying randomly"] },
                { "q": "Which bird migrates the farthest?", "a": "Arctic Tern", "options": ["Penguin", "Arctic Tern", "Ostrich"] },
                { "q": "Why do whales migrate?", "a": "For breeding and feeding", "options": ["To escape", "For breeding and feeding", "For fun"] },
                { "q": "What do Monarch butterflies do?", "a": "Migrate thousands of miles", "options": ["Stay put", "Migrate thousands of miles", "Swim"] },
                { "q": "How do animals navigate migrations?", "a": "Using stars, sun, magnetic fields", "options": ["Maps", "Using stars, sun, magnetic fields", "Guessing"] },
                { "q": "Why are migrations threatened?", "a": "Habitat loss and climate change", "options": ["Too many animals", "Habitat loss and climate change", "Good weather"] }
            ],
            "11": [
                { "q": "What are apex predators?", "a": "Top predators with no natural enemies", "options": ["Prey animals", "Top predators with no natural enemies", "Plants"] },
                { "q": "Why are apex predators important?", "a": "Control prey populations and maintain balance", "options": ["Hunt everything", "Control prey populations and maintain balance", "Do nothing"] },
                { "q": "What happens without wolves?", "a": "Overpopulation of prey leading to ecosystem collapse", "options": ["More balance", "Overpopulation of prey leading to ecosystem collapse", "No change"] },
                { "q": "Where are sharks important?", "a": "In ocean food webs", "options": ["On land", "In ocean food webs", "In deserts"] },
                { "q": "Why are lions keystone species?", "a": "Influence the entire ecosystem", "options": ["Small impact", "Influence the entire ecosystem", "Eat only plants"] },
                { "q": "What threatens apex predators?", "a": "Hunting and habitat loss", "options": ["Overbreeding", "Hunting and habitat loss", "Too much food"] }
            ],
            "12": [
                { "q": "What are invasive species?", "a": "Non-native species that harm ecosystems", "options": ["Native species", "Non-native species that harm ecosystems", "Helpful animals"] },
                { "q": "How do invasive species spread?", "a": "By humans or natural means", "options": ["Only flying", "By humans or natural means", "Stay local"] },
                { "q": "What do invasive species do to food webs?", "a": "Disrupt and destroy them", "options": ["Strengthen them", "Disrupt and destroy them", "Ignore them"] },
                { "q": "Example of invasive species?", "a": "Kudzu vine or zebra mussels", "options": ["Local trees", "Kudzu vine or zebra mussels", "Native fish"] },
                { "q": "How to control invasives?", "a": "Removal and prevention", "options": ["Encourage spread", "Removal and prevention", "Let them be"] },
                { "q": "Why are invasives a problem?", "a": "Outcompete natives and reduce biodiversity", "options": ["Increase diversity", "Outcompete natives and reduce biodiversity", "No effect"] }
            ],
            "13": [
                { "q": "What are endangered species?", "a": "Species at risk of extinction", "options": ["Common species", "Species at risk of extinction", "Invaders"] },
                { "q": "What causes endangerment?", "a": "Habitat loss, poaching, climate change", "options": ["Too many", "Habitat loss, poaching, climate change", "Good care"] },
                { "q": "What is extinction?", "a": "Complete disappearance of a species", "options": ["New species", "Complete disappearance of a species", "Migration"] },
                { "q": "Success in conservation?", "a": "Giant panda recovery", "options": ["All extinct", "Giant panda recovery", "More extinction"] },
                { "q": "What is IUCN?", "a": "International Union for Conservation of Nature", "options": ["Hunting club", "International Union for Conservation of Nature", "Zoo"] },
                { "q": "How to protect endangered species?", "a": "Protected areas and anti-poaching", "options": ["Hunt more", "Protected areas and anti-poaching", "Ignore"] }
            ],
            "14": [
                { "q": "What is sustainable agriculture?", "a": "Farming that maintains soil and environment", "options": ["Destructive farming", "Farming that maintains soil and environment", "No farming"] },
                { "q": "What is vertical farming?", "a": "Growing crops in stacked layers indoors", "options": ["Outdoor", "Growing crops in stacked layers indoors", "Underground"] },
                { "q": "What is permaculture?", "a": "Designing agricultural systems that mimic nature", "options": ["Industrial farming", "Designing agricultural systems that mimic nature", "Chemical use"] },
                { "q": "Why is food security important?", "a": "Ensuring everyone has enough food", "options": ["No need", "Ensuring everyone has enough food", "Waste food"] },
                { "q": "How does climate change affect agriculture?", "a": "Changes growing seasons and yields", "options": ["Improves", "Changes growing seasons and yields", "No effect"] },
                { "q": "What is agroforestry?", "a": "Integrating trees with crops", "options": ["No trees", "Integrating trees with crops", "Clearcutting"] }
            ],
            "15": [
                { "q": "What is renewable energy?", "a": "Energy from sources that replenish", "options": ["Fossil fuels", "Energy from sources that replenish", "Nuclear"] },
                { "q": "Examples of renewables?", "a": "Solar, wind, hydro", "options": ["Coal, oil", "Solar, wind, hydro", "Gas"] },
                { "q": "How does solar energy work?", "a": "Converts sunlight to electricity", "options": ["Burns sun", "Converts sunlight to electricity", "Stores heat"] },
                { "q": "What is wind energy?", "a": "Uses turbines to generate power", "options": ["Sails", "Uses turbines to generate power", "Hot air"] },
                { "q": "Why switch to renewables?", "a": "Reduce emissions and sustainability", "options": ["More pollution", "Reduce emissions and sustainability", "Expensive only"] },
                { "q": "What is the green grid?", "a": "Electricity system powered by renewables", "options": ["Old grid", "Electricity system powered by renewables", "No power"] }
            ],
            "16": [
                { "q": "What is urban ecology?", "a": "Study of ecosystems in cities", "options": ["Rural", "Study of ecosystems in cities", "No ecology"] },
                { "q": "What are sponge cities?", "a": "Cities designed to absorb and manage water", "options": ["Dry cities", "Cities designed to absorb and manage water", "Flooded"] },
                { "q": "How do green spaces help cities?", "a": "Improve air quality and reduce heat", "options": ["Pollute", "Improve air quality and reduce heat", "No help"] },
                { "q": "What is urban heat island?", "a": "Cities hotter than surroundings", "options": ["Colder", "Cities hotter than surroundings", "Same temp"] },
                { "q": "How to make cities sustainable?", "a": "Green roofs, public transport", "options": ["More cars", "Green roofs, public transport", "Cut trees"] },
                { "q": "Why is urban ecology important?", "a": "Most people live in cities", "options": ["No one lives there", "Most people live in cities", "Better in rural"] }
            ],
            "17": [
                { "q": "What is fast fashion?", "a": "Cheap, trendy clothes produced quickly", "options": ["Slow clothes", "Cheap, trendy clothes produced quickly", "Expensive"] },
                { "q": "What is the environmental cost of fashion?", "a": "Water use, pollution, waste", "options": ["No cost", "Water use, pollution, waste", "Clean"] },
                { "q": "How much water for a cotton t-shirt?", "a": "About 2700 liters", "options": ["100 liters", "About 2700 liters", "None"] },
                { "q": "What is textile waste?", "a": "Clothes ending in landfills", "options": ["Recycled", "Clothes ending in landfills", "Burned"] },
                { "q": "How to reduce fashion impact?", "a": "Buy less, choose sustainable brands", "options": ["Buy more", "Buy less, choose sustainable brands", "Ignore"] },
                { "q": "What is ethical fashion?", "a": "Fair labor and eco-friendly materials", "options": ["Cheap labor", "Fair labor and eco-friendly materials", "Fast"] }
            ],
            "18": [
                { "q": "What is zero waste lifestyle?", "a": "Minimizing waste through reuse and recycling", "options": ["Max waste", "Minimizing waste through reuse and recycling", "Burning"] },
                { "q": "What is reduce, reuse, recycle?", "a": "Principles to minimize waste", "options": ["Buy more", "Principles to minimize waste", "Throw away"] },
                { "q": "How to reduce plastic use?", "a": "Use reusable bags and bottles", "options": ["More plastic", "Use reusable bags and bottles", "Single use"] },
                { "q": "What is composting?", "a": "Turning organic waste into fertilizer", "options": ["Burning", "Turning organic waste into fertilizer", "Dumping"] },
                { "q": "Why reduce waste?", "a": "Conserve resources and reduce pollution", "options": ["Waste resources", "Conserve resources and reduce pollution", "Increase pollution"] },
                { "q": "What is upcycling?", "a": "Turning waste into better products", "options": ["Downcycling", "Turning waste into better products", "Throwing"] }
            ],
            "19": [
                { "q": "What is circular economy?", "a": "Economy where waste is minimized through reuse", "options": ["Linear", "Economy where waste is minimized through reuse", "Wasteful"] },
                { "q": "How does circular economy work?", "a": "Design out waste, keep materials in use", "options": ["Throw away", "Design out waste, keep materials in use", "Burn"] },
                { "q": "What is cradle to cradle?", "a": "Products designed for reuse", "options": ["One use", "Products designed for reuse", "Landfill"] },
                { "q": "Why circular economy?", "a": "Sustainable and resource-efficient", "options": ["Wasteful", "Sustainable and resource-efficient", "Expensive"] },
                { "q": "Example of circular practice?", "a": "Recycling and sharing economy", "options": ["Landfill", "Recycling and sharing economy", "Dumping"] },
                { "q": "What is regeneration?", "a": "Restoring natural systems", "options": ["Destroying", "Restoring natural systems", "Ignoring"] }
            ],
            "20": [
                { "q": "What is eco-tech?", "a": "Technology for environmental protection", "options": ["Polluting tech", "Technology for environmental protection", "Old tech"] },
                { "q": "How do drones help conservation?", "a": "Monitor wildlife and forests", "options": ["Hunt", "Monitor wildlife and forests", "No help"] },
                { "q": "What is AI in conservation?", "a": "Predict poaching or analyze data", "options": ["Cause extinction", "Predict poaching or analyze data", "Ignore"] },
                { "q": "How do satellites help?", "a": "Track deforestation and climate", "options": ["Block sun", "Track deforestation and climate", "No data"] },
                { "q": "What is smart agriculture?", "a": "Using tech for efficient farming", "options": ["Wasteful", "Using tech for efficient farming", "Manual"] },
                { "q": "Why is eco-tech important?", "a": "Scales up conservation efforts", "options": ["Harms", "Scales up conservation efforts", "Small scale"] }
            ]
        };
        questions = allQuestions[lessonNum] || [];
    }

    const sentences = {
        correct: [
            "Excellent!",
            "Correct!",
            "Well done!",
            "Great job!",
            "Spot on!",
            "Perfect!",
            "Nice work!",
            "You're right!",
            "Good answer!",
            "Bravo!",
            "Superb!",
            "Fantastic!",
            "Outstanding!",
            "Amazing!",
            "Keep it up!",
            "Awesome!",
            "Brilliant!",
            "Impressive!",
            "Top notch!",
            "Way to go!"
        ],
        incorrect: [
            "Try again!",
            "Incorrect!",
            "Wrong!",
            "Not quite!",
            "Oops!",
            "Better luck next time!",
            "Nope!",
            "That's not right!",
            "Keep trying!",
            "Close, but no!",
            "Sorry!",
            "Not correct!",
            "Try harder!",
            "No luck!",
            "Wrong answer!",
            "Guess again!",
            "Not there yet!",
            "Almost!",
            "Wrong way!",
            "Try once more!"
        ]
    };

    const quizContainer = document.getElementById('quiz-container');
    let score = 0;
    let answeredCount = 0;

    let voicesLoaded = false;
    let voices = [];

    // Load voices
    speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        voicesLoaded = true;
        console.log('Voices loaded:', voices.length);
    };

    // Audio context for sound effects
    let audioContext;

    function initAudio() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    function playSound(frequency, duration) {
        if (!audioContext) initAudio();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }

    function speakRandomSentence(isCorrect) {
        const array = isCorrect ? sentences.correct : sentences.incorrect;
        const sentence = array[Math.floor(Math.random() * array.length)];
        console.log('Speaking sentence:', sentence, 'isCorrect:', isCorrect);
        
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.lang = 'en-US'; // English
        utterance.rate = 0.8;
        utterance.pitch = 0.5; // Lower pitch for male robot voice
        
        // Try to set male voice if voices are loaded
        if (voicesLoaded) {
            const maleVoice = voices.find(voice => voice.name.toLowerCase().includes('male') || voice.name.toLowerCase().includes('robot'));
            if (maleVoice) {
                utterance.voice = maleVoice;
                console.log('Using male voice:', maleVoice.name);
            } else {
                console.log('Using default voice');
            }
        } else {
            console.log('Voices not loaded yet, using default');
        }
        
        speechSynthesis.speak(utterance);
    }

    function initQuiz() {
        if(!quizContainer) return;
        questions.forEach((item, i) => {
            // Shuffle options
            const shuffledOptions = [...item.options].sort(() => Math.random() - 0.5);
            
            const card = document.createElement('div');
            card.className = 'quiz-item';
            card.innerHTML = `
                <p><strong>Question ${i+1}:</strong> ${item.q}</p>
                <div class="options-grid" id="q-grid-${i}">
                    ${shuffledOptions.map(opt => `<button class="option-btn" onclick="handleChoice(this, ${i}, '${opt}')">${opt}</button>`).join('')}
                </div>
            `;
            quizContainer.appendChild(card);
        });
    }

    function handleChoice(btn, qIdx, selected) {
        const correct = questions[qIdx].a;
        const grid = document.getElementById(`q-grid-${qIdx}`);
        const btns = grid.querySelectorAll('.option-btn');

        // Disable all buttons immediately
        btns.forEach(b => b.disabled = true);

        // Add clicked class for animation
        btn.classList.add('clicked');

        // Delay feedback for better UX
        setTimeout(() => {
            btn.classList.remove('clicked');

            if (selected === correct) {
                btn.classList.add('correct', 'animate-correct');
                score++;
                playSound(800, 0.5); // High pitch for correct
                speakRandomSentence(true); // Speak random correct sentence
            } else {
                btn.classList.add('wrong', 'animate-wrong');
                btns.forEach(b => { if(b.innerText === correct) b.classList.add('correct'); });
                playSound(300, 0.5); // Low pitch for wrong
                speakRandomSentence(false); // Speak random incorrect sentence
            }

            // Auto-advance or wait for user
            setTimeout(() => {
                answeredCount++;
                
                if (answeredCount === questions.length) {
                    const res = document.getElementById('final-result');
                    res.style.display = 'block';
                    res.innerHTML = `🌟 Completed! Score: ${score} / ${questions.length}`;
                }
            }, 2000); // Delay before next
        }, 500); // Delay after click
    }

    // Initialize quiz
    initQuiz();
    
    // Make handleChoice globally accessible
    window.handleChoice = handleChoice;
});

// Modal functions
function openModal(type) {
    const modal = document.getElementById(type + '-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(type) {
    const modal = document.getElementById(type + '-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
