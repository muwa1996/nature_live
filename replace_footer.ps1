$footer = Get-Content 'c:\Users\oommo\OneDrive\Desktop\nature\standard_footer.html' -Raw

Get-ChildItem 'c:\Users\oommo\OneDrive\Desktop\nature\*.html' -Exclude 'index.html' | ForEach-Object {

    $file = $_.FullName

    $content = Get-Content $file -Raw

    $footerStart = $content.IndexOf('<footer class="site-footer">')

    $cookieStart = $content.IndexOf('<div id="cookie-banner"')

    if ($cookieStart -eq -1) {

        $cookieEnd = $content.LastIndexOf('</footer>') + 9

    } else {

        $cookieEnd = $content.IndexOf('</div>', $cookieStart) + 6

    }

    if ($footerStart -ne -1) {

        $before = $content.Substring(0, $footerStart)

        $after = $content.Substring($cookieEnd)

        $newContent = $before + $footer + $after

        Set-Content $file $newContent

    }

}
