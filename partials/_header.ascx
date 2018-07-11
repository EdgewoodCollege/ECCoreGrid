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
		  <!-- EXLUDENODES __ '11606,11607,11609,10625 for Student Involvement Site' | '' -->
	</nav>
</header>