<?php
echo <<<HTML
<header>
  <div class="header">
    <nav>
      <div id="brand">
        <div id="logo">
          <img src="/img/logo.png" alt="">
        </div>
      </div>
      <div id="menu">
        <div id="menu-toggle">
          <div id="menu-icon">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <ul>
          <li><a href="/">Главная страница</a></li>
          <li><a href="/about">О паркинге</a></li>
          <li><a href="/price">Наши тарифы</a></li>
          <li><a href="/gallery">Галерея</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
      </div>
    </nav>
</header>
HTML;
?>