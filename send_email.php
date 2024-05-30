<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to_email = "rickyerlangga.h@gmail.com"; // Ganti dengan alamat emailmu
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = 'From: ' . $_POST['email'];

    if (mail($to_email, $subject, $message, $headers)) {
        echo "<p>Email berhasil dikirim.</p>";
    } else {
        echo "<p>Gagal mengirim email.</p>";
    }
}
?>
