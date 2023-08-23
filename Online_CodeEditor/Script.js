const runButton = document.getElementById("run-button");
const codeTextarea = document.getElementById("code");
const csscodeTextarea = document.getElementById("Csscode");
const jscodeTextarea = document.getElementById("JScode");
const outputFrame = document.getElementById("output-frame");

runButton.addEventListener("click", () => {
  const code = codeTextarea.value;
  const csscode=csscodeTextarea.value;
  const JScode=jscodeTextarea.value;
  const isHtml = code.includes("<html>") && code.includes("<body>");
  
  outputFrame.contentDocument.open();
  
  
    outputFrame.contentDocument.write(code);
    const styleTag = "<style>" + csscode + "</style>";
    const htmlContent = "<html><head>" + styleTag + "</head><body></body></html>";
    outputFrame.contentDocument.write(htmlContent);
    const scripttag="<script>"+ JScode + "</script>";
    const htmlCont = "<html><head>" + scripttag + "</head><body></body></html>";
    outputFrame.contentDocument.write(htmlCont);
  
  
  outputFrame.contentDocument.close();
});