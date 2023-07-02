<?php
$data = $_POST['data'] ?? '';

if ($data !== '') {
  $file = 'input.txt';
  file_put_contents($file, $data);
  echo 'Data written to file successfully';
} else {
  echo 'No data received';
}
?>
