document.addEventListener("webviewerloaded", function() {
  PDFViewerApplication.initializedPromise.then(function() {
    PDFViewerApplication.appConfig.toolbar.download.setAttribute("hidden", "true");
    PDFViewerApplication.appConfig.toolbar.print.setAttribute("hidden", "true");
    PDFViewerApplication.appConfig.toolbar.openFile.setAttribute("hidden", "true");
    PDFViewerApplication.appConfig.toolbar.viewBookmark.setAttribute("hidden", "true");
    
    PDFViewerApplication.appConfig.secondaryToolbar.openFileButton.setAttribute("hidden", "true");
    PDFViewerApplication.appConfig.secondaryToolbar.printButton.setAttribute("hidden", "true");
    PDFViewerApplication.appConfig.secondaryToolbar.downloadButton.setAttribute("hidden", "true");
    PDFViewerApplication.appConfig.secondaryToolbar.viewBookmarkButton.setAttribute("hidden", "true");
  })
});
