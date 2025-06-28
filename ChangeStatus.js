<script>
  const css = `
    .theme-entry .grid-content-cell-wrapper[title="Завершен"] .runtime-list-item a {
      background-color: #23b962 !important;
    }
    .theme-entry .grid-content-cell-wrapper[title="Отклонен"] .runtime-list-item a {
      background-color: #e74c3c !important;
    }
    .theme-entry .runtime-list-item a {
      border-radius: 8px !important;
      text-decoration: none !important;
      color: white !important;
      padding: 2px 6px !important;
      display: inline-block !important;
      line-height: 1.2 !important;
      font-weight: bold !important;
      transition: transform 0.2s ease-in-out !important; /* плавность */
    }
    .theme-entry .runtime-list-item a:hover {
  transform: scale(1.1); /* немного увеличивается */
}
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
</script>
