var apiData = {
    'items': [
        {
            'title': 'title1',
            'description': 'description1',
            'color': '#834fa8'
        },
        {
            'title': 'title2',
            'description': 'description2',
            'color': '#4f4593'
        },
        {
            'title': 'title3',
            'description': 'description3',
            'color': '#3f6887'
        },
        {
            'title': 'title4',
            'description': 'description4',
            'color': '#4a9b73'
        },
        {
            'title': 'title5',
            'description': 'description5',
            'color': '#b0b252'
        },
        {
            'title': 'title6',
            'description': 'description6',
            'color': '#ad9154'
        },
        {
            'title': 'title7',
            'description': 'description7',
            'color': '#a86f4b'
        },
        {
            'title': 'title8',
            'description': 'description8',
            'color': '#aa5858'
        }
    ],
    'numberOfItems': 8
};

function load(){
    var items = apiData.numberOfItems;
    generateCards(items);
}

function generateCards(totalNumberOfCards){
    for(let i = 0; i < totalNumberOfCards; i++ ){
        generateCard(apiData.items[i]);
    }
}
function generateCard(variables){
    var url = 'templates/template.html';
    template(url, variables, 'display');
}