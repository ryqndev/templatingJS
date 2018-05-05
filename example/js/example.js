var apiData = {
    'items': [
        {
            'domID': 'class1',
            'title': 'What is tJS?',
            'description': 'TemplateJS is an awesomely simple javascript templating library',
            'color': '#834fa8'
        },
        {
            'domID': 'class2',
            'title': 'Who made it?',
            'description': 'This awesome dude named Ryan.',
            'color': '#4f4593'
        },
        {
            'domID': 'class3',
            'title': 'What\'s his Github?',
            'description': 'You can find it at https://github.com/Ryabn',
            'color': '#3f6887'
        },
        {
            'domID': 'class4',
            'title': 'How can I be as cool as him?',
            'description': 'idk star my repo or something so I look impressive ty <3',
            'color': '#4a9b73'
        },
        {
            'domID': 'class5',
            'title': 'More examples',
            'description': 'Because I\'m bored at starbucks rn',
            'color': '#b0b252'
        },
        {
            'domID': 'class1',
            'title': 'Please hire me',
            'description': 'I swear I\'m like totally op at cs',
            'color': '#ad9154'
        },
        {
            'domID': 'class6',
            'title': 'title7',
            'description': 'description7',
            'color': '#a86f4b'
        },
        {
            'domID': 'class7',
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