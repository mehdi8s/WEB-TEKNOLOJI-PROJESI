<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifre alanlarının boş olup olmadığını kontrol et
    if (empty($username) || empty($password)) {
        echo '<script>alert("Kullanıcı adı ve şifre alanları boş bırakılamaz.");</script>';
        exit;
    }

    // Kullanıcı adının e-posta formatında olup olmadığını kontrol et
    if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        echo '<script>alert("Geçersiz kullanıcı adı formatı.");</script>';
        echo '<script>setTimeout(function() { window.location.href = "login.html"; }, 2000);</script>';
        exit;
    }

    // Dosyayı oku ve kullanıcı adı ve şifreyi kontrol et
    $file = fopen('login.txt', 'r');
    $validLogin = false;

    while (($line = fgets($file)) !== false) {
        $line = trim($line);

        if (strpos($line, 'Kullanıcı Adı:') === 0) {
            $storedUsername = substr($line, strlen('Kullanıcı Adı:') + 1);
        } elseif (strpos($line, 'Şifre:') === 0) {
            $storedPassword = substr($line, strlen('Şifre:') + 1);
        }

        if (isset($storedUsername) && isset($storedPassword)) {
            if ($username === $storedUsername && $password === $storedPassword) {
                $validLogin = true;
                break;
            }

            // Kullanıcı adı ve şifreyi sıfırla
            unset($storedUsername);
            unset($storedPassword);
        }
    }

    fclose($file);

    if ($validLogin) {
        echo '<p style="color: green; font-size: 40px; text-align: center;">Hoşgeldiniz "' . $username . '". Giriş işlemi başarılı.</p>';
   echo '<script>setTimeout(function() { window.location.href = "login.html"; }, 4000);</script>';
   } else {
        echo '<p style="color: red; font-size: 40px; text-align: center;">Hatalı kullanıcı adı veya şifre.</p>';
        echo '<script>setTimeout(function() { window.location.href = "login.html"; }, 2000);</script>';
        exit;
    }

} else {
    header('Location: login.html');
    exit;
}
?>
