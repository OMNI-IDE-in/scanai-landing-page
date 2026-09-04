/**
 * ScanAI Medical Technology - Core Application Logic (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initCinematicVideo();
  initSegmentedTabs();
  initProductCatalog();
  initProductModal();
  initInquiryButtons();
  initContactForm();
});

/* ==========================================================================
   1. Sticky Header
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Mobile Navigation Drawer
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. Hero & Cinematic Video Controls
   ========================================================================== */
function initCinematicVideo() {
  // 1. Hero Video Player
  const heroVideo = document.getElementById('heroVideo');
  const heroPlayBtn = document.getElementById('heroPlayBtn');
  const heroMuteBtn = document.getElementById('heroMuteBtn');

  if (heroVideo) {
    heroVideo.muted = true;
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser autoplay prevented, poster remains visible
      });
    }

    // Click on video to toggle play/pause
    heroVideo.addEventListener('click', () => {
      toggleHeroPlay();
    });

    if (heroPlayBtn) {
      heroPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleHeroPlay();
      });
    }

    function toggleHeroPlay() {
      if (heroVideo.paused) {
        heroVideo.play();
        if (heroPlayBtn) {
          heroPlayBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            <span>Pause</span>
          `;
          heroPlayBtn.setAttribute('aria-label', 'Pause Video');
        }
      } else {
        heroVideo.pause();
        if (heroPlayBtn) {
          heroPlayBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>Play</span>
          `;
          heroPlayBtn.setAttribute('aria-label', 'Play Video');
        }
      }
    }

    if (heroMuteBtn) {
      heroMuteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        heroVideo.muted = !heroVideo.muted;
        if (heroVideo.muted) {
          heroMuteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            <span>Unmute</span>
          `;
          heroMuteBtn.setAttribute('aria-label', 'Unmute Video');
        } else {
          heroMuteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            <span>Mute</span>
          `;
          heroMuteBtn.setAttribute('aria-label', 'Mute Video');
        }
      });
    }
  }

  // 2. Cinematic Video (Fallback if used elsewhere)
  const video = document.getElementById('cinematicVideo');
  const playBtn = document.getElementById('cinematicPlayBtn');
  const muteBtn = document.getElementById('cinematicMuteBtn');

  if (video) {
    video.muted = true;
    const p = video.play();
    if (p !== undefined) p.catch(() => {});

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            Pause
          `;
        } else {
          video.pause();
          playBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Play
          `;
        }
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        if (video.muted) {
          muteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            Unmute
          `;
        } else {
          muteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            Mute
          `;
        }
      });
    }
  }
}

/* ==========================================================================
   4. Segmented Capabilities Tabs
   ========================================================================== */
function initSegmentedTabs() {
  const buttons = document.querySelectorAll('.segmented-nav .segment-btn');
  const panels = document.querySelectorAll('.segment-panel');

  if (!buttons.length || !panels.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-segment');

      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. Equipment Catalog (Dynamic & Truthful)
   ========================================================================== */
function initProductCatalog() {
  const container = document.getElementById('productsGridContainer');
  const filterBtns = document.querySelectorAll('.catalog-filter-bar .filter-btn');

  if (!container || !window.ScanAIProducts) return;

  const renderProducts = (category = 'all') => {
    const filtered = category === 'all' 
      ? window.ScanAIProducts 
      : window.ScanAIProducts.filter(p => p.category === category);

    container.innerHTML = filtered.map(product => `
      <div class="product-card" data-category="${product.category}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='${product.altImage}'" />
        </div>
        <div class="product-body">
          <span class="product-category">${product.categoryLabel}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          
          <div class="product-actions">
            <button class="btn btn-secondary btn-sm view-specs-btn" data-product-id="${product.id}">
              Specifications
            </button>
            ${product.externalUrl ? `
              <a href="${product.externalUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 4px;">
                <span>Visit Platform</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : `
              <button class="btn btn-primary btn-sm catalog-inquire-btn" data-product-name="${product.name}" data-specialty="${product.category === 'ecg' ? 'Cardiology' : 'Radiology'}">
                Inquire
              </button>
            `}
          </div>
        </div>
      </div>
    `).join('');

    // Reattach listeners to modal buttons
    container.querySelectorAll('.view-specs-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-product-id');
        openProductModal(pId);
      });
    });

    initInquiryButtons();
  };

  renderProducts('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProducts(category);
    });
  });
}

/* ==========================================================================
   6. Product Specification Modal
   ========================================================================== */
function initProductModal() {
  const modalBackdrop = document.getElementById('productSpecModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  if (!modalBackdrop) return;

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  window.openProductModal = (productId) => {
    if (!window.ScanAIProducts) return;
    const product = window.ScanAIProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalProductTitle').textContent = product.name;
    document.getElementById('modalProductCategory').textContent = product.categoryLabel;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductDesc').textContent = product.detailedDescription;

    const specTableBody = document.getElementById('modalSpecTableBody');
    if (specTableBody) {
      specTableBody.innerHTML = product.technicalHighlights.map(spec => `
        <tr>
          <th>${spec.label}</th>
          <td>${spec.value}</td>
        </tr>
      `).join('') + `
        <tr>
          <th>Full Documentation</th>
          <td>Available upon institutional request</td>
        </tr>
      `;
    }

    if (modalInquireBtn) {
      modalInquireBtn.onclick = (e) => {
        const pName = product.name;
        const pSpecialty = product.category === 'ecg' ? 'Cardiology' : 'Radiology';
        const contactSection = document.getElementById('contact');

        if (contactSection) {
          e.preventDefault();
          closeModal();
          contactSection.scrollIntoView({ behavior: 'smooth' });

          const specialtySelect = document.getElementById('formSpecialty');
          const messageInput = document.getElementById('formMessage');
          const nameInput = document.getElementById('formFullName');

          if (specialtySelect) {
            Array.from(specialtySelect.options).forEach(opt => {
              if (opt.value.toLowerCase().includes(pSpecialty.toLowerCase())) {
                opt.selected = true;
              }
            });
          }

          if (messageInput) {
            messageInput.value = `I would like to request full technical specifications and institutional trial details for the ${pName}.`;
          }

          setTimeout(() => {
            if (nameInput) nameInput.focus();
          }, 550);
        } else {
          window.location.href = `./contact.html?product=${encodeURIComponent(pName)}`;
        }
      };
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}

/* ==========================================================================
   7. Interactive Inquiry & Booking Button Handlers
   ========================================================================== */
function initInquiryButtons() {
  document.querySelectorAll('.inquiry-trigger-btn, .catalog-inquire-btn').forEach(btn => {
    btn.onclick = (e) => {
      const productName = btn.getAttribute('data-product-name') || 'Medical Diagnostic System';
      const specialty = btn.getAttribute('data-specialty') || 'Cardiology';
      const contactSection = document.getElementById('contact');

      if (contactSection) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });

        const specialtySelect = document.getElementById('formSpecialty');
        const messageInput = document.getElementById('formMessage');
        const nameInput = document.getElementById('formFullName');

        if (specialtySelect) {
          Array.from(specialtySelect.options).forEach(opt => {
            if (opt.value.toLowerCase().includes(specialty.toLowerCase())) {
              opt.selected = true;
            }
          });
        }

        if (messageInput) {
          messageInput.value = `I would like to request clinical evaluation details, institutional trial availability, and quotation for the ${productName}.`;
        }

        setTimeout(() => {
          if (nameInput) nameInput.focus();
        }, 550);
      } else {
        window.location.href = `./contact.html?product=${encodeURIComponent(productName)}`;
      }
    };
  });

  // Smooth scroll and focus on any href="#contact" anchor
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        const nameInput = document.getElementById('formFullName');
        if (nameInput) nameInput.focus();
      }, 550);
    });
  });
}

/* ==========================================================================
   7. Clinical Consultation & Demo Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('clinicalDemoForm');
  if (!form) return;

  // Auto-fill product inquiry if passed in query string
  const urlParams = new URLSearchParams(window.location.search);
  const requestedProduct = urlParams.get('product');
  if (requestedProduct) {
    const messageField = document.getElementById('formMessage');
    if (messageField && !messageField.value) {
      messageField.value = `I would like to request clinical evaluation details regarding the ${requestedProduct}.`;
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const showError = (inputId, errorMsgId, message) => {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorMsgId);
    if (input) input.classList.add('error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
  };

  const clearError = (inputId, errorMsgId) => {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(errorMsgId);
    if (input) input.classList.remove('error');
    if (errorEl) {
      errorEl.classList.remove('visible');
    }
  };

  const fields = [
    { id: 'formFullName', error: 'errorFullName', validate: v => v.trim().length >= 2, msg: 'Please provide your full clinical or professional name.' },
    { id: 'formWorkEmail', error: 'errorWorkEmail', validate: v => validateEmail(v), msg: 'Please provide a valid professional email address.' },
    { id: 'formInstitution', error: 'errorInstitution', validate: v => v.trim().length >= 2, msg: 'Please provide your hospital, practice, or institution name.' },
    { id: 'formMessage', error: 'errorMessage', validate: v => v.trim().length >= 10, msg: 'Please include inquiry details (minimum 10 characters).' }
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (!el) return;
    el.addEventListener('blur', () => {
      if (!f.validate(el.value)) {
        showError(f.id, f.error, f.msg);
      } else {
        clearError(f.id, f.error);
      }
    });
    el.addEventListener('input', () => {
      clearError(f.id, f.error);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let hasError = false;

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      if (el && !f.validate(el.value)) {
        showError(f.id, f.error, f.msg);
        hasError = true;
      }
    });

    if (hasError) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending Inquiry...</span>`;

    const formData = new FormData(form);
    formData.set("access_key", "c45f9a0c-53cf-44dc-8397-5c2b0424114e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showToast("Success! Your message has been sent to hello@scanai.health. We will follow up at +91 8792126143.");
        alert("Success! Your clinical demonstration request has been sent to hello@scanai.health.");
        form.reset();
      } else {
        const errorMsg = data.message || "Failed to deliver message.";
        showToast("Notice: " + errorMsg);
        alert("Notice: " + errorMsg);
      }
    } catch (error) {
      console.warn("Web3Forms network notice, activating direct mail fallback:", error);
      
      // Direct mailto fallback so inquiry is never missed
      const fullName = document.getElementById('formFullName') ? document.getElementById('formFullName').value.trim() : '';
      const email = document.getElementById('formWorkEmail') ? document.getElementById('formWorkEmail').value.trim() : '';
      const institution = document.getElementById('formInstitution') ? document.getElementById('formInstitution').value.trim() : '';
      const specialty = document.getElementById('formSpecialty') ? document.getElementById('formSpecialty').value : '';
      const message = document.getElementById('formMessage') ? document.getElementById('formMessage').value.trim() : '';

      const subject = encodeURIComponent(`Clinical Inquiry - ${fullName} (${institution})`);
      const body = encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\nInstitution: ${institution}\nDepartment: ${specialty}\n\nMessage:\n${message}`);
      window.location.href = `mailto:hello@scanai.health?subject=${subject}&body=${body}`;

      showToast("Preparing direct email to hello@scanai.health. Our direct line: +91 8792126143");
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

/* ==========================================================================
   8. Reusable Toast Notification
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('globalToastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
