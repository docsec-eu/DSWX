browser.contextMenus.create({
    id: "open-via-docsec",
    title: "Open link via DocSec",
    contexts: ["link"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-via-docsec") {
// TODO:
// Filter filetypes of URL and only work with known types
	const safeUrl = escapeHTML(info.linkUrl);
	const newlink = `https:\/\/free.docsec.eu/?u=${safeUrl}`;

	var creatingdocsectab = browser.tabs.create({
		'url': newlink		
	});
    }
});

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
	.replace(/'/g, "&#39;")
        .replace(/</g, "&lt;")
	.replace(/>/g, "&gt;");
}

