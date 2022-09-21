// get time and date
const time = new Date().toLocaleTimeString();
const date = new Date().toLocaleDateString();

document.getElementById('card-footer').innerHTML = time;

// empty note warning
function emptynote(){
    var warn_note = document.getElementById('card-footer');
    warn_note.innerHTML = "Note cannot be empty!";
    warn_note.style.color = 'red';
    
}
// display time
function updatetime(){
    var time_note = document.getElementById('card-footer');
    time_note.style.color = 'black';
    time_note.innerHTML = time;
}

// binding event to save button
document.getElementById('save-btn').addEventListener("click", function() {
    var title_content = document.getElementById('title').value;
    var note_content = document.getElementById('note').value;
    document.getElementById('note').value = '';
  
    // add date as default title if empty
    if (title_content == ''){
        title_content = date;
    };

    // warn against empty note
    if (note_content == ''){
        emptynote();
    }

    // new note creation
    if (!note_content == ''){
        var card = document.createElement('div');
        var head = document.createElement('div');
        var title = document.createElement('p');
        var lineb = document.createElement('hr');
        var note = document.createElement('p');
        var footnote = document.createElement('p');

        title.innerHTML = title_content;
        note.innerHTML = note_content;
        footnote.innerHTML = 'Created:' + time;

        // create note card
        card.className = 'card';
        title.id = 'title';
        lineb.id = 'lin';
        note.id = 'note';
        head.id = 'head'
        footnote.id = 'card-footer';

        head.appendChild(title);
        card.appendChild(head);
        card.appendChild(lineb);
        card.appendChild(note);
        card.appendChild(document.createElement('hr'));
        card.appendChild(footnote);

        //add new note card to page
        document.getElementById('container').appendChild(card);
        
    }

});