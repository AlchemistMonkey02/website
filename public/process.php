<?php
// process.php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    // Fallback to $_POST if not JSON
    $input = $_POST;
}

if (empty($input)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit();
}

$file = 'leads.csv';
$isNewFile = !file_exists($file);

// Prepare the data to be saved
// We will sanitize the input and flatten it
$data = [];
$data['Date'] = date('Y-m-d H:i:s');
$data['Source'] = isset($input['source']) ? htmlspecialchars(strip_tags($input['source'])) : 'Unknown';

// General fields
$data['FirstName'] = isset($input['firstName']) ? htmlspecialchars(strip_tags($input['firstName'])) : '';
$data['LastName'] = isset($input['lastName']) ? htmlspecialchars(strip_tags($input['lastName'])) : '';
$data['Name'] = isset($input['name']) ? htmlspecialchars(strip_tags($input['name'])) : '';
$data['Email'] = isset($input['email']) ? htmlspecialchars(strip_tags($input['email'])) : '';
$data['Phone'] = isset($input['phone']) ? htmlspecialchars(strip_tags($input['phone'])) : '';

// Contact specific
$data['Subject'] = isset($input['subject']) ? htmlspecialchars(strip_tags($input['subject'])) : '';
$data['Message'] = isset($input['message']) ? htmlspecialchars(strip_tags($input['message'])) : '';

// Assessment specific
$data['CompanyStage'] = isset($input['companyStage']) ? htmlspecialchars(strip_tags($input['companyStage'])) : '';
$data['Goals'] = isset($input['goals']) && is_array($input['goals']) ? htmlspecialchars(strip_tags(implode(', ', $input['goals']))) : '';

$handle = fopen($file, 'a');

if ($handle) {
    if ($isNewFile) {
        fputcsv($handle, array_keys($data));
    }
    fputcsv($handle, array_values($data));
    fclose($handle);
    echo json_encode(['success' => true, 'message' => 'Data saved successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save data']);
}
