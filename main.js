
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    for(let i=0;i<apartments.length;i++){
    //console.log(apartments) //array of apartments to render
    //Your code goes here.
    var source = $('#apartment-template').html();
    //console.log(source)
    var template = Handlebars.compile(source); 
    //console.log(template)
    const newHtml = template(apartments[i])
    //console.log(newHtml)
    $('#results').append(newHtml)
    //console.log(apartments)
    }
}

renderApts(apartments) //renders apartments when page loads