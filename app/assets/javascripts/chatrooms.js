// var user = $('td span:last').first()
var today = new Date();
var UTCstring = today.toUTCString();

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
    success: function (response, users) {
      $('#message_body').val('');
      $('tr').last().parent().append('<tr><td> ' + response.user.name + ' said:</td><td>' + response.body + '</td><td>'+response.created_at+'</trd></tr>');
    }
  });
});
