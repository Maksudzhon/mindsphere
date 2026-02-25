/* ===== MINDSPHERE MAIN SCRIPT ===== */

// ─── TRANSLATIONS ─────────────────────────────────────────────
const i18n = {
    en: {
        nav_features: 'Features', nav_knowledge: 'Knowledge', nav_community: 'Community', nav_signin: 'Sign In',
        hero_badge: '🌍 Trusted by 2.4M+ learners worldwide',
        hero_title1: "The World's", hero_title2: 'Knowledge Hub', hero_title3: 'Reimagined.',
        hero_sub: 'Connect with the brightest minds. Discover ideas that reshape how you see the world. Learn anything, from anywhere — in your language.',
        hero_cta1: 'Start Exploring', hero_cta2: 'See How It Works',
        hero_proof: 'Joined this month',
        stat_users: 'Active Learners', stat_articles: 'Knowledge Articles', stat_countries: 'Countries Reached', stat_uptime: 'Platform Uptime',
        feat_tag: 'Platform Features', feat_title: 'Built for the Curious Mind',
        feat_sub: 'Every feature designed to accelerate your growth and deepen your understanding.',
        feat1_title: 'AI Knowledge Graph', feat1_desc: 'Our proprietary AI maps connections between ideas, surfacing insights you\'d never find on your own.',
        feat2_title: 'Multilingual', feat2_desc: 'Read and write in 50+ languages with instant AI translation.',
        feat3_title: 'Peer Learning', feat3_desc: 'Collaborate with experts from top universities and institutions.',
        feat4_title: 'Progress Analytics', feat4_desc: 'Track your learning journey with detailed personal dashboards.',
        feat5_title: 'Real-Time Knowledge Feed', feat5_desc: 'Stay at the forefront of every field with curated feeds from the world\'s top researchers.',
        know_tag: 'Knowledge Base', know_title: 'Latest from MindSphere', know_sub: 'Community-curated insights, research, and discoveries.',
        empty_posts: 'No posts yet. Admin is preparing amazing content.',
        comm_tag: 'Community', comm_title: 'Join a Global Movement of Learners',
        comm_desc: 'From students in Tashkent to researchers in Tokyo — MindSphere brings together the world\'s most curious people in one place.',
        cf1_t: 'Expert Circles', cf1_d: 'Join topic-specific groups led by verified experts.',
        cf2_t: 'Knowledge Rankings', cf2_d: 'Earn recognition for your contributions to the community.',
        cf3_t: 'Live Sessions', cf3_d: 'Attend live lectures and Q&As from anywhere in the world.',
        comm_cta: 'Join the Community', comm_badge: '190+ Countries',
        fl_product: 'Product', fl_features: 'Features', fl_pricing: 'Pricing', fl_changelog: 'Changelog', fl_roadmap: 'Roadmap',
        fl_company: 'Company', fl_about: 'About', fl_blog: 'Blog', fl_careers: 'Careers', fl_press: 'Press',
        fl_legal: 'Legal', fl_privacy: 'Privacy', fl_terms: 'Terms', fl_cookies: 'Cookies',
        footer_tagline: 'Expanding the boundaries of human knowledge, together.',
        footer_copy: '© 2025 MindSphere Inc. All rights reserved.',
        footer_made: 'Made with ❤️ for curious minds everywhere.',
        modal_title: 'What is MindSphere?',
        modal_text: 'MindSphere is a next-generation global knowledge platform connecting millions of curious minds across 190+ countries. We empower learners, researchers, and creators to explore, share, and build knowledge together — in any language, at any time.',
        modal_users: 'Active Users', modal_countries: 'Countries', modal_articles: 'Articles', modal_cta: 'Explore Now',
        read_more: 'Read more →',
    },
    ru: {
        nav_features: 'Возможности', nav_knowledge: 'База знаний', nav_community: 'Сообщество', nav_signin: 'Войти',
        hero_badge: '🌍 Доверяют 2.4M+ учеников по всему миру',
        hero_title1: 'Мировой', hero_title2: 'Центр знаний', hero_title3: 'Переосмыслен.',
        hero_sub: 'Общайтесь с лучшими умами. Открывайте идеи, которые меняют взгляды на мир. Учитесь всему, откуда угодно — на вашем языке.',
        hero_cta1: 'Начать исследование', hero_cta2: 'Как это работает',
        hero_proof: 'Присоединились в этом месяце',
        stat_users: 'Активных учеников', stat_articles: 'Статей знаний', stat_countries: 'Охваченных стран', stat_uptime: 'Время работы платформы',
        feat_tag: 'Возможности платформы', feat_title: 'Создано для любопытного разума',
        feat_sub: 'Каждая функция разработана для ускорения вашего роста и углубления понимания.',
        feat1_title: 'Граф знаний AI', feat1_desc: 'Наш AI выявляет связи между идеями, обнаруживая инсайты, которые вы не найдёте самостоятельно.',
        feat2_title: 'Многоязычность', feat2_desc: 'Читайте и пишите на 50+ языках с мгновенным AI-переводом.',
        feat3_title: 'Совместное обучение', feat3_desc: 'Сотрудничайте с экспертами ведущих университетов.',
        feat4_title: 'Аналитика прогресса', feat4_desc: 'Отслеживайте свой путь обучения с персональными дашбордами.',
        feat5_title: 'Лента знаний в реальном времени', feat5_desc: 'Будьте в авангарде каждой области с подборками от ведущих исследователей мира.',
        know_tag: 'База знаний', know_title: 'Последнее от MindSphere', know_sub: 'Инсайты, исследования и открытия от сообщества.',
        empty_posts: 'Публикаций пока нет. Администратор готовит потрясающий контент.',
        comm_tag: 'Сообщество', comm_title: 'Присоединяйтесь к глобальному движению учеников',
        comm_desc: 'От студентов в Ташкенте до исследователей в Токио — MindSphere объединяет самых любопытных людей мира.',
        cf1_t: 'Круги экспертов', cf1_d: 'Вступайте в тематические группы под руководством верифицированных экспертов.',
        cf2_t: 'Рейтинги знаний', cf2_d: 'Получайте признание за вклад в сообщество.',
        cf3_t: 'Прямые трансляции', cf3_d: 'Посещайте лекции и Q&A сессии из любой точки мира.',
        comm_cta: 'Войти в сообщество', comm_badge: '190+ Стран',
        fl_product: 'Продукт', fl_features: 'Возможности', fl_pricing: 'Цены', fl_changelog: 'Изменения', fl_roadmap: 'Дорожная карта',
        fl_company: 'Компания', fl_about: 'О нас', fl_blog: 'Блог', fl_careers: 'Карьера', fl_press: 'Пресса',
        fl_legal: 'Правовое', fl_privacy: 'Конфиденциальность', fl_terms: 'Условия', fl_cookies: 'Куки',
        footer_tagline: 'Расширяем границы человеческих знаний вместе.',
        footer_copy: '© 2025 MindSphere Inc. Все права защищены.',
        footer_made: 'Сделано с ❤️ для любопытных умов повсюду.',
        modal_title: 'Что такое MindSphere?',
        modal_text: 'MindSphere — это глобальная платформа знаний нового поколения, объединяющая миллионы любопытных умов в 190+ странах.',
        modal_users: 'Активных пользователей', modal_countries: 'Страны', modal_articles: 'Статьи', modal_cta: 'Исследовать',
        read_more: 'Читать далее →',
    },
    uz: {
        nav_features: 'Imkoniyatlar', nav_knowledge: 'Bilim bazasi', nav_community: 'Jamiyat', nav_signin: 'Kirish',
        hero_badge: '🌍 2.4M+ o\'quvchi ishonadi',
        hero_title1: 'Jahon', hero_title2: 'Bilim Markazi', hero_title3: 'Yangilandi.',
        hero_sub: 'Eng yaxshi aqllar bilan bog\'laning. Dunyoqarashingizni o\'zgartiruvchi g\'oyalarni kashf eting. Har joydan, har qanday tilda o\'rganing.',
        hero_cta1: 'O\'rganishni boshlash', hero_cta2: 'Qanday ishlaydi',
        hero_proof: 'Bu oyda qo\'shildi',
        stat_users: 'Faol o\'quvchilar', stat_articles: 'Bilim maqolalar', stat_countries: 'Qamrab olingan mamlakatlar', stat_uptime: 'Platforma ishlash vaqti',
        feat_tag: 'Platforma imkoniyatlari', feat_title: 'Qiziquvchan aql uchun yaratilgan',
        feat_sub: 'Har bir funksiya sizning o\'sishingizni tezlashtirish uchun mo\'ljallangan.',
        feat1_title: 'AI Bilim Grafi', feat1_desc: 'Bizning AI g\'oyalar o\'rtasidagi bog\'liqliklarni xaritada ko\'rsatadi.',
        feat2_title: 'Ko\'p tilli', feat2_desc: '50+ tilda o\'qing va yozing, darhol AI tarjimasi bilan.',
        feat3_title: 'Tengdoshlar bilan o\'rganish', feat3_desc: 'Yetakchi universitetlar ekspertlari bilan hamkorlik qiling.',
        feat4_title: 'Progress analitikasi', feat4_desc: 'O\'quv safingizni shaxsiy boshqaruv paneli bilan kuzating.',
        feat5_title: 'Real vaqtdagi bilim lentasi', feat5_desc: 'Dunyoning yetakchi tadqiqotchilaridan bilimlar lentasini ko\'ring.',
        know_tag: 'Bilim bazasi', know_title: 'MindSphere\'dan so\'nggi yangiliklar', know_sub: 'Jamiyat tomonidan tanlangan bilimlar, tadqiqotlar va kashfiyotlar.',
        empty_posts: 'Hozircha postlar yo\'q. Admin ajoyib kontent tayyorlamoqda.',
        comm_tag: 'Jamiyat', comm_title: 'Global O\'quvchilar Harakatiga Qo\'shiling',
        comm_desc: 'Toshkentdagi talabalardan Tokiodagi tadqiqotchilargacha — MindSphere dunyoning eng qiziquvchan odamlarini bir joyga to\'playdi.',
        cf1_t: 'Ekspert doiralari', cf1_d: 'Tasdiqlangan ekspertlar boshchiligidagi mavzuga oid guruhlarga qo\'shiling.',
        cf2_t: 'Bilim reytinglari', cf2_d: 'Jamiyatga qo\'shgan hissangiz uchun tan olish qozonin.',
        cf3_t: 'Jonli seanslar', cf3_d: 'Dunyoning istalgan joyidan jonli ma\'ruzalar va Q&A da qatnashing.',
        comm_cta: 'Hamjamiyatga qo\'shiling', comm_badge: '190+ Mamlakat',
        fl_product: 'Mahsulot', fl_features: 'Imkoniyatlar', fl_pricing: 'Narxlar', fl_changelog: 'O\'zgarishlar', fl_roadmap: 'Yo\'l xaritasi',
        fl_company: 'Kompaniya', fl_about: 'Haqida', fl_blog: 'Blog', fl_careers: 'Karyera', fl_press: 'Matbuot',
        fl_legal: 'Huquqiy', fl_privacy: 'Maxfiylik', fl_terms: 'Shartlar', fl_cookies: 'Cookie',
        footer_tagline: 'Insoniyat bilimining chegaralarini birga kengaytiramiz.',
        footer_copy: '© 2025 MindSphere Inc. Barcha huquqlar himoyalangan.',
        footer_made: 'Har joyda qiziquvchan aqllar uchun ❤️ bilan yaratildi.',
        modal_title: 'MindSphere nima?',
        modal_text: 'MindSphere — bu 190+ mamlakatlarda millionlab qiziquvchan aqllarni birlashtiruvchi yangi avlod global bilim platformasi.',
        modal_users: 'Faol foydalanuvchilar', modal_countries: 'Mamlakatlar', modal_articles: 'Maqolalar', modal_cta: 'Tadqiq qilish',
        read_more: 'Ko\'proq o\'qish →',
    }
};

let currentLang = localStorage.getItem('ms_lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('ms_lang', lang);
    const t = i18n[lang] || i18n.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    renderPosts();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ─── NAVBAR SCROLL ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── HAMBURGER ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// ─── MODAL ────────────────────────────────────────────────────
const overlay = document.getElementById('modalOverlay');
const infoBtn = document.getElementById('infoBtn');
const modalClose = document.getElementById('modalClose');

infoBtn.addEventListener('click', () => overlay.classList.add('active'));
modalClose.addEventListener('click', () => overlay.classList.remove('active'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('active'); });

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('active');
});

// ─── COUNTER ANIMATION ────────────────────────────────────────
function animateCount(el, target) {
    const duration = 1800;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * ease);
        el.textContent = current >= 1000000
            ? (current / 1000000).toFixed(1)
            : current >= 1000
                ? (current / 1000).toFixed(0) + 'K'
                : current;
        if (progress < 1) requestAnimationFrame(update);
        else {
            el.textContent = target >= 1000000
                ? (target / 1000000).toFixed(1) + 'M'
                : target >= 1000
                    ? (target / 1000).toFixed(0) + 'K'
                    : target;
        }
    }
    requestAnimationFrame(update);
}

const statEls = document.querySelectorAll('.stat-val[data-count]');
const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateCount(e.target, parseInt(e.target.dataset.count));
            statsObs.unobserve(e.target);
        }
    });
}, { threshold: 0.3 });
statEls.forEach(el => statsObs.observe(el));

// ─── SCROLL REVEAL ────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.feat-card, .post-card, .comm-feat').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    revealObs.observe(el);
});

// ─── POSTS ────────────────────────────────────────────────────
const AVATAR_POOL = [
    'https://i.pravatar.cc/40?img=21',
    'https://i.pravatar.cc/40?img=22',
    'https://i.pravatar.cc/40?img=23',
    'https://i.pravatar.cc/40?img=24',
    'https://i.pravatar.cc/40?img=25',
    'https://i.pravatar.cc/40?img=26',
];

const CATEGORIES = ['Science', 'Technology', 'Philosophy', 'Economics', 'Culture', 'Research'];

function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getInitials(name) {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'AU';
}

function renderPosts() {
    const postsGrid = document.getElementById('postsGrid');
    const emptyState = document.getElementById('emptyState');
    const posts = JSON.parse(localStorage.getItem('ms_posts') || '[]');
    const t = i18n[currentLang] || i18n.en;

    postsGrid.innerHTML = '';

    if (!posts.length) {
        emptyState.style.display = 'block';
        postsGrid.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    postsGrid.style.display = 'grid';

    posts.slice().reverse().forEach((post, i) => {
        const cat = post.category || CATEGORIES[i % CATEGORIES.length];
        const initials = getInitials(post.author);
        const card = document.createElement('div');
        card.className = 'post-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s`;
        card.innerHTML = `
      <div class="post-meta">
        <span class="post-category">${cat}</span>
        <span class="post-date">${formatDate(post.date || new Date().toISOString())}</span>
      </div>
      <h3>${escapeHTML(post.title)}</h3>
      <p>${escapeHTML(post.content)}</p>
      <div class="post-footer">
        <div class="post-author">
          <div class="post-author-img">${initials}</div>
          <span>${escapeHTML(post.author || 'MindSphere Team')}</span>
        </div>
        <span class="post-read">${t.read_more || 'Read more →'}</span>
      </div>
    `;
        postsGrid.appendChild(card);
        requestAnimationFrame(() => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, i * 70);
        });
    });
}

function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Listen for storage changes from admin panel
window.addEventListener('storage', () => renderPosts());

// ─── INIT ─────────────────────────────────────────────────────
applyLang(currentLang);
renderPosts();