# Private Screenshot

Cross-browser WebExtension prototype for capturing the visible page and adding local redaction boxes before sharing.

## Current prototype

- Manifest V3 with `activeTab` and `storage` only.
- Toolbar and extension icons are included as local SVG assets.
- No server, account, analytics, or external API.
- Capture visible tab, review locally, click to add redaction boxes, download PNG, or copy the image.
- Browser-specific store packaging and automatic PII detection are still pending. Automatic PII detection will need an OCR/text-extraction design because the current editor receives only the captured image.

## Support

If you find this extension useful, you can support its development through [GitHub Sponsors](https://github.com/sponsors/Maguilar8058).

## License

MIT License. See [LICENSE](LICENSE).

## Load locally

Chrome/Edge: open the extensions page, enable Developer mode, choose **Load unpacked**, and select this folder.

Firefox: open `about:debugging`, choose **This Firefox**, then **Load Temporary Add-on** and select `manifest.json`.
