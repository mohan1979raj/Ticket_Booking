<!-- register.php -->
<?php
header('Content-Type: application/json');
include 'db_config.php';

$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (empty($username) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'Username and password are required.']);
    exit;
}

// Hash the password (use password_hash in a real-world scenario)
$hashedPassword = md5($password);

try {
    $stmt = $pdo->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    $stmt->execute([$username, $hashedPassword]);

    echo json_encode(['success' => true, 'message' => 'User registered successfully.']);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Registration failed.']);
}
?>
