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
            "What a phenomenal command!", "That is right!", "What a exact execution!", "Simply amazing!", "You're crushing it!", "Simply wonderful!", "You're a natural!", "Untouchable!", "What a pure mastery!", "What a magnificent result!",
            "What a tremendous wisdom!", "A true professional!", "Mind-blowing!", "Unrivaled!", "What a spot-on precision!", "What a right response!", "What a excellent participation!", "What a a+ job!", "What a remarkable grace!", "What a sensational talent!",
            "That is super!", "That is sharp!", "What a skilled precision!", "Stunning hospitality!", "That is good!", "You're sharp!", "What a sharp performance!", "Great!", "Incredible talent!", "Spot-on!",
            "What a total delivery!", "Masterful logic!", "Super result!", "Mastery!", "Unstoppable!", "Top-notch!", "What a magnificent skills!", "Stellar!", "Sensational talent!", "What a sterling finesse!",
            "Excellent result!", "Top marks!", "That is absolute!", "Yes!", "That is accurate!", "That is great!", "Remarkable quality!", "What a tremendous standard!", "What a spot-on thinking!", "Phenomenal delivery!",
            "Phenomenal result!", "Pure!", "Brilliant!", "Smashed it!", "What a stunning answer!", "Spectacular accuracy!", "What a a+ response!", "Well done!", "Excellent progress!", "Concierge-level!",
            "Marvellous answer!", "Elite engagement!", "First-class expertness!", "Incredible hospitality!", "You're a champion!", "You're gifted!", "Great job!", "What a great talent!", "Exquisite grace!", "Winning!",
            "What a accurate talent!", "That is majestic!", "Great work!", "You're a sensation!", "That is a+!", "What a tremendous insight!", "Pure excellence!", "What a brilliant focus!", "That is splendid!", "Gifted result!",
            "Good answer!", "Impressive delivery!", "You're unstoppable now!", "A+!", "Super thinking!", "Magnificent job!", "Excellent!", "That's the spirit!", "Killing it!", "What a marvellous command!",
            "What a complete mastery!", "That is correct!", "Amazing quality!", "Fine skills!", "Keep moving!", "That is wonderful!", "Sharp quality!", "Perfect score!", "Right effort!", "Chef's kiss!",
            "What a top-notch focus!", "Excellent delivery!", "Exceptional!", "Majestic precision!", "Outstanding result!", "Incredible skill!", "Stunning standard!", "Impressive participation!", "Truly remarkable!", "That is precise!",
            "Pure talent!", "What a skilled delivery!", "Top-notch logic!", "What a extraordinary work!", "Exactly!", "Spot on!", "What a tremendous effort!", "What a pure knowledge!", "Correct!", "What a masterful thinking!",
            "What a stunning knowledge!", "First-class accuracy!", "Front-desk perfection!", "Right on the money!", "Great wisdom!", "What a outstanding accuracy!", "First class!", "Nice thinking!", "You've outdone yourself!", "That is amazing!",
            "Perfect!", "Skilled wisdom!", "What a expert insight!", "That is gifted!", "What a expert thinking!", "Absolutely right!", "That is first-class!", "Correct finesse!", "Precise result!", "That is expert!",
            "What a first-class professionalism!", "That is outstanding!", "What a good accuracy!", "That is sensational!", "Smart!", "What a incredible result!", "What a exquisite performance!", "That is extraordinary!", "Premier!", "You're at the top!",
            "First-class answer!", "Magnificent precision!", "What a accurate engagement!", "Naturally!", "Stunning response!", "What a correct talent!", "What a splendid attention!", "Good thinking!", "What a perfect talent!", "Stellar attention!",
            "That's perfect!", "Marvellous input!", "What a excellent accuracy!", "Sterling response!", "Keep going!", "Spectacular!", "You've got the touch!", "You're a legend!", "Perfect answer!", "What a masterful performance!",
            "What a spot-on expertness!", "Super standard!", "Stunning delivery!", "On fire!", "What a nice standard!", "What a expert engagement!", "Complete response!", "Precise input!", "Perfect delivery!", "Flawless logic!",
            "What a good knowledge!", "What a brilliant standard!", "Good!", "What a absolute precision!", "Superior!", "Sterling performance!", "Sharp knowledge!", "What a exact standard!", "That is brilliant!", "Nice delivery!",
            "You're smart!", "That is smart!", "Accurate!", "What a exceptional finesse!", "That is remarkable!", "Spot-on response!", "Top-shelf performance!", "Total!", "What a complete participation!", "Peerless!",
            "Winner's circle!", "Perfect response!", "What a elite job!", "What a absolute job!", "Exact!", "Phenomenal participation!", "Flawless service!", "What a tremendous expertness!", "What a spectacular delivery!", "That is stunning!",
            "What a elite precision!", "That is nice!", "What a precise accuracy!", "Exact logic!", "You're on fire!", "Gifted expertness!", "What a magnificent attention!", "That is exceptional!", "Incredible!", "Superb delivery!",
            "What a impressive answer!", "You're a master!", "Impressive expertness!", "Legendary!", "Beyond compare!", "Super work!", "Complete quality!", "Exact input!", "What a smart precision!", "That is spectacular!",
            "Indeed!", "Wonderful focus!", "Certainly!", "What a stellar mastery!", "Flawless!", "Housekeeping hero!", "Right thinking!", "Sharp logic!", "Tremendous thinking!", "Top-grade work!",
            "What a great command!", "What a excellent job!", "Impressive command!", "What a nice execution!", "Top-notch skills!", "Gold medal performance!", "What a nice accuracy!", "Expert focus!", "You're a shining star!", "What a superb grace!",
            "Top-tier performance!", "Splendid response!", "Right as rain!", "Exceptional attention!", "Bravo!", "Sterling!", "What a absolute attention!", "What a flawless precision!", "What a tremendous engagement!", "Keep that momentum!",
            "Exact focus!", "You're brilliant!", "That is pure!", "Accurate focus!", "What a masterful grace!", "Complete thinking!", "What a sensational response!", "What a stunning command!", "That is complete!", "What a amazing skills!",
            "Right hospitality!", "Complete effort!", "That is excellent!", "Outstanding logic!", "What a remarkable professionalism!", "Wonderful participation!", "First-class professionalism!", "Exactly right!", "A work of art!", "Absolute effort!",
            "What a nice expertness!", "Top-notch thinking!", "You nailed it!", "What a outstanding work!", "What a spectacular expertness!", "Complete!", "What a good professionalism!", "That is magnificent!", "Majestic answer!", "Success!",
            "Impressive!", "Masterful quality!", "Smart finesse!", "Pure finesse!", "What a top-notch response!", "A perfect result!", "What a flawless hospitality!", "Brilliant effort!", "What a brilliant service!", "What a exact engagement!",
            "Phenomenal!", "Breathtaking!", "Pure gold!", "That is exact!", "First-class effort!", "You're a superstar!", "What a complete work!", "Smart grace!", "What a smart accuracy!", "Expert delivery!",
            "What a sensational job!", "You're making it look easy!", "What a flawless knowledge!", "Simply superb!", "Amazing job!", "Sharp!", "What a marvellous logic!", "Superb!", "Masterful!", "What a right finesse!",
            "What a great effort!", "What a complete professionalism!", "Brilliantly executed!", "What a exquisite quality!", "You got it!", "What a gifted answer!", "A masterclass!", "You're a genius at this!", "Wonderful!", "What a wonderful thinking!",
            "What a splendid talent!", "What a first-class focus!", "Nonpareil!", "You're an inspiration!", "That is perfect!", "What a impressive accuracy!", "Keep it up!", "Masterpiece!", "Skilled!", "Flawless accuracy!",
            "Majestic!", "What a spectacular answer!", "Accurate attention!", "Expert!", "Exceptional execution!", "That is elite!", "What a top-notch finesse!", "First-class!", "Right!", "Strikingly good!",
            "Crushing it!", "What a exact grace!", "Smart execution!", "Incredible focus!", "High five!", "Tremendous!", "That is fine!", "Sensational logic!", "What a skilled talent!", "That is sterling!",
            "Extraordinary performance!", "What a magnificent thinking!", "Sterling delivery!", "What a remarkable knowledge!", "Absolutely!", "World-class!", "Wonderful command!", "What a majestic expertness!", "Accurate delivery!", "Incredible knowledge!",
            "What a impressive result!", "Brilliant thinking!", "What a exquisite thinking!", "Fantastic!", "Correct again!", "You're a genius!", "Expert thinking!", "A true expert!", "Pure precision!", "Sommelier status!",
            "Marvellous!", "Elite!", "In a league of your own!", "Simply the best!", "You're doing great!", "Extraordinary!", "You're on the right track!", "Spectacular execution!", "Unsurpassed!", "You're a pro!",
            "Precise!", "What a phenomenal engagement!", "You're a visionary!", "That is total!", "Amazing!", "Top notch!", "You're on top of things!", "What a right insight!", "What a sharp job!", "Remarkable mastery!",
            "What a stellar accuracy!", "Nice!", "You're the GOAT!", "Total service!", "What a elite accuracy!", "What a nice finesse!", "Fine!", "Amazing expertness!", "Wonderful knowledge!", "Magnificent effort!",
            "That is marvellous!", "That is tremendous!", "Magnificent!", "What a excellent precision!", "Stunning!", "Victory is yours!", "You're a star!", "What a exquisite expertness!", "Expert participation!", "Matchless!",
            "Excellent logic!", "Impressive insight!", "What a top-notch command!", "Absolute input!", "You've won this round!", "Wow!", "Aced it!", "You're right!", "Nice work!", "What a correct grace!",
            "First-rate!", "What a right grace!", "Outstanding precision!", "That is stellar!", "Awesome!", "You've got it!", "Perfect command!", "Supreme!", "Masterful professionalism!", "What a top-notch result!",
            "Amazing response!", "What a elite service!", "Outstanding!", "What a stellar expertness!", "Correct expertness!", "Extraordinary logic!", "Gifted!", "Impressive hospitality!", "Perfectly stated!", "Top tier!",
            "Precise job!", "Way to go!", "Grand Slam!", "That is spot-on!", "What a stellar result!", "What a perfect knowledge!", "Gold medal!", "Stunning job!", "What a fine work!", "Majestic hospitality!",
            "Excellent knowledge!", "Stellar mastery!", "That is top-notch!", "Flawless effort!", "You're a wiz!", "Excellent participation!", "What a majestic wisdom!", "Absolute!", "That is flawless!", "Legendary work!",
            "Accurate thinking!", "What a gifted wisdom!", "That is incredible!", "Phenomenal attention!", "That is exquisite!", "That is skilled!", "Extraordinary professionalism!", "Top-of-the-line!", "Sensational!", "What a pure grace!",
            "You're improving fast!", "Fine job!", "A+ answer!", "Precise delivery!", "Victory!", "Exquisite!", "Nailed it!", "A+ insight!", "Super!", "Tremendous participation!",
            "Total input!", "Exact thinking!", "Michelin-grade!", "What a skilled knowledge!", "Splendid!", "That is phenomenal!", "What a expert grace!", "Absolute service!", "Remarkable!", "That is masterful!"
        ],
        incorrect: [
            "Not quite... Stay focused!", "Revisit the menu.", "Don't give up!", "Uh oh, the menu.", "Give it another shot!", "Careful now, the option.", "Minor slip in... Try it once more!", "Not a perfect match!", "Let's review... Next one!", "Not quite the standard.",
            "Oopsie, the menu.", "Oops!, keep trying!", "Almost, you're getting closer!", "Nearly... Room for improvement!", "No luck!", "Not the answer this time!", "Revisit the detail.", "A bit off... You're getting closer!", "Just missed the standard.", "Keep up the momentum!",
            "Not the right pick this time!", "Nearly the selection.", "Oopsie,, one more time!", "Nearly, room for improvement!", "Not quite, keep your head up!", "Oopsie,... Focus up!", "Oopsie, the order.", "Oopsie,... Mistakes help you learn!", "Give it another whirl!", "Just missed the fact.",
            "Let's review, one more time!", "Revisit... Study that!", "Slight error in... Focus up!", "Wrong way!", "Wrong choice!", "Not there yet!", "Oopsie,... Don't stop now!", "Not quite a masterpiece!", "Almost, next one!", "Keep up the hard work!",
            "Not quite a victory!", "Hold on,... Room for improvement!", "Think about this one.", "Oopsie, the detail.", "Minor slip in, don't stop now!", "Not the correct option!", "Oops!, let's polish this!", "Let's try that again!", "Keep moving forward!", "Just missed the response.",
            "My apologies,, keep practicing!", "A bit off the logic.", "Oopsie,... You can do this!", "Revisit, one more time!", "Next one!", "Revisit, mistakes help you learn!", "Minor slip in... Focus up!", "Slight error in, learning takes time!", "Careful now,, let's polish this!", "Hold on,, stay determined!",
            "Give it more thought!", "You're getting closer!", "Not what we're looking for!", "Try once again!", "Oops!, don't lose heart!", "You'll get it eventually!", "Not a match!", "Not quite a bullseye yet!", "Hold on,... One more time!", "Oops!... Keep practicing!",
            "Not quite through yet!", "Hold on,... You're getting closer!", "Uh oh,, one more time!", "Careful now,... Room for improvement!", "Guess again!", "A bit off... Don't give up!", "Careful now, the selection.", "Keep trying!", "Uh oh, this one.", "Not exactly!",
            "My apologies,, stay determined!", "Wait, check that answer.", "Nearly... Try again!", "Wait, check... Almost there!", "My apologies,... Let's polish this!", "Wait, check the reservation.", "Careful now,, mistakes help you learn!", "Not the correct move!", "Uh oh,... You're getting closer!", "Uh oh,... Almost there!",
            "Not quite the right move!", "Wait, check, each try makes you better!", "Don't lose heart!", "Not quite there!", "Just missed the reservation.", "Try again!", "Hold on,, keep practicing!", "Revisit, focus up!", "Oops!... Try a different path!", "Getting closer!",
            "Careful now, the procedure.", "Hold on,, don't stop now!", "Close, but no... Mistakes help you learn!", "Not quite the selection.", "Not quite... Try a different path!", "Hold on, the reservation.", "Not the right conclusion!", "Not quite... One more time!", "Stay focused!", "Hold on,... Stay determined!",
            "Close, but no, mistakes help you learn!", "Oops!... Don't lose heart!", "Oops!, keep your head up!", "Oops!, don't give up!", "Let's review the logic.", "Close, but no the selection.", "Study that one again!", "Oops! the procedure.", "Uh oh,, stay determined!", "Think about... Wait, let's rethink!",
            "Careful now,... Try a different path!", "A bit off the reservation.", "Just missed it!", "Oops! the response.", "Nearly... Try a different path!", "Better luck next time!", "Let's review, keep your head up!", "Oopsie,... Keep practicing!", "Not quite a success yet!", "Not quite there yet!",
            "My apologies,, keep your head up!", "Give it another attempt!", "Revisit... You can do this!", "Stay determined!", "My apologies,, mistakes help you learn!", "Not the one!", "Slight error in the selection.", "Each try makes you better!", "Keep at it!", "Just missed, don't stop now!",
            "Close, but no... Stay determined!", "Close, but no the choice.", "Wait, check, wait, let's rethink!", "Just missed... Keep practicing!", "Careful now,, room for improvement!", "Nearly, try again!", "Wait, check... Study that!", "Hold on,... Study that!", "Almost!", "Close, but no... Keep practicing!",
            "A bit off... Study that!", "Not quite the right turn!", "Wait, check... Keep your head up!", "Not this time, sorry!", "Hold on,... Focus up!", "Not quite spot on!", "My apologies,... Don't lose heart!", "Don't stop now!", "Wait, check, don't give up!", "Wait, check, give it another shot!",
            "Nearly the option.", "Not quite a triumph!", "Keep your head up!", "Careful now, the fact.", "Keep going!", "Think about... Try again!", "Close, but no the standard.", "Close, but no the order.", "Wrong!", "Nearly... Don't lose heart!",
            "Think about, wait, let's rethink!", "Slight error in... Keep trying!", "Oops!... You can do this!", "Sorry!", "My apologies,, study that!", "My apologies,, focus up!", "Close, but no... Try a different path!", "A bit off the detail.", "Not right yet!", "A bit off, don't stop now!",
            "Let's review, learning takes time!", "Just missed... Don't lose heart!", "Let's review, try it once more!", "Minor slip in... Give it another shot!", "Wait, check... Each try makes you better!", "Incorrect choice!", "Nearly the logic.", "Uh oh,, let's polish this!", "Wait, let's rethink!", "Close, but no... Study that!",
            "Wait, check, try a different path!", "Close, but no, room for improvement!", "Slight error in... Don't give up!", "A bit off!", "Minor slip in the procedure.", "Let's review the procedure.", "Almost the menu.", "Uh oh,, try it once more!", "Just missed... Give it another shot!", "Not quite the right path!",
            "Minor slip in this one.", "A bit off the option.", "Give it another chance!", "My apologies, the option.", "Uh oh,, don't stop now!", "Minor slip in, don't give up!", "Not a bullseye!", "Let's review, keep trying!", "Oopsie,... Room for improvement!", "Room for improvement!",
            "Slight error in the option.", "Uh oh,... Study that!", "Let's review the choice.", "Try again later!", "Not quite on target!", "Close, but no this one.", "Careful now, that answer.", "Let's try a new approach!", "Let's try a fresh start!", "Not quite, almost there!",
            "Minor slip in, focus up!", "Not quite what was expected!", "Another try!", "Try harder!", "Let's rethink that!", "Oops!... Wait, let's rethink!", "Uh oh, the selection.", "That's not right!", "Wait, check the logic.", "Almost there!",
            "A bit off, let's polish this!", "Oops!... Learning takes time!", "Almost... Keep practicing!", "Not this time!", "My apologies,... Try a different path!", "Wait, check the option.", "Wait, check, you can do this!", "Hold on,... Try again!", "Uh oh,... Don't give up!", "Let's review... Don't give up!",
            "A bit off the menu.", "Revisit, don't stop now!", "Not the right choice at all!", "Let's review... Keep trying!", "Careful now, the choice.", "Try exploring another idea!", "Close, but no... Keep your head up!", "Needs more work!", "Not quite a winner!", "Oops!... Study that!",
            "Not exactly what we need!", "My apologies,, try again!", "Oops!... Let's polish this!", "Maybe next time!", "Almost... One more time!", "Nearly the fact.", "Just missed this one.", "Hold on,, don't give up!", "Learning takes time!", "Revisit this one.",
            "Careful now,, don't lose heart!", "Think about... Try a different path!", "Think about, you can do this!", "Wrong answer!", "Close, but no... One more time!", "Oops!... Almost there!", "Not quite the menu.", "Not quite correct!", "Stay engaged!", "Keep working!",
            "Just missed, you can do this!", "Minor slip in... Study that!", "Almost had it!", "A bit off... Learning takes time!", "Minor slip in the standard.", "Stay in the game!", "Not quite in the bag!", "Careful now,, focus up!", "Let's polish this!", "Minor slip in the detail.",
            "Slight error in, wait, let's rethink!", "Not quite!", "A bit off the fact.", "Close, but no, keep practicing!", "Nearly, try it once more!", "My apologies,, one more time!", "Give it another look!", "Just missed... One more time!", "Wait, check, stay focused!", "Not quite, try it once more!",
            "Not quite... Mistakes help you learn!", "Revisit the reservation.", "Not quite, don't give up!", "Close, but no, don't give up!", "Oh no!", "That's not it!", "Wait, check... Let's polish this!", "Take a closer look!", "Just missed, one more time!", "Nearly... Give it another shot!",
            "Slight error in, stay focused!", "Let's review, try a different path!", "Let's try one more time!", "Minor slip in, wait, let's rethink!", "Wait, check the procedure.", "Careful now,, stay determined!", "Incorrect!", "Slight error in, keep trying!", "Revisit, keep practicing!", "Not the correct path here!",
            "Keep aiming high!", "Slight error in, you're getting closer!", "Hold on, the choice.", "Slight error in, one more time!", "Wait, check, try again!", "Think about, stay determined!", "Not the right answer now!", "My apologies,, don't stop now!", "Let's try a different path!", "Let's review the selection.",
            "My apologies,, keep trying!", "Think about, let's polish this!", "Revisit the fact.", "Let's try a different one!", "Wait, check... Learning takes time!", "Stay sharp!", "Mistakes help you learn!", "Keep up the effort!", "Uh oh, the reservation.", "Slight error in... Let's polish this!",
            "Not the right way!", "Revisit the standard.", "Minor slip in... Keep trying!", "Check your notes!", "Slight error in, try again!", "My apologies, the order.", "Keep up the practice!", "Not quite... You can do this!", "Just missed... Focus up!", "Oopsie,... Give it another shot!",
            "Try a different option!", "Nearly, study that!", "One more time!", "Think about... Study that!", "Not the right choice for this!", "Nearly... Focus up!", "My apologies, the menu.", "Think about... You can do this!", "Just missed... Mistakes help you learn!", "Slight error in, study that!",
            "Keep trying your best!", "Slight error in... Each try makes you better!", "Not quite at the finish line!", "Minor slip in the logic.", "Not quite... Don't lose heart!", "Think about... Mistakes help you learn!", "Oopsie, the option.", "Careful now,... Try it once more!", "Hold on,, don't lose heart!", "Revisit the logic.",
            "Slight error in... Stay focused!", "Give it another shot at success!", "Hold on,, try again!", "Slight error in, almost there!", "Keep learning!", "My apologies, the response.", "Revisit... Try a different path!", "Minor slip in, keep your head up!", "Let's review... Try again!", "Uh oh,, learning takes time!",
            "A bit off the order.", "Close, but no!", "Minor slip in... Room for improvement!", "You can do this!", "Close, but no... Each try makes you better!", "Wait, check, keep trying!", "Uh oh,... Let's polish this!", "Let's review... Give it another shot!", "Oops!, keep practicing!", "Not the winning pick!",
            "Not quite, stay determined!", "Hold on, the logic.", "Almost, try it once more!", "Think about... Don't lose heart!", "Close, but no the option.", "Wait, check... Try again!", "My apologies,... You can do this!", "Not the right selection!", "A bit off, keep trying!", "Study that!",
            "Focus up!", "Revisit, learning takes time!", "Revisit... Wait, let's rethink!", "Hold on,, keep trying!", "Just missed, stay determined!", "Careful now,, don't give up!", "Just missed, study that!", "Not quite the right fit!", "Not quite, try again!", "Wait, check... Wait, let's rethink!",
            "A bit off the response.", "My apologies,, you're getting closer!", "Just missed, try a different path!", "Just missed, focus up!", "Stay positive!", "Almost... Learning takes time!", "Nearly the reservation.", "Nearly the order.", "Keep up the spirit!", "Not quite, learning takes time!",
            "Hold on, the standard.", "My apologies, the selection.", "Give it one more go!", "Careful now,... Don't stop now!", "Nearly, keep practicing!", "Not the right response!", "A bit off... Each try makes you better!", "Minor slip in... Don't stop now!", "Keep practicing!", "Slight error in this one.",
            "Let's try again tomorrow!", "Close, but no, try a different path!", "Think about, stay focused!", "Not the right answer!", "My apologies, the fact.", "Slight error in... Don't stop now!", "A bit off, try a different path!", "Keep believing!", "Revisit... Almost there!", "Not the correct choice today!",
            "A bit off... Wait, let's rethink!", "Not quite... Keep practicing!", "Revisit, try a different path!", "Wrong path!", "Minor slip in the fact.", "Revisit that one!", "Nearly... Keep practicing!", "Oopsie,... Don't give up!", "Think it over!", "Oopsie,... Keep your head up!",
            "Not correct!", "You can do better!", "Slight error in, try it once more!", "Almost the detail.", "Oops! the reservation.", "Let's try another one!", "Nope!", "Close, but no... You're getting closer!", "Nearly, mistakes help you learn!", "Nearly, next one!",
            "Almost... You're getting closer!", "A bit off... One more time!", "Oops!, focus up!", "Almost, almost there!", "Almost that answer.", "Just missed, let's polish this!", "Revisit, don't lose heart!", "Oopsie,, almost there!", "Not quite on the mark!", "Keep pushing!",
            "Oopsie, the response.", "Oopsie, the choice.", "Give it another go-around!", "Oops!", "Almost... Each try makes you better!", "Close, but no, give it another shot!", "Think about the reservation.", "Think about, don't lose heart!", "Wait, check... Don't stop now!", "Not quite a hit!",
            "Wait, check, room for improvement!", "A bit off... Room for improvement!", "Hold on,... Let's polish this!", "Careful now,... Don't give up!", "Let's review the menu.", "Think about, don't stop now!", "Let's review, don't give up!", "Hold on, that answer.", "Wait, check the selection.", "Just missed, learning takes time!",
            "Oopsie,... Try it once more!", "Oops!, room for improvement!", "Let's review the fact.", "Let's review... Mistakes help you learn!", "A bit off, next one!", "Try once more!", "Revisit, don't give up!", "Slight error in, don't stop now!", "Not quite, don't lose heart!", "Close, but no the fact.",
            "Let's review, you're getting closer!", "Nearly right!", "Try to refocus!", "Try it once more!", "Uh oh,... Stay focused!", "Not quite, next one!", "Almost... Don't stop now!", "Wait, check, next one!", "Try a different path!", "Keep striving!"
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

    // ─── Lesson Audio Data (Embedded for local reliability) ─────────────────
    const lessonAudioData = {
        "1": "Welcome to Lesson 1. Today we explore the world's rainforests. These intricate ecosystems hold the majority of our biological wealth, acting as the lungs of the earth. We will study the canopy layers, understand the rapid nutrient cycling, and uncover the effects of deforestation and fragmentation on these lush but fragile habitats.",
        "2": "Welcome to Lesson 2. Today we focus on our vast oceans. Oceans are the lifeblood of our planet, regulating global climate and absorbing heat. We will investigate the impact of plastic pollution, the consequences of ocean acidification, and the immense biodiversity that lives hidden beneath the waves in different pelagic zones.",
        "3": "Welcome to Lesson 3. Let's dive into coral reefs. Often called the rainforests of the sea, these vibrant structures support incredible biodiversity. We will explore the symbiotic relationship between coral polyps and algae, while confronting the urgent threats of rising sea temperatures and mass coral bleaching events worldwide.",
        "4": "Welcome to Lesson 4. We journey out into the deep sea today. Descending into the Midnight Zone brings us face to face with incredible adaptations like bioluminescence and specialized pressure resistance. We will explore deep ocean trenches, hydrothermal vents, and the bizarre creatures that thrive in perpetual darkness.",
        "5": "Welcome to Lesson 5. This lesson addresses the global freshwater crisis. Although essential for all life, accessible freshwater is a remarkably scarce resource. We will examine the depletion of underground aquifers, the impact of agricultural runoff, and the urgent need for conservation methods to ensure clean water for future generations.",
        "6": "Welcome to Lesson 6. Today we travel to the freezing Arctic. The polar regions serve as crucial climate regulators through the Albedo effect. We will study the dramatic consequences of melting sea ice, thawing permafrost, and the threats facing iconic species like polar bears as their frozen habitats disappear.",
        "7": "Welcome to Lesson 7. Let's explore deserts and the process of desertification. Deserts are harsh environments where life thrives through remarkable adaptations for heat tolerance and water conservation. We will also discuss the human impact of overgrazing and deforestation, which cause fertile lands to turn into barren wastelands.",
        "8": "Welcome to Lesson 8. Today we elevate our learning to mountain ecosystems. High altitudes present unique survival challenges, and we will observe the fascinating concept of vertical zonation. We'll examine how life changes as altitude increases, and how climate change is devastating sensitive alpine habitats globally.",
        "9": "Welcome to Lesson 9. Discover the vital importance of wetlands today. Swamps, marshes, and bogs act as nature's water filters and are essential carbon sinks. We will learn how these highly diverse ecosystems provide critical breeding grounds for countless species and protect coastlines from severe flooding and erosion.",
        "10": "Welcome to Lesson 10. Our topic today is animal migration. Countless species embark on massive seasonal journeys across the globe to breed and feed. We will discover exactly how animals navigate using stars and magnetic fields, and what environmental changes threaten these spectacular, life-sustaining migratory routes today.",
        "11": "Welcome to Lesson 11. Learn about the crucial role of apex predators. From wolves to sharks, top predators maintain ecological balance by controlling prey populations. We will uncover what happens to an ecosystem when keystone species are removed, highlighting the importance of protecting these magnificent and powerful hunters.",
        "12": "Welcome to Lesson 12. Today we confront the threat of invasive species. Non-native species can wreak havoc when introduced to new environments without natural enemies. We will examine historical examples of biological invasions, understand how they disrupt native food webs, and explore strategies for prevention and control everywhere.",
        "13": "Welcome to Lesson 13. We focus our attention on endangered species. The incredible rate of biodiversity loss is largely driven by habitat destruction, poaching, and accelerated climate change. We will highlight inspirational conservation successes while acknowledging the massive global efforts still required to prevent total extinction of vulnerable fauna.",
        "14": "Welcome to Lesson 14. Delve into the techniques of sustainable agriculture. As global populations rise, ensuring food security without destroying natural habitats becomes paramount. We will learn about the transformative potential of permaculture, vertical farming, and agroforestry in building resilient, eco-friendly systems that mimic complex natural patterns perfectly.",
        "15": "Welcome to Lesson 15. Today we analyze the power of renewable energy. Transitioning away from fossil fuels to solar, wind, and hydroelectric power is essential for mitigating severe climate change. We will investigate how these technologies harness the earth's natural, replenishing cycles to create a sustainable electrical green grid successfully.",
        "16": "Welcome to Lesson 16. Let's study the emerging field of urban ecology. As majority populations cluster in cities, designing sustainable urban spaces is crucial. We will explore the development of sponge cities, green roofs, and urban wildlife corridors that mitigate the heat island effect and improve general air quality significantly.",
        "17": "Welcome to Lesson 17. Today we address the environmental cost of fast fashion. The rapid production of trendy clothing generates massive textile waste, water pollution, and harsh labor conditions. We will focus on the principles of ethical fashion and how choosing sustainable, enduring materials can significantly minimize environmental degradation continuously.",
        "18": "Welcome to Lesson 18. Embrace the core principles of a zero-waste lifestyle. We will explore how reducing consumption, reusing items, and actively composting organic matter can drastically cut down landfill accumulation. Learn practical strategies to eliminate single-use plastics and foster personal habits that respect and preserve our shared environment.",
        "19": "Welcome to Lesson 19. Understand the transformative concept of the circular economy. Moving away from a linear, throw-away culture, the circular economy focuses on designing out waste entirely. We will examine the cradle-to-cradle philosophy, where products are continually reused, and natural systems are thoughtfully regenerated for optimal long-term sustainability.",
        "20": "Welcome to Lesson 20. Discover how modern technology empowers conservation. Eco-tech innovations, including drones, satellite tracking, and artificial intelligence, are revolutionizing how we study and protect vulnerable ecosystems. We will learn how smart, data-driven approaches are allowing us to monitor wildlife populations, track deforestation, and combat illegal poaching efficiently."
    };

    const pageAudioData = {
        "index.html": "Welcome to our beautiful nature exploration site.",
        "about.html": "Learn about our mission to protect nature.",
        "resources.html": "Explore great tools for nature and conservation.",
        "gallery.html": "View stunning photos of wild natural landscapes.",
        "faq.html": "Find answers to your common nature questions.",
        "support.html": "Contact our team for any required assistance.",
        "events.html": "Join our upcoming nature conservation events today.",
        "blog.html": "Read the latest stories regarding environmental conservation.",
        "community.html": "Connect with fellow nature and wildlife environment lovers."
    };

    function initPageAudio() {
        const title = document.querySelector('h1') || document.querySelector('.topic-title');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageText = pageAudioData[currentPage];

        if (!title || !pageText) return;

        let container = document.querySelector('.topic-title-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'topic-title-container';
            title.parentNode.insertBefore(container, title);
            container.appendChild(title);
        }

        if (container.querySelector('.audio-btn-page')) return;

        const playBtn = document.createElement('button');
        playBtn.className = 'audio-btn audio-btn-page';
        playBtn.innerHTML = '🔊';
        playBtn.title = 'Listen to Page Introduction';
        container.appendChild(playBtn);

        let isPlaying = false;

        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                speechSynthesis.cancel();
                isPlaying = false;
                playBtn.innerHTML = '🔊';
            } else {
                speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(pageText);
                utterance.lang = 'en-US';
                utterance.rate = 0.9;

                utterance.onend = () => {
                    isPlaying = false;
                    playBtn.innerHTML = '🔊';
                };

                speechSynthesis.speak(utterance);
                isPlaying = true;
                playBtn.innerHTML = '⏹️';
            }
        });
    }

    function initLessonAudio() {
        const title = document.querySelector('h1') || document.querySelector('.topic-title');
        const lessonMatch = document.title.match(/Lesson\s+(\d+):/i);

        if (!title || !lessonMatch) return;

        const lNum = lessonMatch[1];
        const lessonText = lessonAudioData[lNum];

        if (!lessonText) return;

        let container = document.querySelector('.topic-title-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'topic-title-container';
            title.parentNode.insertBefore(container, title);
            container.appendChild(title);
        }

        // Avoid adding multiple buttons
        if (container.querySelector('.audio-btn:not(.audio-btn-page)')) return;

        const playBtn = document.createElement('button');
        playBtn.className = 'audio-btn';
        playBtn.innerHTML = '🔊';
        playBtn.title = 'Listen to Introduction';
        container.appendChild(playBtn);

        let isPlaying = false;
        let utterance = null;

        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                speechSynthesis.cancel();
                isPlaying = false;
                playBtn.classList.remove('playing');
                playBtn.innerHTML = '🔊';
            } else {
                speechSynthesis.cancel();
                utterance = new SpeechSynthesisUtterance(lessonText);
                utterance.lang = 'en-US';
                utterance.rate = 0.9;

                utterance.onend = () => {
                    isPlaying = false;
                    playBtn.classList.remove('playing');
                    playBtn.innerHTML = '🔊';
                };

                speechSynthesis.speak(utterance);
                isPlaying = true;
                playBtn.classList.add('playing');
                playBtn.innerHTML = '⏹️';
            }
        });
    }

    initLessonAudio();
    initPageAudio();
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
