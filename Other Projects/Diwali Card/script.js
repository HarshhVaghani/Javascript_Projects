{
    // Create sparkles
    const sparkleContainer = document.getElementById('sparkleContainer');
    for(let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      sparkleContainer.appendChild(sparkle);
    }

    // Create floating petals
    const petalEmojis = ['🌸', '🌺', '🏵️', '💮', '🌼'];
    for(let i = 0; i < 20; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.innerHTML = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDuration = (8 + Math.random() * 7) + 's';
      petal.style.animationDelay = Math.random() * 5 + 's';
      document.body.appendChild(petal);
    }

    // Music toggle with better UX
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');
    let isPlaying = false;
    let audioContext;
    let audio;

    musicToggle.addEventListener('click', () => {
      if (!audio) {
        // Create audio element on first interaction
        audio = new Audio();
        audio.loop = true;
        // Using a royalty-free Diwali music URL placeholder
        audio.src = '';
      }
      
      if (!isPlaying) {
        audio.play().catch(e => console.log('Audio play failed:', e));
        musicIcon.textContent = '🔊';
        musicText.textContent = 'Pause Music';
        isPlaying = true;
      } else {
        audio.pause();
        musicIcon.textContent = '🔇';
        musicText.textContent = 'Play Music';
        isPlaying = false;
      }
    });

    // Enhanced fireworks effect
    function launchFireworks() {
      const colors = ['#FFD700', '#FF6347', '#FF69B4', '#00FF00', '#00BFFF', '#FF1493'];
      const fireworksCount = 5;
      
      for(let f = 0; f < fireworksCount; f++) {
        setTimeout(() => {
          const centerX = Math.random() * window.innerWidth;
          const centerY = Math.random() * (window.innerHeight * 0.6);
          
          // Create burst effect
          for(let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            particle.style.animation = 'explode 1.5s ease-out forwards';
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 1500);
          }
          
          // Add a bright flash
          const flash = document.createElement('div');
          flash.style.position = 'fixed';
          flash.style.left = centerX + 'px';
          flash.style.top = centerY + 'px';
          flash.style.width = '20px';
          flash.style.height = '20px';
          flash.style.borderRadius = '50%';
          flash.style.background = 'white';
          flash.style.boxShadow = '0 0 50px 30px white';
          flash.style.animation = 'explode 0.5s ease-out forwards';
          flash.style.setProperty('--tx', '0px');
          flash.style.setProperty('--ty', '0px');
          document.body.appendChild(flash);
          setTimeout(() => flash.remove(), 500);
        }, f * 400);
      }
    }

    // Enhanced download with better quality
    function downloadCard() {
      const card = document.getElementById('familyCard');
      const originalTransform = card.style.transform;
      card.style.transform = 'scale(1)';
      
      // Show loading state
      const downloadBtn = event.target;
      const originalText = downloadBtn.innerHTML;
      downloadBtn.innerHTML = '⏳ Preparing...';
      downloadBtn.disabled = true;
      
      html2canvas(card, {
        scale: 3, // Higher resolution
        backgroundColor: null,
        logging: false,
        useCORS: true,
        allowTaint: true
      }).then(canvas => {
        // Add decorative border to downloaded image
        const finalCanvas = document.createElement('canvas');
        const ctx = finalCanvas.getContext('2d');
        const padding = 60;
        
        finalCanvas.width = canvas.width + (padding * 2);
        finalCanvas.height = canvas.height + (padding * 2);
        
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, finalCanvas.width, finalCanvas.height);
        gradient.addColorStop(0, '#581c87');
        gradient.addColorStop(0.5, '#c2410c');
        gradient.addColorStop(1, '#a16207');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
        
        // Draw the card
        ctx.drawImage(canvas, padding, padding);
        
        // Add decorative frame
        ctx.strokeStyle = '#fcd34d';
        ctx.lineWidth = 8;
        ctx.strokeRect(padding/2, padding/2, finalCanvas.width - padding, finalCanvas.height - padding);
        
        // Download
        const link = document.createElement('a');
        link.download = `diwali_wishes_family_${Date.now()}.png`;
        link.href = finalCanvas.toDataURL('image/png');
        link.click();
        
        // Restore button
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        card.style.transform = originalTransform;
        
        // Show success message
        showNotification('Card downloaded successfully! 🎉');
      });
    }
    
    // Notification system
    function showNotification(message) {
      const notification = document.createElement('div');
      notification.textContent = message;
      notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #fcd34d, #f97316);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: bold;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
      }, 3000);
    }
    
    // Add notification animations
    const notifStyle = document.createElement('style');
    notifStyle.innerHTML = `
      @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
      }
    `;
    document.head.appendChild(notifStyle);
  }