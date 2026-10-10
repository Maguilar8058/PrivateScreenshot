const api = globalThis.browser ?? globalThis.chrome;
document.querySelector('#capture').addEventListener('click', async () => {
  const status = document.querySelector('#status'); status.textContent = 'Capturing…';
  try {
    const [tab] = await api.tabs.query({ active: true, currentWindow: true });
    if (!tab?.windowId) throw new Error('No active tab');
    const dataUrl = await api.tabs.captureVisibleTab(tab.windowId, { format: 'png' });
    await api.storage.local.set({ pendingImage: dataUrl });
    await api.tabs.create({ url: api.runtime.getURL('editor.html') }); window.close();
  } catch (error) { status.textContent = 'Try a normal website tab.'; console.error(error); }
});
