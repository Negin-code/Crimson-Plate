// DataTables Initialization
$(document).ready(function () {
  //Ensures the code executes only after the DOM (HTML document) has fully loaded.Prevents errors by waiting for the table element (#menuTable) to be fully available in the DOM.
  $("#menuTable").DataTable(); //Purpose: Activates the DataTables plugin on the table element with the id="menuTable".Converts the static HTML table into an interactive and dynamic table.Automatically adds features like:Search box: A search input is added to filter rows.Sorting: Allows users to sort the table by clicking column headers. Pagination: Breaks the table into multiple pages if it contains many rows. Responsive Layout: Adjusts the table layout for smaller screens.
});
