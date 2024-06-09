// js/scripts.js
function adjustTimelineHeight() {
    const headerHeight = document.querySelector('.timeline-header').offsetHeight;
    const footerHeight = document.querySelector('.timeline-footer').offsetHeight;
    const timelineContent = document.querySelector('.timeline-content');
    const availableHeight = window.innerHeight - headerHeight - footerHeight;
    timelineContent.style.height = availableHeight + 'px';
}

window.addEventListener('resize', adjustTimelineHeight);
window.addEventListener('load', adjustTimelineHeight);
