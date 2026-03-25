
const issuesData = [
  {
 id: 1, 
 status: 'open',   priority: 'HIGH',   tag: 'BUG',  title: 'Fix Navigation Menu', author: 'john_doe', date: '1/15/2024', desc: 'Menu fails on iOS Safari.' },
  { 
id: 2, 
 status: 'open',   priority: 'MEDIUM', tag: 'ENHANCEMENT', title: 'Add Dark Mode', author: 'sarah_web', date: '1/20/2024', desc: 'Implement CSS variables for themes.' },
  {
 id: 3, 
 status: 'closed', priority: 'LOW',    tag: 'DOCS', title: 'Update README', author: 'alex_k', date: '2/01/2024', desc: 'Added installation steps.' },
  {
 id: 4,  
status: 'open',   priority: 'HIGH',   tag: 'SECURITY',    title: 'Auth Token Leak', author: 'sec_pro', date: '2/05/2024', desc: 'Tokens visible in local storage.' },
  {
 id: 5, 
 status: 'open',   priority: 'MEDIUM', tag: 'UI', title: 'Button Hover State', author: 'design_guy', date: '2/08/2024', desc: 'Add transition to buttons.' },
  {
 id: 6,  
status: 'closed', priority: 'HIGH',   tag: 'BUG',         title: 'Database Timeout', author: 'backend_dev', date: '2/10/2024', desc: 'Increased connection pool size.' },
  {
 id: 7,  status: 'open',   priority: 'LOW',    tag: 'BUG',         title: 'Typo in Footer', author: 'intern_jay', date: '2/12/2024', desc: 'Fix "Contact Us" spelling.' },
  {
 id: 8,  status: 'open',   priority: 'HIGH',   tag: 'BUG',         title: 'Login Crash', author: 'dev_alex', date: '2/14/2024', desc: 'Null pointer on empty password.' },
  { 
id: 9,  status: 'closed', priority: 'MEDIUM', tag: 'UI',          title: 'New Logo Assets', author: 'sarah_web', date: '2/15/2024', desc: 'Replaced SVG with optimized ver.' },
  { 
id: 10, status: 'open',   priority: 'LOW',    tag: 'ENHANCEMENT', title: 'Lazy Load Images', author: 'performance_p', date: '2/18/2024', desc: 'Speed up homepage load.' },
  { 
id: 11, status: 'open',   priority: 'HIGH',   tag: 'BUG',         title: 'Checkout Loop', author: 'ecom_dev', date: '2/20/2024', desc: 'Payment confirmation infinite loop.' },
  {
 id: 12, status: 'closed', priority: 'LOW',    tag: 'DOCS',        title: 'API Reference', author: 'alex_k', date: '2/22/2024', desc: 'Documented the v2 endpoints.' },
  {
 id: 13, status: 'open',   priority: 'MEDIUM', tag: 'UI',          title: 'Dashboard Sidebar', author: 'design_guy', date: '2/25/2024', desc: 'Make sidebar collapsible.' },
  { 
id: 14, status: 'open',   priority: 'HIGH',   tag: 'SECURITY',    title: 'SQL Injection Risk', author: 'sec_pro', date: '2/27/2024', desc: 'Sanitize search query inputs.' },
  {
 id: 15, status: 'closed', priority: 'MEDIUM', tag: 'BUG',         title: 'Avatar Upload Fix', author: 'john_doe', date: '3/01/2024', desc: 'Fixed 5MB file limit.' },
  {
 id: 16, status: 'open',   priority: 'LOW',    tag: 'ENHANCEMENT', title: 'Filter by Date', author: 'dev_sarah', date: '3/03/2024', desc: 'Add date range to issue list.' },
  { 
id: 17, status: 'open',   priority: 'HIGH',   tag: 'BUG',         title: 'Broken Search', author: 'backend_dev', date: '3/05/2024', desc: 'Search index is not updating.' },
  {
 id: 18, status: 'closed', priority: 'LOW',    tag: 'UI',          title: 'Font Update', author: 'design_guy', date: '3/07/2024', desc: 'Switched to Inter font.' },
  { 
id: 19, status: 'open',   priority: 'MEDIUM', tag: 'BUG',         title: 'Mobile Padding', author: 'intern_jay', date: '3/09/2024', desc: 'Fix overlap on small screens.' },
  {
 id: 20, status: 'open',   priority: 'HIGH',   tag: 'BUG',         title: 'Data Not Saving', author: 'dev_alex', date: '3/11/2024', desc: 'Auto-save fails on refresh.' }
];
const grid = document.querySelector('.grid');
const tabs = document.querySelectorAll('.tab');
const issueCount = document.querySelector('.header h2');
const modal = document.getElementById('issueModal'); // Ensure this ID exists in HTML
const modalBody = document.getElementById('modalBody');
function renderIssues(filter = 'all') {
  grid.innerHTML = ''; 
  const filtered = issuesData.filter(i => filter === 'all' || i.status === filter);
  issueCount.textContent = `${filtered.length} Issues`;
filtered.forEach(issue => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-top">
        <img src="images/${issue.status === 'open' ? 'Open-Status.png' : 'Closed-Status.png'}" alt="Status">
        <span class="badge badge-${issue.priority.toLowerCase()}">${issue.priority}</span>
      </div>
      <h3 class="card-title">${issue.title}</h3>
      <p class="card-desc">${issue.desc}</p>
      <div class="tags">
        <span class="tag-bug">🐛 ${issue.tag}</span>
        <span class="tag-help">🤝 HELP WANTED</span>
      </div>
      <div class="card-footer">#${issue.id} by ${issue.author} <br>${issue.date}</div>
    `;
    card.addEventListener('click', () => openModal(issue));
    grid.appendChild(card);
  });
}
function openModal(issue) {
  modalBody.innerHTML = `
    <h2>${issue.title}</h2>
    <p><strong>Status:</strong> ${issue.status.toUpperCase()}</p>
    <p><strong>Priority:</strong> ${issue.priority}</p>
    <p><strong>Label:</strong> ${issue.tag}</p>
    <p><strong>Created:</strong> ${issue.date} by ${issue.author}</p>
    <hr>
    <p>${issue.desc}</p>
  `;
  modal.style.display = 'flex';
}
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    renderIssues(tab.textContent.toLowerCase());
  });
});
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; 
document.addEventListener('DOMContentLoaded', () => renderIssues('all'));
}