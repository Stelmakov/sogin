<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'sogin');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'w=6eIMq&O}3<:VI52&F)yKpE>Sns.wDhr&LNz3]LBHitvSz8_E5w9EUfO5ShW,Iy');
define('SECURE_AUTH_KEY',  'F#%bH}-qhE.zjgjD|m-EV[dJA>Gq~|uMI+I9)cSSsD|q(+{LvR*cBRP+ZTOn_zKm');
define('LOGGED_IN_KEY',    '= A40poSn=yP5#1Sz1-I-U|waFXL )l9|+A+DNBE](=uEUNK~jDoRLUT5E$yCx9j');
define('NONCE_KEY',        'D/>C<Uc`JLM2;u07pRJ/cj-jhH^?gf4rk^O:>a_Zc4@W:.Yf}1[oRIZ6P+Dy+3.E');
define('AUTH_SALT',        'RX?YJ{6/BRJ7-N]QPBmax)+vc.%-hC7+_2{9l[^.>2L~Q-~s,JM @uC:r@W=B+T:');
define('SECURE_AUTH_SALT', 'e^[Z!DC@kzTk>x4o8>-,ZT7T!Y!-NGa2l&|KV+)eMSjaql<<hB6YEgv|#_Os4rEm');
define('LOGGED_IN_SALT',   '<Y^eYBwAL3QN-@Bga|sfix4B5%8i`j|QOb--4/18h$rbB(l-O (^ h#|E#Ie-4x*');
define('NONCE_SALT',       'oK>:+~zm_?B3SKN!dZre|KCUas!&1$fYkPG#kDYH,giX+wo>aNO-b|l<,>J!&RE!');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
