$('#inp').keypress(function(e) {
    if (e.which === 13) {
        const text = $('#inp').val()
        if ($('#inp').val() === "") {
            alert('Empty Task');
            return;
        }
        $('#list').append(`<li><i class="fas fa-trash-alt"></i> ${text}</li>`)
        $(this).toggleClass('li')
        $('#inp').val("");
    }
})
$('#plus').click(function() {
    const text = $('#inp').val()
    if ($('#inp').val() === "") {
        alert('Empty Task');
        return;
    }
    $('#list').append(`<li><i class="fas fa-trash-alt"></i> ${text}</li>`)
    $(this).toggleClass('li')
    $('#inp').val("");
})

$('ul').on('click', 'li', function() {
    $(this).toggleClass('complete')
})

$('#list').on('click', 'i', function(e) {
    $(this).parent().fadeOut(700, function() {
        $(this).remove();
    })
    e.stopPropagation();
})

$('#minus').click(function() {
    $('#inp').fadeToggle();
})