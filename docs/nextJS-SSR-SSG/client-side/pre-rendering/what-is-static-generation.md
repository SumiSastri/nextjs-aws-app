Static generation is a form of pre-rendering that happens at build time when the HTML pages are generated.

It is the recommended method as the page is built, cached in content delivery (distribution) network (CDN) and rendered almost immediately. A CDN is a geographically distributed group of servers which work together to provide fast delivery of Internet content. It allows for a quick transfer of assets needed for loading Internet content including HTML pages.

More on CDNs [https://aws.amazon.com/what-is/cdn/]

In the dev mode (when you are developing the code in a development environment) every page is automatically generated after dev is over in the build mode for a production server or in prod mode.

In dev mode, Next the page is pre-rendered on request with specific framework methods that ship with NextJs.
