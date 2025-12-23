// script.js - Version corrigée sans erreur de déclaration multiple
console.log("Math Program Script Loaded - Version 2.0");

// Vérification des données - Version sécurisée
let appData = []; // Variable locale

try {
    if (typeof window.programData !== 'undefined' && Array.isArray(window.programData)) {
        appData = window.programData;
        console.log(`✓ programData loaded successfully with ${appData.length} chapters`);
        
        // Afficher les 3 premiers chapitres pour vérification
        console.log("First 3 chapters:", appData.slice(0, 3).map(ch => ({id: ch.id, title: ch.title})));
    } else {
        console.warn("⚠️ window.programData is not defined or not an array");
        console.warn("Available keys in window:", Object.keys(window).filter(k => k.includes('program') || k.includes('data')));
    }
} catch (error) {
    console.error("❌ Error accessing programData:", error);
}

// Application state
let currentChapter = null;
let currentFilter = "all";
let filteredChapters = [...appData];

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM fully loaded and parsed");
    console.log("Available chapters in appData:", appData.length);
    
    // Afficher un message si pas de données
    if (appData.length === 0) {
        console.error("❌ CRITICAL: No chapters found in appData!");
        alert("Warning: No chapters data loaded. Please check data/chapters-data.js file.");
    }
    
    initApp();
});

function initApp() {
    console.log(`🚀 Initializing app with ${appData.length} chapters`);
    
    // Masquer le loading de la sidebar
    setTimeout(() => {
        const sidebarLoading = document.getElementById('sidebarLoading');
        const chaptersList = document.getElementById('chaptersList');
        
        if (sidebarLoading) sidebarLoading.style.display = 'none';
        if (chaptersList) chaptersList.style.display = 'block';
    }, 300);
    
    renderChaptersList();
    setupEventListeners();
    
    // Check if there's a chapter ID in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const chapterId = urlParams.get('chapter');
    
    if (chapterId && appData.find(ch => ch.id == chapterId)) {
        const chapter = appData.find(ch => ch.id == chapterId);
        console.log(`📖 Loading chapter from URL: ${chapter.id} - ${chapter.title}`);
        selectChapter(chapter);
    } else {
        // Show home content by default
        showHomeContent();
    }
    
    // Mettre à jour le compteur de chapitres
    updateChapterCount();
}

function updateChapterCount() {
    const chapterCountElement = document.getElementById('chapterCount');
    if (chapterCountElement && appData.length > 0) {
        chapterCountElement.textContent = `${appData.length} Chapters`;
    }
}

// Show home content
function showHomeContent() {
    console.log("🏠 Showing home content");
    const homeContent = document.getElementById('homeContent');
    const chapterDetails = document.getElementById('chapterDetails');
    
    if (homeContent) {
        homeContent.style.display = 'block';
        console.log("✅ Home content displayed");
    } else {
        console.error("❌ Home content element not found");
    }
    
    if (chapterDetails) chapterDetails.style.display = 'none';
    currentChapter = null;
    
    // Update button appearance
    updateChapterButtonsAppearance();
}

// Render chapters list
function renderChaptersList() {
    const chaptersList = document.getElementById('chaptersList');
    
    if (!chaptersList) {
        console.error("❌ ERROR: Element #chaptersList not found!");
        return;
    }
    
    // Effacer le contenu
    while (chaptersList.firstChild) {
        chaptersList.removeChild(chaptersList.firstChild);
    }
    
    // Filter chapters according to active filter
    filteredChapters = appData.filter(chapter => {
        if (currentFilter === "all") return true;
        return chapter.category === currentFilter;
    });
    
    console.log(`📋 Rendering ${filteredChapters.length} chapters (filter: ${currentFilter})`);
    
    // If no chapters match the filter
    if (filteredChapters.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.style.padding = '20px';
        emptyState.innerHTML = `
            <i class="fas fa-filter"></i>
            <h4>No chapters found</h4>
            <p>No chapters match the selected filter</p>
        `;
        chaptersList.appendChild(emptyState);
        return;
    }
    
    // Create chapter list elements
    filteredChapters.forEach(chapter => {
        const chapterItem = document.createElement('li');
        chapterItem.className = 'chapter-item';
        
        const isActive = currentChapter && currentChapter.id === chapter.id;
        const iconType = isActive ? 'down' : 'right';
        
        chapterItem.innerHTML = `
            <button class="chapter-btn ${isActive ? 'active' : ''}" data-id="${chapter.id}">
                <div style="display: flex; align-items: center; flex: 1;">
                    <span class="chapter-number">${chapter.id}</span>
                    <span style="flex: 1; text-align: left; padding-right: 10px;">${chapter.title}</span>
                </div>
                <i class="fas fa-chevron-${iconType}"></i>
            </button>
            <div class="chapter-links" style="padding: 10px; background: #f9f9f9; display: ${isActive ? 'block' : 'none'};">
                <a href="chapters/${chapter.filename}" class="btn-secondary" style="display: block; margin-bottom: 5px; text-align: center;" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Open Full Page
                </a>
            </div>
        `;
        
        chaptersList.appendChild(chapterItem);
    });
    
    // Reattach events to buttons
    attachChapterButtonEvents();
}

// Render chapter details
function renderChapterDetails(chapter) {
    console.log(`📄 Rendering chapter details: ${chapter.id} - ${chapter.title}`);
    
    // Hide home content and show details
    const homeContent = document.getElementById('homeContent');
    const chapterDetails = document.getElementById('chapterDetails');
    
    if (homeContent) homeContent.style.display = 'none';
    if (chapterDetails) {
        chapterDetails.style.display = 'block';
    } else {
        console.error("❌ Chapter details element not found");
        return;
    }
    
    // Update title and description
    const chapterTitle = document.getElementById('chapterTitle');
    const chapterDescription = document.getElementById('chapterDescription');
    
    if (chapterTitle) chapterTitle.textContent = `Chapter ${chapter.id}: ${chapter.title}`;
    if (chapterDescription) chapterDescription.textContent = chapter.description;
    
    // Update links
    const viewFullLink = document.getElementById('viewFullChapter');
    if (viewFullLink) {
        viewFullLink.href = `chapters/${chapter.filename}`;
        viewFullLink.target = '_blank';
    }
    
    // Render sections
    const sectionsContainer = document.getElementById('sectionsContainer');
    if (sectionsContainer) {
        sectionsContainer.innerHTML = '';
        
        if (chapter.sections && chapter.sections.length > 0) {
            chapter.sections.forEach(section => {
                const sectionCard = document.createElement('div');
                sectionCard.className = 'section-card';
                
                sectionCard.innerHTML = `
                    <h3>
                        <span>${section.title}</span>
                        <span class="section-number">${section.number}</span>
                    </h3>
                    <div class="section-content">
                        <p>
                            <span>Page:</span>
                            <span class="page-number">${section.page}</span>
                        </p>
                        ${section.summary ? `<p><span>Summary:</span> <span>${section.summary}</span></p>` : ''}
                        ${section.exercises ? `<p><span>Exercises:</span> <span>${section.exercises}</span></p>` : ''}
                    </div>
                `;
                
                sectionsContainer.appendChild(sectionCard);
            });
        } else {
            sectionsContainer.innerHTML = '<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><h4>No sections available</h4><p>This chapter has no sections defined.</p></div>';
        }
    }
}

// Select a chapter
function selectChapter(chapter) {
    console.log(`👉 Selecting chapter: ${chapter.id} - ${chapter.title}`);
    
    if (!chapter) {
        console.error("❌ Cannot select chapter: chapter is undefined");
        return;
    }
    
    currentChapter = chapter;
    renderChapterDetails(chapter);
    
    // Update URL without reloading page
    const url = new URL(window.location);
    url.searchParams.set('chapter', chapter.id);
    window.history.pushState({}, '', url);
    
    // Update button appearance
    updateChapterButtonsAppearance();
}

// Update chapter buttons appearance
function updateChapterButtonsAppearance() {
    const chapterBtns = document.querySelectorAll('.chapter-btn');
    console.log(`Updating appearance for ${chapterBtns.length} chapter buttons`);
    
    chapterBtns.forEach(btn => {
        const id = parseInt(btn.getAttribute('data-id'));
        const icon = btn.querySelector('i');
        const linksDiv = btn.nextElementSibling;
        
        if (currentChapter && id === currentChapter.id) {
            btn.classList.add('active');
            if (icon) icon.className = 'fas fa-chevron-down';
            if (linksDiv) linksDiv.style.display = 'block';
        } else {
            btn.classList.remove('active');
            if (icon) icon.className = 'fas fa-chevron-right';
            if (linksDiv) linksDiv.style.display = 'none';
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    console.log("🔧 Setting up event listeners");
    
    // Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            console.log(`🎚️ Filter changed to: ${filter}`);
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update current filter
            currentFilter = filter;
            
            // Render updated list
            renderChaptersList();
            
            // If chapters are filtered, show home content
            if (filteredChapters.length > 0) {
                // Try to keep current chapter if it's still visible
                const currentStillVisible = filteredChapters.find(ch => ch.id === currentChapter?.id);
                if (currentStillVisible) {
                    selectChapter(currentStillVisible);
                } else {
                    showHomeContent();
                }
            } else {
                showHomeContent();
            }
        });
    });
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm.length > 0) {
                console.log(`🔍 Searching for: "${searchTerm}"`);
            }
            
            // If search is empty, return to normal state
            if (searchTerm === '') {
                renderChaptersList();
                showHomeContent();
                return;
            }
            
            // Filter chapters according to search term
            const searchResults = appData.filter(chapter => {
                // Search in title and description
                if (chapter.title.toLowerCase().includes(searchTerm) || 
                    chapter.description.toLowerCase().includes(searchTerm)) {
                    return true;
                }
                
                // Search in sections
                if (chapter.sections && chapter.sections.some(section => 
                    (section.title && section.title.toLowerCase().includes(searchTerm)) ||
                    (section.number && section.number.toLowerCase().includes(searchTerm)))) {
                    return true;
                }
                
                return false;
            });
            
            console.log(`🔍 Found ${searchResults.length} results`);
            
            // Update chapters list with search results
            updateChaptersListWithSearchResults(searchResults);
            
            // If results are found, select the first one
            if (searchResults.length > 0) {
                // Try to keep current chapter if it's in results
                const currentInResults = searchResults.find(ch => ch.id === currentChapter?.id);
                if (currentInResults) {
                    selectChapter(currentInResults);
                } else {
                    selectChapter(searchResults[0]);
                }
            } else {
                // Show "no results" message
                const chaptersList = document.getElementById('chaptersList');
                if (chaptersList) {
                    chaptersList.innerHTML = `
                        <div class="empty-state" style="padding: 20px;">
                            <i class="fas fa-search"></i>
                            <h4>No results found</h4>
                            <p>No chapters match your search</p>
                        </div>
                    `;
                }
                
                showHomeContent();
            }
        });
    }
    
    // Generate pages button
    const generateBtn = document.getElementById('generatePagesBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("📄 Generating chapter pages");
            generateChapterPages();
        });
    }
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const chapterId = urlParams.get('chapter');
        console.log(`↩️ History changed, chapter in URL: ${chapterId}`);
        
        if (chapterId) {
            const chapter = appData.find(ch => ch.id == chapterId);
            if (chapter) {
                selectChapter(chapter);
            } else {
                showHomeContent();
            }
        } else {
            showHomeContent();
        }
    });
    
    // Quick action buttons from index.html (délégué)
    document.addEventListener('click', function(e) {
        // Check if clicked element has data-filter attribute
        const actionBtn = e.target.closest('.action-btn[data-filter]');
        if (actionBtn) {
            e.preventDefault();
            const filter = actionBtn.getAttribute('data-filter');
            console.log(`⚡ Quick action filter: ${filter}`);
            
            // Find and click the corresponding filter button
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (filterBtn) {
                filterBtn.click();
            }
        }
    });
    
    console.log("✅ Event listeners setup complete");
}

// Update chapters list with search results
function updateChaptersListWithSearchResults(results) {
    const chaptersList = document.getElementById('chaptersList');
    if (!chaptersList) return;
    
    // Effacer le contenu
    while (chaptersList.firstChild) {
        chaptersList.removeChild(chaptersList.firstChild);
    }
    
    if (results.length === 0) {
        return;
    }
    
    results.forEach(chapter => {
        const chapterItem = document.createElement('li');
        chapterItem.className = 'chapter-item';
        
        const isActive = currentChapter && currentChapter.id === chapter.id;
        
        chapterItem.innerHTML = `
            <button class="chapter-btn ${isActive ? 'active' : ''}" data-id="${chapter.id}">
                <div style="display: flex; align-items: center;">
                    <span class="chapter-number">${chapter.id}</span>
                    <span>${chapter.title}</span>
                </div>
                <i class="fas fa-chevron-${isActive ? 'down' : 'right'}"></i>
            </button>
        `;
        
        chaptersList.appendChild(chapterItem);
    });
    
    attachChapterButtonEvents();
}

// Attach events to chapter buttons
function attachChapterButtonEvents() {
    const chapterBtns = document.querySelectorAll('.chapter-btn');
    console.log(`🔗 Attaching events to ${chapterBtns.length} chapter buttons`);
    
    // Remove old event listeners by cloning
    chapterBtns.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
    
    // Get fresh references
    const freshChapterBtns = document.querySelectorAll('.chapter-btn');
    
    freshChapterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            console.log(`🖱️ Chapter button clicked: ${id}`);
            
            const chapter = appData.find(ch => ch.id === id);
            
            if (chapter) {
                selectChapter(chapter);
            } else {
                console.error(`❌ Chapter with id ${id} not found in appData`);
                alert(`Error: Chapter ${id} not found. Please refresh the page.`);
            }
        });
    });
}

// Generate individual chapter pages
function generateChapterPages() {
    if (appData.length === 0) {
        alert("No chapters data available. Cannot generate pages.");
        return;
    }
    
    if (!confirm(`This will generate ${appData.length} individual HTML pages for each chapter. Continue?`)) {
        return;
    }
    
    console.log(`🛠️ Generating ${appData.length} chapter pages`);
    
    // Template for chapter pages
    const chapterTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{CHAPTER_TITLE}} - Mathematics Program</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../style.css">
    <style>
        .chapter-nav {
            display: flex;
            justify-content: space-between;
            margin: 30px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
        }
        .nav-btn {
            padding: 10px 20px;
            background: #4a6491;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .nav-btn:hover {
            background: #2c3e50;
        }
        .chapter-header-full {
            background: linear-gradient(to right, #2c3e50, #4a6491);
            color: white;
            padding: 40px;
            border-radius: 10px;
            margin-bottom: 30px;
        }
        .back-home {
            display: inline-block;
            margin-top: 20px;
            color: #4a6491;
            text-decoration: none;
            font-weight: 600;
        }
        .back-home:hover {
            text-decoration: underline;
        }
        .chapter-meta {
            display: flex;
            gap: 20px;
            margin: 20px 0;
            padding: 15px;
            background: #f0f4f9;
            border-radius: 8px;
        }
        .meta-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Mathematics Teaching Program</h1>
            <p>Chapter {{CHAPTER_NUMBER}}: {{CHAPTER_TITLE}}</p>
            <div class="math-icon">
                <i class="fas fa-square-root-alt"></i>
            </div>
        </header>
        
        <div class="content">
            <div class="chapter-content">
                <div class="chapter-header-full">
                    <h1>Chapter {{CHAPTER_NUMBER}}: {{CHAPTER_TITLE}}</h1>
                    <p>{{CHAPTER_DESCRIPTION}}</p>
                    <div class="chapter-meta">
                        <div class="meta-item">
                            <i class="fas fa-book"></i>
                            <span>Category: {{CHAPTER_CATEGORY}}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-list-ol"></i>
                            <span>{{SECTION_COUNT}} Sections</span>
                        </div>
                    </div>
                    <a href="../index.html" class="back-home">
                        <i class="fas fa-arrow-left"></i> Back to All Chapters
                    </a>
                </div>
                
                {{CHAPTER_SECTIONS}}
                
                <div class="chapter-nav">
                    {{PREV_CHAPTER}}
                    {{NEXT_CHAPTER}}
                </div>
            </div>
        </div>
        
        <footer>
            <p>Chapter {{CHAPTER_NUMBER}} of the Mathematics Teaching Program</p>
            <p>© 2023 - All rights reserved | <a href="../index.html">View All Chapters</a></p>
        </footer>
    </div>
</body>
</html>`;

    let generatedCount = 0;
    
    // Generate pages for each chapter
    appData.forEach((chapter, index) => {
        // Build sections HTML
        let sectionsHTML = '<div class="sections-container">';
        if (chapter.sections && chapter.sections.length > 0) {
            chapter.sections.forEach(section => {
                sectionsHTML += `
                    <div class="section-card">
                        <h3>
                            <span>${section.title}</span>
                            <span class="section-number">${section.number}</span>
                        </h3>
                        <div class="section-content">
                            <p>
                                <span>Page:</span>
                                <span class="page-number">${section.page}</span>
                            </p>
                            ${section.summary ? `<p><span>Summary:</span> <span>${section.summary}</span></p>` : ''}
                            ${section.exercises ? `<p><span>Exercises:</span> <span>${section.exercises}</span></p>` : ''}
                        </div>
                    </div>`;
            });
        } else {
            sectionsHTML += '<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><h4>No sections available</h4><p>This chapter has no sections defined.</p></div>';
        }
        sectionsHTML += '</div>';
        
        // Navigation buttons
        const prevChapter = index > 0 ? 
            `<a href="${appData[index-1].filename}" class="nav-btn">
                <i class="fas fa-arrow-left"></i> Previous: ${appData[index-1].title}
            </a>` : '<div></div>';
        
        const nextChapter = index < appData.length - 1 ? 
            `<a href="${appData[index+1].filename}" class="nav-btn">
                Next: ${appData[index+1].title} <i class="fas fa-arrow-right"></i>
            </a>` : '<div></div>';
        
        // Replace template placeholders
        const pageContent = chapterTemplate
            .replace(/{{CHAPTER_TITLE}}/g, chapter.title)
            .replace(/{{CHAPTER_NUMBER}}/g, chapter.id)
            .replace(/{{CHAPTER_DESCRIPTION}}/g, chapter.description)
            .replace(/{{CHAPTER_CATEGORY}}/g, chapter.category.charAt(0).toUpperCase() + chapter.category.slice(1))
            .replace('{{SECTION_COUNT}}', chapter.sections ? chapter.sections.length : 0)
            .replace('{{CHAPTER_SECTIONS}}', sectionsHTML)
            .replace('{{PREV_CHAPTER}}', prevChapter)
            .replace('{{NEXT_CHAPTER}}', nextChapter);
        
        // Create and trigger download
        try {
            const blob = new Blob([pageContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${chapter.filename}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            generatedCount++;
            console.log(`✅ Generated: ${chapter.filename}`);
        } catch (error) {
            console.error(`❌ Error generating ${chapter.filename}:`, error);
        }
    });
    
    alert(`✅ Successfully generated ${generatedCount} out of ${appData.length} chapter pages. They have been downloaded to your computer. Place them in the "chapters" folder.`);
}

// Export functions for global access if needed
window.selectChapter = selectChapter;
window.showHomeContent = showHomeContent;
window.generateChapterPages = generateChapterPages;

console.log("✅ script.js loaded successfully");