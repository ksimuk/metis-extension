// create button
window.codioDashboardApi.courses.list.addNewCourseButtonOption('upload', 'Upload', () => {
  showUploadDialog()

})

function showUploadDialog() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.5)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '9999';

  // Create dialog
  const dialog = document.createElement('div');
  dialog.style.width = '90vw';
  dialog.style.height = '90vh';
  dialog.style.background = '#fff';
  dialog.style.borderRadius = '8px';
  dialog.style.boxShadow = '0 2px 16px rgba(0,0,0,0.2)';
  dialog.style.position = 'relative';
  dialog.style.display = 'flex';
  dialog.style.flexDirection = 'column';
  dialog.style.overflow = 'hidden';

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '16px';
  closeBtn.style.right = '24px';
  closeBtn.style.fontSize = '2rem';
  closeBtn.style.background = 'transparent';
  closeBtn.style.color = '#fff';
  closeBtn.style.border = 'none';
  closeBtn.style.cursor = 'pointer';
  closeBtn.onclick = () => document.body.removeChild(overlay);

  // Iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://metis.codio.com/static/test_client.html';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  dialog.appendChild(closeBtn);
  dialog.appendChild(iframe);
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);
}
