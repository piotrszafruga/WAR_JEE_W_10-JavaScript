$(document).ready(function() {
    var task1 = $("span[data-task='_task1']")
        .siblings()
        .closest("p")
        .last()
        .parents("section")
        .next()
        .find(".container")
        .css("backgroundColor", "green")
        .addClass("answerTask1")
        .slideUp(4000);

    var task2 = $("span[data-task='_task2']")
        .parent()
        .siblings('section.shopping')
        .children('div').last()
        .children().eq(2)
        .children('button')
        .closest('.cart-item')
        .addClass('cart-updated');
});

