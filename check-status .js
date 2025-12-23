// check-status.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== PAGE STATUS CHECK ===');
    
    // Vérifier Font Awesome
    console.log('Font Awesome check:');
    const testIcon = document.createElement('i');
    testIcon.className = 'fas fa-check';
    document.body.appendChild(testIcon);
    const style = window.getComputedStyle(testIcon, ':before');
    console.log('Icon content:', style.getPropertyValue('content'));
    document.body.removeChild(testIcon);
    
    // Vérifier programData
    console.log('programData status:', typeof window.programData);
    if (window.programData) {
        console.log('Number of chapters:', window.programData.length);
        console.log('First chapter:', window.programData[0]?.title);
    }
    
    // Vérifier les éléments DOM critiques
    const criticalElements = [
        'chaptersList',
        'searchInput',
        'homeContent',
        'chapterDetails'
    ];
    
    criticalElements.forEach(id => {
        const element = document.getElementById(id);
        console.log(`${id}:`, element ? 'Found' : 'NOT FOUND');
    });
    
    console.log('=== END STATUS CHECK ===');
});