/* Temple of Heal – Main JS */

(function () {
  'use strict';

  /* ── Header scroll effect ───────────────────────────────── */
  const header = document.getElementById('site-header');
  const backTop = document.getElementById('back-top');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    header.classList.toggle('scrolled', scrolled);
    backTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Account dropdown ───────────────────────────────────── */
  const acctBtn  = document.getElementById('nav-account-btn');
  const acctDrop = document.getElementById('nav-account-dropdown');
  if (acctBtn && acctDrop) {
    acctBtn.addEventListener('click', e => {
      e.stopPropagation();
      const open = acctDrop.classList.toggle('open');
      acctBtn.classList.toggle('active', open);
      acctBtn.setAttribute('aria-expanded', open);
      acctDrop.setAttribute('aria-hidden', !open);
    });
    document.addEventListener('click', e => {
      if (!acctBtn.contains(e.target) && !acctDrop.contains(e.target)) {
        acctDrop.classList.remove('open');
        acctBtn.classList.remove('active');
        acctBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') acctDrop.classList.remove('open'); });
  }

  /* ── Mega menu ──────────────────────────────────────────── */
  const megaTrigger = document.getElementById('mega-trigger');
  const megaMenu    = document.getElementById('mega-menu');
  let megaTimeout;

  function openMega() {
    clearTimeout(megaTimeout);
    megaTrigger.classList.add('active');
    megaTrigger.setAttribute('aria-expanded', 'true');
    megaMenu.classList.add('open');
    megaMenu.setAttribute('aria-hidden', 'false');
  }
  function closeMega() {
    megaTimeout = setTimeout(() => {
      megaTrigger.classList.remove('active');
      megaTrigger.setAttribute('aria-expanded', 'false');
      megaMenu.classList.remove('open');
      megaMenu.setAttribute('aria-hidden', 'true');
    }, 120);
  }

  if (megaTrigger && megaMenu) {
    megaTrigger.addEventListener('mouseenter', openMega);
    megaTrigger.addEventListener('mouseleave', closeMega);
    megaMenu.addEventListener('mouseenter', () => clearTimeout(megaTimeout));
    megaMenu.addEventListener('mouseleave', closeMega);
    megaTrigger.addEventListener('click', () => {
      megaMenu.classList.contains('open') ? closeMega() : openMega();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMega(); });
    document.addEventListener('click', e => {
      if (!megaTrigger.contains(e.target) && !megaMenu.contains(e.target)) closeMega();
    });
  }

  /* ── Mobile nav ─────────────────────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop  = document.getElementById('mobile-backdrop');

  function toggleNav(open) {
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
    mobileNav.classList.toggle('open', open);
    mobileNav.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleNav(!mobileNav.classList.contains('open')));
  backdrop.addEventListener('click', () => toggleNav(false));

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => toggleNav(false));
  });

  /* ── Session filter pills ───────────────────────────────── */
  const filterPills = document.getElementById('session-filters');
  if (filterPills) {
    filterPills.addEventListener('click', e => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;
      filterPills.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
    });
  }

  /* ── Format tabs (All / Virtual / In-Person) ──────────── */
  const formatTabs = document.getElementById('format-tabs');
  const sessionCards = document.querySelectorAll('.session-card:not(.hidden-card)');

  if (formatTabs) {
    formatTabs.addEventListener('click', e => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      formatTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.dataset.tab;
      sessionCards.forEach(card => {
        const formats = card.dataset.format || 'all';
        card.style.display = (tab === 'all' || formats.includes(tab)) ? '' : 'none';
      });
    });
  }

  /* ── Load more sessions ─────────────────────────────────── */
  const loadMoreBtn = document.getElementById('load-more-btn');
  const hiddenCards = document.querySelectorAll('.hidden-card');

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      hiddenCards.forEach(card => {
        card.classList.remove('hidden-card');
        card.style.display = '';
        requestAnimationFrame(() => card.classList.add('visible'));
      });
      loadMoreBtn.style.display = 'none';
    });
  }

  /* ── FAQ accordion ──────────────────────────────────────── */
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.addEventListener('click', e => {
      const btn = e.target.closest('.faq-question');
      if (!btn) return;

      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      faqList.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ── Intersection observer fade-in ─────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ── Sign-up form ────────────────────────────────────────── */
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = signupForm.querySelector('input[type="email"]');
      if (!emailInput.value || !emailInput.value.includes('@')) {
        emailInput.style.borderColor = '#EF4444';
        return;
      }
      emailInput.style.borderColor = '';
      showToast('You\'re on the list! 🌿 We\'ll be in touch soon.');
      signupForm.reset();
    });
  }

  /* ── CTA email row ───────────────────────────────────────── */
  const ctaEmailRow = document.querySelector('.cta-email-row');
  if (ctaEmailRow) {
    const btn = ctaEmailRow.querySelector('.btn');
    btn.addEventListener('click', e => {
      const input = ctaEmailRow.querySelector('input[type="email"]');
      if (input && (!input.value || !input.value.includes('@'))) {
        e.preventDefault();
        input.focus();
        input.style.outline = '2px solid #EF4444';
        setTimeout(() => input.style.outline = '', 2000);
        return;
      }
      if (input && input.value) {
        e.preventDefault();
        showToast('Welcome to Temple of Heal! 🌿 Check your email.');
        input.value = '';
      }
    });
  }

  /* ── Search box ──────────────────────────────────────────── */
  const searchBtn = document.querySelector('.search-box button');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const q = document.getElementById('session-search').value.trim();
      if (q) showToast(`Searching for "${q}"…`);
    });
    document.getElementById('session-search')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') searchBtn.click();
    });
  }

  /* ── Toast notification ──────────────────────────────────── */
  function showToast(msg, duration = 3500) {
    let toast = document.getElementById('toh-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toh-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.style.cssText = `
        position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(100px);
        background:var(--nav-bg);color:#fff;padding:.75rem 1.5rem;border-radius:var(--radius-pill);
        font-size:.9rem;z-index:99999;box-shadow:var(--shadow-lg);
        transition:transform .3s ease,opacity .3s ease;opacity:0;white-space:nowrap;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    });
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      toast.style.opacity = '0';
    }, duration);
  }

  /* ── Hero video mute toggle ──────────────────────────────── */
  const heroVideo   = document.getElementById('hero-video');
  const heroMuteBtn = document.getElementById('hero-mute-btn');

  if (heroVideo && heroMuteBtn) {
    const iconMuted   = heroMuteBtn.querySelector('.icon-muted');
    const iconUnmuted = heroMuteBtn.querySelector('.icon-unmuted');

    heroMuteBtn.addEventListener('click', () => {
      heroVideo.muted = !heroVideo.muted;
      const muted = heroVideo.muted;
      iconMuted.style.display   = muted ? '' : 'none';
      iconUnmuted.style.display = muted ? 'none' : '';
      heroMuteBtn.setAttribute('aria-label', muted ? 'Unmute video' : 'Mute video');
    });

    // If video can't play (format unsupported), hide the mute button gracefully
    heroVideo.addEventListener('error', () => {
      heroMuteBtn.style.display = 'none';
    });
  }

  /* ── Video card click ────────────────────────────────────── */
  const videoCard = document.querySelector('.video-card');
  if (videoCard) {
    videoCard.addEventListener('click', () => showToast('Video intro coming soon! 🎬'));
    videoCard.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') videoCard.click(); });
  }

  /* ═══════════════════════════════════════════════════════
     AI AGENT WIDGET
  ════════════════════════════════════════════════════════ */
  const aiTrigger  = document.getElementById('ai-trigger');
  const aiPanel    = document.getElementById('ai-panel');
  const aiIntro    = document.getElementById('ai-intro');
  const aiChat     = document.getElementById('ai-chat');
  const aiMessages = document.getElementById('ai-messages');
  const aiInput    = document.getElementById('ai-input');
  const aiSend     = document.getElementById('ai-send');
  const personas   = document.querySelectorAll('.persona-btn');

  let chatOpen = false;
  let selectedPersona = null;

  // Canned responses by persona
  const responses = {
    seeker: [
      "Great! What type of healing or support are you looking for — coaching, therapy, yoga, or something else?",
      "I can help match you with a verified professional based on your needs. Could you share a bit about what you're going through?",
      "Here are a few practitioners that might be a good fit for you. Would you like to book a free discovery call?",
      "Of course! Our sessions are available both online and in-person. Do you have a preference?",
    ],
    provider: [
      "Welcome! Are you an existing provider looking to manage your profile, or are you new and want to join Temple of Heal?",
      "Great! The application process takes about 10 minutes. You'll need your credentials and a brief bio. Shall we start?",
      "You can manage all your services, availability, and bookings from the Provider CMS. Would you like a walkthrough?",
      "Your profile will be reviewed within 2-3 business days. Is there anything specific you'd like help with?",
    ],
    default: [
      "That's a great question! Let me help you find the right answer.",
      "I'm here to help. Could you tell me a little more?",
      "Let me look into that for you. One moment…",
    ],
  };

  let responseIndex = { seeker: 0, provider: 0, default: 0 };

  function getResponse(persona) {
    const arr = responses[persona] || responses.default;
    const idx = responseIndex[persona] || 0;
    const resp = arr[idx % arr.length];
    responseIndex[persona] = idx + 1;
    return resp;
  }

  function addMessage(text, role) {
    const msg = document.createElement('div');
    msg.className = `ai-msg ${role}`;
    msg.textContent = text;
    aiMessages.appendChild(msg);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'ai-msg bot ai-typing';
    el.id = 'ai-typing';
    el.innerHTML = '<span>●</span><span>●</span><span>●</span>';
    el.style.cssText = 'display:flex;gap:4px;align-items:center;padding:.65rem .9rem;';
    el.querySelectorAll('span').forEach((s, i) => {
      s.style.cssText = `animation:dot .9s ${i*.15}s infinite ease-in-out alternate;display:inline-block;`;
    });
    if (!document.getElementById('ai-dot-style')) {
      const st = document.createElement('style');
      st.id = 'ai-dot-style';
      st.textContent = '@keyframes dot{from{opacity:.2;transform:scale(.8)}to{opacity:1;transform:scale(1)}}';
      document.head.appendChild(st);
    }
    aiMessages.appendChild(el);
    aiMessages.scrollTop = aiMessages.scrollHeight;
    return el;
  }

  function sendMessage() {
    const text = aiInput.value.trim();
    if (!text) return;
    aiInput.value = '';

    // Switch to chat view if in intro
    if (aiIntro.style.display !== 'none') {
      aiIntro.style.display = 'none';
      aiChat.style.display = 'flex';
      aiChat.style.flexDirection = 'column';
    }

    addMessage(text, 'user');

    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addMessage(getResponse(selectedPersona || 'default'), 'bot');
    }, 900 + Math.random() * 600);
  }

  aiSend.addEventListener('click', sendMessage);
  aiInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  personas.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedPersona = btn.dataset.persona;

      // Switch to chat
      aiIntro.style.display = 'none';
      aiChat.style.display = 'flex';
      aiChat.style.flexDirection = 'column';

      const greeting = selectedPersona === 'seeker'
        ? "Hello! I'm glad you're here. 🌿 I'll help match you with the perfect wellness professional."
        : "Welcome, provider! 🙏 I'll guide you through listing your services or managing your bookings.";

      addMessage(greeting, 'bot');
    });
  });

  aiTrigger.addEventListener('click', () => {
    chatOpen = !chatOpen;
    aiTrigger.classList.toggle('open', chatOpen);
    aiTrigger.setAttribute('aria-expanded', chatOpen);
    aiPanel.hidden = !chatOpen;
    if (chatOpen) aiInput.focus();
  });

  /* ── CMS data integration ────────────────────────────────── */
  // Only rebuild DOM from localStorage (admin-saved changes).
  // The hardcoded HTML already reflects the default content,
  // so we never overwrite it with the raw defaults file.
  try {
    const saved = localStorage.getItem('toh_cms');
    if (saved) applyCMSData(JSON.parse(saved));
  } catch (_) {}

  function applyCMSData(data) {
    if (!data) return;

    // Site settings
    if (data.site) {
      if (data.site.tagline) {
        const sub = document.querySelector('.hero-sub');
        if (sub) sub.textContent = data.site.tagline;
      }
    }

    // Experts grid
    if (data.experts && data.experts.length) {
      const grid = document.getElementById('experts-grid');
      if (grid) {
        grid.innerHTML = data.experts.map(ex => buildExpertCard(ex)).join('');
        grid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
      }
    }

    // Testimonials
    if (data.testimonials && data.testimonials.length) {
      const tGrid = document.querySelector('.testimonials-grid');
      if (tGrid) {
        tGrid.innerHTML = data.testimonials.map(t => buildTestimonialCard(t)).join('');
        tGrid.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
      }
    }

    // FAQs
    if (data.faqs && data.faqs.length) {
      const fList = document.getElementById('faq-list');
      if (fList) {
        fList.innerHTML = data.faqs.map(f => buildFaqItem(f)).join('');
      }
    }
  }

  function tierBadge(tier) {
    const map = { Gold: 'badge-gold', Silver: 'badge-silver', Platinum: 'badge-plat' };
    return `<span class="badge ${map[tier] || 'badge-green'}">${tier} Tier</span>`;
  }

  function buildExpertCard(ex) {
    const stars = '★'.repeat(Math.round(ex.rating || 5));
    return `
    <article class="expert-card fade-in">
      <div class="expert-photo">
        <img src="${ex.photo || 'https://picsum.photos/seed/' + ex.name + '/300/300'}" alt="${ex.name}" loading="lazy">
      </div>
      <h3>${ex.name}</h3>
      <p class="expert-specialty">${ex.specialty}</p>
      <div class="expert-rating">
        <span class="stars" aria-label="${ex.rating} stars">${stars}</span>
        <span>${ex.rating} <span style="color:var(--text-lt)">(${ex.reviews} reviews)</span></span>
      </div>
      <div class="expert-tier">${tierBadge(ex.tier)}</div>
      <div class="expert-socials"></div>
      <a href="#" class="btn btn-teal btn-sm" style="width:100%">Book Now</a>
    </article>`;
  }

  function buildTestimonialCard(t) {
    const stars = '★'.repeat(t.rating || 5);
    return `
    <article class="testimonial-card fade-in">
      <div class="stars">${stars}</div>
      <blockquote class="testi-quote">"${t.quote}"</blockquote>
      <div class="testi-footer">
        <div class="testi-reviewer">
          <div class="testi-avatar">
            <img src="${t.avatar || 'https://picsum.photos/seed/' + t.name + '/100/100'}" alt="${t.name}" loading="lazy">
          </div>
          <div>
            <div class="testi-name">${t.name}</div>
            <div class="testi-verified">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Verified Booking
            </div>
          </div>
        </div>
      </div>
    </article>`;
  }

  function buildFaqItem(f) {
    return `
    <div class="faq-item" role="listitem">
      <button class="faq-question" aria-expanded="false">
        ${f.question}
        <span class="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </span>
      </button>
      <div class="faq-answer"><p>${f.answer}</p></div>
    </div>`;
  }

})();
