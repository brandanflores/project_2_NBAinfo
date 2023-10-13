<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // In a real application, you would validate the credentials here
    // For simplicity, we'll use a basic check
    if ($username === "your_username" && $password === "your_password") {
        // Authentication successful, redirect to the second page
        header("Location: second-page.html");
        exit;
    } else {
        echo "Invalid username or password. Please try again.";
    }
}
?>
