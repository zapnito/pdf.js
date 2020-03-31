document.addEventListener("webviewerloaded", function() {
  PDFViewerApplication.initializedPromise.then(function() {
    PDFViewerApplicationOptions.toolbar.download.setAttribute("hidden", "true");
    PDFViewerApplicationOptions.toolbar.print.setAttribute("hidden", "true");
    PDFViewerApplicationOptions.toolbar.openFile.setAttribute("hidden", "true");
    PDFViewerApplicationOptions.toolbar.viewBookmark.setAttribute("hidden", "true");
    
    PDFViewerApplicationOptions.secondaryToolbar.openFileButton.setAttribute("hidden", "true");
    PDFViewerApplicationOptions.secondaryToolbar.printButton.setAttribute("hidden", "true");
    PDFViewerApplicationOptions.secondaryToolbar.downloadButton.setAttribute("hidden", "true");
    PDFViewerApplicationOptions.secondaryToolbar.viewBookmarkButton.setAttribute("hidden", "true");
  })
});
