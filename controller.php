<?php
// controller.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $action = $input['action'] ?? '';

    // Handle the action (you can log it, process it, etc.)
    if ($action) {
        echo json_encode(['status' => 'success', 'action' => $action]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No action received']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
