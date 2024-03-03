
Download below --
https://www.iis.net/downloads/microsoft/url-rewrite
https://www.iis.net/downloads/microsoft/application-request-routing

install nodejs in IIS
https://stackoverflow.com/questions/46266609/host-node-js-on-windows-server-iis

https://harveywilliams.net/blog/installing-iisnode

iis overrideMode="Deny"
https://stackoverflow.com/questions/9794985/config-error-this-configuration-section-cannot-be-used-at-this-path

CHECK PLS
https://stackoverflow.com/questions/45193863/permissions-and-request-with-iisnode

WinAUth
https://www.youtube.com/watch?v=Y5lD8RjcOFE
https://www.youtube.com/watch?v=YXrgCAOUJF4&t=519s
<!-- <?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="ReverseProxyInboundRule1" stopProcessing="true">
                    <match url="(.*)" />
                    <action type="Rewrite" url="http://localhost:3000/{R:1}" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration> -->
