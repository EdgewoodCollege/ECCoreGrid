<!--#include file="partials/_registers.ascx" -->
<!--#include file="partials/_includes.ascx" -->

  <!-- Header/NavBar -->
  <!--#include file="partials/_header.ascx" -->
  <!-- Main Content -->
  <main role="main">
    <div id="heroImage" runat="server"></div>

    <div id="gridTopPane">
     <div class="searchResults">
            <gcse:search></gcse:search>
        </div>
      <div id="TopPane" runat="server"></div>
    </div>

    <div id="gridAdminPane">
      <div id="AdminPane" runat="server"></div>
    </div>
  
    <div id="secondFooter" runat="server"></div>
  </main>

  <!-- The page -->

  <!-- Footer -->
  <!--#include file="partials/_footer.ascx" -->
  <!--#include file="partials/_mMenu.ascx" -->