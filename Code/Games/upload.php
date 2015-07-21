<?php
function makedirs($dirpath) {
    return is_dir($dirpath) || mkdir($dirpath, 0777, true);
}

try {
  // pull the raw binary data from the POST array
  $data = substr($_POST['data'], strpos($_POST['data'], ",") + 1);
  // studentNumber
  $studentNumber = $_POST['studentNumber'];
  // gameNumber
  $gameNumber = $_POST['gameNumber'];

  $dir = 'FILES/'.$studentNumber.'/'.$gameNumber;

  makedirs($dir);

  /// decode it
  $decodedData = base64_decode($data);
  // print out the raw data,
  $filename = $dir.'/'.$_POST['fname'];
  // write the data out to the file
  $fp = fopen($filename, 'wb');
  fwrite($fp, $decodedData);
  fclose($fp);
} catch (Exception $e) {
    echo 'Exceção capturada: ',  $e->getMessage(), "\n";
}

?>
