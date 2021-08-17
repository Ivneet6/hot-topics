// get the references to the active parts of the webpage
let dd = document.getElementById('dynamic-content')
let ul = document.querySelector('nav ul');
let listItems = ul.children;

//get reference to the partials
let url1 = 'partials/home.html';
let url2 = 'partials/menu.html';



function handleClick(ev) {
    //move the id-attribute to the currently clicked button
    let currentItem = ev.target;

    //loop through the list of all nav-items
    for (let i = 0; i < listItems.length; i++) {
        //if nav-item contains attribute type of id
        if (listItems[i].hasAttribute('id') && listItems[i].id === 'active') {
            // remove the attribute type of 'id'
            listItems[i].removeAttribute('id');
        }

    }
    //add attribute to the currently clicked element
    currentItem.setAttribute('id', 'active');

    //check if the clickedd button is home nav button
    if (ev.target === listItems[0]) {
        fetch(url1)
            .then(function (rsp) {
                if (rsp.ok) {
                    return rsp.text();
                }

                // handle error
                throw new Error(rsp.statusText);
            })
            .then(function (data) {
                dd.innerHTML = data;
            })
            .catch(function (err) {
                console.log(err.message);
            });

    }
    //check if the clickedd button is menu mav button
    if (ev.target === listItems[1]) {
        fetch(url2)
            .then(function (rsp) {
                if (rsp.ok) {
                    return rsp.text();
                }

                // handle error
                throw new Error(rsp.statusText);
            })
            .then(function (data) {
                dd.innerHTML = data;
            })
            .catch(function (err) {
                console.log(err.message);
            });
    }



}

//registering list items for click event:
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', handleClick);
};
