# Digital Garden
This website is a term project for CSCE 464.

The goal of this project is to create a digital garden that will evolve as I learn HTML, CSS, JavaScript, and PHP.

## Dev Setup
### Apache HTTP Server
These steps assume you are running Apache HTTP Server[^httpd] via MAMP[^mamp] on macOS.

#### Enable Server Side Includes (SSI)
1. Edit `httpd.conf` (default `/Applications/MAMP/conf/apache/`)

    Search for the following Ln 111 and uncomment it
    ```apache
    LoadModule include_module modules/mod_include.so
    ```

    Search for the following Ln 598-599 and uncomment them
    ```apache
    AddType text/html .shtml
    AddOutputFilter INCLUDES .shtml
    ```

1. Write the following lines to `.htaccess` in your document root (default `/Applications/MAMP/htdocs/`)
    ```apache
    AddHandler server-parsed .shtml
    AddHandler server-parsed .html
    AddOutputFilter INCLUDES .html
    Options +Includes
    ```

    See [Enable Name-Based Virtual Hosts](#enable-name-based-virtual-hosts) for an SSI configuration if you wish to avoid using `.htaccess` files

1. Restart your server

1. Add a `<base>` tag to your document `<head>` and set the `href` attribute to the desired base URL
    ```html
    <base href="/path/from/document/root/"
    ```

1. SSI directives[^ssi] can now be used
    ```html
    <!--#include virtual="path/to/element" -->
    ```

#### Enable Name-Based Virtual Hosts
1. Edit your host database at `/etc/hosts` and append your desired hostname to the IP for localhost
    ```conf
    127.0.0.1 localhost your_hostname
    ```

1. Edit `httpd.conf` (default `/Applications/MAMP/conf/apache/`)

    Search for the following Ln 667 and uncomment it
    ```apache
    # Virtual hosts
    Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
    ```

1. Edit `httpd-vhosts.conf` (default `/Applications/MAMP/conf/apache/extra/`)

    Replace the two VirtualHost examples with your desired configurations[^vhost]
    ```conf
    <VirtualHost *:8888>
        ServerName localhost
        DocumentRoot "/Applications/MAMP/htdocs"
    </VirtualHost>

    <VirtualHost *:8888>
        ServerName your_hostname
        DocumentRoot "/path/to/document/root"
        <Directory /path/to/document/root/>
            AddHandler server-parsed .shtml
            AddHandler server-parsed .html
            AddOutputFilter INCLUDES .html
            Options +Includes
        </Directory>
    </VirtualHost>
    ```

    Note that MAMP's default port for Apache is `8888`. The directory section in the second virtual host above has SSI enabled without the need for `.htaccess` files

1. Restart your server

1. Your virtual hosts can now be accessed at their corresponding hostnames

## References and Further Reading
### Docs and Tools
- [The W3C Markup Validation Service](https://validator.w3.org/)
- [favicon.ico Generator](https://www.favicon.cc/)
- [CodePen](https://codepen.io/)
- [regex101: build, test, and debug regex](https://regex101.com)
- [SSL Server Test (Powered by Qualys SSL Labs)](https://www.ssllabs.com/ssltest/)
- [Git - Reference](https://git-scm.com/docs)
- [Semantic Versioning 2.0.0 | Semantic Versioning](https://semver.org)
- [Freenom - A Name for Everyone](https://www.freenom.com/)
- [Coolors - The super fast color palettes generator!](https://coolors.co)

### Inspiration
- [Hypertext Gardens](http://www.eastgate.com/garden/Enter.html)
- [MaggieAppleton/digital-gardeners: Resources, links, projects, and ideas for gardeners tending their digital notes on the public interwebs](https://github.com/MaggieAppleton/digital-gardeners)
- [Introduction to the Zettelkasten Method &bull; Zettelkasten Method](https://zettelkasten.de/introduction/)

[^httpd]: [Welcome! - The Apache HTTP Server Project](https://httpd.apache.org)
[^mamp]: [MAMP &amp; MAMP PRO for macOS – Local Web Development Environment for PHP, MySQL &amp; Apache](https://www.mamp.info/en/mac/)
[^ssi]: [Apache httpd Tutorial: Introduction to Server Side Includes - Apache HTTP Server Version 2.4](https://httpd.apache.org/docs/2.4/howto/ssi.html)
[^vhost]: [Name-based Virtual Host Support - Apache HTTP Server Version 2.4](https://httpd.apache.org/docs/2.4/vhosts/name-based.html)