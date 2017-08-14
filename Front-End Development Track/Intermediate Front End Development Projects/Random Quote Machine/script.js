var text = "";


$(document).ready(function() {
    $("#button").click(function() {
        text += $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
            //$("#center_slot").append(a[0].content + "<p> " + a[0].title + "</p>")
            //$("#title").text(a[0].title);
            //$("#content").text(a[0].content);
            $("#center_slot").find('#title').text(a[0].title);
            $("#center_slot").find('#content').text(a[0].content);
        });
    });
    //Setting the cache false, this way it gives a new random quote
    $.ajaxSetup({cache: false});
    
});
