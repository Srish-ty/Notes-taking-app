<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET');

header('Content-Type: application/json');

// get method show notes
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  //  dummy object
  $notes = [
    [
      'id' => 1,
      'title' => 'Note 1',
      'content' => 'This is the content of Note 1.',
      'createdDate' => '2023-07-01',
      'updatedDate' => '2023-07-02',
    ],
    [
      'id' => 2,
      'title' => 'Note 2',
      'content' => "This is the content of Note 2.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of L",
      'createdDate' => '2023-07-03',
      'updatedDate' => '2023-07-03',
    ],
    // ..
  ];

  // Send the notes as JSON
  echo json_encode($notes);
}


echo json_encode($notes);
?>



