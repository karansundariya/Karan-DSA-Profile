// Logos as image sources for the platforms
const icons = {
    codechef: `<img class="w-8 h-8 platform-icon" src="cfimg.png" alt="CodeChef Logo">`,
    leetcode: `<img class="w-8 h-8 platform-icon" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode Logo">`,
    geeksforgeeks: `<img class="w-8 h-8 platform-icon" src="gfgimg.png" alt="GeeksforGeeks Logo">`
};

// Profile data 
const profiles = [
    {
        platform: "LeetCode",
        username: "karan__777",
        maxRating: "1852 (Top 5% worldwide)",
        problemsSolved: "500+",
        url: "https://leetcode.com/u/karan__777/",
        icon: icons.leetcode,
        color: "from-yellow-500 to-orange-500",
        progressColor: "bg-yellow-500",
        progressPercent: 70
    },
    {
        platform: "GeeksforGeeks",
        username: "karan__777",
        maxRating: "1760 (3 Star)",
        problemsSolved: "150+",
        url: "https://www.geeksforgeeks.org/user/karan__777/",
        icon: icons.geeksforgeeks,
        color: "from-blue-500 to-blue-600",
        progressColor: "bg-blue-400",
        progressPercent: 60
    },
    {
        platform: "CodeChef",
        username: "karansundariya",
        maxRating: "1550",
        problemsSolved: "100+",
        url: "https://www.codechef.com/users/karan_sundariya",
        icon: icons.codechef,
        color: "from-purple-500 to-indigo-600",
        progressColor: "bg-indigo-500",
        progressPercent: 85
    }
];

// Function to create profile cards 
function createProfileCards() {
    const container = document.getElementById('profiles-container');
    
    profiles.forEach(profile => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'profile-card rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl';
        
        // Create card content
        card.innerHTML = `
            <div class="bg-gradient-to-r ${profile.color} p-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="text-white opacity-90">
                        ${profile.icon}
                    </div>
                    <span class="text-xs font-semibold uppercase tracking-wider bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        ${profile.platform}
                    </span>
                </div>
                
                <h3 class="text-2xl font-bold text-white mb-1">
                    ${profile.problemsSolved}
                </h3>
                <p class="text-sm text-white text-opacity-80 mb-0">
                    Problems Solved
                </p>
            </div>
            
            <div class="p-6">
                <div class="mb-6">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-sm text-gray-300">Max Rating</span>
                        <span class="text-sm font-semibold ${profile.maxRating !== 'N/A' ? 'text-white' : 'text-gray-400'}">
                            ${profile.maxRating}
                        </span>
                    </div>
                    <div class="stats-bar">
                        <div class="stats-progress ${profile.progressColor} transition-all duration-300 ease-in-out" style="width: ${profile.progressPercent}%"></div>
                    </div>
                </div>
                
                <a 
                    href="${profile.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="visit-btn block text-center py-3 px-4 rounded-lg border border-gray-700 text-white font-medium hover:border-white hover:bg-gray-800 transition-colors"
                >
                    View Profile
                </a>
            </div>
        `;
        
        // Add card to container with animation
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    createProfileCards();
    setTimeout(animateCards, 100);
    setTimeout(animateContactCards, 800);
    
    // Add typing animation effect to the header
    const headerText = document.querySelector('h1');
    const originalText = headerText.innerHTML;
    headerText.innerHTML = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            headerText.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 500);
});
