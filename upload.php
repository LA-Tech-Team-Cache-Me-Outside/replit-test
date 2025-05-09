<?php
$targetDir = "uploaded_files/";

if (!is_dir($targetDir)) {
    mkdir($targetDir, 0777, true);
}

if (isset($_FILES["uploadedFile"])) {
    $fileName = basename($_FILES["uploadedFile"]["name"]);
    $targetFile = $targetDir . $fileName;

    if (move_uploaded_file($_FILES["uploadedFile"]["tmp_name"], $targetFile)) {
        echo "Upload successful: " . htmlspecialchars($fileName);
    } else {
        echo "Error: Could not move uploaded file.";
    }
} else {
    echo "No file uploaded.";
}
?>
