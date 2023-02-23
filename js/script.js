/*this makes it so that when you open the page, only the life of the designer tab is open and the rest are automatically closed*/
document.getElementById("workDesignerContent").style.display = "none";
document.getElementById("styleDesignerContent").style.display = "none";
document.getElementById("lifeDesignerTab").className =
  "mcgovernPanelTab highlight";
/*this function hides the pannels*/
function hidePanels() {
  document.getElementById("workDesignerContent").style.display = "none";
  document.getElementById("styleDesignerContent").style.display = "none";
  document.getElementById("lifeDesignerContent").style.display = "none";
  document.getElementById("workDesignerTab").className = "mcgovernPanelTab";
  document.getElementById("lifeDesignerTab").className = "mcgovernPanelTab";
  document.getElementById("styleDesignerTab").className = "mcgovernPanelTab";
}
/*this function opens the tab with the work of the designer*/
function showWorkDesigner() {
  hidePanels();
  document.getElementById("workDesignerContent").style.display = "block";
  document.getElementById("workDesignerTab").className =
    "mcgovernPanelTab highlight";
}
/*this function opens the tab about the life of the designer*/
function showLifeDesigner() {
  hidePanels();
  document.getElementById("lifeDesignerContent").style.display = "block";
  document.getElementById("lifeDesignerTab").className =
    "mcgovernPanelTab highlight";
}
/*this function opens the tab about the style of the designer*/
function showStyleDesigner() {
  hidePanels();
  document.getElementById("styleDesignerContent").style.display = "block";
  document.getElementById("styleDesignerTab").className =
    "mcgovernPanelTab highlight";
}