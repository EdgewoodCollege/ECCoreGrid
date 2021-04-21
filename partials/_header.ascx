<style>

#covid19 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 70%);
    width: 100%;
    padding:.5rem;
  }
#covid19 h2 a {
    color: #8f1324;
    font-size: 1rem;
  }
  #covid19 h2 a:hover {
    color: black;
	 text-decoration: underline;

  }
  
@media only screen and (max-width: 768px) {
    #covid19 {
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);
  }
}
</style>
<div id="covid19">
  <h2><a href="https://www.edgewood.edu/covid-19">Covid-19 Updates</a></h2>
</div>
<header id="siteHeader" class="header" role="banner" aria-label="Header">
	<div class="logo">
		<div class="hamburgerMenu">
			<button id="hamburgerIcon" class="hamburger hamburger--vortex" type="button">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</div>
		<a href="https://www.edgewood.edu/" target="_blank">
			<img class="img-fluid" alt="Edgewood College" title="Edgewood College" src="/Portals/_default/skins/ecCoreGrid/assets/src/img/logos/EC_Web_LogoH.png">
		</a>
	</div>
	<div class="middleRegister">
		<div class="siteName"><h1><a href="/" title="Link to Site Home"><%= PortalSettings.PortalName %></a></h1></div>
		<div class="searchBox">
            <gcse:searchbox-only resultsurl="/SearchResults"></gcse:searchbox-only>
        </div>
	</div>
	<nav class="siteNav" role="navigation" aria-label="Desktop Navigation">
          <dnn:MENU id="menuDesktop" MenuStyle="menus/main" NodeSelector="*" ExcludeNodes="11606,11607,11609,10625" runat="server"></dnn:MENU>
		  <!-- EXLUDENODES NOTES __ '11606,11607,11609,10625 for Student Involvement Site' | '' -->
	</nav>
</header>