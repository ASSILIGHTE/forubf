/* ==========================================================================
   BOYFRIEND DAY — "DOODLE LOVE" INTERACTIVE SCRIPT WITH DUAL LANGUAGE (ID/EN)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 0. BILINGUAL I18N DICTIONARY SYSTEM (INDONESIAN & ENGLISH)
    // ----------------------------------------------------------------------
    const i18n = {
        id: {
            badgeText: "Edisi Buku Coretan Spesial",
            txtHappy: "HAPPY",
            txtBoyfriend: "Boyfriend",
            txtDay: "DAY ♡",
            heroSubtext: "Aku buat sesuatu yang manis khusus untuk orang favoritku.",
            questionHeader: "KAMU MAU LIHAT HADIAH DARI AKU?",
            btnYes: "Mau! ♡",
            btnNo: "Enggak",
            funnyNoTexts: ['Yakin nih? 🥺', 'Beneran? 😜', 'Salah pencet tuh! ♡', 'Mau! ♡'],
            
            // Section 1
            sec1Badge: "Bagian 01",
            sec1Title: "Hal-Hal yang Aku Suka Dari Kamu... ♡",
            note1Text: "senyuman kamu :)",
            note1Sub: "Selalu bikin hariku mendadak cerah setiap hari!",
            note2Text: "bercandaan garing kamu",
            note2Sub: "Bahkan lelucon paling garing yang tetep bikin aku ketawa ngakak.",
            note3Text: "cara kamu perhatian",
            note3Sub: "Selalu perhatian, penyayang, dan sering nanyain kabarku.",
            note4Text: "sisi konyol kamu",
            note4Sub: "Saat kamu joget lucu & pake suara aneh pas lagi berdua aja.",
            note5Text: "ya… kamu ♡",
            note5Sub: "Semua hal tentang kamu. Apa adanya kamu, setiap hari.",
            tapHint: "tekan aku! ♡",
            
            // Section 2
            sec2Badge: "Bagian 02",
            sec2Title: "Momen-Momen Manis Kita 📸",
            sec2Desc: "Klik foto mana saja untuk lihat lebih dekat!",

            // Section 2.5 (Mini Game)
            gameBadge: "Mini Game 🎮",
            gameTitle: "Tebak Pasangan Doodle! 💖",
            gameDesc: "Cocokkan 4 pasang doodle lucu untuk membuka kupon rahasia!",
            gameMatchesLabel: "Hasil: ",
            gameMovesLabel: "Langkah: ",
            gameResetBtn: "🔄 Ulangi",
            rewardTitle: "Kupon Terbuka!",
            rewardDesc: '"Berlaku untuk 1 Pelukan & Ciuman Hangat Tanpa Batas kapan pun kamu mau!"',
            rewardCode: "KODE: BOYFRIEND-LOVE-FOREVER ♡",

            // Section 3
            noteDate: "Tanggal: Selamat Hari Pacar ✨",
            noteHeading: "“Kamu selalu bikin hari-hari biasa terasa jauh lebih spesial.”",
            noteP1: "Kadang aku suka mikir, betapa beruntungnya aku punya kamu di hidupku. Kamu bikin aku merasa aman, bahagia, dan sangat dihargai.",
            noteP2: "Bahkan di hari yang paling sepi dan biasa aja, ngobrol sama kamu atau lihat senyum kamu langsung bikin hariku cerah lagi. Terima kasih ya sudah selalu mendengarkan, menenangkan, dan jadi orang paling favoritku di dunia.",
            noteSig: 'Selalu milikmu,<br><span class="handwritten-sig">Dengan seluruh cintaku ♡</span>',

            // Section 4
            tapUsHint: "tekan kami! >///<",
            justUsQuote: "“Orang favoritku untuk diajak jail, ketawa bareng, dan bikin kenangan indah.”",

            // Final Section
            finalTitle: "Selamat Hari Pacar ♡",
            finalSubtext: "Terima kasih sudah menjadi dirimu sendiri.",
            finalPromise: "“Masih tetap memilihmu, setiap hari.”",
            oneMoreBtn: "Satu hal lagi… ♡",
            footerText: "Dibuat dengan segenap hatiku ♡ Selamat Hari Pacar!",

            // Modals
            surpriseTitle: "Kamu adalah seluruh duniaku!",
            surpriseBody: "Terima kasih sudah jadi pacar yang paling penyayang, sabar, lucu, dan selalu mendukungku. Selamat Hari Pacar, cintaku! Aku mencintaimu selamanya! 💖✨",
            hugBtn: "Kirim Pelukan Virtual 🤗",
            hugSentText: "Pelukan Terkirim! 🥰💖",
            musicPlay: "Putar Lagu ♫",
            musicPlaying: "Memutar ♫"
        },
        en: {
            badgeText: "Special Sketchbook Edition",
            txtHappy: "HAPPY",
            txtBoyfriend: "Boyfriend",
            txtDay: "DAY ♡",
            heroSubtext: "I made a little something for my favorite person.",
            questionHeader: "DO YOU WANT TO SEE YOUR GIFT?",
            btnYes: "Yes ♡",
            btnNo: "No",
            funnyNoTexts: ['Are you sure? 🥺', 'Really? 😜', 'Wrong button! ♡', 'Yes! ♡'],
            
            // Section 1
            sec1Badge: "Section 01",
            sec1Title: "Things I Like About You... ♡",
            note1Text: "your smile :)",
            note1Sub: "It literally brightens up my whole day every single time!",
            note2Text: "your random jokes",
            note2Sub: "Even the super corny ones that make me laugh so hard.",
            note3Text: "the way you care",
            note3Sub: "So thoughtful, attentive, and always checking up on me.",
            note4Text: "your silly side",
            note4Sub: "When you do weird cute dances & voices when it's just us two.",
            note5Text: "just… you ♡",
            note5Sub: "Everything about you. Exactly as you are, every single day.",
            tapHint: "tap me! ♡",
            
            // Section 2
            sec2Badge: "Section 02",
            sec2Title: "Our Little Moments 📸",
            sec2Desc: "Click on any photo to look closer!",

            // Section 2.5 (Mini Game)
            gameBadge: "Mini Game 🎮",
            gameTitle: "Doodle Love Match! 💖",
            gameDesc: "Match all 4 pairs of cute doodles to unlock a secret coupon!",
            gameMatchesLabel: "Matches: ",
            gameMovesLabel: "Moves: ",
            gameResetBtn: "🔄 Reset",
            rewardTitle: "Coupon Unlocked!",
            rewardDesc: '"Valid for 1 Unlimited Warm Hug & Kiss anytime you want!"',
            rewardCode: "CODE: BOYFRIEND-LOVE-FOREVER ♡",

            // Section 3
            noteDate: "Date: Happy Boyfriend Day ✨",
            noteHeading: "“You make ordinary days feel a little more special.”",
            noteP1: "Sometimes I stop and wonder how I got so lucky to have you in my life. You make me feel safe, happy, and truly seen.",
            noteP2: "Even on the quietest, ordinary days, just talking to you or seeing your smile instantly turns everything around. Thank you for always listening, for comforting me, and for being my absolute favorite person in the world.",
            noteSig: 'Always yours,<br><span class="handwritten-sig">With all my love ♡</span>',

            // Section 4
            tapUsHint: "tap us! >///<",
            justUsQuote: "“My favorite person to annoy, laugh with, and make memories with.”",

            // Final Section
            finalTitle: "Happy Boyfriend Day ♡",
            finalSubtext: "Thank you for being you.",
            finalPromise: "“Still choosing you, every day.”",
            oneMoreBtn: "One more thing… ♡",
            footerText: "Made with all my heart ♡ Happy Boyfriend Day!",

            // Modals
            surpriseTitle: "You are my whole world!",
            surpriseBody: "Thank you for being the most loving, patient, funny, and supportive boyfriend ever. Happy Boyfriend Day, my love! I love you endlessly! 💖✨",
            hugBtn: "Send Virtual Hug 🤗",
            hugSentText: "Hug Sent! 🥰💖",
            musicPlay: "Play Song ♫",
            musicPlaying: "Playing ♫"
        }
    };

    let currentLang = localStorage.getItem('bf_day_lang') || 'id';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('bf_day_lang', lang);
        document.documentElement.lang = lang;

        const dict = i18n[lang];

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (key === 'noteSig') {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update polaroid captions
        document.querySelectorAll('.polaroid-card').forEach(card => {
            const captionEl = card.querySelector('.polaroid-caption');
            const capText = lang === 'id' ? card.getAttribute('data-caption-id') : card.getAttribute('data-caption-en');
            if (captionEl && capText) captionEl.textContent = capText;
        });

        // Update music button text
        const musicBtnText = document.getElementById('music-btn-text');
        if (musicBtnText) {
            musicBtnText.textContent = isPlaying ? dict.musicPlaying : dict.musicPlay;
        }

        // Update lang toggle button text
        const langBtnText = document.getElementById('lang-btn-text');
        if (langBtnText) {
            langBtnText.textContent = lang === 'id' ? '🇮🇩 ID | 🇬🇧 EN' : '🇬🇧 EN | 🇮🇩 ID';
        }
    }

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'id' ? 'en' : 'id';
            const rect = langToggleBtn.getBoundingClientRect();
            spawnBurstDoodles(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
            applyLanguage(nextLang);
        });
    }

    // ----------------------------------------------------------------------
    // 1. AUDIO PLAYER SYSTEM
    // ----------------------------------------------------------------------
    const bgMusic = document.getElementById('bg-music');
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const musicBtnText = document.getElementById('music-btn-text');
    let isPlaying = false;

    function toggleMusic() {
        if (!bgMusic) return;
        const dict = i18n[currentLang];
        if (isPlaying) {
            bgMusic.pause();
            musicToggleBtn.classList.remove('playing');
            if (musicBtnText) musicBtnText.textContent = dict.musicPlay;
            isPlaying = false;
        } else {
            bgMusic.play().then(() => {
                musicToggleBtn.classList.add('playing');
                if (musicBtnText) musicBtnText.textContent = dict.musicPlaying;
                isPlaying = true;
            }).catch((err) => {
                console.log('Audio autoplay prevented, user action needed:', err);
            });
        }
    }

    if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', toggleMusic);
    }

    // ----------------------------------------------------------------------
    // 2. HERO / WELCOME REVEAL SYSTEM (CONTENT SHOWS ONLY ON CLICK)
    // ----------------------------------------------------------------------
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const sketchbookMainContent = document.getElementById('sketchbook-main-content');
    const section1 = document.getElementById('section-1');

    function revealContentAndPlay() {
        // Unlock scroll on body
        document.body.classList.remove('is-locked');

        // Reveal main sketchbook sections with smooth animation
        if (sketchbookMainContent) {
            sketchbookMainContent.classList.remove('content-hidden');
            sketchbookMainContent.classList.add('content-revealed');
        }

        // Play music if not playing yet
        if (!isPlaying && bgMusic) {
            toggleMusic();
        }

        // Smooth scroll to Section 1
        setTimeout(() => {
            if (section1) {
                section1.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 150);
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            const rect = yesBtn.getBoundingClientRect();
            spawnBurstDoodles(rect.left + rect.width / 2, rect.top + rect.height / 2, 16);
            revealContentAndPlay();
        });
    }

    // Playful "No" button logic
    if (noBtn) {
        let noClickCount = 0;

        noBtn.addEventListener('click', () => {
            const funnyTexts = i18n[currentLang].funnyNoTexts;
            if (noClickCount < funnyTexts.length - 1) {
                noBtn.textContent = funnyTexts[noClickCount];
                noClickCount++;
                noBtn.style.transform = `scale(${1 + noClickCount * 0.04}) rotate(${(Math.random() - 0.5) * 12}deg)`;
            } else {
                noBtn.textContent = i18n[currentLang].btnYes;
                noBtn.classList.remove('btn-no');
                noBtn.classList.add('btn-yes');

                const rect = noBtn.getBoundingClientRect();
                spawnBurstDoodles(rect.left + rect.width / 2, rect.top + rect.height / 2, 18);

                setTimeout(() => {
                    revealContentAndPlay();
                }, 350);
            }
        });
    }

    // ----------------------------------------------------------------------
    // 3. INTERACTIVE STICKY NOTES
    // ----------------------------------------------------------------------
    const stickyNotes = document.querySelectorAll('.sticky-note');
    stickyNotes.forEach(note => {
        note.addEventListener('click', () => {
            const rect = note.getBoundingClientRect();
            spawnBurstDoodles(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
            
            note.style.transform = 'scale(1.08) rotate(0deg)';
            setTimeout(() => {
                note.style.transform = '';
            }, 300);
        });
    });

    // ----------------------------------------------------------------------
    // 4. SCRAPBOOK GALLERY LIGHTBOX MODAL
    // ----------------------------------------------------------------------
    const polaroidCards = document.querySelectorAll('.polaroid-card');
    const photoModal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const modalSubtext = document.getElementById('modal-subtext');
    const closeModalBtn = document.getElementById('close-modal-btn');

    polaroidCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.getAttribute('data-img');
            const caption = currentLang === 'id' ? card.getAttribute('data-caption-id') : card.getAttribute('data-caption-en');
            const subtext = currentLang === 'id' ? card.getAttribute('data-sub-id') : card.getAttribute('data-sub-en');

            if (modalImg) modalImg.src = imgSrc;
            if (modalCaption) modalCaption.textContent = caption;
            if (modalSubtext) modalSubtext.textContent = subtext;

            if (photoModal) {
                photoModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closePhotoModal() {
        if (photoModal) {
            photoModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closePhotoModal);
    }

    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target === photoModal) {
                closePhotoModal();
            }
        });
    }

    // ----------------------------------------------------------------------
    // 4.5. DOODLE LOVE MINI GAME ("MEMORY MATCH")
    // ----------------------------------------------------------------------
    const memoryGameGrid = document.getElementById('memory-game-grid');
    const gameMatchesCount = document.getElementById('game-matches-count');
    const gameMovesCount = document.getElementById('game-moves-count');
    const resetGameBtn = document.getElementById('reset-game-btn');
    const gameRewardBox = document.getElementById('game-reward-box');

    const doodleSymbols = ['💖', '🧸', '💌', '☕', '💖', '🧸', '💌', '☕'];
    let flippedCards = [];
    let matchedCount = 0;
    let movesCount = 0;
    let isLockBoard = false;

    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function initMemoryGame() {
        if (!memoryGameGrid) return;
        
        // Reset state
        flippedCards = [];
        matchedCount = 0;
        movesCount = 0;
        isLockBoard = false;
        
        if (gameMatchesCount) gameMatchesCount.textContent = '0';
        if (gameMovesCount) gameMovesCount.textContent = '0';
        if (gameRewardBox) gameRewardBox.classList.add('hidden');

        memoryGameGrid.innerHTML = '';
        const shuffled = shuffleArray(doodleSymbols);

        shuffled.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.symbol = symbol;
            card.dataset.index = index;

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">❓</div>
                    <div class="card-back">${symbol}</div>
                </div>
            `;

            card.addEventListener('click', () => handleCardClick(card));
            memoryGameGrid.appendChild(card);
        });
    }

    function handleCardClick(card) {
        if (isLockBoard) return;
        if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
        if (flippedCards.length > 0 && flippedCards[0] === card) return;

        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            movesCount++;
            if (gameMovesCount) gameMovesCount.textContent = movesCount;
            checkMatch();
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const isMatch = card1.dataset.symbol === card2.dataset.symbol;

        if (isMatch) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCount++;
            if (gameMatchesCount) gameMatchesCount.textContent = matchedCount;
            flippedCards = [];

            const rect1 = card1.getBoundingClientRect();
            spawnBurstDoodles(rect1.left + rect1.width / 2, rect1.top + rect1.height / 2, 8);

            if (matchedCount === 4) {
                setTimeout(() => {
                    if (gameRewardBox) {
                        gameRewardBox.classList.remove('hidden');
                        const rectBox = gameRewardBox.getBoundingClientRect();
                        spawnBurstDoodles(rectBox.left + rectBox.width / 2, rectBox.top + rectBox.height / 2, 25);
                        triggerDoodleConfetti(40);
                    }
                }, 500);
            }
        } else {
            isLockBoard = true;
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
                isLockBoard = false;
            }, 800);
        }
    }

    if (resetGameBtn) {
        resetGameBtn.addEventListener('click', () => {
            const rect = resetGameBtn.getBoundingClientRect();
            spawnBurstDoodles(rect.left + rect.width / 2, rect.top + rect.height / 2, 6);
            initMemoryGame();
        });
    }

    // Initialize game on load
    initMemoryGame();

    // ----------------------------------------------------------------------
    // 5. INTERACTIVE COUPLE DOODLE ("JUST US")
    // ----------------------------------------------------------------------
    const coupleInteractive = document.getElementById('interactive-couple');
    if (coupleInteractive) {
        coupleInteractive.addEventListener('click', () => {
            const rect = coupleInteractive.getBoundingClientRect();
            spawnBurstDoodles(rect.left + rect.width / 2, rect.top + rect.height / 3, 14);

            coupleInteractive.style.transform = 'scale(1.05)';
            setTimeout(() => {
                coupleInteractive.style.transform = '';
            }, 300);
        });
    }

    // ----------------------------------------------------------------------
    // 6. FINAL SECTION CONFETTI & SURPRISE MODAL
    // ----------------------------------------------------------------------
    const oneMoreThingBtn = document.getElementById('one-more-thing-btn');
    const surpriseModal = document.getElementById('surprise-modal');
    const closeSurpriseBtn = document.getElementById('close-surprise-btn');
    const hugBtn = document.getElementById('hug-btn');

    if (oneMoreThingBtn) {
        oneMoreThingBtn.addEventListener('click', () => {
            triggerDoodleConfetti(60);

            setTimeout(() => {
                if (surpriseModal) {
                    surpriseModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            }, 400);
        });
    }

    function closeSurpriseModal() {
        if (surpriseModal) {
            surpriseModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (closeSurpriseBtn) {
        closeSurpriseBtn.addEventListener('click', closeSurpriseModal);
    }

    if (surpriseModal) {
        surpriseModal.addEventListener('click', (e) => {
            if (e.target === surpriseModal) {
                closeSurpriseModal();
            }
        });
    }

    if (hugBtn) {
        hugBtn.addEventListener('click', () => {
            const rect = hugBtn.getBoundingClientRect();
            spawnBurstDoodles(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
            hugBtn.textContent = i18n[currentLang].hugSentText;
            setTimeout(() => {
                hugBtn.textContent = i18n[currentLang].hugBtn;
            }, 2500);
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePhotoModal();
            closeSurpriseModal();
        }
    });

    // ----------------------------------------------------------------------
    // 7. SCROLL ANIMATION OBSERVER & HANDWRITING SEQUENCER
    // ----------------------------------------------------------------------
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const scrollPaths = entry.target.querySelectorAll('.draw-path-scroll, #note-underline-path, .stem-path');
                scrollPaths.forEach(path => path.classList.add('in-view'));

                const flower = entry.target.querySelector('.flower-doodle');
                if (flower) flower.classList.add('in-view');

                // Animate handwriting lines sequentially
                const hwLines = entry.target.querySelectorAll('.hw-line');
                if (hwLines.length > 0) {
                    hwLines.forEach((line, index) => {
                        setTimeout(() => {
                            line.classList.add('writing');
                            line.classList.add('written');
                            setTimeout(() => {
                                line.classList.remove('writing');
                            }, 1200);
                        }, index * 750); // Sequential delay for natural writing speed
                    });
                }
            }
        });
    }, { threshold: 0.2 });

    const sections = document.querySelectorAll('.sketch-section');
    sections.forEach(sec => scrollObserver.observe(sec));

    // ----------------------------------------------------------------------
    // 8. HELPER FUNCTIONS
    // ----------------------------------------------------------------------
    function spawnBurstDoodles(x, y, count = 10) {
        const symbols = ['♡', '💖', '✨', '🌸', '💓', '✦'];
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'doodle-confetti';
            p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            const vx = (Math.random() - 0.5) * 160 + 'px';
            const vy = (Math.random() - 0.8) * 160 + 'px';
            const rot = (Math.random() - 0.5) * 360 + 'deg';
            
            p.style.left = x + 'px';
            p.style.top = y + 'px';
            p.style.setProperty('--vx', vx);
            p.style.setProperty('--vy', vy);
            p.style.setProperty('--rot', rot);
            p.style.color = Math.random() > 0.5 ? '#E85D75' : '#2C221E';
            
            document.body.appendChild(p);

            setTimeout(() => {
                p.remove();
            }, 2800);
        }
    }

    function triggerDoodleConfetti(count = 50) {
        const symbols = ['♡', '💖', '✨', '🌸', '💓', '★', '🧸', '💌', '☁️', '✦'];
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const p = document.createElement('div');
                p.className = 'doodle-confetti';
                p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                
                const startX = Math.random() * window.innerWidth;
                const startY = Math.random() * (window.innerHeight * 0.4) + (window.innerHeight * 0.3);
                
                const vx = (Math.random() - 0.5) * 300 + 'px';
                const vy = (Math.random() - 0.7) * 400 + 'px';
                const rot = (Math.random() - 0.5) * 720 + 'deg';

                p.style.left = startX + 'px';
                p.style.top = startY + 'px';
                p.style.fontSize = (Math.random() * 1.5 + 1.2) + 'rem';
                p.style.setProperty('--vx', vx);
                p.style.setProperty('--vy', vy);
                p.style.setProperty('--rot', rot);
                
                document.body.appendChild(p);

                setTimeout(() => {
                    p.remove();
                }, 3000);
            }, i * 35);
        }
    }

    // Apply language on initial load
    applyLanguage(currentLang);

});
