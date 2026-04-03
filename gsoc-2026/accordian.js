/**
 * GSoC 2026 Accordion Logic
 */
function toggleAccordion(header) {
    const item = header.parentElement;

    // Toggle the 'active' class to show/hide content
    item.classList.toggle('active');

    // Smooth scroll into view if opened
    if (item.classList.contains('active')) {
        setTimeout(() => {
            item.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 300);
    }
}