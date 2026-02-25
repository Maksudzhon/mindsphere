/* ===== MINDSPHERE ADMIN SCRIPT ===== */

// ─── CREDENTIALS (from .env concept) ─────────────────────────
// In a real app these come from .env via build tools.
// Here we store them as constants (never expose real secrets client-side in production).
const ADMIN_LOGIN = 'shxnz';
const ADMIN_PASSWORD = '140824';
const SESSION_KEY = 'ms_admin_session';
const POSTS_KEY = 'ms_posts';

// ─── ELEMENTS ─────────────────────────────────────────────────
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginInput = document.getElementById('loginInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const pwToggle = document.getElementById('pwToggle');
const logoutBtn = document.getElementById('logoutBtn');
const toast = document.getElementById('toast');
const delOverlay = document.getElementById('delOverlay');
const delCancel = document.getElementById('delCancel');
const delConfirm = document.getElementById('delConfirm');

let deleteTargetId = null;
let currentTab = 'overview';

// ─── AUTH ─────────────────────────────────────────────────────
function checkSession() {
  const session = sessionStorage.getItem(SESSION_KEY);
  if (session === 'valid') showDashboard();
  else showLogin();
}

function showLogin() {
  loginScreen.style.display = 'flex';
  dashboard.style.display = 'none';
}

function showDashboard() {
  loginScreen.style.display = 'none';
  dashboard.style.display = 'flex';
  refreshOverview();
  renderAdminPosts();
}

loginBtn.addEventListener('click', handleLogin);
[loginInput, passwordInput].forEach(el => {
  el.addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });
});

function handleLogin() {
  const user = loginInput.value.trim();
  const pass = passwordInput.value;

  loginBtn.textContent = 'Signing in…';
  loginBtn.style.opacity = '0.7';
  loginBtn.disabled = true;

  // Simulate slight delay for UX
  setTimeout(() => {
    if (user === ADMIN_LOGIN && pass === ADMIN_PASSWORD) {
      loginError.classList.remove('show');
      sessionStorage.setItem(SESSION_KEY, 'valid');
      loginBtn.textContent = '✓ Success!';
      setTimeout(() => showDashboard(), 400);
    } else {
      loginError.classList.add('show');
      loginBtn.textContent = 'Sign In';
      loginBtn.style.opacity = '1';
      loginBtn.disabled = false;
    }
  }, 600);
}

pwToggle.addEventListener('click', () => {
  const isPass = passwordInput.type === 'password';
  passwordInput.type = isPass ? 'text' : 'password';
  pwToggle.textContent = isPass ? '🙈' : '👁';
});

logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem(SESSION_KEY);
  showToast('Logged out successfully', 'info');
  setTimeout(() => showLogin(), 600);
});

// ─── TAB NAVIGATION ───────────────────────────────────────────
document.querySelectorAll('.snav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    switchTab(btn.dataset.tab);
  });
});

function switchTab(tab) {
  currentTab = tab;

  document.querySelectorAll('.snav-item').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');

  const titles = { overview: ['Overview', 'Welcome back, Administrator'], posts: ['Manage Posts', 'Edit, update or delete posts'], create: ['Create Post', 'Publish new knowledge to MindSphere'] };
  document.getElementById('dashTitle').textContent = titles[tab]?.[0] || tab;
  document.getElementById('dashSub').textContent = titles[tab]?.[1] || '';

  document.getElementById(`tab-${tab}`).style.display = 'block';

  if (tab === 'overview') refreshOverview();
  if (tab === 'posts') renderAdminPosts();
  if (tab === 'create') {
    // Reset to create mode
    if (!document.getElementById('editingId').value) resetEditor();
  }
}

// ─── POSTS CRUD ────────────────────────────────────────────────
function getPosts() {
  try {
    return JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
  } catch { return []; }
}

function savePosts(posts) {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  // Trigger update on main page
  window.dispatchEvent(new StorageEvent('storage', { key: POSTS_KEY }));
}

function generateId() {
  return 'post_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);
}

// ─── EDITOR ───────────────────────────────────────────────────
const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');
const postCategory = document.getElementById('postCategory');
const postAuthor = document.getElementById('postAuthor');
const savePostBtn = document.getElementById('savePost');
const cancelEditBtn = document.getElementById('cancelEdit');
const editingId = document.getElementById('editingId');
const charCount = document.getElementById('charCount');
const editorTitle = document.getElementById('editorTitle');
const editorBadge = document.getElementById('editorBadge');

postContent.addEventListener('input', () => {
  charCount.textContent = postContent.value.length;
});

savePostBtn.addEventListener('click', savePost);

cancelEditBtn.addEventListener('click', () => {
  resetEditor();
  switchTab('posts');
});

function resetEditor() {
  editingId.value = '';
  postTitle.value = '';
  postContent.value = '';
  postAuthor.value = '';
  postCategory.value = 'Science';
  charCount.textContent = '0';
  editorTitle.textContent = 'Create New Post';
  editorBadge.textContent = 'New Post';
  savePostBtn.textContent = 'Publish Post';
  cancelEditBtn.style.display = 'none';
}

function savePost() {
  const title = postTitle.value.trim();
  const content = postContent.value.trim();
  const author = postAuthor.value.trim() || 'MindSphere Team';
  const category = postCategory.value;

  if (!title || !content) {
    showToast('Please fill in the title and content.', 'error');
    if (!title) postTitle.focus();
    else postContent.focus();
    return;
  }

  const posts = getPosts();
  const id = editingId.value;

  if (id) {
    // Edit
    const idx = posts.findIndex(p => p.id === id);
    if (idx > -1) {
      posts[idx] = { ...posts[idx], title, content, author, category, updatedAt: new Date().toISOString() };
    }
    showToast('✅ Post updated and live!', 'success');
  } else {
    // Create
    posts.push({ id: generateId(), title, content, author, category, date: new Date().toISOString() });
    showToast('🚀 Post published to MindSphere!', 'success');
  }

  savePosts(posts);
  resetEditor();
  setTimeout(() => switchTab('posts'), 400);
}

function editPost(id) {
  const posts = getPosts();
  const post = posts.find(p => p.id === id);
  if (!post) return;

  switchTab('create');
  editingId.value = id;
  postTitle.value = post.title;
  postContent.value = post.content;
  postAuthor.value = post.author || '';
  postCategory.value = post.category || 'Science';
  charCount.textContent = post.content.length;
  editorTitle.textContent = 'Edit Post';
  editorBadge.textContent = 'Editing';
  savePostBtn.textContent = 'Save Changes';
  cancelEditBtn.style.display = 'block';
}

function confirmDeletePost(id) {
  deleteTargetId = id;
  delOverlay.classList.add('active');
}

delCancel.addEventListener('click', () => {
  delOverlay.classList.remove('active');
  deleteTargetId = null;
});
delOverlay.addEventListener('click', e => {
  if (e.target === delOverlay) { delOverlay.classList.remove('active'); deleteTargetId = null; }
});
delConfirm.addEventListener('click', () => {
  if (!deleteTargetId) return;
  const posts = getPosts().filter(p => p.id !== deleteTargetId);
  savePosts(posts);
  delOverlay.classList.remove('active');
  deleteTargetId = null;
  showToast('🗑️ Post deleted', 'error');
  renderAdminPosts();
  refreshOverview();
});

// ─── RENDER ADMIN POSTS ────────────────────────────────────────
function renderAdminPosts(filter = '') {
  const list = document.getElementById('adminPostsList');
  const empty = document.getElementById('noPostsEmpty');
  const posts = getPosts().slice().reverse();
  const filtered = filter ? posts.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase()) ||
    p.content.toLowerCase().includes(filter.toLowerCase()) ||
    (p.author || '').toLowerCase().includes(filter.toLowerCase())
  ) : posts;

  list.innerHTML = '';
  if (!filtered.length) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  filtered.forEach(post => {
    const item = document.createElement('div');
    item.className = 'apost-item';
    item.innerHTML = `
      <span class="apost-cat">${escapeHTML(post.category || 'General')}</span>
      <div class="apost-info">
        <div class="apost-title">${escapeHTML(post.title)}</div>
        <div class="apost-meta">By ${escapeHTML(post.author || 'MindSphere Team')} · ${formatDate(post.date)}</div>
      </div>
      <div class="apost-actions">
        <button class="apost-btn edit" data-id="${post.id}">✏️ Edit</button>
        <button class="apost-btn del" data-id="${post.id}">🗑️ Delete</button>
      </div>
    `;
    item.querySelector('.edit').addEventListener('click', () => editPost(post.id));
    item.querySelector('.del').addEventListener('click', () => confirmDeletePost(post.id));
    list.appendChild(item);
  });
}

// Search
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => renderAdminPosts(searchInput.value));

// ─── OVERVIEW REFRESH ─────────────────────────────────────────
function refreshOverview() {
  const posts = getPosts();
  document.getElementById('totalPosts').textContent = posts.length;

  const recentList = document.getElementById('recentPostsList');
  if (!posts.length) {
    recentList.innerHTML = '<p class="no-posts">No posts yet. <button onclick="switchTab(\'create\')">Create your first post →</button></p>';
    return;
  }
  const recent = posts.slice().reverse().slice(0, 5);
  recentList.innerHTML = recent.map(p => `
    <div class="recent-item">
      <div>
        <div class="recent-item-title">${escapeHTML(p.title)}</div>
        <div class="recent-item-meta">${escapeHTML(p.category || 'General')} · ${formatDate(p.date)}</div>
      </div>
    </div>
  `).join('');
}

// ─── TOAST ────────────────────────────────────────────────────
function showToast(msg, type = 'info') {
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

checkSession();