<dnn:META ID="mobileScale" runat="server" Name="viewport" Content="width=device-width, initial-scale=1.0" />
<dnn:DnnCssExclude runat="server" Name="dnndefault" /> 

<dnn:DnnCssInclude ID="DnnCssIncludeFontAwesome" runat="server" FilePath="https://use.fontawesome.com/releases/v5.0.13/css/all.css" Priority="110" />
<dnn:DnnCssInclude ID="DnnCssIncludemmenuCSS" runat="server" FilePath="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/7.0.5/jquery.mmenu.all.css" Priority="115" />

<dnn:DnnCssInclude runat="server" FilePath="dist/css/style.min.css" Priority="120" PathNameAlias="SkinPath" />

<dnn:DnnJsInclude ID="DnnJsIncludeMmenu" runat="server" FilePath="https://cdn.jsdelivr.net/combine/npm/jquery.mmenu@7.0.6,npm/lity@2.3.1" ForceProvider="DnnFormBottomProvider" Priority="100"  />
<dnn:DnnJsInclude runat="server" FilePath="dist/js/customTop.min.js" ForceProvider="DnnPageHeaderProvider" Priority="120" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="dist/js/accordion.js" ForceProvider="DnnPageHeaderProvider" Priority="130" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="dist/js/customBottom.min.js" ForceProvider="DnnPageHeaderProvider" Priority="140" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="dist/js/mmenu.min.js" ForceProvider="DnnPageHeaderProvider" Priority="130" PathNameAlias="SkinPath" />