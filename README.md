# Digital Garden
This website is a term project for CSCE 464.

The goal of this project is to create a digital garden that will evolve as I learn HTML, CSS, JavaScript, and PHP.

## Dev Setup
### Apache HTTP Server
These steps assume you are running Apache HTTP Server[^httpd] via MAMP[^mamp] on macOS.

#### Enable Server Side Includes (SSI)
1. Edit `httpd.conf` (default `/Applications/MAMP/conf/apache/`)

    Search for the following Ln 598-599 and uncomment them
    ```apache
    AddType text/html .shtml
    AddOutputFilter INCLUDES .shtml
    ```
    
    Search for the following Ln 111 and uncomment it
    ```apache
    LoadModule include_module modules/mod_include.so
    ```

1. Write the following lines to `.htaccess` in your document root (default `/Applications/MAMP/htdocs/`)
    ```apache
    AddType text/html .shtml
    AddHandler server-parsed .html
    AddHandler server-persed .shtml
    Options Indexes FollowSymlinks Includes
    ```

1. Restart your server

1. Add a `<base>` tag to your document `<head>` and set the `href` attribute to the desired base URL
    ```html
    <base href="/path/from/document/root/"
    ```

1. SSI directives[^ssi] can now be used
    ```html
    <!--#include virtual="path/to/footer.html" -->
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

    Search for the following Ln 275 and change `AllowOverride None` to `AllowOverride All`
    ```apache
    <Directory />
        Options Indexes FollowSymLinks
        AllowOverride All
    </Directory>
    ```

1. Edit `httpd-vhosts.conf` (default `/Applications/MAMP/conf/apache/extra/`)

    Replace the two VirtualHost examples with your desired configurations[^vhost]
    ```conf
    <VirtualHost *:8888>
        DocumentRoot "/Applications/MAMP/htdocs"
        ServerName localhost
    </VirtualHost>

    <VirtualHost *:8888>
        DocumentRoot "/path/to/document/root"
        ServerName your_hostname
    </VirtualHost>
    ```

    Note that MAMP's default port for Apache is `8888`

1. Restart your server

1. Your virtual hosts can now be accessed at their corresponding hostnames

## References and Further Reading
### Docs and Tools
- [HTML Tutorial](https://www.w3schools.com/html/default.asp)
- [Ready to check - Nu Html Checker](https://validator.w3.org/nu/)
- [favicon.ico Generator](https://www.favicon.cc/)
- [CodePen](https://codepen.io/)

### Inspiration
- [Hypertext Gardens](http://www.eastgate.com/garden/Enter.html)
- [MaggieAppleton/digital-gardeners: Resources, links, projects, and ideas for gardeners tending their digital notes on the public interwebs](https://github.com/MaggieAppleton/digital-gardeners)
- [Introduction to the Zettelkasten Method &bull; Zettelkasten Method](https://zettelkasten.de/introduction/)

[^httpd]: [Welcome! - The Apache HTTP Server Project](https://httpd.apache.org)
[^mamp]: [MAMP &amp; MAMP PRO for macOS – Local Web Development Environment for PHP, MySQL &amp; Apache](https://www.mamp.info/en/mac/)
[^ssi]: [Apache httpd Tutorial: Introduction to Server Side Includes - Apache HTTP Server Version 2.4](https://httpd.apache.org/docs/2.4/howto/ssi.html)
[^vhost]: [Name-based Virtual Host Support - Apache HTTP Server Version 2.4](https://httpd.apache.org/docs/2.4/vhosts/name-based.html)