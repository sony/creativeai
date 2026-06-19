const NAV_OFFSET = 80;

// Find category section by anchor name
function getCategoryForAnchor(targetId) {
  return document.querySelector(`section.category[data-category="${targetId}"]`);
}

// Open only target category, collapse others
function openOnlyCategory(targetId) {
  document.querySelectorAll('section.category').forEach(c => {
    if (c.dataset.category === targetId) {
      c.classList.add('expanded');
    } else {
      c.classList.remove('expanded');
    }
  });
}

// Scroll to anchor with offset
function scrollToAnchorWithOffset(targetId) {
  const anchor = document.querySelector(`a[name="${targetId}"]`);
  if (!anchor) return;
  const top = anchor.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

// Scrollspy
function updateActiveNav() {
  const navItems = document.querySelectorAll('.bk_item');
  const sections = document.querySelectorAll('section.category');
  const triggerLine = window.innerHeight / 2;

  let activeId = null;
  sections.forEach(s => {
    const rect = s.getBoundingClientRect();
    if (rect.top <= triggerLine && rect.bottom > triggerLine) {
      activeId = s.dataset.category;
    }
  });

  if (!activeId) {
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      if (rect.top <= triggerLine) {
        activeId = s.dataset.category;
      }
    });
  }

  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (!link) return;
    const itemId = link.getAttribute('href').substring(1);
    const isActive = (itemId === activeId);
    const wasActive = item.classList.contains('active');
    item.classList.toggle('active', isActive);

    if (isActive && !wasActive && window.innerWidth <= 640) {
      item.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  });
}

// Nav clicks
document.querySelectorAll('.bk_item a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1);
    e.preventDefault();
    openOnlyCategory(targetId);
    setTimeout(() => {
      scrollToAnchorWithOffset(targetId);
      history.replaceState(null, '', '#' + targetId);
    }, 50);
  });
});

// Toggle button clicks
document.querySelectorAll('.cat_toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('section.category');
    if (!section) return;
    const wasExpanded = section.classList.contains('expanded');
    section.classList.toggle('expanded');
    // If collapsing, scroll back to top of section to avoid disorientation
    if (wasExpanded) {
      const targetId = section.dataset.category;
      setTimeout(() => scrollToAnchorWithOffset(targetId), 50);
    }
    setTimeout(updateActiveNav, 100);
  });
});

// Initial load
window.addEventListener('load', () => {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    openOnlyCategory(targetId);
    setTimeout(() => scrollToAnchorWithOffset(targetId), 100);
  }
  updateActiveNav();
});

// Throttled scrollspy
let scrollTimer = null;
window.addEventListener('scroll', () => {
  if (scrollTimer) return;
  scrollTimer = setTimeout(() => {
    updateActiveNav();
    scrollTimer = null;
  }, 100);
});

// Adjust preview height based on first row tile height
function adjustPreviewHeight() {
  document.querySelectorAll('section.category').forEach(section => {
    const trow = section.querySelector('.trow');
    if (!trow) return;
    const tiles = trow.querySelectorAll('.tile:not([style*="background-color: white"])');
    if (tiles.length === 0) return;

    // Find the tallest tile in the first row
    const firstTileTop = tiles[0].offsetTop;
    let maxFirstRowHeight = 0;
    tiles.forEach(tile => {
      if (tile.offsetTop === firstTileTop) {
        maxFirstRowHeight = Math.max(maxFirstRowHeight, tile.offsetHeight);
      }
    });

    // Preview = first row + ~40% of second row for fade effect
    const previewHeight = maxFirstRowHeight + 60;
    section.style.setProperty('--preview-height', previewHeight + 'px');
    section.style.setProperty('--preview-height-mobile', previewHeight + 'px')
  });
}

window.addEventListener('load', adjustPreviewHeight);
window.addEventListener('resize', adjustPreviewHeight);
