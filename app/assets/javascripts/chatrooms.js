
$('#newMessage').on('click', function () {
  $.ajax({
    url: '/messages',
    dataType: 'JSON',
    method: 'POST',
    data: {
      message: {
        body:      $('#message_body').val(),
        user_id:   $('#message_user_id').val(),
        chatroom_id: $('#message_chatroom_id').val()
      }
    },
    success: function (response) {
      $('#message_body').val('');
      $('tr').last().parent().append('<tr><td> You say:</td><td>' + response.body + '</td></tr>');
    }
  });
});
