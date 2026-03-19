const lessons = [
  {
    id: 'eng-core',
    category: 'English',
    level: 'Beginner',
    title: 'English: Taking Orders',
    summary: 'คำศัพท์และประโยคสั้น ๆ สำหรับรับออเดอร์แบบใช้งานจริงหน้าร้าน',
    vocab: [
      ['Menu', 'เมนูอาหาร'],
      ['Order', 'คำสั่งอาหาร / รับออเดอร์'],
      ['Recommend', 'แนะนำ'],
      ['Sold out', 'หมด'],
      ['Bill / Check', 'บิล / ใบเสร็จ']
    ],
    sentences: [
      ['Are you ready to order?', 'พร้อมสั่งอาหารหรือยังคะ'],
      ['May I recommend our signature dish?', 'ขออนุญาตแนะนำเมนูเด่นของทางร้านนะคะ'],
      ['This item is sold out today.', 'รายการนี้หมดวันนี้ค่ะ'],
      ['Would you like the bill now?', 'ต้องการรับบิลตอนนี้ไหมคะ']
    ],
    tips: [
      'ใช้ประโยคสั้น ชัด และพูดช้าเมื่อแขกฟังภาษาอังกฤษไม่คล่อง',
      'เวลาของหมด ให้เสนอเมนูใกล้เคียงต่อทันที',
      'ยิ้มและสบตาก่อนถามรับออเดอร์ทุกครั้ง'
    ]
  },
  {
    id: 'eng-allergy',
    category: 'English',
    level: 'Beginner',
    title: 'English: Food Allergy',
    summary: 'คำศัพท์และประโยคสำคัญเมื่อแขกแจ้งแพ้อาหาร',
    vocab: [
      ['Allergy', 'อาการแพ้อาหาร'],
      ['Nuts', 'ถั่ว'],
      ['Shellfish', 'อาหารทะเลมีเปลือก'],
      ['Dairy', 'นมและผลิตภัณฑ์นม'],
      ['Cross contamination', 'การปนเปื้อนข้าม']
    ],
    sentences: [
      ['Do you have any food allergies?', 'คุณมีอาการแพ้อาหารอะไรหรือไม่คะ'],
      ['I will inform the kitchen immediately.', 'ดิฉันจะแจ้งครัวทันทีค่ะ'],
      ['This dish may contain nuts.', 'เมนูนี้อาจมีส่วนผสมของถั่ว'],
      ['We will avoid cross contamination.', 'เราจะหลีกเลี่ยงการปนเปื้อนข้ามค่ะ']
    ],
    tips: [
      'ห้ามเดาเอง ถ้าไม่แน่ใจเรื่องส่วนผสมต้องถามครัวทันที',
      'ทวน allergen ที่แขกแจ้งอีก 1 ครั้งเพื่อความชัดเจน',
      'ถ้าเมนูเสี่ยง ให้เสนอเมนูที่ปลอดภัยกว่าแทน'
    ]
  },
  {
    id: 'hygiene-hands',
    category: 'Hygiene',
    level: 'Core',
    title: 'Hygiene: Hand Washing',
    summary: 'หลักการล้างมือที่ถูกต้องสำหรับพนักงานห้องอาหาร',
    vocab: [
      ['Wash', 'ล้าง'],
      ['Sanitize', 'ฆ่าเชื้อ / ทำให้สะอาดปลอดภัย'],
      ['Before service', 'ก่อนเริ่มบริการ'],
      ['After touching raw food', 'หลังสัมผัสอาหารดิบ'],
      ['After clearing table', 'หลังเก็บโต๊ะ']
    ],
    sentences: [
      ['Wash hands for at least 20 seconds.', 'ล้างมืออย่างน้อย 20 วินาที'],
      ['Use clean paper to dry your hands.', 'ใช้กระดาษสะอาดเช็ดมือให้แห้ง']
    ],
    tips: [
      'ล้างมือก่อนเสิร์ฟอาหารทุกครั้ง',
      'ห้ามใช้มือที่สัมผัสเงินแล้วจับแก้วหรือช้อนส้อมทันที',
      'ถ้ามีบาดแผลต้องปิดพลาสเตอร์และใส่ถุงมืออย่างเหมาะสม'
    ]
  },
  {
    id: 'hygiene-temp',
    category: 'Safety',
    level: 'Core',
    title: 'Safety: Temperature Control',
    summary: 'แนวคิดพื้นฐานเรื่องอุณหภูมิอาหารเพื่อความปลอดภัย',
    vocab: [
      ['Hot holding', 'การเก็บอาหารร้อน'],
      ['Cold holding', 'การเก็บอาหารเย็น'],
      ['Danger zone', 'ช่วงอุณหภูมิเสี่ยง'],
      ['Reheat', 'อุ่นซ้ำ'],
      ['Thermometer', 'เทอร์โมมิเตอร์']
    ],
    sentences: [
      ['Keep hot food hot and cold food cold.', 'เก็บอาหารร้อนให้ร้อน และอาหารเย็นให้เย็น'],
      ['Check the temperature regularly.', 'ตรวจสอบอุณหภูมิอย่างสม่ำเสมอ']
    ],
    tips: [
      'อย่าวางอาหารทิ้งไว้ในอุณหภูมิห้องนานเกินจำเป็น',
      'บุฟเฟต์ต้องมีการเช็กอุณหภูมิเป็นรอบ',
      'ถ้าไม่มั่นใจในความปลอดภัย ให้หยุดเสิร์ฟและถามหัวหน้าทันที'
    ]
  },
  {
    id: 'sop-greeting',
    category: 'Service',
    level: 'Core',
    title: 'Service SOP: Greeting Guest',
    summary: 'วิธีต้อนรับแขกอย่างมืออาชีพตั้งแต่วินาทีแรก',
    vocab: [
      ['Greeting', 'การทักทาย'],
      ['Reservation', 'การจองโต๊ะ'],
      ['Escort', 'พาไปที่โต๊ะ'],
      ['Menu presentation', 'การยื่นเมนู'],
      ['Warm welcome', 'การต้อนรับอย่างอบอุ่น']
    ],
    sentences: [
      ['Good evening and welcome.', 'สวัสดีตอนเย็น ยินดีต้อนรับค่ะ'],
      ['Do you have a reservation?', 'ได้จองโต๊ะไว้ไหมคะ'],
      ['Please follow me.', 'เชิญทางนี้ค่ะ']
    ],
    tips: [
      'ภายใน 10 วินาทีแรก แขกควรได้รับการทักทาย',
      'เดินนำแขกด้วยความเร็วเหมาะสม',
      'ยื่นเมนูอย่างเรียบร้อยและแนะนำชื่อพนักงานถ้าเหมาะสม'
    ]
  },
  {
    id: 'wine-basic',
    category: 'Beverage',
    level: 'Core',
    title: 'Wine: Basic Service',
    summary: 'พื้นฐานการเสิร์ฟไวน์สำหรับพนักงานห้องอาหาร',
    vocab: [
      ['Vintage', 'ปีที่ผลิต'],
      ['Bottle', 'ขวด'],
      ['Pour', 'ริน'],
      ['Taste', 'ให้ชิม'],
      ['Glassware', 'แก้วที่ใช้เสิร์ฟ']
    ],
    sentences: [
      ['May I present the wine?', 'ขออนุญาตนำเสนอไวน์นะคะ'],
      ['Please check the label and vintage.', 'กรุณาตรวจสอบฉลากและวินเทจค่ะ'],
      ['May I pour for you?', 'ขออนุญาตรินให้ค่ะ']
    ],
    tips: [
      'แสดงฉลากให้แขกเห็นก่อนเปิดเสมอ',
      'รินให้เจ้าภาพชิมก่อน',
      'เช็ดปากขวดหลังรินเพื่อลดหยดเลอะ'
    ]
  }
];

const EMBEDDED_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAaiMSOeGDahZuVDqWhgeuSHBf129wXv6g",
  authDomain: "laya-training.firebaseapp.com",
  projectId: "laya-training",
  storageBucket: "laya-training.firebasestorage.app",
  messagingSenderId: "843807988908",
  appId: "1:843807988908:web:cda1a814a2bcb41c4a9309",
  measurementId: "G-QB481YNZCJ"
};

const DEFAULT_USER_DATA = { completed: [], favorites: [], notes: {}, profile: {} };

const state = {
  authMode: 'login',
  category: 'All',
  search: '',
  currentLessonId: null,
  session: null,
  userData: structuredClone(DEFAULT_USER_DATA),
  firebaseConfig: EMBEDDED_FIREBASE_CONFIG,
  firebaseReady: false,
  syncing: false
};

const el = (id) => document.getElementById(id);
const authView = el('authView');
const mainView = el('mainView');
const listView = el('listView');
const readerView = el('readerView');
const settingsModal = el('settingsModal');
const categoryChips = el('categoryChips');
const template = el('cardTemplate');

function loadJSON(key, fallback){
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function mergeUserData(base = DEFAULT_USER_DATA, extra = {}){
  return {
    completed: Array.isArray(extra.completed) ? extra.completed : [...(base.completed || [])],
    favorites: Array.isArray(extra.favorites) ? extra.favorites : [...(base.favorites || [])],
    notes: typeof extra.notes === 'object' && extra.notes ? extra.notes : { ...(base.notes || {}) },
    profile: typeof extra.profile === 'object' && extra.profile ? extra.profile : { ...(base.profile || {}) }
  };
}
function getUserKey(){ return state.session?.uid ? `laya_v3_user_${state.session.uid}` : 'laya_v3_local_demo'; }
function loadLocalUserData(){
  state.userData = mergeUserData(DEFAULT_USER_DATA, loadJSON(getUserKey(), DEFAULT_USER_DATA));
}
async function saveUserData(){
  saveJSON(getUserKey(), state.userData);
  updateStats();
  await syncUserDataToCloud();
}

async function ensureFirebase(){
  if (window._layaFirebaseReady) return window._layaFirebaseReady;
  window._layaFirebaseReady = (async () => {
    const { initializeApp, getApps, getApp } = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js');
    const authMod = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js');
    const storeMod = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js');
    const app = getApps().length ? getApp() : initializeApp(state.firebaseConfig);
    window._layaFirebaseApp = app;
    window._layaFirebaseAuthMod = authMod;
    window._layaFirebaseStoreMod = storeMod;
    window._layaFirebaseAuth = authMod.getAuth(app);
    window._layaFirebaseDB = storeMod.getFirestore(app);
    state.firebaseReady = true;
    return { app, auth: window._layaFirebaseAuth, db: window._layaFirebaseDB, authMod, storeMod };
  })().catch(err => {
    window._layaFirebaseReady = null;
    throw err;
  });
  return window._layaFirebaseReady;
}

async function loadCloudUserData(uid){
  const { db, storeMod } = await ensureFirebase();
  const ref = storeMod.doc(db, 'users', uid);
  const snap = await storeMod.getDoc(ref);
  if (!snap.exists()) return null;
  const data = snap.data() || {};
  return mergeUserData(DEFAULT_USER_DATA, data);
}

async function syncUserDataToCloud(){
  if (!state.session?.uid || state.session.uid === 'local-demo' || state.syncing === true) return;
  try {
    state.syncing = true;
    const { db, storeMod } = await ensureFirebase();
    const ref = storeMod.doc(db, 'users', state.session.uid);
    const payload = {
      ...state.userData,
      profile: {
        ...state.userData.profile,
        email: state.session.email || state.userData.profile.email || ''
      },
      updatedAt: new Date().toISOString()
    };
    await storeMod.setDoc(ref, payload, { merge: true });
  } catch (err) {
    console.error('Cloud sync failed:', err);
  } finally {
    state.syncing = false;
  }
}

function setAuthMode(mode){
  state.authMode = mode;
  document.querySelectorAll('.pill').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
  el('displayNameWrap').classList.toggle('hidden', mode !== 'register');
  el('authSubmit').textContent = mode === 'login' ? 'เข้าสู่ระบบ' : 'สมัครผู้ใช้ใหม่';
}

document.querySelectorAll('.pill').forEach(btn => btn.addEventListener('click', () => setAuthMode(btn.dataset.mode)));

async function enterApp(session){
  state.session = session;
  loadLocalUserData();
  if (session?.uid && session.uid !== 'local-demo') {
    try {
      const cloudData = await loadCloudUserData(session.uid);
      if (cloudData) {
        state.userData = cloudData;
        saveJSON(getUserKey(), state.userData);
      } else {
        state.userData.profile = {
          ...state.userData.profile,
          displayName: session.displayName || state.userData.profile.displayName || '',
          email: session.email || state.userData.profile.email || ''
        };
        await syncUserDataToCloud();
      }
    } catch (err) {
      console.error('Load cloud data failed:', err);
    }
  }
  authView.classList.add('hidden');
  mainView.classList.remove('hidden');
  el('welcomeName').textContent = state.userData.profile.displayName || session.displayName || session.email || 'พนักงาน';
  renderCategories();
  renderList();
  updateStats();
}

async function logout(){
  if (state.session?.uid && state.session.uid !== 'local-demo') {
    try {
      const { auth, authMod } = await ensureFirebase();
      await authMod.signOut(auth);
    } catch (err) {
      console.error('Sign out failed:', err);
    }
  }
  state.session = null;
  mainView.classList.add('hidden');
  authView.classList.remove('hidden');
  readerView.classList.add('hidden');
  listView.classList.remove('hidden');
}

function renderCategories(){
  const categories = ['All', ...new Set(lessons.map(l => l.category))];
  categoryChips.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `chip ${state.category === cat ? 'active' : ''}`;
    btn.textContent = cat;
    btn.onclick = () => { state.category = cat; renderCategories(); renderList(); };
    categoryChips.appendChild(btn);
  });
}

function filteredLessons(){
  const q = state.search.trim().toLowerCase();
  return lessons.filter(l => {
    const matchCat = state.category === 'All' || l.category === state.category;
    const raw = `${l.title} ${l.summary} ${l.category} ${l.level}`.toLowerCase();
    return matchCat && (!q || raw.includes(q));
  });
}

function renderList(){
  listView.innerHTML = '';
  const items = filteredLessons();
  items.forEach(lesson => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector('.title').textContent = lesson.title;
    node.querySelector('.summary').textContent = lesson.summary;
    const tags = node.querySelector('.tags');
    [lesson.category, lesson.level].forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      tags.appendChild(span);
    });
    const favBtn = node.querySelector('.fav-btn');
    favBtn.textContent = state.userData.favorites.includes(lesson.id) ? '★' : '☆';
    favBtn.onclick = () => toggleFavorite(lesson.id);
    node.querySelector('.open-btn').onclick = () => openLesson(lesson.id);
    listView.appendChild(node);
  });
  listView.classList.remove('hidden');
  readerView.classList.add('hidden');
}

function openLesson(id){
  state.currentLessonId = id;
  const lesson = lessons.find(l => l.id === id);
  const note = state.userData.notes[id] || '';
  readerView.innerHTML = `
    <div class="reader-top">
      <div>
        <div class="tags"><span class="tag">${lesson.category}</span><span class="tag">${lesson.level}</span></div>
        <h3 class="reader-title">${lesson.title}</h3>
        <p class="reader-summary">${lesson.summary}</p>
      </div>
      <button class="ghost-btn" id="backBtn">กลับหน้ารวม</button>
    </div>

    <div class="section-block">
      <h5>คำศัพท์สำคัญ</h5>
      <div class="kv-list">
        ${lesson.vocab.map(([en, th]) => `<div class="kv-item"><strong>${en}</strong><span>${th}</span></div>`).join('')}
      </div>
    </div>

    <div class="section-block">
      <h5>ประโยคที่ใช้จริง</h5>
      <div class="sentence-list">
        ${lesson.sentences.map(([en, th]) => `<div class="sentence-item"><strong>${en}</strong><span>${th}</span></div>`).join('')}
      </div>
    </div>

    <div class="section-block">
      <h5>เคล็ดลับหน้างาน</h5>
      <div class="tip-list">
        ${lesson.tips.map(t => `<div class="tip-item">${t}</div>`).join('')}
      </div>
    </div>

    <div class="section-block">
      <h5>โน้ตส่วนตัว</h5>
      <textarea id="noteInput" rows="5" placeholder="จดสั้น ๆ เฉพาะที่อยากจำ">${note}</textarea>
    </div>

    <div class="reader-actions">
      <button class="primary-btn" id="markDoneBtn">${state.userData.completed.includes(id) ? 'อ่านจบแล้ว ✓' : 'ทำเครื่องหมายว่าอ่านจบ'}</button>
      <button class="ghost-btn" id="favReaderBtn">${state.userData.favorites.includes(id) ? 'เอาออกจากรายการโปรด' : 'บันทึกเป็นรายการโปรด'}</button>
      <button class="ghost-btn" id="saveNoteBtn">บันทึกโน้ต</button>
    </div>
  `;
  listView.classList.add('hidden');
  readerView.classList.remove('hidden');
  el('backBtn').onclick = renderList;
  el('markDoneBtn').onclick = () => toggleDone(id);
  el('favReaderBtn').onclick = () => toggleFavorite(id, true);
  el('saveNoteBtn').onclick = async () => {
    state.userData.notes[id] = el('noteInput').value.trim();
    await saveUserData();
    alert('บันทึกโน้ตแล้ว');
  };
  readerView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function toggleFavorite(id, rerenderReader = false){
  const arr = state.userData.favorites;
  const idx = arr.indexOf(id);
  idx >= 0 ? arr.splice(idx, 1) : arr.push(id);
  await saveUserData();
  rerenderReader ? openLesson(id) : renderList();
}
async function toggleDone(id){
  const arr = state.userData.completed;
  const idx = arr.indexOf(id);
  if(idx >= 0) arr.splice(idx, 1); else arr.push(id);
  await saveUserData();
  openLesson(id);
}
function updateStats(){
  el('doneCount').textContent = state.userData.completed.length;
  el('favCount').textContent = state.userData.favorites.length;
  el('noteCount').textContent = Object.values(state.userData.notes).filter(Boolean).length;
}

el('searchInput').addEventListener('input', e => { state.search = e.target.value; renderList(); });
el('logoutBtn').addEventListener('click', logout);
el('openSettings').addEventListener('click', () => {
  el('firebaseConfigInput').value = JSON.stringify(state.firebaseConfig, null, 2);
  settingsModal.showModal();
});
el('firebaseSetupBtn').addEventListener('click', () => {
  el('firebaseConfigInput').value = JSON.stringify(state.firebaseConfig, null, 2);
  settingsModal.showModal();
});
document.querySelectorAll('[data-close="settingsModal"]').forEach(btn => btn.addEventListener('click', ()=> settingsModal.close()));

el('saveFirebaseConfig').addEventListener('click', () => {
  alert('เวอร์ชันนี้ฝังค่า Firebase ไว้เรียบร้อยแล้ว ไม่ต้องวางค่าเพิ่ม');
  settingsModal.close();
});
el('clearFirebaseConfig').addEventListener('click', () => {
  alert('เวอร์ชันนี้ล็อกค่า Firebase ไว้ให้พร้อมใช้งาน จึงไม่แนะนำให้ล้างค่า');
});

el('demoModeBtn').addEventListener('click', () => {
  enterApp({ uid: 'local-demo', displayName: 'Demo User', email: '' });
});

el('authForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = el('email').value.trim();
  const password = el('password').value.trim();
  const displayName = el('displayName').value.trim();

  try {
    const { auth, authMod } = await ensureFirebase();

    if (state.authMode === 'register') {
      const cred = await authMod.createUserWithEmailAndPassword(auth, email, password);
      if (displayName) await authMod.updateProfile(cred.user, { displayName });
      state.userData.profile = { ...state.userData.profile, displayName, email };
      await enterApp({ uid: cred.user.uid, displayName: displayName || cred.user.email, email: cred.user.email });
    } else {
      const cred = await authMod.signInWithEmailAndPassword(auth, email, password);
      await enterApp({ uid: cred.user.uid, displayName: cred.user.displayName || cred.user.email, email: cred.user.email });
    }
  } catch (err) {
    alert(`เข้าสู่ระบบไม่สำเร็จ: ${err.message}`);
  }
});

async function initAuthPersistence(){
  try {
    const { auth, authMod } = await ensureFirebase();
    authMod.onAuthStateChanged(auth, async (user) => {
      if (user) {
        await enterApp({ uid: user.uid, displayName: user.displayName || user.email, email: user.email });
      }
    });
  } catch (err) {
    console.error('Firebase init failed:', err);
  }
}

setAuthMode('login');
initAuthPersistence();
