

USE `147081-jsonify`;
DROP TABLE `projects`;
DROP TABLE `contact`;


CREATE TABLE `projects`
(
  `id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` VARCHAR(120) UNIQUE,
  `fullName` VARCHAR(120) UNIQUE,
  `description` VARCHAR(120),
  `language` VARCHAR(120),
  `grade` VARCHAR(5),
  `link` VARCHAR(120),
  `img` VARCHAR(120)

) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;


INSERT INTO `projects` (`name`, `fullName`, `description`, `language`, `grade`, `link`, `img`) VALUES
    ("Python", "Programmering o Problemlösning med Python-program", "Kursen Programmering och Problemlösning i Python, a.k.a. python, lär ut grunderna i strukturerad programmering och problemlösning med programmerinsspråket Python.", "Python", "C", null, "https://www.python.org/static/opengraph-icon-200x200.png"),
    ("HTMLPHP", "Webbteknologier-program", "Kursen lär ut webbutveckling där teknikerna HTML, CSS, PHP och SQL används för att tillsammans bygga en databasdriven webbplats.", "PHP", "C", null, "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"),
    ("Javascript1", "Programmering med JavaScript", "Kursen lär ut programmering och problemlösning med programmerinsspråket JavaScript tillsammans med HTML och CSS i en webbmiljö.", "Javascript", "A", "http://www.student.bth.se/~nien16/dbwebb-kurser/javascript1/me/kmom10/intelligence/", "https://www.sololearn.com/Icons/Courses/1024.png"),
    ("Design", "Teknisk webbdesign och användbarhet", "Kursen lär webbprogrammeraren att tekniskt förbereda sin webbplats för design och användbarhet.", "CSS", "A", "http://www.student.bth.se/~nien16/dbwebb-kurser/design/me/proj/htdocs/", "https://www.javatpoint.com/csspages/images/css-tutorial.png"),
    ("Linux", "Programmera webbtjänster i Linux", "Kursen lär ut programmering med JavaScript och Node.js på serversidan i en Linux-miljö tillsammans med grunderna i operativsystemet Linux.", "BASH/Javascript", "A", null, "https://avatars3.githubusercontent.com/u/9950313?v=4&s=200"),
    ("OOPython", "Objektorienterad design och programmering med Python", "Kursen lär ut objektorienterad analys och design tillsammans med objektorienterad programmering med Python.", "Python", "A", "http://www.student.bth.se/~nien16/dbwebb-kurser/oopython/me/kmom10/blackops/", "https://www.python.org/static/opengraph-icon-200x200.png"),
    ("Webapp", "Webbapplikationer för mobila enheter", "Kursen lär dig hur du bygger applikationer för mobila enheter och läsplattor med HTML, CSS och JavaScript. Vi använde javascript-ramverket Mithril och cordova för att skapa en webapp.", "Javascript", "A", "http://www.student.bth.se/~nien16/dbwebb-kurser/webapp/me/kmom10/proj/platforms/browser/www/#!/", "https://cdn.slant.co/17b950f5-e0d5-4163-9977-28e70cfc81ca/-/format/jpeg/-/progressive/yes/-/preview/480x480/"),
    ("OOPHP", "Objektorienterade webbteknologier", "Kursen fokuserar på objektorienterad programmering med PHP tillsammans med databasen MySQL.", "PHP/SQL", "A", "http://www.student.bth.se/~nien16/dbwebb-kurser/oophp/me/kmom10/anax-lite/htdocs/login", "https://c.martech.zone/wp-content/uploads/2007/10/mysql-php-logos.png");


CREATE TABLE `contact`
(
    `id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `name` VARCHAR(120),
    `email` VARCHAR(120),
    `message` VARCHAR(120)

) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;
