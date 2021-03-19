<?php
$current_year = date ( 'Y' );
echo <<<HTML
<footer>
  <div class="footer__wrapper">
    <p>
      © 2017 - $current_year ООО "МСД Паркинг"
    </p>
  </div>
</footer>
HTML;
?>